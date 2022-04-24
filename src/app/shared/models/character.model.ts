export interface CharacterApiResponse {
  info: Pagination;
  results: Character[];
}

interface Pagination {
  count: number,
  pages: number,
  next: string,
  prev: string
}

export interface Character {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: CharacterOrigin,
  location: CharacterLocation,
  image: string,
  episode: string[],
  url: string,
  created: string
}

interface CharacterLocation {
  name: string,
  url: string
}

interface CharacterOrigin extends CharacterLocation {
}
