import * as R from "remeda";
import { ReactNode } from "react";
import Head from "next/head";
import NextLink from "next/link";
import NextNprogress from "nextjs-progressbar";
import { MAX_YEAR } from "../../config";
import Link from "./Link";
import Logo from "./Logo";

function NavLink({
  href,
  as,
  children,
}: {
  href: string;
  as: string;
  children: ReactNode;
}) {
  const classNames = [
    "inline-block",
    "ml-4",
    "font-semibold",
    "text-blue-600 hover:text-blue-400",
    "uppercase",
  ];

  return (
    <NextLink href={href} as={as}>
      <a className={classNames.join(" ")}>{children}</a>
    </NextLink>
  );
}

function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="ml-1 text-blue-600 hover:text-blue-400"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      {children}
    </a>
  );
}

type Props = {
  children: ReactNode;
  title: string[];
};

export default function Layout({ children, title }: Props) {
  return (
    <div className="text-sm md:text-base leading-relaxed">
      <Head>
        <title>{R.filter(title, (part) => !!part).join(" / ")}</title>
        <link rel="shortcut icon" href="/favicon.png" />

        <meta
          name="description"
          content="Argentina football (soccer) national team archive. Matches, players, rival teams. Lineups, goals, statistics."
        />
        <meta
          name="keywords"
          content="albicelestes, archive, argentina, database, football, matches, national team, players, rival teams, soccer"
        />
      </Head>

      <NextNprogress
        color="#000"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />

      <div className="max-w-2xl m-auto font-mono antialiased px-2">
        <nav className="flex items-center justify-between flex-wrap py-4 px-1">
          <div className="text-white">
            <Link href="/" as="/" title="Albicelestes.com">
              <Logo />
            </Link>
          </div>
          <div className="flex-grow text-base md:text-lg">
            <NavLink href="/matches/[year]" as={`/matches/${MAX_YEAR}`}>
              Matches
            </NavLink>
            <NavLink href="/players" as="/players">
              Players
            </NavLink>
            <NavLink href="/teams" as="/teams">
              Teams
            </NavLink>
          </div>
        </nav>

        <div className="pt-4 px-1 border-t border-dotted">
          <div>{children}</div>
        </div>

        <p className="py-4 px-1 text-xs italic border-b border-dotted">
          Data has not been fully verified yet. You can help by reporting any
          errors or mistakes to przemek&#64;sobstel&#46;org.
        </p>

        <footer className="opacity-75 text-xs py-4 px-1 flex justify-between">
          <p>
            created with 💙 for 🇦🇷 by
            <FooterLink href="https://www.sobstel.org">sobstel</FooterLink>
          </p>
          <p>
            <FooterLink href="https://github.com/sobstel/albicelestes">
              github
            </FooterLink>{" "}
            /
            <FooterLink href="https://twitter.com/albicelestescom">
              twitter
            </FooterLink>
          </p>
        </footer>
      </div>
    </div>
  );
}
