/*Lập trình hướng đối tượng OOP (Object Oriented Programming)
    +Tính trừu tượng (Abstraction): Loại bỏ những thứ phức tạp không cần thiết của đối tượng, chỉ tập trung vào những gì cốt lõi và quan trọng, tổ chức thành các thuộc tính và phương thức xử lý trong lập trình
    +Tính đóng gói (Encapsulation): Tính chất che giấu thông tin và những xử lý bên trong của đối tượng. Các đối tượng khác không thể truy xuất đến được. Ví dụ: Thuộc tính của Object nào thì object đó mới có thể truy xuất thay đổi, phương thứ của object nào thì phải thông qua object đó mới có thể gọi được.
    +Tính kế thừa (Inheritance): Các class con có thể kế thừa các thuộc tính và phương thức từ class cha. Có thể định nghĩa lại các phương thức đó (override = ghi đè phương thức)
    +Tính đa hình (Polymorphism): Javascript không hỗ trợ tính đa hình của hướng đối tượng

*/
//ES5
function SinhVien(maSV, tenSV) {
  //SinhVien gọi là tên lớp (prototype)
  this.maSinhVien = maSV;
  this.tenSinhVien = tenSV;
  this.hienThiThongTin = function () {
    //Phương thức
    console.log("maNhanVien", this.maNhanVien);
    console.log("tenNhanVien", this.tenNhanVien);
  };
}

let sv = new SinhVien(1, "Nguyễn Văn A");
console.log("sv", sv);
// sv.maSinhVien = "1";
// sv.tenSinhVien = "Nguyễn Văn A";

//ES6
class SinhVienES6 {
  maSinhVien = "";
  tenSinhVien = "";
  constructor(maSV, tenSV) {
    this.maSinhVien = maSV;
    this.tenSinhVien = tenSV;
  }
  //Thuộc tính là function
  hienThiTT = function () {
    console.log("maNhanVien", this.maNhanVien);
    console.log("tenNhanVien", this.tenNhanVien);
  };
  hienThiTTSV = () => {
    console.log("maNhanVien", this.maNhanVien);
    console.log("tenNhanVien", this.tenNhanVien);
  };
  //Phương thức
  hienThiThongTin() {
    console.log("maNhanVien", this.maNhanVien);
    console.log("tenNhanVien", this.tenNhanVien);
  }
}

let sv2 = new SinhVienES6(1, "Nguyễn Văn Tèo");
console.log("svES6", sv2);
sv2.hienThiThongTin();
sv2.hienThiTT();

/*
    Kỹ thuật kế thừa trong hướng đối tượng
*/

class NguoiDung {
  taiKhoan = "";
  matKhau = "";
  email = "";
  soDienThoai = "";
  constructor(taiKhoan, email) {
    this.taiKhoan = taiKhoan;
    this.email = email;
  }
  dangNhap() {
    console.log("Đăng nhập");
  }
  dangXuat() {
    console.log("Đăng xuất");
  }
  hienThiThongTin() {
    console.log("taiKhoan", this.taiKhoan);
    console.log("email", this.email);
  }
}

class HocVien extends NguoiDung {
  danhSachLopHoc = ["FE", "BE"];
  constructor(taiKhoan, email) {
    super(taiKhoan, email);
  }
  hienThiThongTin() {
    super.hienThiThongTin();
    console.log("Danh sách lớp học", this.danhSachLopHoc);
  }
}

let hocVien = new HocVien("admin", "admin@gmail.com");
console.log("hocVien", hocVien);
