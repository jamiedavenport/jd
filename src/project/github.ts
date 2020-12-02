import {Octokit} from '@octokit/rest'

interface GithubRepo {
  name: string;
  fullName: string;
  sshUrl: string;
}

interface CreateRepoOpts {
  name: string;
  description?: string;
  isOpenSource?: boolean;
}

export class GithubClient {
  private octokitClient: Octokit;

  constructor(apiKey: string) {
    this.octokitClient = new Octokit({
      auth: apiKey,
    })
  }

  async createRepo({name, description, isOpenSource}: CreateRepoOpts): Promise<GithubRepo> {
    const {data} = await this.octokitClient.repos.createForAuthenticatedUser({
      name,
      private: !isOpenSource,
      description,
    })

    return {
      name: data.name,
      fullName: data.full_name,
      sshUrl: data.ssh_url,
    }
  }
}
