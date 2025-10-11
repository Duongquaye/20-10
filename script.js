// Hiệu ứng bắn hạt đỏ khi click vào lời chúc
function burstRedDots(x, y, n = 20) {
    for (let i = 0; i < n; i++) {
        const dot = document.createElement('div');
        dot.className = 'red-dot';
        dot.style.left = (x - 3) + 'px';
        dot.style.top = (y - 3) + 'px';
        // Góc đều nhau, thêm chút ngẫu nhiên
        const angle = (i / n) * 2 * Math.PI + (Math.random() - 0.5) * 0.2;
        const distance = 60 + Math.random() * 30;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        dot.style.setProperty('--tx', tx + 'px');
        dot.style.setProperty('--ty', ty + 'px');
        document.body.appendChild(dot);
        setTimeout(() => dot.remove(), 700);
    }
}
// Hiệu ứng mưa lời chúc
function randomColor() {
    const colors = ["#e17055", "#fd5e53", "#00b894", "#0984e3", "#fdcb6e", "#6c5ce7", "#d35400", "#e84393"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createWishDrop() {
    const wishRain = document.querySelector('.wish-rain');
    if (!wishRain) return;
    const wishText = wishes[Math.floor(Math.random() * wishes.length)];
    const drop = document.createElement('div');
    drop.className = 'wish-drop';
    drop.textContent = wishText;
    // Vị trí ngẫu nhiên trên màn hình
    drop.style.left = Math.random() * 80 + 10 + 'vw';
    drop.style.transform = '';
    drop.style.color = randomColor();
    drop.style.fontSize = '15px';


    // Xoay ngẫu nhiên khi tạo, lưu lại góc xoay
    const angle = Math.floor(Math.random() * 60 - 30); // -30 đến 30 độ
    drop.dataset.rotate = angle;
    drop.style.transform = `rotate(${angle}deg)`;


    // Bắn cánh hoa khi click vào chữ
    drop.addEventListener('click', function(e) {
        const rect = drop.getBoundingClientRect();
        const px = rect.left + rect.width/2;
        const py = rect.top + rect.height/2;
        burstRedDots(px, py, 40); // Tăng số lượng hạt đỏ
        if (drop.parentNode) drop.remove(); // Xóa lời chúc khi click
    });


    // Tự động xóa sau khi rơi xuống
    setTimeout(() => {
        if (drop.parentNode) drop.remove();
    }, 5000);

    wishRain.appendChild(drop);
}


// Hiệu ứng mưa lời chúc liên tục khi nhập tên
let wishRainInterval = null;
function startWishRain(interval = 700) {
    if (wishRainInterval) clearInterval(wishRainInterval);
    wishRainInterval = setInterval(createWishDrop, interval);
    // Tạo ngay một lời chúc đầu tiên
    createWishDrop();
}

// Lời chúc đặc biệt cho Bùi Ngọc Bảo Linh
const wishesLinh = [
    "Một chút dịu dàng cho ngày thêm ấm, một chút yêu thương cho lòng thêm vui.",
    "Cứ mỉm cười nhé, vì đó là cách em làm dịu cả thế giới này.",
    "Ngọt ngào không phải là điều em cố tạo ra – mà là cách em tồn tại.",
    "Nếu cuộc đời là bản nhạc, em chính là giai điệu khiến người ta muốn nghe lại mãi.",
    "Chúc bạn 20/10 luôn xinh đẹp, rạng rỡ và hạnh phúc — vì bạn xứng đáng với tất cả những điều tuyệt vời nhất 💖"
];
// Lời chúc đặc biệt cho Trần Thị Minh Hiền
const wishesHien = [
    "Bạn không cần là nàng thơ của ai cả, chỉ cần là phiên bản hạnh phúc nhất của chính mình – Mình tin, đó mới là điều đẹp nhất.",
    "Chúc bạn luôn thành công, luôn xinh đẹp – và luôn nhớ rằng phụ nữ không cần chạy theo chuẩn mực, họ chính là chuẩn mực.",
    "Gửi đến những người phụ nữ tuyệt vời: chúc các bạn luôn được yêu thương, được tôn trọng, và được là chính mình – vì không ai có thể thay thế ánh sáng mà các bạn mang đến cho thế giới này.",
    "Không cần ai tặng hoa, vì chính em là bông hoa đẹp nhất.",
    "Không phải hoa nào cũng cần nắng – có bông nở rực giữa giông gió."
];
// Lời chúc đặc biệt cho Đỗ Mai Phương
const wishesPhuong = [
    "Không có nét quyến rũ nào sánh bằng sự dịu dàng của trái tim.",
    "A woman should be two things: who and what she wants.",
    "Chúc em như một đoá hồng trong trang sách cổ – dẫu năm tháng có úa phai, hương vẫn còn mãi.",
    "Chúc bạn luôn là phiên bản tuyệt vời nhất của chính mình – không cần hoàn hảo, chỉ cần không ngừng tiến về phía trước.",
    "Hãy sống như đóa hoa dại – mạnh mẽ giữa bão giông, dịu dàng giữa đời thường."
];
// Danh sách tên nữ phổ biến để nhận diện đơn giản
const femaleNames = [
    "anh", "chi", "hoa", "huong", "lan", "mai", "nga", "ngoc", "thu", "trang", "vy", "yen", "hien", "dao", "phuong", "quyen", "thao", "thuy", "tuyet", "van", "xuan",
    // Thêm các tên đầy đủ đặc biệt
    "đinh tuyết nhung", "đỗ mai phương", "trần thị minh hiền", "bùi ngọc bảo linh"
];

// Một số lời chúc mẫu cho nữ
const wishes = [
    "Chúc bạn luôn xinh đẹp, hạnh phúc và thành công trong cuộc sống!",
    "Chúc bạn ngày 20/10 thật nhiều niềm vui và nhận được nhiều yêu thương!",
    "Chúc bạn luôn rạng rỡ và tràn đầy năng lượng tích cực!",
    "Chúc bạn luôn được yêu thương và trân trọng!",
    "Chúc cô bạn đáng yêu có một ngày 20/10 thật ngọt ngào, tràn ngập hoa, quà và nụ cười tươi như nắng! ☀️🌷",
    "20/10 vui vẻ nha cô gái!",
    "Chúc bạn luôn tự tin, xinh đẹp và tỏa sáng như chính năng lượng tích cực bạn mang đến 💫",
    "Ngày 20/10 chúc bạn xinh hơn hoa, vui hơn lễ hội và được “bao” thật nhiều quà dễ thương 🎁🌹",
    "Chúc bạn có một 20/10 thật chill, thật vui, và thật nhiều điều bất ngờ đáng yêu 🎀",
    "Không chỉ hôm nay mà mỗi ngày đều là “Ngày Phụ nữ” – vì bạn xứng đáng được yêu thương như thế 💞",
    "Gửi đến bạn lời chúc ngọt ngào nhất: Luôn rạng rỡ, luôn yêu đời và luôn được là chính mình 🌼💖"
];

// Lời chúc đặc biệt cho Đinh Tuyết Nhung
const wishesNhung = [
    "Dù cô ấy nhỏ bé, nhưng cô ấy mạnh mẽ phi thường.",
    "Mong em sống như một bài thơ – ngọt ngào trong từng câu chữ, kiêu hãnh trong từng dấu lặng.",
    "Em không cần hoàn hảo, chỉ cần đủ mạnh mẽ để giữ lấy niềm tin, đủ dịu dàng để yêu thương chính mình.",
    "Phụ nữ là phép màu giữa đời thường – mong em mãi là điều kỳ diệu trong mắt những người thương em.",
    "Như một trang thơ mùa xuân, em là khởi đầu của những điều đẹp nhất."
];

document.getElementById('wishForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('wishResult');
    if (!name) {
        resultDiv.textContent = "Vui lòng nhập tên của bạn!";
        return;
    }
    // Kiểm tra tên có trong danh sách tên nữ hoặc trùng khớp tên đầy đủ
    let isFemale = false;
    for (const fname of femaleNames) {
        if (name === fname || name.endsWith(fname)) {
            isFemale = true;
            break;
        }
    }
    let message = '';
    if (isFemale) {
        // Nếu là Đinh Tuyết Nhung thì lấy lời chúc đặc biệt
        if (name === "đinh tuyết nhung") {
            const wish = wishesNhung[Math.floor(Math.random() * wishesNhung.length)];
            message = `Chúc mừng 20/10, Đinh Tuyết Nhung! ${wish}`;
        } else if (name === "đỗ mai phương") {
            const wish = wishesPhuong[Math.floor(Math.random() * wishesPhuong.length)];
            message = `Chúc mừng 20/10, Đỗ Mai Phương! ${wish}`;
        } else if (name === "trần thị minh hiền" || name === "trần thị minh hien") {
            const wish = wishesHien[Math.floor(Math.random() * wishesHien.length)];
            message = `Chúc mừng 20/10, Trần Thị Minh Hiền! ${wish}`;
        } else if (name === "bùi ngọc bảo linh") {
            const wish = wishesLinh[Math.floor(Math.random() * wishesLinh.length)];
            message = `Chúc mừng 20/10, Bùi Ngọc Bảo Linh! ${wish}`;
        } else {
            // Lấy ngẫu nhiên một lời chúc chung
            const wish = wishes[Math.floor(Math.random() * wishes.length)];
            message = `Chúc mừng 20/10, ${name.charAt(0).toUpperCase() + name.slice(1)}! ${wish}`;
        }
    } else {
        message = `Xin chào ${name.charAt(0).toUpperCase() + name.slice(1)}! Chúc bạn một ngày vui vẻ!`;
    }
    // Xóa nội dung cũ
    // Xóa nội dung cũ
    resultDiv.textContent = '';
    // Bắt đầu hiệu ứng mưa lời chúc liên tục khi nhập tên
    startWishRain();
    // Tạo hiệu ứng bay lên
    const flyElem = document.createElement('div');
    flyElem.className = 'wish-fly';
    flyElem.textContent = message;
    resultDiv.appendChild(flyElem);

    setTimeout(() => {
        flyElem.remove();
        resultDiv.textContent = message;
    }, 2000);
});
