import {userColors} from 'styles/colors';

export const stringBasedRandomHexColor = (input: string): string => {
  // eslint-disable-next-line no-bitwise
  const seed = input.charCodeAt(0) ^ input.charCodeAt(input.length - 1);
  const rand = Math.abs(Math.sin(seed) * 10_000) % 256;
  return userColors[Math.floor(rand % input.length)];
};
