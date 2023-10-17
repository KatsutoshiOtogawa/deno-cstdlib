import { load } from './load_library.ts';

type size_t = number;

function mblen(str: Uint8Array, size: size_t): number| undefined {
  if (!Number.isInteger(size) || size <= 0) {
    throw TypeError("nagative or not integer value!");
  }
  const {mblen, library } = load();

  let num: number| undefined;
  try{
    num = mblen(str, size);
  } finally {
      library.close();
  }
  return num;
}

export {
  mblen
}
