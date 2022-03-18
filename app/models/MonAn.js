export class MonAn {
  maMon = "";
  tenMon = "";
  loaiMon = "";
  giaMon = 0;
  khuyenMai = 0;
  maTinhTrang = false;
  hinhAnh = "";
  moTa = "";
  constructor() {}
  tinhGiaKhuyenMai() {
    let giaKhuyenMai = this.giaMon - (this.giaMon * this.khuyenMai) / 100;
    return giaKhuyenMai;
  }
}
