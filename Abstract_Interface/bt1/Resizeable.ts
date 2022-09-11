export interface Resizeable {
    resize(percent: number):string;
}
// export class Circle implements Resizeable{
//     resize(percent: number): string {
//         let random = Math.floor(Math.random()*percent)
//         return "kích  thước sau thay đổi:" + random +"";
//     }
// }
// export class Rectangle implements Resizeable {
//     resize(percent: number): string {
//         let random = Math.floor(Math.random()*percent)
//         return "kích thước sau thay đổi của hình tròn là:" + random + "";
//     }
// }
// export class Square implements Resizeable{
//     resize(percent: number): string {
//         let random = Math.floor(Math.random()*percent)
//         return "kích thước sau thay đổi của hình vuông:" + random + "";
//     }
// }