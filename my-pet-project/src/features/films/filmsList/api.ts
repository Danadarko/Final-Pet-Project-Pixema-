import { APIKey } from "../../../api/config";
import { Film } from "../../../types/film";

export namespace FetchFilmsApi {
  export async function fetchAllFilms(params: {
    count: number;
  }): Promise<Film[]> {
    try {
      const result = await fetch(
        `https://imdb-api.com/API/AdvancedSearch/k_s3xnrjwu?title_type=feature&count=${params.count}`
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

  export async function fetchTrendedFilms(params: {
    count: number;
  }): Promise<Film[]> {
    try {
      const result = await fetch(
        `https://imdb-api.com/API/AdvancedSearch/k_s3xnrjwu?title_type=feature&user_rating=9.0,10&count=${params.count}`
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
