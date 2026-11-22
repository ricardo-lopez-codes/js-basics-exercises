function squareEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0).map((num) => num ** 2);
}

function aggregateScores(scores) {
  if (!scores || scores.length === 0) {
    return { sum: 0, average: 0, max: null };
  }
  const result = scores.reduce(
    (acc, score, index) => {
      acc.sum += score;
      if (index === 0 || score > acc.max) {
        acc.max = score;
      }
      return acc;
    },
    { sum: 0, max: scores[0] }
  );
  return {
    sum: result.sum,
    average: Number((result.sum / scores.length).toFixed(2)),
    max: result.max
  };
}

function deduplicateAndSort(strings) {
  const seen = new Set();
  const unique = [];
  for (const item of strings) {
    const normalized = item.toLowerCase();
    if (!seen.has(normalized)) {
      seen.add(normalized);
      unique.push(item);
    }
  }
  return unique.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

function createCounter(initialValue = 0) {
  let count = initialValue;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => {
      count = initialValue;
      return count;
    },
    getValue: () => count
  };
}

function isPalindrome(str) {
  const sanitized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = sanitized.split('').reverse().join('');
  return sanitized.length > 0 && sanitized === reversed;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    squareEvenNumbers,
    aggregateScores,
    deduplicateAndSort,
    createCounter,
    isPalindrome
  };
}

if (typeof window !== 'undefined') {
  window.squareEvenNumbers = squareEvenNumbers;
  window.aggregateScores = aggregateScores;
  window.deduplicateAndSort = deduplicateAndSort;
  window.createCounter = createCounter;
  window.isPalindrome = isPalindrome;
}

console.log('--- Exercise 1: Array Filtering & Mapping ---');
console.log(squareEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

console.log('--- Exercise 2: Array Aggregation with reduce ---');
console.log(aggregateScores([85, 92, 78, 99, 88, 92]));

console.log('--- Exercise 3: Array Deduplication & Sorting ---');
console.log(deduplicateAndSort(['banana', 'Apple', 'BANANA', 'cherry', 'apple', 'date']));

console.log('--- Exercise 4: Higher-Order Function / Closure ---');
const counter = createCounter(10);
console.log('Initial count:', counter.getValue());
console.log('Increment:', counter.increment());
console.log('Increment:', counter.increment());
console.log('Decrement:', counter.decrement());
console.log('Reset:', counter.reset());

console.log('--- Exercise 5: Palindrome Checker ---');
console.log('"Racecar":', isPalindrome('Racecar'));
console.log('"A man, a plan, a canal: Panama":', isPalindrome('A man, a plan, a canal: Panama'));
console.log('"Hello World":', isPalindrome('Hello World'));
