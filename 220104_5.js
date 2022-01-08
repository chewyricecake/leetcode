// 1290. Convert Binary Number in a Linked List to Integer

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
     let res = 0;
     while(head){
         res = res*2+head.val;
         head = head.next;
     }
     return res; 
};