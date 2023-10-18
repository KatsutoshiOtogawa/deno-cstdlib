// import { malloc, free, mblen } from 'https://deno.land/x/cstdlib@v0.0.3/mod.ts';

import { calloc } from "../calloc/calloc.ts";
import { mbstowcs } from "../mbstowcs/mbstowcs.ts";
import { MessageBoxExW } from "../MessageBoxExW/MessageBoxExW.ts";
import { free } from "../free/free.ts";
import { NULL } from "../NULL/NULL.ts";

// // 8 byte malloc
// let ptr = malloc(8);

// // free ptr;
// free(ptr);

const mbbuf = new TextEncoder().encode("あいうえお");

// 大き目にとる。文章なら1024見たいな取り方をしてもよい。
// 


console.log(mbbuf.length);

let wchar_size = 2
let wchar_p = calloc(mbbuf.length, wchar_size);
// これも大き目でよい。
let size = 1024;

console.log(mbbuf);

const aaa = mbstowcs(wchar_p, mbbuf, mbbuf.length);

console.log(aaa);

// @ts-ignore
const wchar_view = new Deno.UnsafePointerView(wchar_p);

const buf = wchar_view.getArrayBuffer(mbbuf.length);

console.log(buf);

MessageBoxExW(
    NULL,
    wchar_p,
    wchar_p,
    1,
    0
)

free(wchar_p);

