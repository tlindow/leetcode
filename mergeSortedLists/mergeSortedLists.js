/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let mergedLists = new ListNode(null);
  let head = mergedLists;
  
  while(l1 && l2) {
      //look at val of of each list
      if (l1 && l1.val <= l2.val) {
         //add l1 val to mergedLists
          mergedLists.next = l1;
          mergedLists = mergedLists.next;
          l1 = l1.next
          
      } else if (l2 && l2.val < l1.val) {
          mergedLists.next = l2;
          mergedLists = mergedLists.next;
          l2 = l2.next
      }
  }
  
  //if one list still has more left
  if (l1 && !l2) {
      mergedLists.next = l1;
  } else {
      mergedLists.next = l2;
  }
  
  return head.next;
};
