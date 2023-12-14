let menu = document.querySelector('#menu-bars-mobile');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

// auto click menu
var header = document.getElementById("next");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.querySelector(".btn.active-btn");
    
    if (current) {
      current.classList.remove("active-btn");
    }

    this.classList.add("active-btn");
  });
}


// banner autoplay
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });


  // Login
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-login').addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn form submit mặc định

        // Lấy giá trị nhập từ người dùng
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Kiểm tra thông tin đăng nhập
        if (username === 'admin' && password === '123') {
            // Nếu là admin, chuyển hướng đến trang admin
            window.location.href = './source/admin/admin-store.html';
        } else if (username === 'hoangnam' && password === '123') {
            // Nếu là hoangnam, chuyển hướng đến trang chủ
            window.location.href = 'index.html';
        } else {
            // Nếu thông tin không chính xác, có thể hiển thị thông báo lỗi
            alert('Thông tin đăng nhập không đúng. Vui lòng thử lại.');
        }
    });
});
