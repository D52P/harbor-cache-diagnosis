import { legacyTileKey } from "./keys.js";
import type { CacheEntry, TileRequest } from "./types.js";

export function invalidateTile(cache: Map<string, CacheEntry>, request: TileRequest): boolean {
  return cache.delete(legacyTileKey(request));
}
