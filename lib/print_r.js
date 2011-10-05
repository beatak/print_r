var multiplyString = function (char, len) {
  return (new Array(len + 1)).join(char);
};

var print_r = function (target, depth) {
  depth = (depth ? depth : 0);
  if (depth > 5) {
    throw new Error('too deep recurrsion');
  }
  var result, i, len, _result,
      _type = typeof target;

  switch (true) {
    case (_type === 'boolean'):
    result = '(boolean)' + target;
    break;

    case (_type === 'undefined'):
    result = 'undefined';
    break;

    case (_type === 'string'):
    result = '(string)' + target;
    break;

    case (_type === 'number'):
    result = '(number)' + target;
    break;

    case (_type === 'function'):
    result = '(function)' + target.toString();
    break;

    case (_type === 'object'):
    if (target === null) {
      result = '(null)';
    }
    else if (target instanceof Array) {
      _result = [];
      for (i = 0, len = target.length; i < len; ++i) {
        _result[_result.length] = print_r(target[i], (depth + 1));
      }
      result = ['(array)[', _result.join(', '), ']'].join('');
    }
    else {
      _result = [];
      for (i in target) {
        _result[_result.length] = [multiplyString(' ', (depth + 2) * 2), i, ':', print_r(target[i], (depth + 1))].join('');
      }
      result = ['(object){\n', _result.join(',\n'), '}'].join('');
    }
    break;

    default:
    throw new Error('unknown object?: ' + target);
    break;
  }
  return result;
};

exports.print_r = print_r;