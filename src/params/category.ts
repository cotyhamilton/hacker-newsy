import type { ParamMatcher } from "@sveltejs/kit";

const categories = new Set(["news", "newest", "show", "ask", "jobs"]);

export const match: ParamMatcher = (name) => categories.has(name);
