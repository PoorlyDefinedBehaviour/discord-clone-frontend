export const Delay = (fn: any, ms: number): any => {
  return function(this: any, ...args: any): any {
    setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  };
};
