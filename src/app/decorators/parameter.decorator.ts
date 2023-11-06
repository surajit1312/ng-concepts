export function LogParam() {
  return function (target: any, methodName: string, index: number) {
    console.log(
      `Custom Log for parameter with index: ${index} called from method: ${methodName}`
    );
  };
}
