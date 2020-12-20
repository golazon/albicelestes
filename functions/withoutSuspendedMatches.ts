import * as R from "remeda";
import { Match } from "types";

export default function withoutSuspendedMatches<
  T extends Pick<Match, "result">
>(matches: T[]): T[] {
  return R.filter(matches, (match) => match.result !== "S");
}
