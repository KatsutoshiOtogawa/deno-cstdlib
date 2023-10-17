import { _load } from './_load_library.js';

function load() {

  const library = _load();

  const { 
    mbtowc,
  } = library.symbols;

  return {
    mbtowc,
    library,
  };
}

export {
  load,
}
