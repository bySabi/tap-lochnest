var tape = require('tape');
var lochNest = require('../');
var test = lochNest(tape, { delimiter: ' | ' });

test.skip('skip this', function(t) {
  t.fail('this should not even run');
  t.end();
});
