(function() {
  'use strict';

  mocha.setup('bdd');
  window.expect = chai.expect;

  window.onload = function() {
    window.mochaPhantomJS ? mochaPhantomJS.run() : mocha.run();
  };

  // Disabling native methods is dangerous, we should spy on them instead
  before(function() {
    sinon.spy(Array.prototype,'map');
    sinon.spy(Array.prototype,'forEach');
    sinon.spy(Array.prototype,'filter');
    sinon.spy(Array.prototype,'reduce');
    sinon.spy(_,'filter');
    sinon.spy(_,'each');
    sinon.spy(_,'map');
    sinon.spy(_,'reduce');
    sinon.spy(_,'reject');
  });

  afterEach(function() {
    Array.prototype.map.reset();
    Array.prototype.forEach.reset();
    Array.prototype.filter.reset();
    Array.prototype.reduce.reset();
    _.filter.reset();
    _.each.reset();
    _.map.reset();
    _.reduce.reset();
    _.reject.reset();
  });

  after(function() {
    Array.prototype.map.restore();
    Array.prototype.forEach.restore();
    Array.prototype.filter.restore();
    Array.prototype.reduce.restore();
    _.filter.restore();
    _.each.restore();
    _.map.restore();
    _.reduce.restore();
    _.reject.restore();
  });
}());
