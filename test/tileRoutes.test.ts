import assert from "node:assert/strict";
import { test } from "node:test";
import { handleTile } from "../src/routes/tiles.ts";

const request = { region: "eu-west", tileId: "tile-17", schemaVersion: 2 };

test("GET resolves a canonical-region cache entry", () => {
  const cache = new Map([["euw1/tile-17@2", { etag: '"W/17"', expiresAt: 9999 }]]);
  assert.deepEqual(handleTile(cache, request, "GET"), { etag: '"W/17"', expiresAt: 9999 });
});

test("DELETE removes the canonical-region entry", () => {
  const cache = new Map([["euw1/tile-17@2", { etag: '"W/17"', expiresAt: 9999 }]]);
  assert.equal(handleTile(cache, request, "DELETE"), true);
  assert.equal(cache.size, 0);
});
