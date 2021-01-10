import React from "react";
import * as R from "remeda";
import { MIN_YEAR, MAX_YEAR } from "config";
import { fetchMatches } from "data";
import { collectPlayers } from "helpers";
import { getMatchItem, getMatchYear } from "helpers";
import Page, { Props } from "components/Page/Matches";

export default function PageContainer(props: Props) {
  return <Page {...props} />;
}

type Context = { params: { year: string } };

export async function getStaticProps(context: Context) {
  const year = context.params?.year || MAX_YEAR.toString();

  const matches = R.pipe(
    fetchMatches(),
    R.filter((match) => getMatchYear(match) === year)
  );

  if (!matches) {
    return {
      props: { year, matches: [], players: [] },
    };
  }

  const players = R.pipe(
    matches,
    collectPlayers,
    R.sortBy((player) => -player.mp)
  );

  return {
    props: {
      year,
      matches: R.map(matches, getMatchItem),
      players,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: R.pipe(
      R.range(MIN_YEAR, MAX_YEAR + 1),
      R.map((year) => ({ params: { year: year.toString() } }))
    ),
    fallback: false,
  };
}
