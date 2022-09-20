export interface Management<T>{
    add(t: T);
    edit(id: number, t: T);
    findAll()
    finById(id: number);
}