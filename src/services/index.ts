import axios, { AxiosResponse } from 'axios';

export class HomePageService {
  public async getHomePageContent(): Promise<AxiosResponse> {
    return await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
  }
}
