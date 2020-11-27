import * as spawn from "cross-spawn";

interface CloneRepoOpts {
  url: string;
}

export class GitClient {
  async cloneRepo({ url }: CloneRepoOpts): Promise<void> {
    const result = spawn.sync("git", ["clone", url], { stdio: "ignore" });
    if (result.error) {
      throw result.error;
    }
  }
}
