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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let arr = [];

  for (let list of lists) {
      while(list) {
          arr.push(list.val);
          list = list.next;
      }
          
  }

  let sortedArr = arr.sort((a,b) => a-b);
  let head = new ListNode();
  let headHandle = head;

  for (const item of sortedArr) {
      headHandle.next = new ListNode(item);
      headHandle = headHandle.next;
  }

  return head.next;
};