export class LogClassParam {
  prefix: string = '';
}

export function LogClass(param: LogClassParam): any {
  return function (constructor: Function) {
    console.log(
      `Class ${constructor.name} was created with prefix ${param.prefix}`
    );
    constructor.prototype.prefix = param.prefix;
  };
}
