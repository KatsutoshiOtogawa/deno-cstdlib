import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    wctomb,
  } = library.symbols;

  return {
    wctomb,
    library,
  };
}

export {
  load,
}
