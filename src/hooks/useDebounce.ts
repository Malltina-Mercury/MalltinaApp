export const useDebounce = <TArgs extends any[]>(
  fn: (...args: TArgs) => void,
  delay: number,
) => {
  let timeoutInstance: NodeJS.Timeout | undefined;
  const applyDelay = (...args: TArgs) => {
    if (timeoutInstance) {
      clearTimeout(timeoutInstance);
    }
    timeoutInstance = setTimeout<TArgs>(fn, delay, ...args);
  };

  return applyDelay;
};
