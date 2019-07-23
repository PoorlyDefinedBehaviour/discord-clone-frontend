export const Debounce = (fn: any, ms: number) => {
  function wrapper(this: any, ...args): any {
    if (Date.now() - wrapper.timestamp > ms) {
      fn.apply(this, args);
      wrapper.timestamp = Date.now();
    }
  }

  wrapper.timestamp = 0;
  return wrapper;
};
