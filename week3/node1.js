// declaration funtion ()
// -->funtion tenham(){
//  <Thân hàm>
// return;
// }
// Camel Case: tongHaiso
// Pascal case : TongHaiSo
// Snake tong_hai_so
// Expression funtion
// anonymous funtion
// 1. Tên Hàm
// Tương tự như đặt tên biến
// Gợi nhớ liên quan tới nhiệm vụ của hàm
// Bắt đầu bởi động từ
// Quy ước đặt tên hàm và biến theo định dạng
// Tên hàm theo Camel Case trong JS.
// 2. [parameters]: Sô lượng tham sô >= 0
// + optional paramater
// 3. Thân hàm : logic, nhiệm vụ mà hàm sẽ xử lý, hộp đen
// 4. [return] : lấy kết quả về để làm việc khác hay không 
function  createArray(size, min, max) {
    let number = [];
    for (i = 0; i < size; i++) {
        number[i] = Math.floor(Math.random() * (max - min + 1) + min)
    }
    /* console.log (number); */
    return number
}
 let arr = createArray(15, 10, 20);
 console.log (number);
 let total = number.reduce(function(prev, value){
     return  prev + value
 });
// Kiểu tham trị, Kiểu tham chiếu 
// array, object,  funtion
// declaration funtion : khai báo xong có thể dùng bất cứ chỗ nào
// funtion sum(n1,n2){
 //   return n1+n2;//
//}
// console.log()
// Expression funtion : chỉ đc sửa dụng sau khi hàm khai báo
//const subtract = function(n1,n2){
//    return n1 - n2;
//}
// console.log()
// anonymous funtion: chỉ dùng được một lần
let array = [1,5,6,12]
let 
