import 'babel-polyfill';
import './core/class';
import './core/iterators';
import generator from './core/generator';
import './core/symbols';
import './core/enhanced_object_literals';
import './core/destructuring_assignment';
import asyncFunctions from './core/async_functions';
import './core/proxies';
import './core/reflect';
import './library/set';
import './library/map';
import './library/weak_set';
import './library/weak_map';
import './library/string_api';
import './library/array_api';
import './library/number_api';
import './core/exponentiation'; // ES2016

async function main() {
  await generator();
  await asyncFunctions();
}

main();
