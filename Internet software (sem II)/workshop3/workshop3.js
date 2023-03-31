//1
function calculateTriangleArea(base, height){
    const area = 0.5 * base * height;
    return area;
  }
  const area = calculateTriangleArea(5, 10);
  console.log(area); // Output: 25

  //2
  function concatenateWithSpace(a) {
      return "something " + a;
    }
    const result = concatenateWithSpace("Like heaven");
    console.log(result); // Output: "something new"

  
  //3
    function calculatePoints(twoPointers, threePointers) {
      const totalPoints = (2 * twoPointers) + (3 * threePointers);
      return totalPoints;
    }
    const totalPoints = calculatePoints(12, 5);
    console.log(totalPoints); // Output: 34
    function isSumLessThan100(a, b) {
      const sum = a + b;
      return sum < 100;
    }
  const result1 = isSumLessThan100(50, 30);
  console.log(result1); // Output: true
  
  const result2 = isSumLessThan100(50, 60);
  console.log(result2); // Output: false

  //3
  function sumUpToN(n) {
      let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum += i;
      }
      return sum;
    }
    const results = sumUpToN(4);
  console.log(result); // Output: 10

  //4
  function oddishOrEvenish(num) {
      const digits = num.toString().split('').map(Number);
      const sum = digits.reduce((acc, val) => acc + val, 0);
      return sum % 2 === 0 ? 'Evenish' : 'Oddish';
    }
    console.log(oddishOrEvenish(43)); // Output: 'Oddish'
    console.log(oddishOrEvenish(876)); // Output: 'Evenish'

    //5
  function hasPrimeInRange(n1, n2) {
      for (let i = n1; i <= n2; i++) {
        if (isPrime(i)) {
          return true;
        }
      }
      return false;
    }

    //6
    function isPrime(n) {
      if (n <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }
    console.log(hasPrimeInRange(10, 20)); // Output: true
    console.log(hasPrimeInRange(4, 8)); // Output: false

  //6
    function leftShift(num, shift) {
      return num * Math.pow(2, shift);
    }
    console.log(leftShift(5, 2)); // Output: 20
  console.log(leftShift(10, 3)); // Output: 80
  function decimalToBinary(decimal) {
      const binary = parseInt(decimal).toString(2);
      return binary;
    }
    console.log(decimalToBinary("10")); // Output: 1010
    console.log(decimalToBinary("42")); // Output: 101010
    console.log(decimalToBinary("255")); // Output: 11111111

    //7
  function decimalToBinary(decimal) {
      const binary = [];
      let num = parseInt(decimal);
      let value = 1;
    
      for (let i = 0; i < 8; i++) {
        binary.push(num % 2);
        num = Math.floor(num / 2);
        value *= 2;
      }
    
      return binary.reverse().join('');
    }
    console.log(decimalToBinary("10")); // Output: 00001010
    console.log(decimalToBinary("42")); // Output: 00101010
    console.log(decimalToBinary("255")); // Output: 11111111
      
  
      
  
      
  
  
  
  
  
  