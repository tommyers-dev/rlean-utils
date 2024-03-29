export const makeCamelCaseNormal = (value: string): string => {
  return value.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase();
  });
};
