@create
class Sample {
  @access()
  sampleField: number;
  constructor(num: number) {
    this.sampleField = num;
  }
}

function create(constructor: Function) {
  console.log("New Instance");
}
function access() {
  return function(target?: any, propertyKey?: string) {
    console.log("field accessed");
  };
}
var smaple = new Sample(1);
