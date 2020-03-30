import * as R from "remeda";

export default function findTeamName(
  matches: Pick<Match, "teams">[],
  slug: string
): string {
  return R.pipe(
    matches,
    R.map((match) => match.teams),
    R.flatten(),
    R.find((team) => team.slug === slug),
    (team) => team?.name || ""
  );
}