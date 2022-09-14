export interface IDocumentManager<T>{
    add(t: T);
    edit(id: number);
    delete(id: number);
    showAll();
    finById(id: number);
}