const RESULTS = {
  bien: {
    title: "Tín đồ biển đảo - Vịnh Hạ Long & Phú Quốc",
    image: "../image/ha_long1.jpg",
    desc: "Bạn là người yêu sự bao la của biển trời, thích cảm giác thư giãn nhưng vẫn muốn có những trải nghiệm mới mẻ như chèo kayak, lặn ngắm san hô hay ngắm hoàng hôn trên mặt nước. " +
          "Vịnh Hạ Long (Quảng Ninh) với hàng nghìn đảo đá vôi được UNESCO công nhận là Di sản thiên nhiên thế giới, còn Phú Quốc (Kiên Giang) nổi tiếng với bãi Sao, bãi Dài và hải sản tươi ngon. " +
          "Hai nơi này sẽ đáp ứng đủ nhu cầu nghỉ dưỡng, khám phá và ăn uống của bạn.",
    places: ["Vịnh Hạ Long, Quảng Ninh", "Đảo Cát Bà, Hải Phòng", "Phú Quốc, Kiên Giang", "Nha Trang, Khánh Hòa"]
  },
  nui: {
    title: "Nhà thám hiểm vùng cao - Sa Pa & Hà Giang",
    image: "../image/sa_pa1.jpg",
    desc: "Bạn thích chinh phục thử thách, yêu thiên nhiên hoang sơ và không ngại những cung đường dài. Ruộng bậc thang Sa Pa (Lào Cai) mùa lúa chín vàng, đỉnh Fansipan được mệnh danh là nóc nhà Đông Dương, " +
          "hay cung đường đèo Mã Pí Lèng ở Hà Giang đều là những nơi dành cho người thích cảm giác tự do, gần gũi với núi rừng và văn hóa các dân tộc thiểu số.",
    places: ["Sa Pa, Lào Cai", "Cao nguyên đá Đồng Văn, Hà Giang", "Mù Cang Chải, Yên Bái", "Mộc Châu, Sơn La"]
  },
  disan: {
    title: "Người yêu văn hóa & di sản - Hội An & Huế",
    image: "../image/hoi_an1.jpg",
    desc: "Bạn thích đi chậm để cảm nhận lịch sử, kiến trúc và đời sống địa phương. Phố cổ Hội An (Quảng Nam) với những ngôi nhà cổ và đèn lồng rực rỡ về đêm, cùng Cố đô Huế với Đại Nội, lăng tẩm và ca Huế trên sông Hương, " +
          "là hành trình dành cho người muốn tìm hiểu chiều sâu văn hóa Việt Nam, vừa thưởng thức ẩm thực đặc sắc vừa chụp được vô số bức ảnh đẹp.",
    places: ["Phố cổ Hội An, Quảng Nam", "Đại Nội Huế, Thừa Thiên Huế", "Thánh địa Mỹ Sơn, Quảng Nam", "Cố đô Hoa Lư, Ninh Bình"]
  },
  dalat: {
    title: "Tâm hồn lãng mạn, thích thư thả - Đà Lạt",
    image: "../image/da_lat1.jpg",
    desc: "Bạn thích không khí mát lạnh, những quán cà phê yên tĩnh, đồi thông và các khu vườn hoa. Đà Lạt (Lâm Đồng) ở độ cao khoảng 1.500 m so với mực nước biển nên khí hậu quanh năm dịu mát, " +
          "rất hợp để nghỉ ngơi, đi dạo quanh hồ Xuân Hương, săn mây trên đồi hay thưởng thức món ăn nóng hổi trong những buổi tối se lạnh.",
    places: ["Hồ Xuân Hương, Đà Lạt", "Thung lũng Tình Yêu, Đà Lạt", "Đồi chè Cầu Đất, Đà Lạt", "Thác Datanla, Đà Lạt"]
  }
};

const LABELS = {
  bien: "Biển đảo",
  nui: "Núi rừng",
  disan: "Văn hóa - Di sản",
  dalat: "Thư giãn - Lãng mạn"
};

const QUESTIONS = [
  {
    type: "single",
    text: "Kỳ nghỉ lý tưởng của bạn trông như thế nào?",
    options: [
      { text: "Nằm dài trên bãi biển, nghe sóng vỗ", score: { bien: 2 } },
      { text: "Leo núi, ngắm toàn cảnh từ trên cao", score: { nui: 2 } },
      { text: "Dạo phố cổ, tham quan di tích lịch sử", score: { disan: 2 } },
      { text: "Ngồi quán cà phê nhỏ, đọc sách giữa trời se lạnh", score: { dalat: 2 } }
    ]
  },
  {
    type: "single",
    text: "Bạn thích thời tiết nào nhất khi đi du lịch?",
    options: [
      { text: "Nắng đẹp, trời xanh, gió biển", score: { bien: 2 } },
      { text: "Mát lạnh, có sương mù và mây", score: { nui: 1, dalat: 1 } },
      { text: "Se lạnh, dịu nhẹ quanh năm", score: { dalat: 2 } },
      { text: "Thời tiết nào cũng được, miễn có nhiều thứ để khám phá", score: { disan: 2 } }
    ]
  },
  {
    type: "multi",
    text: "Bạn muốn làm những hoạt động nào trong chuyến đi?",
    note: "Có thể chọn nhiều đáp án",
    options: [
      { text: "Lặn biển, chèo kayak, chơi thể thao dưới nước", score: { bien: 2 } },
      { text: "Trekking, đi xe máy qua đèo", score: { nui: 2 } },
      { text: "Tham quan bảo tàng, đền chùa, lăng tẩm", score: { disan: 2 } },
      { text: "Chụp ảnh, săn mây, ngắm hoa", score: { dalat: 1, nui: 1 } },
      { text: "Tham gia lễ hội, thử làm đồ thủ công địa phương", score: { disan: 1 } }
    ]
  },
  {
    type: "image",
    text: "Bức ảnh nào khiến bạn muốn đặt vé ngay lập tức?",
    options: [
      { text: "Vịnh Hạ Long", img: "../image/ha_long.jpg", score: { bien: 3 } },
      { text: "Ruộng bậc thang Sa Pa", img: "../image/sa_pa.jpg", score: { nui: 3 } },
      { text: "Phố cổ Hội An", img: "../image/hoi_an.jpg", score: { disan: 3 } },
      { text: "Đồi thông Đà Lạt", img: "../image/da_lat.jpg", score: { dalat: 3 } }
    ]
  },
  {
    type: "single",
    text: "Bạn muốn thưởng thức món ăn nào nhất?",
    options: [
      { text: "Hải sản nướng, gỏi cá, nước mắm Phú Quốc", score: { bien: 2 } },
      { text: "Thắng cố, thịt trâu gác bếp, cơm lam", score: { nui: 2 } },
      { text: "Cao lầu, mì Quảng, bún bò Huế", score: { disan: 2 } },
      { text: "Bánh tráng nướng, lẩu gà lá é, sữa đậu nành nóng", score: { dalat: 2 } }
    ]
  },
  {
    type: "multi",
    text: "Điều gì quan trọng nhất với bạn khi chọn điểm đến?",
    note: "Có thể chọn nhiều đáp án",
    options: [
      { text: "Phong cảnh thiên nhiên hùng vĩ", score: { nui: 2, bien: 1 } },
      { text: "Không khí yên bình, ít ồn ào", score: { dalat: 2 } },
      { text: "Giá trị lịch sử và văn hóa", score: { disan: 2 } },
      { text: "Có bãi tắm đẹp và dịch vụ nghỉ dưỡng tốt", score: { bien: 2 } },
      { text: "Nhiều góc sống ảo, check-in", score: { dalat: 1, disan: 1 } }
    ]
  },
  {
    type: "single",
    text: "Bạn muốn di chuyển bằng phương tiện nào trong chuyến đi?",
    options: [
      { text: "Du thuyền, tàu cao tốc ra đảo", score: { bien: 2 } },
      { text: "Xe máy phượt qua những con đèo", score: { nui: 2 } },
      { text: "Đi bộ, xích lô hoặc xe đạp quanh phố cổ", score: { disan: 2 } },
      { text: "Ô tô thong thả, dừng ở bất kỳ nơi nào đẹp", score: { dalat: 2 } }
    ]
  },
  {
    type: "image",
    text: "Nếu chỉ được chọn một nơi để ngủ lại, bạn chọn khung cảnh nào?",
    options: [
      { text: "Bãi biển Phú Quốc", img: "../image/phu_quoc.jpg", score: { bien: 3 } },
      { text: "Cao nguyên đá Hà Giang", img: "../image/ha_giang.jpg", score: { nui: 3 } },
      { text: "Cố đô Huế", img: "../image/hue.jpg", score: { disan: 3 } },
      { text: "Hồ Xuân Hương, Đà Lạt", img: "../image/ho_xuan_huong.jpg", score: { dalat: 3 } }
    ]
  },
  {
    type: "single",
    text: "Bạn muốn nghỉ ở loại hình lưu trú nào?",
    options: [
      { text: "Resort ven biển có hồ bơi", score: { bien: 2 } },
      { text: "Homestay của người dân bản địa trên núi", score: { nui: 2 } },
      { text: "Nhà cổ, khách sạn mang phong cách truyền thống", score: { disan: 2 } },
      { text: "Biệt thự nhỏ hoặc nhà gỗ giữa rừng thông", score: { dalat: 2 } }
    ]
  },
  {
    type: "multi",
    text: "Bạn muốn mang về món quà lưu niệm nào?",
    note: "Có thể chọn nhiều đáp án",
    options: [
      { text: "Hải sản khô, ngọc trai, nước mắm", score: { bien: 2 } },
      { text: "Thổ cẩm, rượu ngô, mật ong rừng", score: { nui: 2 } },
      { text: "Đèn lồng, lụa, tranh thêu, đồ gốm", score: { disan: 2 } },
      { text: "Mứt dâu, trà atiso, hoa sấy khô", score: { dalat: 2 } }
    ]
  }
];

let current = 0;
let answers = [];  

const $ = (id) => document.getElementById(id);

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Tạo thẻ <img>; nếu thiếu file ảnh thì hiện khung thay thế ghi tên file cần bỏ vào thư mục images
function makeImage(src, alt, className) {
  const img = document.createElement("img");
  if (className) img.className = className;
  img.alt = alt;
  img.loading = "lazy";
  img.src = src;
  img.onerror = function () {
    const box = document.createElement("div");
    box.className = "img-missing" + (className ? " " + className : "");
    box.textContent = "Chưa có ảnh: " + src;
    img.replaceWith(box);
  };
  return img;
}

function renderQuestion() {
  const q = QUESTIONS[current];
  const total = QUESTIONS.length;

  $("progress-text").textContent = "Câu " + (current + 1) + "/" + total;
  $("progress-bar").style.width = (current / total) * 100 + "%";
  $("question-text").textContent = current + 1 + ". " + q.text;
  $("question-note").textContent = q.note || "";

  const box = $("options");
  box.innerHTML = "";
  box.className = "options" + (q.type === "image" ? " image-grid" : "");

  q.options.forEach((opt, idx) => {
    const div = document.createElement("div");
    div.className = "option";
    if (q.type === "multi") div.classList.add("multi");
    if (q.type === "image") div.classList.add("image-option");
    if (answers[current].includes(idx)) div.classList.add("selected");

    if (q.type === "image") {
      div.appendChild(makeImage(opt.img, opt.text));
      const cap = document.createElement("div");
      cap.className = "caption";
      cap.textContent = opt.text;
      div.appendChild(cap);
    } else {
      const mark = document.createElement("span");
      mark.className = "mark";
      const label = document.createElement("span");
      label.textContent = opt.text;
      div.appendChild(mark);
      div.appendChild(label);
    }

    div.addEventListener("click", () => selectOption(idx));
    box.appendChild(div);
  });

  $("btn-prev").style.visibility = current === 0 ? "hidden" : "visible";
  $("btn-next").textContent = current === total - 1 ? "Xem kết quả" : "Tiếp theo";
  $("btn-next").disabled = answers[current].length === 0;
}

function selectOption(idx) {
  const q = QUESTIONS[current];
  if (q.type === "multi") {
    const pos = answers[current].indexOf(idx);
    if (pos >= 0) answers[current].splice(pos, 1);
    else answers[current].push(idx);
  } else {
    answers[current] = [idx];
  }
  renderQuestion();
}

function calculate() {
  const totals = { bien: 0, nui: 0, disan: 0, dalat: 0 };
  answers.forEach((chosen, qi) => {
    chosen.forEach((oi) => {
      const score = QUESTIONS[qi].options[oi].score;
      for (const key in score) totals[key] += score[key];
    });
  });
  return totals;
}

function showResult() {
  const totals = calculate();
  const keys = Object.keys(totals);
  let best = keys[0];
  keys.forEach((k) => { if (totals[k] > totals[best]) best = k; });

  const r = RESULTS[best];
  $("result-title").textContent = r.title;
  $("result-desc").textContent = r.desc;

  const old = document.querySelector("#screen-result .result-image, #screen-result .img-missing");
  const newImg = makeImage(r.image, r.title, "result-image");
  newImg.id = "result-image";
  old.replaceWith(newImg);

  const ul = $("result-places");
  ul.innerHTML = "";
  r.places.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = p;
    ul.appendChild(li);
  });

  // Biểu đồ thanh
  const sum = keys.reduce((s, k) => s + totals[k], 0) || 1;
  const bars = $("result-bars");
  bars.innerHTML = "";
  keys
    .sort((a, b) => totals[b] - totals[a])
    .forEach((k) => {
      const percent = Math.round((totals[k] / sum) * 100);
      const row = document.createElement("div");
      row.className = "bar-row";
      row.innerHTML =
        '<span class="bar-label">' + LABELS[k] + "</span>" +
        '<div class="bar-track"><div class="bar-fill" style="width:0"></div></div>' +
        '<span class="bar-value">' + percent + "%</span>";
      bars.appendChild(row);
      setTimeout(() => { row.querySelector(".bar-fill").style.width = percent + "%"; }, 50);
    });

  $("progress-bar").style.width = "100%";
  showScreen("screen-result");
}

function startQuiz() {
  current = 0;
  answers = QUESTIONS.map(() => []);
  renderQuestion();
  showScreen("screen-quiz");
}

$("btn-start").addEventListener("click", startQuiz);
$("btn-restart").addEventListener("click", startQuiz);

$("btn-prev").addEventListener("click", () => {
  if (current > 0) { current--; renderQuestion(); }
});

$("btn-next").addEventListener("click", () => {
  if (answers[current].length === 0) return;
  if (current < QUESTIONS.length - 1) { current++; renderQuestion(); }
  else showResult();
});