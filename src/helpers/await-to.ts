export class Option<T, U> {
  constructor(public data: T, public error: U) {}
}

/**
 * @param promise - The promise to resolve
 * @param errorExt - Additional Information you can pass to the err object
 */
export default function to<T, U = any>(promise: Promise<T>): Promise<Option<T, U>> {
  return promise
    .then<Option<T, U>>((data: T) => new Option<T, U>(data, null))
    .catch<Option<T, U>>((err: U) => new Option<T, U>(null, err));
}
