# tap-lochnest (TAP Loch Nest)

[![npm version](https://badge.fury.io/js/tap-lochnest.svg)](https://badge.fury.io/js/tap-lochnest)
[![npm downloads](https://img.shields.io/npm/dm/tap-lochnest.svg?style=flat-square)](https://www.npmjs.com/package/tap-lochnest)
[![Build Status](https://travis-ci.org/bySabi/tap-lochnest.svg?branch=master)](https://travis-ci.org/bySabi/tap-lochnest)


> A TAP helper for output nested test name beside parent test name.

![tap-lochnesttape](https://github.com/bySabi/tap-lochnest/blob/master/images/nessie.jpg?raw=true)


## Installation

### npm

```bash
npm install tap-lochnest --save-dev
```

## Usage

```javascript
var lochNest = require('tap-lochnest');
```

```javascript
var tape = require('tape');
var test = lochNest(tape, { delimiter: ' | ' });

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


TAP Output

```bash
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

## `delimiter` option
Default nested test name separator is a `space`, but can be customize.

Ex:
```js
var test = lochNest(tape, { delimiter: ' | ' });
```

## TAP Frameworks
Work with [tape](https://github.com/substack/tape) on `node` and `browser`

## Contributing
* Documentation improvement
* Feel free to send any PR

## License

[ISC][isc-license]

[isc-license]:./LICENSE
