import { load } from './load_library_msvcrt.ts';
import { size_t } from "../size_t/size_t.ts";


// const size_wchar_t = 2;

/**
 * 
 * @param wchar wide character
 * @param str  
 * @param size count bite.
 * @returns 
 */
function mbstowcs(wchar: Deno.PointerValue<unknown>,str: Uint8Array, size: size_t): number | bigint| undefined {
  if (!Number.isInteger(size) || size <= 0) {
    throw TypeError("nagative or not integer value!");
  }
  const {mbstowcs, library } = load();

  let num: number | bigint| undefined;
  try{
    num = mbstowcs(wchar, str, size);
  } finally {
      library.close();
  }
  return num;
}

export {
  mbstowcs
}

/** main function */
/** 手動チェック用 */
// if (import.meta.main) {
  
//   if (Deno.args.length >= 2) {

//     console.error("Too many args.")
//     Deno.exit(1);
//   }
//   if (Deno.args.length == 0) {
//     console.error("Few args.")
//     // Deno.exit(1);
//   }
//   const mes = Deno.args[0];

//   const mbbuf = new TextEncoder().encode("あいうえお");

//   // 大き目にとる。文章なら1024見たいな取り方をしてもよい。
//   // 
//   let wchar_size = 2
//   let wchar_p = calloc(7, wchar_size);
//   // これも大き目でよい。
//   let size = 1024;

//   mbtowc(wchar_p, mbbuf, size);



// }
