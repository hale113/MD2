export interface Manager<T> {
    add(t:T):void;
    findById(id: number):T;
    findByIndex(index: number): T;
    finAll();
}