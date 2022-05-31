export const getFlagEmoji = (country_code: string): string => {
  return country_code
    .toUpperCase()
    .replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));
};
