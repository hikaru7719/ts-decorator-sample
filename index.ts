console.log("start of class definition\n");
@classDecorators
class Adding {
  @propertyDecorators
  baseNumber: number;
  constructor(baseNumber: number) {
    this.baseNumber = baseNumber;
  }

  @multiply(2)
  add(plus: number) {
    return (this.baseNumber += plus);
  }
}
console.log("end of class definition\n");
function classDecorators(constructor: Function) {
  console.log("class\n");
}

function propertyDecorators(target: Object, propertyKey: string) {
  console.log("property\n");
}

function multiply(num: number) {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    console.log("method\n");
    const addFunc = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const result = addFunc.apply(this, args);
      return result * num;
    };
  };
}

console.log("before initialize class\n");
const adding = new Adding(1);
console.log("after initialize class\n");
console.log("---------------------------------\n");
console.log(adding.add(1));
adding.baseNumber = 3;
console.log(adding.add(1));
