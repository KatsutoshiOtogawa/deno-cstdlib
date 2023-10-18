/// <reference lib="deno.unstable" />

const CallSymbol = {
  "mbstowcs": {
    name: "mbstowcs",
    // usizeだけど、denoは64bitのみなのでキメ打ち。
    parameters: [
      "pointer",
      "buffer",
      "u64",
    ],
    result: "i64"
  },
     
} as const

const libname = 'C:/Windows/System32/msvcrt.dll';

function _load() {

  const library = Deno.dlopen(libname, CallSymbol);

  return library;
}

export {
  libname,
  type CallSymbol,
  _load
}
