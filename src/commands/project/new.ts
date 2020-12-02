import {Command, flags} from '@oclif/command'
import {GithubClient} from '../../project/github' // TODO: Fix relative paths
import cli from 'cli-ux'
import {GitClient} from '../../project/git'
import {TrelloClient} from '../../project/trello'

export default class ProjectNew extends Command {
  static description = 'generate a new project';

  static flags = {
    help: flags.help({char: 'h'}),
  };

  static args = [{name: 'name', required: true}, {name: 'description'}];

  async run() {
    const {args} = this.parse(ProjectNew)

    // TODO: Validate the GH_TOKEN

    const {GH_TOKEN, TRELLO_KEY, TRELLO_TOKEN} = process.env

    const githubClient = new GithubClient(GH_TOKEN as string)
    const gitClient = new GitClient()
    const trelloClient = new TrelloClient(
      TRELLO_KEY as string,
      TRELLO_TOKEN as string
    )

    const {name, description} = args

    cli.action.start(`Creating the repo ${name}`)
    const created = await githubClient.createRepo({name, description})
    cli.action.stop(`${created.fullName} created`)

    cli.action.start(`Cloning with URL ${created.sshUrl}`)
    await gitClient.cloneRepo({
      url: created.sshUrl,
      name,
    })
    cli.action.stop()

    cli.action.start('Creating a new Trello board') // TODO: Look at performing this in parallel with the repo creation
    await trelloClient.createBoard({name})
    cli.action.stop()
  }
}
