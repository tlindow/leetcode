function fibonacci(n, cache = {}) {
  if (cache[n]) {
    return cache[n];
  } 
  if (n <= 2) {
    return 1;
  } else {
    var memo = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
    cache[n] = memo;
    return memo;
  }
}
