import { Command, flags } from "@oclif/command";

export default class ProjectNew extends Command {
  static description = "generate a new project";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "name", required: true }];

  async run() {
    const { args } = this.parse(ProjectNew);

    console.log(args.name);
  }
}
