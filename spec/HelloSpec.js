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
});

describe("toContain", function () {
  it("Examples", function () {
    expect([1, 2, 3, 4]).toContain(3);
    expect(["Penguin", "Turtle", "Pig", "Duck"]).toContain("Duck");
    expect("Hello world").toContain("world");
  });
});

describe("toBeDefined/tobeUndefined", function () {
  it("toBeDefined", function () {
    var name = "sagar";
    expect(name).toBeDefined();
  });

  it("toBeUndefined", function () {
    var num;
    expect(num).toBeUndefined;
  });
});

describe("toBeNull/toBeNaN", function () {
  it("toBeNull", () => {
    expect(null).toBeNull(); // success
    // expect(false).toBeNull(); // failure
    // expect(somethingUndefined).toBeNull(); // failure
  });
  it("toBeNaN", () => {
    expect(5).not.toBeNaN(); // success
    expect(0 / 0).toBeNaN(); // success
    expect(parseInt("hello")).toBeNaN(); // success
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
