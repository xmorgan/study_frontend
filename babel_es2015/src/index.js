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
import exponentiation from './core/exponentiation'; // ES2016
import set from './library/set';
import map from './library/map';
import weakSet from './library/weak_set';
import weakMap from './library/weak_map';
import stringApi from './library/string_api';
import arrayApi from './library/array_api';
import numberApi from './library/number_api';
import asyncFunctions from './core/async_functions';

async function main() {
  await classSyntax();
  await iterators();
  await generator();
  await symbols();
  await enhancedObjectLiterals();
  await destructuringAssignment();
  await proxies();
  await refrect();
  await decorators();
  await exponentiation();
  await set();
  await map();
  await weakSet();
  await weakMap();
  await stringApi();
  await arrayApi();
  await numberApi();
  await asyncFunctions();
}

main();
