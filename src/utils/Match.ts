export const MatchAny: boolean = true;

export default function match<T>(value_to_match: T, ...args: any[]) {
  for (const [value, action] of args) {
    if (value === value_to_match || value === MatchAny) {
      return action();
    }
  }
}
