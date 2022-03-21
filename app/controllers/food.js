import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js";
import { DANH_SACH_MON_AN } from "../util/settings.js";

// let mangMonAn = [];
let menu = new Menu();
menu.layLocalStorage();

document.querySelector("#btnThemMon").onclick = () => {
  let monAn = new MonAn();
  //Dom giao diện gán vào monAn
  let arrInput = document.querySelectorAll(
    "#foodForm input,#foodForm select,#foodForm textarea"
  );
  console.log("arrInput", arrInput);
  //Duyệt tuần tự qua các thẻ lấy ra id và value của thẻ
  for (let input of arrInput) {
    let { id, value } = input;
    monAn[id] = value;
  }

  console.log("monAn", monAn);
  //monAn = {maMon: 1, tenMon:'Cơm chiên' , hinhAnh:'https://picsum.photos/200/50',...}
  let htmlLiContent = "";
  for (let key in monAn) {
    switch (key) {
      case "hinhAnh":
        {
          htmlLiContent += `
                    <li id="${key}" class="list-group-item d-flex justify-content-between lh-condensed">
                        <div class="w-75">
                            <h6 class="my-0">${key}</h6>
                        </div>
                        <img src="${monAn[key]}" alt="..." width="w-25" height="50"  />
                    </li>
                `;
        }
        break;
      case "maTinhTrang":
        {
          htmlLiContent += `
                    <li id="${key}" class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">${key}</h6>
                        </div>
                        <span id="spMa" class="text-muted">${
                          monAn[key] == "0" ? "Hết" : "Còn"
                        }</span>
                    </li>
                `;
        }
        break;
      case "loaiMon":
        {
          htmlLiContent += `
                    <li id="${key}" class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">${key}</h6>
                        </div>
                        <span id="spMa" class="text-muted">${
                          monAn[key] === "loai1" ? "Chay" : "Mặn"
                        }</span>
                    </li>
                `;
        }
        break;
      case "tinhGiaKhuyenMai":
        {
          htmlLiContent += `<li id="giaKhuyenMai" class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
            <h6 class="my-0">Giá khuyến mãi</h6>
        </div>
        <span id="spMa" class="text-muted">${monAn.tinhGiaKhuyenMai()}</span>
    </li> `;
        }
        break;
      default: {
        //Mỗi lần duyệt qua 1 thuộc tính tạo ra 1 thẻ li
        htmlLiContent += `
                    <li id="${key}" class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">${key}</h6>
                        </div>
                        <span id="spMa" class="text-muted">${monAn[key]}</span>
                    </li>
                `;
      }
    }
  }

  //Dom đến thẻ ul trên giao diện để gán thông tin lên html của ul đó
  document.querySelector("#thongTinMonAn").innerHTML = htmlLiContent;

  //Lưu dữ liệu món ăn vào localstorage
  menu.themMonAn(monAn);
  menu.luuLocalStorage();
  // luuMonAnStorage();
};
