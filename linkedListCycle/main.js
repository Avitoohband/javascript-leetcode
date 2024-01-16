function ListNode(val) {
  this.val = val;
  this.next = null;
}

const ln1 = new ListNode(3)
const ln2 = new ListNode(2)
const ln3 = new ListNode(0)
const ln4 = new ListNode(-4)
ln1.next=ln2;
ln2.next=ln3;
ln3.next=ln4;
ln4.next=ln2;


const hasCycle = function (head) {
  if (!head || !head.next){
    return false
  }
  let slow = head;
  let fast = head.next
  while(slow && fast && slow !== null && fast.next !== null){
    if(slow === fast.next){
      return true;
    }
    slow = slow.next;
    fast = fast.next.next
  }
  return false
};

console.log(hasCycle(ln1));
