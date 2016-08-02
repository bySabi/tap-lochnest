function getTestArgs (name_, opts_, cb_) {
  var name = '(anonymous)';
  var opts = {};
  var cb;

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    var t = typeof arg;
    if (t === 'string') {
      name = arg;
    }
    else if (t === 'object') {
      opts = arg || opts;
    }
    else if (t === 'function') {
      cb = arg;
    }
  }
  return { name: name, opts: opts, cb: cb };
};

function lochNest(tape, opts) {

  var delimiter = opts && opts.delimiter || ' ';

  var tapa = function (name_, opts_, cb_) {
    var args = getTestArgs(name_, opts_, cb_);
    var name = args.name;
    var opts = args.opts;
    var cb = args.cb;

    function callback(cb, acc, t) {
      if (!t) {
        return function (t) {
          return callback(cb, acc, t);
        }
      }

      var test = t.test;
      t.test = function (desc_, opts_, cb_) {
        var args = getTestArgs(desc_, opts_, cb_);
        var desc = args.name;
        var opts = args.opts;
        var cb = args.cb;

        var name = acc + delimiter + desc;

        return test.call(t, name, opts, callback(cb, name));
      }

      return cb(t);
    }
    return tape(name, opts, callback(cb, name));
  }

  tapa.skip = tape.skip;
  tapa.only = tape.only;
  tapa.onFinish = tape.onFinish;

  return tapa;
}

module.exports = lochNest;
