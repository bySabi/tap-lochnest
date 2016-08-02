var tape = require('tape');
var lochNest = require('../');
var test = lochNest(tape, { delimiter: ' | '});

test('some tests', function(t) {
  t.skip('skip this', function (t) {
    t.fail('this should not even run');
    t.end();
  });

  t.test('testing something', function (t) {
    t.ok(true, 'is true');
    t.end();
  });

  t.end();
});
