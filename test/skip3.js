var tape = require('tape');
var lochNest = require('../');
var test = lochNest(tape, { delimiter: ' | ' });

test('some tests', function(t) {
  t.test('skip this', { skip: true }, function (t) {
    t.fail('this should not even run');
    t.end();
  });

  t.test('A', function (t) {
    t.test('a1', { skip: true }, function(t) {
      t.fail('this should not even run');
      t.end();
    })

    t.test('a2', function(t) {
      t.ok('sucess');
      t.end();
    });

    t.end();
  });
  t.end();
});
