import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    free,
  } = library.symbols;

  return {
    free,
    library,
  };
}

export {
  load,
}
