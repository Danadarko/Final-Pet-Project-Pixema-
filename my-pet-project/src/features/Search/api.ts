import { Film } from "../../types/film";
import { SearchResponse } from "./types";

export namespace SearchApi {
  export async function search(params: { text: string }): Promise<Film[]> {
    try {
      const result = await fetch(
        `https://imdb-api.com/API/AdvancedSearch/k_2y9c7dayddd?title=${params.text}&count=20`
      );
      const { results } = await result.json();
      if (!result.ok) {
        const errorText = await result.text();
        throw new Error(errorText);
      }
      return results;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
