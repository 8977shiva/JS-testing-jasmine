// console.log(fun.HelloWorld());
describe("Hello world", function () {
  it("says hello", function () {
    expect(HelloWorld()).toEqual("Hello world!");
  });
});

describe("helloworld", function () {
  it("returns  helloworld", () => {
    expect(hello()).toBe("helloworld");
  });
});

// describe("toBe vs toEqual", function () {
//   it("toBe", function () {
//     expect(spot).toBe(cosmo); //fail
//   });
//   it("toEqual", function () {
//     expect(spot).toEqual(cosmo); //success
//   });
// });

describe("toBetruthy vs toBefalsy", function () {
  it("toBeTruthy", function () {
    expect(true).toBeTruthy();
  });
  it("number", function () {
    expect(12).toBeTruthy();
  });
  it("empty", function () {
    expect({}).toBeTruthy();
  });

  it("false", function () {
    expect(false).toBeFalsy();
  });
  it("null", function () {
    expect(0).toBeFalsy();
  });
  it("empty", function () {
    expect("").toBeFalsy();
  });
  it("empty", function () {
    expect(null).toBeFalsy();
  });
});

describe("toContain", () => {
  it("to", function () {
    expect([1, 2, 3, 4]).toContain(3);
    expect(["Penguin", "Turtle", "Pig", "Duck"]).toContain("Duck");
    expect("Hello world").toContain("world");
  });
});

describe("toBeDefined/toBeUndefined", () => {
  it("defined", function () {
    var name = "sagar";
    expect(name).toBeDefined();

    var num;
    expect(num).toBeUndefined;
  });
});

describe("A spec (with setup and tear-down)", function () {
  var foo;

  beforeEach(function () {
    foo = 0;
    foo += 1;
  });

  it("is just a function, so it can contain any code", function () {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function () {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
});

describe("A spec (with setup and tear-down)", function () {
  var foo;

  beforeEach(function () {
    foo = 0;
    foo += 1;
  });

  afterEach(function () {
    foo = 0;
  });

  it("is just a function, so it can contain any code", function () {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function () {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
});
