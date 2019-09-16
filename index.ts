console.log("start of class definition\n");
@create
class Adding {
  @access
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
function create(constructor: Function) {
  console.log("create\n");
}

function access(target: Object, propertyKey: string) {
  console.log("access\n");
}

function multiply(num: number) {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    console.log("multiply\n");
    const addFunc = descriptor.value;
    descriptor.value = function(...args: any) {
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
