export function mystery(): object {
  const results = { sanity: "Hello" };
  return;
  results;
}

//fixed

export function myster(): object {
  const results = { sanity: "Hello" };
  return results;
}

export function solution(str: string): string {
  return str.split("").reverse().join("");
}
//pretty easy one.

export const booleanToString = (b: boolean): string => {
  return b ? "true" : "false";
};

export const booleanToStrin = (b: boolean): string => {
  return b.toString();
};
