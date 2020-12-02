import {Command, flags} from '@oclif/command'
import {GithubClient} from '../../project/github' // TODO: Fix relative paths
import cli from 'cli-ux'
import {GitClient} from '../../project/git'
import {TrelloClient} from '../../project/trello'
import { IConfig } from '@oclif/config'

interface Opts {
  name: string;
  description: string;
  isOpenSource: boolean;
}

export default class ProjectNew extends Command {
  static description = 'generate a new project';

  static flags = {
    help: flags.help({char: 'h'}),
    open: flags.boolean({char: 'o', description: 'set this as an open-source project', default: false}),
  };

  static args = [{name: 'name', required: true}, {name: 'description'}];

  private readonly githubClient: GithubClient;

  private readonly gitClient: GitClient;

  private readonly trelloClient: TrelloClient;

  constructor(argv: string[], config: IConfig) {
    super(argv, config)

    const {GH_TOKEN, TRELLO_KEY, TRELLO_TOKEN} = process.env

    this.githubClient = new GithubClient(GH_TOKEN as string)
    this.gitClient = new GitClient()
    this.trelloClient = new TrelloClient(
      TRELLO_KEY as string,
      TRELLO_TOKEN as string
    )
  }

  private async createRepo({name, description, isOpenSource}: Opts) {
    cli.action.start(`Creating the repo ${name}`)
    const created = await this.githubClient.createRepo({name, description, isOpenSource})
    cli.action.stop(`${created.fullName} created`)

    cli.action.start(`Cloning with URL ${created.sshUrl}`)
    await this.gitClient.cloneRepo({
      url: created.sshUrl,
      name,
    })
    cli.action.stop()
  }

  private async open(opts: Opts) {
    await this.createRepo(opts)
  }

  private async closed(opts: Opts) {
    await this.createRepo(opts)

    cli.action.start('Creating a new Trello board') // TODO: Look at performing this in parallel with the repo creation
    await this.trelloClient.createBoard({name: opts.name})
    cli.action.stop()
  }

  async run() {
    const {args, flags} = this.parse(ProjectNew)

    const opts: Opts = {
      name: args.name,
      description: args.description,
      isOpenSource: flags.open,
    }

    if (flags.open) {
      await this.open(opts)
    } else {
      await this.closed(opts)
    }
  }
}
