export type Launch = {
  id: string;
  name: string;
  date_utc: string;
  success: boolean | null;
  links: {
    patch: {
      small: string | null;
      large: string | null;
    }
    webcast: string | null;
    article: string | null;
  }
  upcoming: boolean | null;
  details: string | null;
  flight_number: number | null;
}