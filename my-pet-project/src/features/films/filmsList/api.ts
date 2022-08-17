import { APIKey } from "../../../api/config";
import {
  countryList,
  SortFilmsEnum,
} from "../../../components/FilteringBar/types";
import { Film } from "../../../types/film";

export namespace FetchFilmsApi {
  export async function fetchAllFilms(params: {
    count: number;
    text: SortFilmsEnum;
    yearFrom: string;
    yearTo: string;
    raitingFrom: string;
    raitingTo: string;
    country: string;
  }): Promise<Film[]> {
    function getKeyByValue(
      object: { [char: string]: string },
      value: string
    ): string | undefined {
      const abbr = Object.keys(object).find((key) => object[key] === value);
      return abbr?.toString().toLocaleLowerCase();
    }
    const abbr = getKeyByValue(countryList, params.country);
    try {
      const userRating =
        params.raitingFrom || params.raitingTo ? "&user_rating=" : "";
      const commaForRating = params.raitingFrom && params.raitingTo ? "," : "";
      const releaseDate =
        params.yearFrom || params.yearTo ? "&release_date=" : "";
      const commaForYear = params.yearFrom && params.yearTo ? "," : "";
      const numbersMonthDayFrom = params.yearFrom ? "-01-01" : "";
      const numbersMonthDayTo = params.yearTo ? "-01-01" : "";
      const countries = params.country ? "&countries=" : "";
      const countryAbbr = abbr ? abbr : "";

      const result = await fetch(
        `https://imdb-api.com/API/AdvancedSearch/k_3y037qo6?title_type=feature${userRating}${params.raitingFrom}${commaForRating}${params.raitingTo}${releaseDate}${params.yearFrom}${numbersMonthDayFrom}${commaForYear}${params.yearTo}${numbersMonthDayTo}${countries}${countryAbbr}&count=${params.count}&sort=${params.text},asc`
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
        `https://imdb-api.com/API/AdvancedSearch/k_2y9c7day?title_type=feature&user_rating=9.0,10&count=${params.count}`
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
