import { Command, flags } from "@oclif/command";
import { GithubClient } from "../../project/github"; // TODO: Fix relative paths

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
    const created = await githubClient.createRepo({ name: args.name });

    this.log(`Created project ${created.fullName}`);
    this.log(`Run: git clone ${created.sshUrl}`);
  }
}
