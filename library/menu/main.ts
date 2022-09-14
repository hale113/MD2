import {Book} from "../model/book";
import {DocumentManager} from "../servike/documentManager";

let input = require('readline-sync');
let listDoc: DocumentManager = new DocumentManager();

function mainMenu() {
    let menu = `
    --------------
    1.add
    2.delete
    3.edit
    4.show
    0.exit
    -----------`
    console.log(menu)
}

function addMenu() {
    let choice: number;
    do {
        let menu = `
    -----
    1.add book
    2.add magazine
    3.add newspaper
    0.exit
    ------`
        console.log(menu);
        choice = +input.question("enter your selection: ")
        switch (choice) {
            case 1:
                addBook();
                break;
            case 0:
                main();
        }
    }while (choice != 0);
}

function addBook() {
    let id = +input.question("add id: ");
    let producer = input.question("producer: ");
    let quantity = +input.question("quantity: ");
    let page = +input.question("page: ");
    let author = input.question("author: ");
    let book: Book = new Book(id, quantity, producer, author, page);
    show();
}

function show() {
    console.log(listDoc.showAll());
}

function main() {
    let choice: number;
    do {
        mainMenu();
        choice = +input.question("your choice: ");
        switch (choice) {
            case 1:
                addMenu();
                break;
            case 4:
                show();
                break;
            case 0:
                break;
        }
    } while (choice != 0) ;
}
main();