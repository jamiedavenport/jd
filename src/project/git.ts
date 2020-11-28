import * as spawn from "cross-spawn";
import * as path from "path";

interface CloneRepoOpts {
  url: string;
  name: string;
}

export class GitClient {
  async cloneRepo({ url, name }: CloneRepoOpts): Promise<void> {
    const result = spawn.sync(
      "git",
      ["clone", url, path.resolve(process.env.HOME as string, name)],
      {
        stdio: "ignore",
      }
    );
    if (result.error) {
      throw result.error;
    }
  }
}
