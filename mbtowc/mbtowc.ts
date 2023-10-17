import { load } from './load_library.ts';

type size_t = number;

const size_wchar_t = 2;

/**
 * 
 * @param wchar wide character
 * @param str  
 * @param size count bite.
 * @returns 
 */
function mbtowc(wchar: Deno.PointerValue<unknown>,str: Uint8Array, size: size_t): number| undefined {
  if (!Number.isInteger(size) || size <= 0) {
    throw TypeError("nagative or not integer value!");
  }
  const {mbtowc, library } = load();

  let num: number| undefined;
  try{
    num = mbtowc(wchar, str, size);
  } finally {
      library.close();
  }
  return num;
}

export {
  mbtowc
}
