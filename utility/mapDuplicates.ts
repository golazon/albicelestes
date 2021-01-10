/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-rest-params */
import * as R from "remeda";

type Fn = (name: string, index: number) => string;

export function mapDuplicates(shortNames: string[], fn: Fn): string[]; // data-first
export function mapDuplicates(fn: Fn): (shortNames: string[]) => string[]; // data-last
export function mapDuplicates(): any {
  return R.purry(_mapDuplicates, arguments);
}

function _mapDuplicates(shortNames: string[], fn: Fn): string[] {
  const counts = R.reduce(
    shortNames,
    (acc, name) => {
      acc[name] = (acc[name] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return R.map.indexed(shortNames, (name, index) => {
    return counts[name] > 1 ? fn(name, index) : name;
  });
}
