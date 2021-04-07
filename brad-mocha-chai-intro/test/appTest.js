
const assert = require('chai').assert;
const addNumbers = require('../app').addNumbers;
const app = require('../app');

// Results:
const sayHelloResult = app.sayHello();

describe('App', function() {
  describe('sayHello()', function() {
    it('sould return hello message', function() {
      assert.equal(sayHelloResult, 'hello');
    });
  
    it('should return type string', function() {
      assert.typeOf(sayHelloResult, 'string');
    });
  });
  
  describe('addNumbers()', function() {
    it('should return a number', function() {
      let result = addNumbers(1, 3);
      assert.isNumber(result);
    });
  
    it('should add two numbers', function() {
      const a = 3;
      const b = -1;
      const result = addNumbers(a, b);
      assert.equal(result, 2);
    });
  
    it('should be above 5', function() {
      const result = addNumbers(3, 4);
      assert.isAbove(result, 5);
    });
  
    it('should return a type number', function() {
      const result = addNumbers('5', 8);    // AssertionError: expected '58' to be a number
      assert.typeOf(result, 'number');
    });
  });

});
