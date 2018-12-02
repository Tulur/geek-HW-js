  'use strict';

  // String

  let str_arr = ['my', 'first', 'test', 'string', 'array'],
      str = 'write tests for courses',
      arr = 'arr'

  test('String', () => {
    expect(str_arr.length).toEqual(5);
    expect(str_arr[1]).toEqual('first');
    expect(str_arr[4]).toEqual('array');
    expect(String.fromCodePoint(51, 52, 53)).toEqual('345');
    expect(String.fromCodePoint(41, 33)).toEqual(')!');
    expect(str_arr[1] + " " + str_arr[2]).toEqual('first test');
    expect(str.search('tests')).toEqual(6);
    expect(str.indexOf('for')).toEqual(12);
    expect(str.slice(0,3)).toEqual('wri');
    expect(str_arr[2].slice(0,5) ).toEqual(str.slice(6,10)); // ??
    expect(str.replace('write','string') ).toEqual('string tests for courses');
    // expect(str.split(" ") ).toEqual( [arr ,'string']);   ?????
  });
