import { Command, flags } from "@oclif/command";
import { GithubClient } from "../../project/github"; // TODO: Fix relative paths
import cli from "cli-ux";
import { GitClient } from "../../project/git";

export default class ProjectNew extends Command {
  static description = "generate a new project";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "name", required: true }, { name: "description" }];

  async run() {
    const { args } = this.parse(ProjectNew);

    // TODO: Validate the GH_TOKEN

    const githubClient = new GithubClient(process.env.GH_TOKEN as string);
    const gitClient = new GitClient();

    const { name, description } = args;

    cli.action.start(`Creating the repo ${name}`);
    const created = await githubClient.createRepo({ name, description });
    cli.action.stop(`${created.fullName} created`);

    cli.action.start(`Cloning with URL ${created.sshUrl}`);
    await gitClient.cloneRepo({
      url: created.sshUrl,
    });
    cli.action.stop();
  }
}
