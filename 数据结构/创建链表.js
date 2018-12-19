//节点应用类型
function Node(data) {
    this.data = data;
    this.next = null;
}

//链表引用类型
function List() {
    //哨兵节点
    this.head = new Node(1);
    this.size = 1;
}

List.prototype = {
    //在链表尾部添加节点
    add: function(data) {
        var current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = new Node(data);

        ++this.size;
    },

    //遍历链表，不对链表元素操作都可以调用此方法
    forEach: function(callback) {
        for (var current = this.head; current; current = current.next) {
            callback(current.data);
        }
    },

    //打印链表中所有元素
    print: function() {
        var printArr = [];
        debugger;
        this.forEach(function(item) {
            printArr.push(item);
        })
        console.log(printArr);
    },

    //查找链表元素的位置
    indexOf: function(data) {
        var pos = 0;
        var current = this.head.next;
        while (current != null) {
            if (current.data === data) {
                break;
            }
            current = current.next;
            pos++;
        }
        return pos;
    },

    /**
     * 在位置pos处插入节点值为data
     * 若成功则返回插入的值，若失败则返回null
     */
    insert: function(pos, data) {
        if (pos < 0 || pos > this.size - 1) {
            return null;
        }

        //插入位置的上一个节点
        var last = this.head;
        for (var i = 0; i < pos; i++) {
            last = last.next;
        }
        //保存下一个节点的引用
        var ready = last.next;
        last.next = new Node(data);
        last.next.next = ready;

        this.size++;
        return data;
    },

    /**
     * 删除指定位置的元素
     * 若成功则返回删除的值，若失败则返回null
     */
    removeAt: function(index) {
        if (index < 0 || index > this.size - 1) {
            return null;
        }

        var current = this.head.next;
        var last = this.head;
        for (var i = 0; i < index; i++) {
            last = current;
            current = current.next;
        }
        last.next = current.next;

        this.size--;
        return current.data;
    },

    //删除相应元素
    remove: function(data) {
        var current = this.head.next;
        var last = this.head;
        while (current != null) {
            if (current.data === data) {
                last.next = current.next;
                //已删除节点
                this.size--;
                break;
            }
            last = current;
            current = current.next;
        }
    },


    swapPairs: function(head) {
        // debugger;
        var temp = {},
            third = {},
            result = {},
            connect={}; //连接点
        //该结点不存在或者只有一个结点
        head = this.head;
        if (!head || !head.next) {
            return head;
        }
        //交换第一二个结点
        temp = head.next //存下node 2
        head.next = temp.next;
        temp.next = head;
        third = head.next;
        connect=temp.next;
        //只有两个结点
        if (!third) {
            return head.next;
        } else {
            swap(third,temp ,connect);
            console.log(temp);
        }
    }


};

function swap(head, result,connect) {
    var temp = {},
        third = {};
    //结点为单数不再交换
    debugger
    if (!head.next) {
        return result;
    }
    //交换第一二个结点
    temp = head.next //存下node 2
    head.next = temp.next;
    temp.next = head;
    third = head.next;
    connect.next=temp;
    connect=temp.next;
    if (!third) {
        return result;
    } else {
        swap(third, result,connect);
    }
}




var list = new List();
list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);
// list.add(6);
console.log(list.size);
list.print();
list.swapPairs(1);
list.print();