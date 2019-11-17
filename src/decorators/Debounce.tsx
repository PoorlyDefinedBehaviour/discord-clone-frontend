export default function debounce(fn: Function, ms: number) {
  let timestamp: number = 0;
  return (...args: any[]): void => {
    if (Date.now() - timestamp > ms) {
      fn(...args);
      timestamp = Date.now();
    }
  };
}
