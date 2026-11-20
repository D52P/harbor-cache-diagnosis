import assert from "node:assert/strict";
import { test } from "node:test";
import { handleTile } from "../src/routes/tiles.ts";

test("GET resolves a legacy-region cache entry", () => {
  const cache = new Map([["eu-west/tile-17@2", { etag: '"W/17"', expiresAt: 9999 }]]);
  assert.deepEqual(handleTile(cache, { region: "eu-west", tileId: "tile-17", schemaVersion: 2 }, "GET"), { etag: '"W/17"', expiresAt: 9999 });
});
