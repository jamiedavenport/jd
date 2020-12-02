import {Octokit} from '@octokit/rest'

interface GithubRepo {
  name: string;
  fullName: string;
  sshUrl: string;
}

interface CreateRepoOpts {
  name: string;
  description?: string;
}

export class GithubClient {
  private octokitClient: Octokit;

  constructor(apiKey: string) {
    this.octokitClient = new Octokit({
      auth: apiKey,
    })
  }

  async createRepo({name, description}: CreateRepoOpts): Promise<GithubRepo> {
    const {data} = await this.octokitClient.repos.createForAuthenticatedUser({
      name,
      private: true,
      description,
    })

    return {
      name: data.name,
      fullName: data.full_name,
      sshUrl: data.ssh_url,
    }
  }
}
