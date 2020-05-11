import React from "react";
import { matchDate, matchYear, matchSlug } from "helpers";
import { MatchItem } from "types";
import Section from "./Layout/Section";
import Link from "./Layout/Link";

interface Props {
  title?: string;
  matches: MatchItem[];
}

export default function Fixtures({ title, matches }: Props) {
  if (matches.length === 0) return null;

  return (
    <Section title={title}>
      {matches.map((match) => {
        const [homeTeam, awayTeam] = match.teams;
        const slug = matchSlug(match);
        const year = matchYear(match);

        return (
          <div key={match.id} className="mb-2">
            <p>
              {matchDate(match, { withYear: true })}, {match.competition}
            </p>
            <p>
              <Link
                href="/matches/[year]/[slug]/[id]"
                as={`/matches/${year}/${slug}/${match.id}`}
              >
                {homeTeam.name} - {awayTeam.name} {match.score.join(":")}
                {match.pen && ` p.${match.pen.join(":")}`}
              </Link>
            </p>
          </div>
        );
      })}
    </Section>
  );
}

Fixtures.defaultProps = {
  matches: [],
};
