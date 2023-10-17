import { _load } from './_load_library.ts';

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
