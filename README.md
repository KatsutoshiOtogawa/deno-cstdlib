# deno-cstdlib

clang stdlib wrapper.

```ts
import { malloc, free, mblen } from 'https://deno.land/x/cstdlib@v0.0.3/mod.ts';
// or import { malloc } from 'https://deno.land/x/cstdlib/@0.0.3/malloc/malloc.ts';
// or import { free } from 'https://deno.land/x/cstdlib/@0.0.3/free/free.ts';
// or import { mblen } from 'https://deno.land/x/cstdlib/@0.0.3/mblen/mblen.ts';

// 8 byte malloc
let ptr = malloc(8);

// free ptr;
free(ptr);

```



```ts
import { mbtowc, free, calloc } from 'https://deno.land/x/cstdlib@v0.0.3/mod.ts';

const mbbuf = new TextEncoder().encode("あいうえお");
        const buf = new Uint8Array(buforig.length + 1);
        buf.set(buforig);
        buf[buf.length] = 0; // \0 terminator
        let result = puts(buf);

// 大き目にとる。文章なら1024見たいな取り方をしてもよい。
// 
let wchar_size = 2
let wchar_p = calloc(7, wchar_size);
// これも大き目でよい。
let size = 1024;

mbtowc(wchar_p, mbbuf, size);

// ワイド文字が必須な奴に渡す。

// const wchar_view = new Deno.UnsafePointerView(wchar_p);

// const f_bsize = statvfs_view.getBigUint64(0) as bigint;
```
