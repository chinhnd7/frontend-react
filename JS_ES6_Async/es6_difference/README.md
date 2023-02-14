# 1: Variables:
var:
có thể khai báo nhiều lần 1 biến, dễ gây ra lỗi.
Nó không khó hiểu, nhưng mà khi dùng thì nguy hiểm

let: lúc này khai báo biến giống Java :)) logic tự nhiên

# 2: Function
Arrow function, với các cách rút gọn hàm khi chỉ có 1 tham số, 1 câu return

# 3: Default Parameter
Có thể khai báo luôn giá trị mặc định của parameter. Nếu khi gọi hàm không truyền đủ tham số, tham số đó sẽ có giá trị mặc định, được khai báo khi định nghĩa function.

# 4: Destructure
Cú pháp unpack các giá trị từ mảng, hoặc properties từ object. Qua đó có thể gán/sử dụng dữ liệu 1 cách tự nhiên, dễ dàng hơn.

# 5: Spread Operator
Cú pháp Spread cho phép chúng ta sao chép 1 phần hoặc toàn bộ array/object tới 1 array/object khác
TH thường dùng: Clone 1 mảng sau đó thêm 1 phần tử hoặc update lại dữ liệu.
Tùy thuộc vào vị trí của spread operator để thêm phần tử/nối mảng vào trước hay sau

# 6: Rest Parameters
Cho phép truyền 1 số lượng không xác định parameters vào function, và coi chúng là 1 mảng.
```js
const sum = (...args) => {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77); // Truyền tham số thông thường
console.log(x)
```

# 7: Computed Property
Cho phép tùy chỉnh name của Property (không phải phần giá trị)
Dùng nhiều trong React

# 8: for...of
Ngoài for...in của ES5, bổ sung thêm syntax for...of, phần chức năng được comment rõ trong code


