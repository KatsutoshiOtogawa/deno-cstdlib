import { _load } from './_load_library.js';

function load() {

  const library = _load();

  const { 
    malloc,
  } = library.symbols;

  return {
    malloc,
    library,
  };
}

export {
  load,
}
