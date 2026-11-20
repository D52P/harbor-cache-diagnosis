import type { TileRequest } from "./types.js";

export const REGION_ALIASES: Readonly<Record<string, string>> = {
  "eu-west": "euw1",
  "us-east": "use1",
};

export function canonicalTileKey(request: TileRequest): string {
  const region = REGION_ALIASES[request.region] ?? request.region;
  return `${region}/${request.tileId}@${request.schemaVersion}`;
}

export function legacyTileKey(request: TileRequest): string {
  return `${request.region}/${request.tileId}@${request.schemaVersion}`;
}
