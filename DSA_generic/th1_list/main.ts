
import {ArrayList} from "./ArrayList";
interface Post{
    title: string;
}
let arrayList = new ArrayList<Post>();
arrayList.add({title: 'buoi sang'});
arrayList.add({title: 'buoi toi'});
arrayList.add({title: 'buoi trua'});
console.log(arrayList.container)