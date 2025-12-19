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
    webcast: string;
    article: string;
  }
  upcoming: boolean | null;
  details: string | null;
}