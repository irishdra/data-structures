// Linked List
// [value, next] -> [value, next] -> [value, next]

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null; 
    }

    append(data) {
        const node = new Node(data);

        if (this.tail) {
            this.tail.next = node;
        }

        if (!this.head) {
            this.head = node;
        }

        this.tail = node;
    }

    prepend(data) {
        const node = new Node(data, this.head);

        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }
    }

    insertAfter(after, data) {
        const found = this.find(after);

        if (!found) {
            return null;
        }

        const node = new Node(data, found.next);
        found.next = node;
    }

    find(data) {
        if (!this.head) {
            return null;
        }

        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }

            current = current.next;
        }

        return null;
    }

    toArray() {
        const output = [];

        let current = this.head;
        while (current) {
            output.push(current.data);

            current = current.next;
        }

        return output;
    }

    remove(data) {
        if (!this.head) {
            return null;
        }

        while (this.head && this.head.data === data) {
            this.head = this.head.next;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
            }
            current = current.next;
        }

        if (this.tail.data === data) {
            this.tail = current;
        }
    }
}

const list = new LinkedList();

list.append(1);
list.append(3);
list.insertAfter(1, 2)
list.prepend(0);

console.log(list.find(5));
console.log(list.find(2));

console.log(list.toArray());
list.remove(2);
console.log(list.toArray());