import { Film } from "../../types/film";

export type SearchPayload = {
  text: string;
};

export type SearchResponse = {
  queryString: string;
  results: Film[];
  errorMessage: null;
};
