# This is a Next.js project (old version: 10.)

## Getting Started

### *getStaticProps() trong next*

Dữ liệu tĩnh được lấy thông qua phương thức này.
- Nghĩa là khi chúng ta npm run build, next đã lấy trước data này mà không cần phụ thuộc vào request của người dùng. 
- Sau khi npm run start thì dữ liệu có sẵn dạng HTML rồi, không cần phải request mỗi lần người dùng thao tác.
=> Vậy thì cân nhắc chỉ những dữ liệu không đổi, bất kỳ người dùng nào cũng nhìn thấy nó giống như vậy thì mới nên dùng getStaticProps.