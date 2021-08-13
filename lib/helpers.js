var underscoreMethods = function(func, flag, testFunction) {
  var usage = flag ? 'should' : 'should not';
  it(usage + ' use underscore _.' + func, function() {
    testFunction();
    expect(_[func].called).to.equal(flag);
  });
}

var nativeMethods = function(func, flag, testFunction) {
  var usage = flag ? 'should' : 'should not';
  it(usage + ' use native .' + func, function() {
    testFunction();
    expect(Array.prototype[func].called).to.equal(flag);
  });
}

var noForLoops = function(func) {
  var stringified = func.toString();
  it('should not use a for loop', function() {
    expect(stringified.includes('for') && !stringified.includes('forEach')).to.equal(false);
  })
}

var noNewArrays = function(func) {
  var stringified = func.toString();
  it('should not create new arrays', function() {
    expect(stringified.includes(('[]' || '[ ]'))).to.equal(false);
  });
}

var cloneObject = function(input) {
  return JSON.parse(JSON.stringify(input));
}