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
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let splicedList = new ListNode();
  let splicedHead = splicedList;

  if (list1 === null)
      return list2;
  if (list2 === null)
      return list1;

  while (list1 || list2) {
      if (list1 === null) {
          splicedList.next = list2;
          break;
      }
      if (list2 === null) {
          splicedList.next = list1;
          break;
      }

      if (list1.val < list2.val) {
          splicedList.next = list1;
          splicedList = splicedList.next;
          list1 = list1.next;
      }
      else {
          splicedList.next = list2;
          splicedList = splicedList.next;
          list2 = list2.next;
      }
  }

  return splicedHead.next;
};