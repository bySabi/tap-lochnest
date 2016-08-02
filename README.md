#

>



## Installation

### npm

```bash
npm install tap-lochnest --save-dev
```

## Usage

```javascript
var tape = require('tape');
var lochNest = require('tap-lochnest');
var test = lochNest(tape, { delimiter: ' | '});

var count = 0;

test('a set of some tests', function (t) {

  t.test('A', function (t) {
    t.equal(++count, 1);
    t.end();
  });

  t.test('B', function (t) {
    t.test('b1', function (t) {
      t.test('bb1', function (t) {
        t.equal(++count, 2);
        t.end();
      });
      t.end();
    });

    t.test('b2', function (t) {
      t.equal(++count, 3);
      t.end();
    });

    t.test('b3', function (t) {
      t.equal(++count, 4);
      t.end();
    });

    t.end();
  });

  t.test('C', function (t) {
    t.equal(++count, 5);
    t.end();
  });

  t.end();
});

test('a test', function (t) {
  t.equal(++count, 6);
  t.end();
});
```

TAP Output will be:
```
TAP version 13
# a set of some tests
# a set of some tests | A
ok 1 should be equal
# a set of some tests | B
# a set of some tests | B | b1
# a set of some tests | B | b1 | bb1
ok 2 should be equal
# a set of some tests | B | b2
ok 3 should be equal
# a set of some tests | B | b3
ok 4 should be equal
# a set of some tests | C
ok 5 should be equal
# a test
ok 6 should be equal

1..6
# tests 6
# pass  6

# ok
```

## Contributing
* Documentation improvement
* Feel free to send any PR

## LICENSE
ISC