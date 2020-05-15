export type Appearance = {
  id?: string;
  name: string;
  in?: string;
  out?: string;
};

export type Bibliography = Record<string, BibliographyItem>;
type BibliographyItem = { name: string; url: string };

export type Card = {
  id?: string;
  name: string;
  min?: string;
  type: "Y" | "R";
};

export type Goal = {
  id?: string;
  name: string;
  min?: string;
  type: "G" | "P" | "OG";
};

export type InfoLink = { url: string; text: string; desc?: string };

export type Match = {
  id: string;
  date: string;
  competition: string;
  venue?: { name: string };
  teams: [MatchTeam, MatchTeam];
  score: Score;
  pen?: Score;
  result: Result;
  goals: [Goal[], Goal[]];
  cards: [Card[], Card[]];
  coaches: [MatchCoach, MatchCoach];
  lineups: [Appearance[], Appearance[]];
  sources?: string[];
  suspended?: true;
};

export type MatchCoach = { name: string } | null;

export type MatchInfo = {
  youtube?: { id: string }[];
  images?: { url: string; source?: { name: string; url?: string } }[];
  trivia?: string[];
  links?: InfoLink[];
};

export type MatchItem = Pick<
  Match,
  | "id"
  | "date"
  | "competition"
  | "teams"
  | "score"
  | "pen"
  | "result"
  | "suspended"
>;

export type MatchTeam =
  | { slug: string; name: string }
  | { name: string; slug?: undefined };

export type PlayerInfo = {
  nicknames?: string[];
  links?: InfoLink[];
};

export type PlayerItem = {
  id: string;
  name: string;
  mp: number;
  si: number;
  so: number;
  g: number;
};

export type PlayerName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type PlayerStat = {
  mp: number;
  si: number;
  so: number;
  g: number;
  yc: number;
  rc: number;
};

enum Result {
  Win = "W",
  Draw = "D",
  Loss = "L",
}

export type Score = [number, number];

export type TeamItem = {
  name: string;
  slug: string;
  mp: number;
};

export type TeamStat = {
  mp: number;
  mw: number;
  md: number;
  ml: number;
  gf: number;
  ga: number;
};
