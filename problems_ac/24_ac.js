/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var temp = {},
        third = {},
        result = {},
        connect = {}; //连接点
    //该结点不存在或者只有一个结点
    if (!head || !head.next) {
        return head;
    }
    //交换第一二个结点
    temp = head.next //存下node 2
    head.next = temp.next;
    temp.next = head;
    third = head.next;
    connect = temp.next;
    //只有两个结点
    if (!third) {
        return temp;
    } else {
        swap(third, temp, connect);
        return temp;
    }
    
    function swap(head, result, connect) {
        var temp = {},
            third = {};
        //结点为单数不再交换
        if (!head.next) {
            return result;
        }
        temp = head.next
        head.next = temp.next;
        temp.next = head;
        third = head.next;
        connect.next = temp;
        connect = temp.next;
        if (!third) {
            return ;
        } else {
            swap(third, result,connect);
        }
    }
};