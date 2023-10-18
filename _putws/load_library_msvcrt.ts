import { _load } from './_load_library_msvcrt.ts';

function load() {

  const library = _load();

  const { 
    _putws,
  } = library.symbols;

  return {
    _putws,
    library,
  };
}

export {
  load,
}
