import { MonAn } from "../models/MonAn.js";
import { DANH_SACH_MON_AN } from "../models/settings.js";

document.querySelector("#btnThemMon").onclick = () => {
  let monAn = new MonAn();
  let arrInput = document.querySelectorAll(
    "#foodForm input, #foodForm select,#foodForm textarea"
  );
  console.log(arrInput);
  for (let input of arrInput) {
    let { id, value } = input;
    monAn[id] = value;
  }
  console.log(monAn);
  let htmlLiContent = "";
  for (let key in monAn) {
    switch (key) {
      case "hinhAnh":
        {
          htmlLiContent += `
          <li id="${key}" class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
            <h6 class="my-0">${key}</h6>
           <img src="${monAn[key]} alt="..." width="w-25" height="50">
        </div>
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
            <span id='spMa' class="text-muted>${
              monAn[key] == "0" ? "Hết" : "Còn"
            }</span>
        </div>
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
          <span id='spLoaiMon' class="text-muted">${
            monAn[key] == "loai1" ? "Chay" : "Mặn"
          }</span>
      </div>
    </li>
    `;
        }
        break;
      default: {
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
  htmlLiContent += `<li id="giaKhuyenMai" class="list-group-item d-flex justify-content-between lh-condensed">
<div>
    <h6 class="my-0">"Giá KM"</h6>
</div>
<span id="spMa" class="text-muted">${monAn.tinhGiaKhuyenMai()}</span>
</li>
`;
  document.querySelector("#thongTinMonAn").innerHTML = htmlLiContent;

  mangMonAn.push(monAn);
  luuMonAnStorage();
};

function luuMonAnStorage() {
  let sMangMonAn = JSON.stringify(mangMonAn);
  localStorage.setItem(DANH_SACH_MON_AN, sMangMonAn);
}

function layMonAnStorage() {
  if (localStorage.getItem(DANH_SACH_MON_AN)) ơ;
  let sMangMonAn = localStorage.getItem(DANH_SACH_MON_AN);
  let mangMonAn = JSON.parse(sMangMonAn);
  console.log("mangMonAn", mangMonAn);
}

layMonAnStorage();
