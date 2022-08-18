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
    genres: string[];
  }): Promise<Film[]> {
    function getKeyByValue(
      object: { [char: string]: string },
      value: string
    ): string | undefined {
      const abbr = Object.keys(object).find((key) => object[key] === value);
      return abbr?.toString().toLocaleLowerCase();
    }

    const abbr = getKeyByValue(countryList, params.country);
    const newGenres = [...params.genres].map((genre) =>
      genre.toLocaleLowerCase()
    );
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
      const genresText = params.genres ? "&genres=" : "";

      const result = await fetch(
        `https://imdb-api.com/API/AdvancedSearch/k_s3xnrjwu?title_type=feature${userRating}${params.raitingFrom}${commaForRating}${params.raitingTo}${releaseDate}${params.yearFrom}${numbersMonthDayFrom}${commaForYear}${params.yearTo}${numbersMonthDayTo}${genresText}${newGenres}${countries}${countryAbbr}&count=${params.count}&sort=${params.text},asc`
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
    trendedCount: number;
    text: SortFilmsEnum;
    trendedYearFrom: string;
    trendedYearTo: string;
    trendedRaitingFrom: string;
    trendedRaitingTo: string;
    trendedCountry: string;
    trendedGenres: string[];
  }): Promise<Film[]> {
    function getKeyByValue(
      object: { [char: string]: string },
      value: string
    ): string | undefined {
      const abbr = Object.keys(object).find((key) => object[key] === value);
      return abbr?.toString().toLocaleLowerCase();
    }
    const abbr = getKeyByValue(countryList, params.trendedCountry);
    const newGenres = [...params.trendedGenres].map((genre) =>
      genre.toLocaleLowerCase()
    );
    try {
      const userRating =
        params.trendedRaitingFrom || params.trendedRaitingTo
          ? "&user_rating="
          : "";
      const commaForRating =
        params.trendedRaitingFrom && params.trendedRaitingTo ? "," : "";
      const releaseDate =
        params.trendedYearFrom || params.trendedYearTo ? "&release_date=" : "";
      const commaForYear =
        params.trendedYearFrom && params.trendedYearTo ? "," : "";
      const numbersMonthDayFrom = params.trendedYearFrom ? "-01-01" : "";
      const numbersMonthDayTo = params.trendedYearTo ? "-01-01" : "";
      const countries = params.trendedCountry ? "&countries=" : "";
      const countryAbbr = abbr ? abbr : "";
      const genresText = params.trendedGenres ? "&genres=" : "";

      const result = await fetch(
        `https://imdb-api.com/API/AdvancedSearch/k_2y9c7day?title_type=feature${userRating}${params.trendedRaitingFrom}${commaForRating}${params.trendedRaitingTo}${releaseDate}${params.trendedYearFrom}${numbersMonthDayFrom}${commaForYear}${params.trendedYearTo}${numbersMonthDayTo}${genresText}${newGenres}${countries}${countryAbbr}&count=${params.trendedCount}&sort=${params.text},asc`
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
