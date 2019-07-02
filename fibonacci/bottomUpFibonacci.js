function fibonacci(n, cache = {'1':1,'2':1}) {
  for (var i = 3; i <= n; i++) {
    if (!cache[i]) {
      cache[i] = cache[i - 1] + cache[i - 2];
    }
  }
  return cache[n];
}
