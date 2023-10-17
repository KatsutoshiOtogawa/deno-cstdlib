import { _load } from './_load_library.js';

function load() {

  const library = _load();

  const { 
    mblen,
  } = library.symbols;

  return {
    mblen,
    library,
  };
}

export {
  load,
}
