export default function delay(fn: Function, ms: number) {
  return (...args: any[]): void => {
    setTimeout(() => {
      fn(...args);
    }, ms);
  };
}
