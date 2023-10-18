import { _load } from './_load_library_msvcrt.ts';

function load() {

  const library = _load();

  const { 
    puts,
  } = library.symbols;

  return {
    puts,
    library,
  };
}

export {
  load,
}
