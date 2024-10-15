import { assertEquals } from "@std/assert";
import { convert } from "./main.ts";

Deno.test(function convertTest() {
  assertEquals(convert("hello"), "aaf4c61d-dcc5-58a2-9abe-de0f3b482cd9");
  assertEquals(convert("world"), "7c211433-f020-5159-b741-e6ff5a8ea347");
});
