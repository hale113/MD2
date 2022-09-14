import {Student} from "./student";

export class Node<Student>{
   data: Student;
   next: Node<Student> | null;

    constructor(data: Student) {
        this.data = data;
    }
}