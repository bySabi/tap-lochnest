var tape = require('tape');
var lochNest = require('../');
var test = lochNest(tape, { delimiter: ' | ' });

test('never run fail', function (t) {
  t.equal(true, false);
  t.end();
});

test.only('run success', function (t) {
  t.ok(true, 'assert name');
  t.end();
});
