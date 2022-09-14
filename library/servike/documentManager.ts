import {IDocumentManager} from "./IDocumentManager";

export class DocumentManager implements IDocumentManager<Document>{
    documents: Document[] = [];
    add(t: Document) {
        this.documents.push(t);
    }

    delete(id: number) {
        let index = this.finById(id);
        this.documents.splice(index,1);
    }

    edit(id: number) {
    }

    finById(id: number) {
        for (let i = 0; i < this.documents.length; i++) {
            if (this.documents[i].id ==id){
                return i
            }
        }
        return -1;

    }

    showAll() {
        return this.documents;
    }

}