@create
class Adding {
  @f()
  baseNumber: number;
  constructor(baseNumber: number) {
    this.baseNumber = baseNumber;
  }

  @must(2)
  add(plus: number) {
    return (this.baseNumber += plus);
  }
}

function create(constructor: Function) {
  console.log("New Instance");
}

function access(propertyKey: string) {
  console.log("field accessed");
}

function f() {
  console.log("f(): evaluated");
  return (target: Object, propertyKey: string) => {
    console.log("f(): called");
  };
}

function must(num: number) {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    console.log((<Adding>target).add(1));
    // const addFunc = descriptor.value;
    // addFunc.bind(Object);
    // descriptor.value = () => {
    //   return addFunc() * num;
    // };
  };
}
const adding = new Adding(1);

console.log(adding.add(1));
