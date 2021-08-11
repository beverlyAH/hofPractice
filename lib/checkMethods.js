// function nativeMethods(runUnderbarFunction) {
//   console.log('first => ', runUnderbarFunction)
//   it('should not use the native version of any underscore methods', function(runUnderbarFunction) {
//     console.log('second => ', runUnderbarFunction);
//   // These spies are set up in testSupport.js
//     runUnderbarFunction();
//     expect(Array.prototype.map.called).to.equal(false);
//     expect(Array.prototype.indexOf.called).to.equal(false);
//     expect(Array.prototype.forEach.called).to.equal(false);
//     expect(Array.prototype.filter.called).to.equal(false);
//     expect(Array.prototype.reduce.called).to.equal(false);
//     expect(Array.prototype.every.called).to.equal(false);
//     expect(Array.prototype.some.called).to.equal(false);
//   });
// }


var underscoreMethods = function(func, flag, testFunction) {
  var usage = flag ? 'should' : 'should not';
  it(usage + ' use underscore _.' + func, function() {
    testFunction();
    expect(_[func].called).to.equal(flag);
  });
}

var nativeMethods = function(func, flag, testFunction) {
  var usage = flag ? 'should' : 'should not';
  it(`${usage} use native .${func}`, () => {
    testFunction();
    expect(Array.prototype[func].called).to.equal(flag);
  });
}

var forLoop = function(func) {
  var stringified = func.toString();
  it('should not use a for loop', function() {
    expect(stringified.includes('for')).to.equal(false);
  })
}