import { _load } from './_load_library.ts';

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
