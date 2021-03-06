/* eslint max-len: ["error", 120] */

import 'babel-polyfill';
import classSyntax from './core/class_syntax';
import iterators from './core/iterators';
import generator from './core/generator';
import symbols from './core/symbols';
import enhancedObjectLiterals from './core/enhanced_object_literals';
import destructuringAssignment from './core/destructuring_assignment';
import proxies from './core/proxies';
import refrect from './core/reflect';
import decorators from './core/decorators'; // ES-next: stage-2
import templateLiteral from './core/template_literal';
import exponentiation from './core/exponentiation'; // ES2016
import globalVariable from './core/global'; // ES-next: stage-3
import functionParameters from './core/function_parameters'; // ES-next: stage-4
import arrayBuffer from './library/array_buffer';
import sharedMemoryAndAtomics from './core/shared_memory_and_atomics'; // ES-next stage-2
import promise from './library/promise';
import set from './library/set';
import map from './library/map';
import weakSet from './library/weak_set';
import weakMap from './library/weak_map';
import stringApi from './library/string_api';
import arrayApi from './library/array_api';
import functionApi from './library/function_api';
import numberApi from './library/number_api';
import asyncFunctions from './core/async_functions';

async function exec(func) {
  try {
    await func();
  } catch (e) {
    console.error(e);
    for (let i = 0; i < 10; ++i) console.groupEnd();
  }
}

async function main() {
  // HACK: This code is inserted in order to resolve `(0 , _symbol2.default) is not a function` error
  Symbol('a');

  await exec(classSyntax);
  await exec(iterators);
  await exec(generator);
  await exec(symbols);
  await exec(enhancedObjectLiterals);
  await exec(destructuringAssignment);
  await exec(proxies);
  await exec(refrect);
  await exec(decorators);
  await exec(templateLiteral);
  await exec(exponentiation);
  await exec(globalVariable);
  await exec(functionParameters);
  await exec(arrayBuffer);
  await exec(sharedMemoryAndAtomics);
  await exec(promise);
  await exec(set);
  await exec(map);
  await exec(weakSet);
  await exec(weakMap);
  await exec(stringApi);
  await exec(arrayApi);
  await exec(functionApi);
  await exec(numberApi);
  await exec(asyncFunctions);
}

main();
