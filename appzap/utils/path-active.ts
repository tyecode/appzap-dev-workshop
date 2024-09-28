export const isActive = (pathname: string, patterns: string[]): boolean => {
  return patterns.some((pattern) => new RegExp(pattern).test(pathname));
};
