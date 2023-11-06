export function LogProperty() {
  return function (target: any, property: string): void {
    let value: any;
    const setter = function (val: any): void {
      console.log('Setting value to custom property decorator');
      value = val;
    };
    const getter = function (): any {
      console.log('Getting value from custom property decorator');
      return value;
    };
    Object.defineProperty(target, property, {
      set: setter,
      get: getter,
    });
  };
}
