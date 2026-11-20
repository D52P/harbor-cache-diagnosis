import { canonicalTileKey } from "./keys.js";
import type { CacheEntry, TileRequest } from "./types.js";

export function getTile(cache: Map<string, CacheEntry>, request: TileRequest): CacheEntry | undefined {
  return cache.get(canonicalTileKey(request));
}
