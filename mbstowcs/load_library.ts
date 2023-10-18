import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    mbstowcs,
  } = library.symbols;

  return {
    mbstowcs,
    library,
  };
}

export {
  load,
}
