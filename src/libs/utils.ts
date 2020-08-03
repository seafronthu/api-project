import { RecurrenceArray } from "src/types/global";
export function joinClassName(classNames: RecurrenceArray<string | undefined | null>) {
  let results: string[] = [];
  for (let i = 0; i < classNames.length; ++i) {
    const className = classNames[i];
    if (!className || className.length === 0) {
      continue;
    }
    if (typeof className === "string") {
      results.push(className);
      continue;
    }
    results = results.concat(joinClassName(className));
  }
  return results.join(" ");
}
export function mergePrefixCls(
  prefix: string | undefined | null,
  suffixes: (string | null | undefined)[] | string | null | undefined,
  ...classes: (string | string[] | undefined | null)[]
) {
  const newPrefix = prefix || "";
  const mergeClses = [];
  if (Array.isArray(suffixes)) {
    for (let i = 0; i < suffixes.length; ++i) {
      const suffix = suffixes[i];
      if (suffix) {
        mergeClses.push(newPrefix + suffix);
      }
    }
  } else if (typeof suffixes === "string") {
    mergeClses.push(newPrefix + suffixes);
  }
  if (classes.length) {
    mergeClses.push(joinClassName(classes));
  }
  return mergeClses.join(" ");
}
