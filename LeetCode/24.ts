/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;
  
  while(head && head.next) {
      let p1 = head;
      let p2 = head.next;

      prev.next = p2;
      p1.next = p2.next;
      p2.next = p1;

      prev = p1;
      head = prev.next;
  }

  return dummy.next;
};