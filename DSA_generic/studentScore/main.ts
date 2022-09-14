import {ListStudent} from "./listStudent";
import {LinkedList} from "../th2_Linkedlist/LinkedList";

let linkedList = new ListStudent();
linkedList.insertFist({name: "A", score: 7});
linkedList.insertFist({name: "B", score: 6});
linkedList.insertLast({name: "C", score: 9});
linkedList.insertLast({name: "D", score: 5});

console.log(linkedList.showList());
console.log(linkedList.totalStudentFail())