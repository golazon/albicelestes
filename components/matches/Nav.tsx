import { range } from "lodash";
import { useState, useEffect } from "react";
import Link from "next/link";

interface NavLinkProps {
  year: number;
  active?: boolean;
}

function NavLink({ year, active = true }: NavLinkProps) {
  const textColor = active ? "text-blue-600 hover:text-blue-400" : "text-black";

  return (
    <li className="mr-4 inline-flex">
      <Link href="/matches/[year]" as={`/matches/${year}`}>
        <a className={`font-semibold uppercase ${textColor}`}>{year}</a>
      </Link>
    </li>
  );
}

function OtherYears({ years }: { years: number[] }) {
  return (
    <ul className="mb-4">
      {years.map(year => (
        <NavLink key={year} year={year} />
      ))}
    </ul>
  );
}

function Nav({ year }: { year: number }) {
  const [prevYearsActive, setPrevYearsActive] = useState(false);
  const [nextYearsActive, setNextYearsActive] = useState(false);

  const currentYear = new Date().getFullYear();

  const prevYear = year - 1;
  const nextYear = year + 1;

  // TODO: add 1902 to some config
  const hasPrevYear = prevYear >= 1902;
  const hasNextYear = nextYear <= currentYear;

  const hasPrevYears = prevYear - 1 >= 1902;
  const hasNextYears = nextYear + 1 <= currentYear;

  useEffect(() => {
    setPrevYearsActive(false);
    setNextYearsActive(false);
  }, [year]);

  useEffect(() => {
    if (!hasPrevYears) {
      setPrevYearsActive(false);
    }
    if (!hasNextYears) {
      setNextYearsActive(false);
    }
  }, [prevYearsActive, nextYearsActive]);

  function togglePrevYears() {
    if (nextYearsActive) {
      setNextYearsActive(false);
    }
    setPrevYearsActive(!prevYearsActive);
  }

  function toggleNextYears() {
    if (prevYearsActive) {
      setPrevYearsActive(false);
    }
    setNextYearsActive(!nextYearsActive);
  }

  return (
    <>
      <ul className="flex mb-4">
        {hasPrevYears && (
          <li className="mr-4">
            <a
              className="cursor-pointer text-blue-600 hover:text-blue-400"
              onClick={togglePrevYears}
            >
              ...
            </a>
          </li>
        )}
        {hasPrevYear && <NavLink year={prevYear} />}
        <NavLink year={year} active={false} />
        {hasNextYear && <NavLink year={nextYear} />}
        {hasNextYears && (
          <li className="mr-4">
            <a
              className="cursor-pointer text-blue-600 hover:text-blue-400"
              onClick={toggleNextYears}
            >
              ...
            </a>
          </li>
        )}
      </ul>
      {prevYearsActive && (
        <OtherYears key="prev" years={range(prevYear - 1, 1902 - 1)} />
      )}
      {nextYearsActive && (
        <OtherYears key="next" years={range(nextYear + 1, currentYear + 1)} />
      )}
    </>
  );
}

export default Nav;