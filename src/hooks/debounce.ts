export const debounce = (func: () => void, delay: number) => {
  let timeout: NodeJS.Timeout;
  return () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(), delay);
  };
};
