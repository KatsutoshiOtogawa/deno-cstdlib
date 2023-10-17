import { load } from './load_library.js';

type size_t = number;

function calloc(num: size_t, size: size_t): Deno.PointerValue<unknown> {
  if (!Number.isInteger(size) || size <= 0) {
    throw TypeError("nagative or not integer value!");
  }
  const {calloc, library } = load();

  let ptr: Deno.PointerValue<unknown> | undefined;
  try{
    ptr = calloc(num, size);
  } finally {
      library.close();
  }
  return ptr;
}

export {
  calloc
}
