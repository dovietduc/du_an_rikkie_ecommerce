# Tài Liệu Màn Hình Register

## Khi nhấn vào button regiser chúng ta thực hiện các logic sau:

## Thực Hiện Validate Dữ Liệu Đầu Vào Trên Form

> Việc validate sẽ do người làm trang web quy định, cụ thể màn hình này yêu cầu:

1. Tên không được để trống
3. Email không được để trông
4. Email phải đúng định dạng chuẩn email
5. password không được để trống
6. password phải có ít nhất 8 kí tự cho bảo mật
7. confirm password phải trùng password

> Validate sẽ được thông báo như sau:

### Nếu dữ liệu không hợp lệ bạn cần hiển thị như sau:

1. chọn ô input nhập không hợp lệ cho mầu đỏ
2. Hiển thị nội dung lỗi có mầu đỏ dưới ô input

### Nếu dữ liệu hợp lệ bạn cần hiển thị như sau:

1. chọn ô input nhập không hợp lệ cho mầu xanh
2. Xóa nội dung lỗi có mầu đỏ dưới ô input