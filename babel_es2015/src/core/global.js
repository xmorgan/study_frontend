export default function global() {
  console.group('ES-Next: Stage-3: global');
  {
    console.log('global.window =>', global.window);
    console.log('System.global.window =>', System.global.window);
  }
  console.groupEnd();
}
