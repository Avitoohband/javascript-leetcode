class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var listOne = new ListNode(1, new ListNode(2, new ListNode(4, null)));
var listTwo = new ListNode(1, new ListNode(3, new ListNode(4, null)));


var mergeTwoLists = function (list1, list2) {
    
    if (list1 == null) return list2;
    if (list2 == null) return list1;

    mergeTwoListsHelper(list1, list2);
}

var mergeTwoListsHelper = function (list1, list2){
    var result;
    var current = result;

    while (list1 != null && list2 != null){
        current = new ListNode();
        if(list1.val <= list2.val ){
            current.val = list1.val;             
            list1 = list1.next;
        }else{
            current.val = list2.val;            
            list2 = list2.next;
        }
        console.log(current.val);           
        current = current.next;
    }

    while(list1 != null){
        current = new ListNode();
        current.val = list1.val;
        current = current.next;
        list1 = list1.next;
    }
    while(list2 != null){
        current = new ListNode();
        current.val = list2.val;
        current = current.next;
        list2 = list2.next;
    }

    return result;    
}

var answer = mergeTwoLists(listOne, listTwo);

console.log(answer);

