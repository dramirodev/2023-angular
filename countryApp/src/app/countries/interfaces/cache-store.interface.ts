import {Country} from "./country";
import {Regions} from "./region.type";

interface TermCountries {
  term: string;
  countries: Country[];
}

interface ByRegion {
  region?: Regions;
  countries: Country[];
}

export interface CacheStore {

  byCapital: TermCountries,
  byCountry: TermCountries,
  byRegion: ByRegion

}
