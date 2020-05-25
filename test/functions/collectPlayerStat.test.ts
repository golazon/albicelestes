import { collectPlayerStat } from "functions";

describe("collectPlayerStat", () => {
  const matches = [
    {
      teams: [{ name: "Argentina" }, { name: "Brazil" }],
      goals: [[{ name: "Javier Zanetti", type: "P" }], []],
      cards: [
        [
          { name: "Javier Zanetti", type: "Y" },
          { name: "Javier Zanetti", type: "R" },
        ],
        [],
      ],
      lineups: [
        [{ name: "Javier Mascherano" }, { name: "Javier Zanetti", in: "46" }],
        [],
      ],
    },
    {
      teams: [{ name: "England" }, { name: "Argentina" }],
      goals: [[], [{ name: "Javier Zanetti", type: "G", min: "45" }]],
      cards: [[], [{ name: "Javier Zanetti", type: "Y" }]],
      lineups: [
        [{ name: "David Beckham" }],
        [{ name: "Diego Simeone" }, { name: "Javier Zanetti" }],
      ],
    },
    {
      teams: [{ name: "Bolivia" }, { name: "Argentina" }],
      goals: [[], []],
      cards: [[], []],
      lineups: [[], [{ name: "Javier Zanetti" }]],
      suspended: true,
    },
    {
      teams: [{ name: "Peru" }, { name: "Argentina" }],
      goals: [[], []],
      cards: [[], []],
      lineups: [[], [{ name: "Javier Zanetti", out: "75" }]],
    },
    {
      teams: [{ name: "Argentina" }, { name: "Germany" }],
      goals: [[{ name: "Lionel Messi" }, { name: "Javier Mascherano" }], []],
      cards: [[], []],
      lineups: [[{ name: "Lionel Messi" }, { name: "Javier Mascherano" }], []],
    },
  ] as Parameters<typeof collectPlayerStat>[0];

  it("works correctly", () => {
    expect(collectPlayerStat(matches, "javier-zanetti")).toEqual({
      mp: 3,
      si: 1,
      so: 1,
      g: 2,
      yc: 2,
      rc: 1,
    });
  });
});
