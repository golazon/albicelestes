import React from "react";
import { playerCatalog, playerSlug } from "helpers";
import Link from "./Layout/Link";

export default function PlayerName({
  name,
  displayName,
  linkify = false,
}: {
  name: string;
  displayName?: string;
  linkify: boolean;
}) {
  if (!linkify) {
    return <span title={name}>{displayName || name}</span>;
  }

  const slug = playerSlug(name);
  const catalog = playerCatalog(name);

  return (
    <Link
      href="/players/[catalog]/[slug]"
      as={`/players/${catalog}/${slug}`}
      title={name}
    >
      {displayName || name}
    </Link>
  );
}
