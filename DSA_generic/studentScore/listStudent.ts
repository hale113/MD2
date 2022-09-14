import {Node} from "./node";
import {Student} from "./student";

export class ListStudent<Student>{
    head: Node<Student> | null;
    tail: Node<Student> | null;
    size: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertFist(data: Student) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        if(!this.tail) {
            this.tail = node;
        }
        this.size++;
    }

    insertLast(data: Student) {
        let node = new Node(data);
        if(!this.head) {
            this.insertFist(data)
        }else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    showList(): Student[] {
        let listData = [];
        let currentNode = this.head;
        while(currentNode != null) {
            listData.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return listData;
    }
    totalStudentFail() {
        let listData: any[] = this.showList();
        let total = 0;
        for (let i = 0; i < listData.length; i++) {
            if(listData[i].score < 5) {
                total++;
            }
        }
        return `There are ${total} students fail.`
    }

}