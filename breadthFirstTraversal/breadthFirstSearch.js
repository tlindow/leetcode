function bfs (root, val) {
  let queue = [root];
  let node;
  while (queue.length) {
    node = queue.shift();
    if (node.val === val) {
      return node;
    }
    for (var i = 0; i < node.children.length; i++) {
      queue.push(node);
    }
  }
}