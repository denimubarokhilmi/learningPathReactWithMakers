import { sumTwo } from "../sum.js";

import { expect, test } from "@jest/globals";

test("should return number", () => {
  expect(sumTwo(2)).toBe(4);
});
