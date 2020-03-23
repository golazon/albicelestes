import Fixtures from "components/Fixtures";
import Competitions from "components/Competitions";
import Layout from "components/Layout";
import Header from "components/Layout/Header";

export type Props = {
  name: string;
  matches: MatchItem[];
  competitions: string[];
  stat: TeamStat;
};

function Stat({ stat: { mp, mw, md, ml, gf, ga } }: { stat: TeamStat }) {
  return (
    <p className="mb-4">
      {mp} matches ({mw}W {md}D {ml}L), goals: {gf}-{ga}
    </p>
  );
}

export default function TeamPage({ name, matches, competitions, stat }: Props) {
  const title = `Argentina v ${name}`;
  return (
    <Layout title={[title, "Rival Teams"]}>
      <Header text={title} />
      <Stat stat={stat} />
      <Competitions names={competitions} />
      <Fixtures title="Matches" matches={matches} />
    </Layout>
  );
}