export class LogParams {
  shouldLogTime: boolean = false;
}

export function LogMethod(param: LogParams): Function {
  return function (target: any, methodName: string, descriptor: any): Function {
    const originalFn = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const startDate = new Date();
      const result = originalFn.apply(this, args);
      let message: string = `Method ${methodName} called from ${target.constructor.name}`;
      if (param.shouldLogTime) {
        const endDate = new Date();
        message += ` and took ${
          endDate.valueOf() - startDate.valueOf()
        } ms to execute.`;
      }
      console.log(message);
      return result;
    };
    return descriptor;
  };
}
