(function() {
  'use strict';

  describe('Part II', function() {

    describe('contains', function() {
      checkForNativeMethods(function() {
        _.contains([4, 5, 6], 2);
      });

      it('should be a function', function() {
        expect(_.contains).to.be.an.instanceOf(Function);
      });

      it('should not mutate the input array', function() {
        var input = [1,2,3,4,5];
        var result = _.contains(input, 4);

        /*
         * Mutation of inputs should be avoided without good justification otherwise
         * as it can often lead to hard to find bugs and confusing code!
         * Imagine we were reading the code above, and we added the following line:
         *
         * var lastElement = input[input.length - 1];
         *
         * Without knowing that mutation occured inside of reduceRight,
         * we would assume that `lastElement` is 5. But if inside of
         * reduceRight, we use the array method `pop`, we would permanently
         * change `input` and our assumption would not longer be true,
         * `lastElement` would be 4 instead!
         *
         * The tricky part is that we have no way of knowing about the mutation
         * just by looking at the code above. We'd have to dive into the
         * implementation of reduceRight to the exact line that uses `pop`.
         * If we write a lot of code with this assumption, it might be very hard
         * to trace back to the correct line in reduceRight.
         *
         * You can avoid an entire class of bugs by writing functions
         * that don't mutate their inputs!
         */

        expect(input).to.eql([1,2,3,4,5])
      });

      it('should return true given an array and a value from that array', function(){
        var array = [1,2,3];
        var value = 1;
        expect(_.contains(array, value)).to.be.true;
      });

      it('should return false given an array and a value not in that array', function(){
        var array = [1,2,3];
        var value = 4;
        expect(_.contains(array, value)).to.be.false;
      });

      it('should return true given a object and a value from that object', function(){
        var object = { a: 1, b: 2, c: 3 };
        var value = 1;
        expect(_.contains(object, value)).to.be.true;
      });

      it('should return false given an object and a value not in that object', function(){
        var object = { a: 1, b: 2, c: 3 };
        var value = 4;
        expect(_.contains(object, value)).to.be.false;
      });
    });

    describe('every', function() {
      var isEven = function(num) {
        return num % 2 === 0;
      };

      checkForNativeMethods(function() {
        _.every([4, 5, 6], _.identity);
      });

      it('passes by default for an empty collection', function() {
        expect(_.every([], _.identity)).to.be.true;
      });

      it('passes for a collection of all-truthy results', function() {
        expect(_.every([true, {}, 1], _.identity)).to.be.true;
      });

      it('fails for a collection of all-falsy results', function() {
        expect(_.every([null, 0, undefined], _.identity)).to.be.false;
      });

      it('fails for a collection containing mixed falsy and truthy results', function() {
        expect(_.every([true, false, 1], _.identity)).to.be.false;
        expect(_.every([1, undefined, true], _.identity)).to.be.false;
      });

      it('should work when provided a collection containing undefined values', function() {
        expect(_.every([undefined, undefined, undefined], _.identity)).to.be.false;
      });

      it('should cast the result to a boolean', function() {
        expect(_.every([1], _.identity)).to.be.true;
        expect(_.every([0], _.identity)).to.be.false;
      });

      it('should handle callbacks that manipulate the input', function() {
        expect(_.every([0, 10, 28], isEven)).to.be.true;
        expect(_.every([0, 11, 28], isEven)).to.be.false;
      });

      it('should work when no callback is provided', function() {
        expect(_.every([true, true, true])).to.be.true;
        expect(_.every([true, true, false])).to.be.false;
        expect(_.every([false, false, false])).to.be.false;
      });
    });

    describe('some', function() {
      var isEven = function(number){
        return number % 2 === 0;
      };

      checkForNativeMethods(function() {
        _.some([4, 5, 6], _.identity);
      });

      it('should fail by default for an empty collection', function() {
        expect(_.some([])).to.be.false;
      });

      it('should pass for a collection of all-truthy results', function() {
        expect(_.some([true, {}, 1], _.identity)).to.be.true;
      });

      it('should fail for a collection of all-falsy results', function() {
        expect(_.some([null, 0, undefined], _.identity)).to.be.false;
      });

      it('should pass for a collection containing mixed falsy and truthy results', function() {
        expect(_.some([true, false, 1], _.identity)).to.be.true;
      });

      it('should pass for a set containing one truthy value that is a string', function() {
        expect(_.some([null, 0, 'yes', false], _.identity)).to.be.true;
      });

      it('should fail for a set containing no matching values', function() {
        expect(_.some([1, 11, 29], isEven)).to.be.false;
      });

      it('should pass for a collection containing one matching value', function() {
        expect(_.some([1, 10, 29], isEven)).to.be.true;
      });

      it('should cast the result to a boolean', function() {
        expect(_.some([1], _.identity)).to.be.true;
        expect(_.some([0], _.identity)).to.be.false;
      });

      it('should work when no callback is provided', function() {
        expect(_.some([true, true, true])).to.be.true;
        expect(_.some([true, true, false])).to.be.true;
        expect(_.some([false, false, false])).to.be.false;
      });
    });

    describe('extend', function() {
      checkForNativeMethods(function() {
        _.extend({ a: 1 },{ b: 1 }, { c: 1 });
      });

      it('returns the first argument', function() {
        var destination = {};
        var source = {};
        var extended = _.extend(destination, source);

        expect(extended).to.equal(destination);
      });

      it('should extend an object with the attributes of another', function() {
        var destination = {};
        var source = { a: 'b' };
        var extended = _.extend(destination, source);

        expect(extended.a).to.equal('b');
      });

      it('should override properties found on the destination', function() {
        var destination = { a: 'x' };
        var source = { a: 'b' };
        var extended = _.extend(destination, source);

        expect(extended.a).to.equal('b');
      });

      it('should not override properties not found in the source', function() {
        var destination = { x: 'x' };
        var source = { a: 'b' };
        var extended = _.extend(destination, source);

        expect(extended.x).to.equal('x');
      });

      it('should extend from multiple source objects', function() {
        var extended = _.extend({ x: 1 }, { a: 2 }, { b:3 });

        expect(extended).to.eql({ x: 1, a: 2, b: 3 });
      });

      it('in the case of a conflict, it should use the last property\'s values when extending from multiple source objects', function() {
        var extended = _.extend({ x: 'x' }, { a: 'a', x: 2 }, { a: 1 });

        expect(extended).to.eql({ x: 2, a: 1 });
      });
    });

    describe('defaults', function() {
      checkForNativeMethods(function() {
        _.defaults({ a: 1 },{ b: 1 }, { c: 1 });
      });

      it('should be a function', function() {
        expect(_.defaults).to.be.an.instanceOf(Function);
      });

      it('should return the original target object', function() {
        /*
         * Our defaults function should only modify the contents of the original object,
         * it should not create a new object with all the same properties
         *
         * We can test this by using the identity operator (===)
         *
         * If we assign a variable to the result of _.defaults() and it === a variable assigned
         * to our initial object, then both variables are indeed references to the same object
         * and we are guaranteed that only the contents of our original object were modified
         */

        var destination = {};
        var source = {};
        var defaulted = _.defaults(destination, source);

        expect(defaulted).to.equal(destination); // .equal uses (===) under the hood
      });

      it('should copy a property if that key is not already set on the target', function() {
        /*
         * Be careful when using `arguments`. It's specified as a weird "Array-like object"
         * that's not really an array and not really even an object. This means normal operations
         * we would expect to work on objects (`for in`, `Object.keys`) and arrays (`push`, `pop`)
         * might not work as expected on `arguments`.
         *
         * In fact, the behavior of `arguments` is left up to various JavaScript engines to implement.
         * You might have noticed that running this exact same test works fine in Chrome or Firefox.
         * This is because the engines powering these browsers are smart enough to understand
         * the nuances of this complicated structure and might force it to act as expected.
         *
         * It turns out that the engine powering our runtime environment for these tests
         * is not as smart as Chrome and does not understand how to `for in` over the `arguments` object
         *
         * This could be considered a bug in our test environment but is better thought of as a learning
         * opportunity. The safest thing to do when working with `arguments` is convert it into a
         * real array that every JavaScript engine will know how to handle.
         *
         * If you're not sure how to do that, Stack Overflow has plenty to say on the topic.
         */

        var destination = {};
        var source = { a: 1 };

        _.defaults(destination, source);

        expect(destination.a).to.equal(1);
      });

      it('should copy any property whose key is not already set on the target', function() {
        var destination = {};
        var source = { a: 1, b: 2, c: 'three' };

        _.defaults(destination, source);

        expect(destination.a).to.equal(1);
        expect(destination.b).to.equal(2);
        expect(destination.c).to.equal('three');
      });

      it('should not copy a property if that key is already set on the target', function() {
        var destination = { a: 10 };
        var source = { a: 1 };

        _.defaults(destination, source);

        expect(destination.a).to.equal(10);
      });

      it('should not copy any property whose key is already set on the target', function() {
        var destination = { a: 1, b: 2 };
        var source = { a: 100, b: 200, c: 300 };

        _.defaults(destination, source);

        expect(destination.a).to.equal(1);
        expect(destination.b).to.equal(2);
        expect(destination.c).to.equal(300);
      });

      it('should not copy a property if that key is already set on the target, even if the value for that key is falsy', function() {
        /*
         * When the value provided to an if() condition is not a strict boolean,
         * it will first be coerced into one and then evaluated
         *
         * A value is considered 'falsy' if, when coerced, it evaluates to `false`.
         * You can check the coerced boolean with either `Boolean(myValue)` or `!!myValue`
         *
         * This could be a problem because falsy values are valid in our object. If we aren't
         * precise enough with our conditional check, we might get these unexpected results
         */

        var destination = {a: '', b: 0, c: NaN };
        var source = { a: 1, b: 2, c: 3 };

        _.defaults(destination, source);

        expect(destination.a).to.equal('')
        expect(destination.b).to.equal(0);
        expect(isNaN(destination.c)).to.equal(true)
      });

      it('should copy properties source an arbitrary number of source objects', function() {
        var destination = {};
        var source = { a: 1 };
        var anotherSource = { b: 2, c: 'three' };
        var aThirdSource = { d: 'four' };

        _.defaults(destination, source, anotherSource, aThirdSource);

        expect(destination.a).to.equal(1);
        expect(destination.b).to.equal(2);
        expect(destination.c).to.equal('three');
        expect(destination.d).to.equal('four');
      });

      it('should prefer the first value found when two objects are provided with properties at the same key', function() {
        var destination = {};
        var source = { a: 1 };
        var anotherSource = { a: 'one' };

        _.defaults(destination, source, anotherSource);

        expect(destination.a).to.equal(1);
      });
    });

    describe('once', function() {
      checkForNativeMethods(function() {
        var num = 0;
        var increment = _.once(function() {
          num += 1;
        });
      });

      it('should be a function', function() {
        expect(_.once).to.be.an.instanceOf(Function);
      });

      it('should return a function', function() {
        // noop is short for `no-operation` and is pronounced `no-op`
        var noop = _.once(function() {});

        expect(noop).to.be.an.instanceOf(Function);
      })

      it('should only run a user-defined function if it has not been run before', function() {
        var num = 0;
        var increment = _.once(function() {
          num++;
        });

        increment();
        increment();
        increment();

        expect(num).to.equal(1);
      });

      it('should apply arguments to the user-defined function', function() {
        var add = _.once(function(x,y,z) {
          return x + y + z;
        });

        expect(add(1, 2, 3)).to.equal(6);
      });

      it('should return the result of the first call for every subsequent call', function() {
        var add = _.once(function(x,y,z) {
          return x + y + z;
        });

        expect(add(1,2,3)).to.equal(6);
        expect(add(4,5,6)).to.equal(6);
        expect(add(7,8,9)).to.equal(6);
      });
    });

    describe('memoize', function() {
      var add, memoAdd;

      beforeEach(function() {
        add = function(a, b) {
          return a + b;
        };

        memoAdd = _.memoize(add);
      });

      checkForNativeMethods(function() {
        _.memoize(function add(a, b) {
          return a + b;
        });
      })

      it('should produce the same result as the non-memoized version', function() {
        expect(add(1, 2)).to.equal(3);
        expect(memoAdd(1, 2)).to.equal(3);
      });

      it('should give different results for different arguments', function() {
        expect(memoAdd(1, 2)).to.equal(3);
        expect(memoAdd(3, 4)).to.equal(7);
        expect(memoAdd(1, 3)).to.equal(4);
      });

      it('should not run the memoized function twice when given a primitive type as an argument', function() {
        // Here, we wrap a dummy function in a spy. A spy is a wrapper function (much like _.memoize
        // or _.once) that keeps track of interesting information about the function it's spying on;
        // e.g. whether or not the function has been called.
        var spy = sinon.spy(function() { return 'Dummy output'; });
        var memoSpy = _.memoize(spy);

        memoSpy(10);
        expect(spy).to.have.been.calledOnce;
        memoSpy(10);
        expect(spy).to.have.been.calledOnce;
      });
      
      it('should not run the memoized function twice when given a reference type as an argument', function() {
        // Be careful how you are checking if a set of arguments has been passed in already
        var spy = sinon.spy(function() { return 'Dummy output'; });
        var memoSpy = _.memoize(spy);

        memoSpy([1,2,3]);
        expect(spy).to.have.been.calledOnce;
        memoSpy([1,2,3]);
        expect(spy).to.have.been.calledOnce;
      });

      it('should run the memoized function twice when given an array and then given a list of arguments', function() {
        // Be careful how you are checking if a set of arguments has been passed in already
        var spy = sinon.spy(function() { return 'Dummy output'; });
        var memoSpy = _.memoize(spy);

        memoSpy([1,2,3]);
        expect(spy).to.have.been.calledOnce;
        memoSpy(1,2,3);
        expect(spy).to.have.been.calledTwice;
      });
    });

    describe('delay', function() {
      var callback;

      beforeEach(function() {
        callback = sinon.spy();
      })

      checkForNativeMethods(function() {
        _.delay(callback, 100);
      })

      it('should only execute the function after the specified wait time', function() {
        _.delay(callback, 100);
        clock.tick(99);

        expect(callback).to.have.not.been.called;

        clock.tick(1);

        expect(callback).to.have.been.calledOnce;
      });

      it('should have successfully passed function arguments in', function() {
        _.delay(callback, 100, 1, 2);
        clock.tick(100);

        expect(callback).to.have.been.calledWith(1, 2);
      });
    });

    describe('shuffle', function() {
      checkForNativeMethods(function() {
        _.shuffle([1, 2, 3, 4])
      })

      it('should not modify the original object', function() {
        var numbers = [4, 5, 6];
        var shuffled = _.shuffle(numbers).sort();

        expect(shuffled).to.not.equal(numbers);
        expect(numbers).to.eql([4, 5, 6]);
      });
      
      it('should maintain same array length', function() {
        var numbers = [1, 1, 2, 3];
        var shuffled = _.shuffle(numbers);

        expect(shuffled.length).to.equal(numbers.length);
      });

      it('should have the same elements as the original object', function() {
        var numbers = [4, 5, 6];
        var shuffled = _.shuffle(numbers).sort();

        expect(shuffled).to.eql([4, 5, 6]);
      });

      it('should not be in the same order as the original object', function() {
        var numbers = [4, 5, 6, 7, 8, 9, 10];
        var shuffled = _.shuffle(numbers);

        // This test will fail 1/9! times
        expect(shuffled).to.not.eql([4, 5, 6, 7, 8, 9, 10]);
      });
    });

  });

  function checkForNativeMethods(runUnderbarFunction) {
    it('should not use the native version of any underbar methods in its implementation', function() {
      // These spies are set up in testSupport.js
      runUnderbarFunction();
      expect(Array.prototype.map.called).to.equal(false);
      expect(Array.prototype.indexOf.called).to.equal(false);
      expect(Array.prototype.forEach.called).to.equal(false);
      expect(Array.prototype.filter.called).to.equal(false);
      expect(Array.prototype.reduce.called).to.equal(false);
      expect(Array.prototype.every.called).to.equal(false);
      expect(Array.prototype.some.called).to.equal(false);
    });
  }
}());
