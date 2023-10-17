# deno-cstdlib

clang stdlib wrapper.

```ts
import { malloc, free, mblen } from 'https://deno.land/x/cstdlib/mod.ts';

// 8 byte malloc
let ptr = malloc(8);

// free ptr;
free(ptr);

```
