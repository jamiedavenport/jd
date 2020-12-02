import fetch from 'node-fetch'

interface CreateBoardOpts {
  name: string;
}

export class TrelloClient {
  private readonly apiUrl = 'https://api.trello.com/1';

  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly key: string, private readonly token: string) {}

  async createBoard({name}: CreateBoardOpts): Promise<void> {
    const resp = await fetch(
      `${this.apiUrl}/boards?key=${this.key}&token=${this.token}&name=${name}`,
      {
        method: 'POST',
      }
    )

    if (resp.status !== 200) {
      throw new Error(await resp.text())
    }
  }
}
