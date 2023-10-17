import { _load } from './_load_library.js';

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
