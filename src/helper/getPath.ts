export const getPath = (data: string) => {
  const regexArrayPath = data.match(/(?<=path d=").*?(?=")/g);
  return regexArrayPath && regexArrayPath[0];
};
