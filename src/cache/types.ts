export interface CacheEntry {
  etag: string;
  expiresAt: number;
}

export interface TileRequest {
  region: string;
  tileId: string;
  schemaVersion: number;
}
