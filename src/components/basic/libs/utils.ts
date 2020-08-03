export function getPrefixCls(name: string, names: (string | null | void)[] = []) {
  const firstName = `front-mimicry-${name}`;
  const allNames = [firstName];
  for (let i = 0; i < names.length; ++i) {
    if (names[i]) {
      allNames.push(`${firstName}-${names[i]}`);
    }
  }
  return allNames.join(" ");
}
export function fixControlledValue<T>(value: T) {
  if (typeof value === void 0 || value === null) {
    return "";
  }
  return value;
}

export function omit<T, K extends keyof T>(obj: T, fields: Array<K>): Omit<T, K> {
  const shallowCopy = Object.assign({}, obj);

  for (let i = 0; i < fields.length; i += 1) {
    const key = fields[i];
    delete shallowCopy[key];
  }

  return shallowCopy;
}
