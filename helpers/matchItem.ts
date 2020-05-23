import * as R from "remeda";
import { Match, MatchItem } from "types";

export default function matchItem(match: Match): MatchItem {
  let item = R.pick(match, [
    "slug",
    "date",
    "competition",
    "teams",
    "score",
    "pen",
    "result",
    "suspended",
  ]);

  // Avoid serializing error when returned from `getStaticProps`
  // Reason: `undefined` cannot be serialized as JSON.
  // It's advised to use `null` or omit the value all together.
  if (!match.slug) item = R.omit(item, ["slug"]);
  if (!match.pen) item = R.omit(item, ["pen"]);
  if (!match.suspended) item = R.omit(item, ["suspended"]);

  return item;
}
