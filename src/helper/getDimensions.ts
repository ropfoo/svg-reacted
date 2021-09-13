export const getDimensions = (data: string) => {
  const regexArrayDimensions = data.match(
    /(?<=width=").*?(?=")|(?<=height=").*?(?=")/g
  );
  const width = regexArrayDimensions && regexArrayDimensions[0];
  const height = regexArrayDimensions && regexArrayDimensions[1];

  return {
    width,
    height,
  };
};
