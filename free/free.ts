import { load } from './load_library.ts';


function free(address: Deno.PointerValue<unknown>) {
    const {free, library } = load();

    try{
        free(address)
    } finally {
        library.close();
    }
}

export {
    free
}
