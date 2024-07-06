/*
12. Integer to Roman

Seven different symbols represent Roman numerals with the following values:
Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000

Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

    If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
    If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
    Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.

Given an integer, convert it to a Roman numeral.

 

Example 1:

Input: num = 3749

Output: "MMMDCCXLIX"

Explanation:

3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC as 500 (D) + 100 (C) + 100 (C)
  40 = XL as 10 (X) less of 50 (L)
   9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places

Example 2:

Input: num = 58

Output: "LVIII"

Explanation:

50 = L
 8 = VIII

Example 3:

Input: num = 1994

Output: "MCMXCIV"

Explanation:

1000 = M
 900 = CM
  90 = XC
   4 = IV

 
Constraints:

    1 <= num <= 3999

*/

function intToRoman(num) {
  // Создание карты для хранения значений римских цифр и их соответствующих символов
  // Create a map to store the values of the Roman numerals and their corresponding symbols
  const romanMap = new Map([
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I']
  ]);

  let result = '';

  // Итерация по ключам карты от наибольшего к наименьшему
  // Iterate over the keys of the map from highest to lowest
  for (let [value, symbol] of romanMap) {
      // Вычисление, сколько раз ключ можно вычесть из входного числа
      // Calculate how many times the key can be subtracted from the input number
      let count = Math.floor(num / value);

      // Добавление соответствующего римского числа к результату столько раз
      // Append the corresponding Roman numeral to the result that many times
      result += symbol.repeat(count);

      // Вычитание общего значения
      // Subtract the total value
      num -= value * count;
  }

  // Возвращаем результат
  // Return the result
  return result;
}

/*

This solution ensures that the algorithm runs in O(1) time complexity and uses O(1) space complexity. 
The map lookup operation is constant time, so the overall time complexity is constant. 
The space complexity is also constant because the size of the map does not depend on the input number.

Это решение гарантирует, что алгоритм работает с временной сложностью O(1) и использует пространственную сложность O(1).
Операция поиска по карте занимает постоянное время, поэтому общая временная сложность постоянна.
Пространственная сложность также постоянна, поскольку размер карты не зависит от входного числа.
*/