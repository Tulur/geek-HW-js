  'use strict';

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

  let number = 101
  test('Numbers', () => {
    expect(21).toEqual(21);
    expect(false).toEqual(false);
    expect(Math.pow(3, 3)).toEqual(27);
    expect(25 + "25").toEqual("2525");
    expect(Number.isFinite(number)).toEqual(true);
    expect(Number.isInteger(number*101)).toEqual(true);
  });

  test('test_arrays', () => {
    str_arr.push('GeekHub');
    expect(str_arr.length).toEqual(6);

    str_arr.pop();
    expect(str_arr.length).toEqual(5);

    expect(str_arr.join()).toEqual('my,first,test,string,array');

    expect(str_arr.join(' ')).toEqual('my first test string array');
  });

  test('test_compare_operators', () => {
    expect(1 == 1).toEqual(true);
    expect("1" == 1).toEqual(true)
    expect(3 == 5).toEqual(false);
    expect(0 == false).toEqual(true);
    expect("bar" == "bor").toEqual(false);
    expect(11 != 12).toEqual(true);
    expect(11 != "11").toEqual(false);
    expect(33 === 33).toEqual(true);
    expect(33 === "23").toEqual(false);
    expect(3 !== '3').toEqual(true);
    expect(4 > 4).toEqual(false);
    expect(4 < 4).toEqual(false);
    expect(21 >= 21).toEqual(true);
    expect(21 >= 22).toEqual(false);
    expect(21 <= 21).toEqual(true);
    expect(21 <= 20).toEqual(false);
  });

  /*test('test_equality_comparison_algorithm', () => {
    expect().toEqual();
  });*/
