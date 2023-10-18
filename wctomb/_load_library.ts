/// <reference lib="deno.unstable" />

// int mblen(const char *s, size_t n);

const CallSymbol = {
  "wctomb": {
    name: "wctomb",
    // usizeだけど、denoは64bitのみなのでキメ打ち。
    parameters: [
      "pointer",
      "buffer",
      "u64",
    ],
    result: "i64"
  },
     
} as const

function _load() {

  let cpu =  "" 
  if (Deno.build.arch == 'aarch64') {
      cpu = 'aarch64'
  } else if (Deno.build.arch == 'x86_64') {
      cpu = 'x86_64'
  } else {
    throw TypeError("Not supported cpu");
  }

  let libname = "";

  if (Deno.build.os === 'linux') {
    libname = `/lib/${cpu}-linux-gnu/libc.so.6`;
  // darwin not supported yet deno.
  // } else if (Deno.build.os === 'darwin') {
    // libname = `/lib/${cpu}-linux-gnu/libc.so.6`;
  } else if (Deno.build.os === 'windows') {
    libname = `C:/Windows/System32/msvcrt.dll`;
  } else {
    throw TypeError("Not supported os");
  }

  const library = Deno.dlopen(libname, CallSymbol);

  return library;
}

export {
  type CallSymbol,
  _load
}
