import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    calloc,
  } = library.symbols;

  return {
    calloc,
    library,
  };
}

export {
  load,
}
