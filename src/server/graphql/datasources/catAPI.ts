import { RESTDataSource } from 'apollo-datasource-rest';

interface BreedsAPIProps {
  page?: number;
  limit: number;
}

interface ImageAPIProps {
  limit?: number;
  page?: number;
  breed_id: string;
}

interface BreedSearchProps {
  name: string;
}

export class CatAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.thecatapi.com/v1/';
  }

  willSendRequest(request) {
    request.headers.set('x-api-key', process.env.CAT_API_KEY);
  }

  async getBreeds({ page = 0, limit }: BreedsAPIProps) {
    const response = await this.get('breeds', {
      page: page.toString(),
      limit: limit.toString(),
    });

    return Array.isArray(response) ? response.map((breed) => this.breedsReducer(breed)) : [];
  }

  breedsReducer(breed) {
    return {
      id: breed.id,
      name: breed.name,
      origin: breed.origin,
    };
  }

  async getImage({ page = 0, limit = 1, breed_id }: ImageAPIProps) {
    const response = await this.get('images/search', {
      limit: limit.toString(),
      page: page.toString(),
      breed_id: breed_id,
    });

    const images = Array.isArray(response) ? response.map((imageData) => imageData.url) : [];

    return images[0];
  }

  async breedsSearch({ name }: BreedSearchProps) {
    const response = await this.get('breeds/search', { q: name });

    return Array.isArray(response) ? response.map((breed) => this.breedsReducer(breed)) : [];
  }
}
