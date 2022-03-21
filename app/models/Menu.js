import { DANH_SACH_MON_AN } from "../util/settings.js";
import { MonAn } from "./MonAn.js";

//Luu ý: các class trong model sẽ không chứa code DOM bất kì giao diện nào, nếu muốn thực hiện DOM trong model  phải chuyển tất cả selector, id, ... thành tham số.
export class Menu {
  danhSachMonAn = []; //mảng chứa các object monAn
  constructor() {}
  themMonAn = (monAn) => {
    this.danhSachMonAn.push(monAn);
    return this.danhSachMonAn;
  };
  xoaMonAn = (maMon) => {
    this.danhSachMonAn = this.danhSachMonAn.filter(
      (mon) => mon.maMon !== maMon
    );
    return this.danhSachMonAn;
  };
  luuLocalStorage = () => {
    //Lấy this.danhSachMonAn => Biến thành chuỗi và lưu vào localStorage
    let sMangMonAn = JSON.stringify(this.danhSachMonAn);
    localStorage.setItem(DANH_SACH_MON_AN, sMangMonAn);
  };
  layLocalStorage = () => {
    if (localStorage.getItem(DANH_SACH_MON_AN)) {
      let sMangMonAn = localStorage.getItem(DANH_SACH_MON_AN);
      this.danhSachMonAn = JSON.parse(sMangMonAn);
    }
  };
  renderMonAn = (selector) => {
    let htmlContent = "";

    //Dữ liệu lấy ra từ storage sẽ mất tất cả function
    for (let monAnStore of this.danhSachMonAn) {
      let monAn = new MonAn();
      monAn = { ...monAn, ...monAnStore };
      htmlContent += `
          <tr>
              <td>${monAn.maMon}</td>
              <td>${monAn.tenMon}</td>
              <td>${monAn.loaiMon}</td>
              <td>${monAn.khuyenMai}</td>
              <td>${monAn.giaMon}</td>
              <td>${monAn.tinhGiaKhuyenMai()}</td>
              <td>${monAn.maTinhTrang}</td>
              <td>
                  <button class="btn btn-danger" onclick="xoaMonAn('${
                    monAn.maMon
                  }')"> Xóa</button>
                  <button data-toggle="modal" data-target="#exampleModal" class="btn btn-primary ml-2"onclick="suaMonAn('${
                    monAn.maMon
                  }')">Sửa</button>
              </td>
          </tr>
        `;
    }
    document.querySelector(selector).innerHTML = htmlContent;
  };

  layThongTinMonAn = (maMon) => {
    let monAn = this.danhSachMonAn.find((mon) => mon.maMon == maMon);
    return monAn;
  };

  capNhatMonAn = (monAnChinhSua) => {
    //Tìm ra món ăn trong mảng
    let monAnCapNhat = this.layThongTinMonAn(monAnChinhSua.maMon);
    for (let key in monAnChinhSua) {
      monAnCapNhat[key] = monAnChinhSua[key];
    }
  };
  filterMonAn = (loaiMon, selector) => {
    //backup lại dữ liệu trước khi filter
    let dsMonAn = [...this.danhSachMonAn];
    if (loaiMon !== "all") {
      this.danhSachMonAn = this.danhSachMonAn.filter(
        (mon) => mon.loaiMon == loaiMon
      );
    }
    this.renderMonAn(selector);
    //Sau khi giao diện hiển thị restore lại dữ liệu cũ
    this.danhSachMonAn = dsMonAn;
  };
}
