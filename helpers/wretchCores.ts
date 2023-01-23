import wretch from "wretch";

// wretch configuration
export const corsWretch = wretch().options({
  credentials: "include",
  mode: "cors",
});
