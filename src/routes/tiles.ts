import { getTile } from "../cache/getTile.js";
import { invalidateTile } from "../cache/invalidateTile.js";
import type { CacheEntry, TileRequest } from "../cache/types.js";

export function handleTile(cache: Map<string, CacheEntry>, request: TileRequest, method: "GET" | "DELETE"): CacheEntry | boolean | undefined {
  return method === "GET" ? getTile(cache, request) : invalidateTile(cache, request);
}
