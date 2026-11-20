import type { TileRequest } from "./types.js";

export function legacyTileKey(request: TileRequest): string {
  return `${request.region}/${request.tileId}@${request.schemaVersion}`;
}

export const REGION_ALIASES: Readonly<Record<string, string>> = {
  "eu-west": "euw1",
  "us-east": "use1",
};
