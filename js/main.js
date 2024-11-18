document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function() {
    const selectedCode = this.querySelector('.country-code').textContent;
    const selectedFlag = this.querySelector('.flag').src;

    document.querySelector('.dropbtn .country-code').textContent = selectedCode;
    document.querySelector('.dropbtn .flag').src = selectedFlag;
    });
});

const toggleButton = document.querySelector(".all-categories");
const dropdownContent = document.querySelector(".dropdown-content1");
const dropdownItems = document.querySelectorAll(".dropdown-item1");

  // Toggle visibility of the dropdown content
toggleButton.onclick = (event) => {
    event.stopPropagation();
    dropdownContent.classList.toggle("show");
};

  // Update button text and hide dropdown when item is clicked
dropdownItems.forEach(item => {
    item.onclick = (event) => {
        event.stopPropagation();
        toggleButton.textContent = item.textContent;
        dropdownContent.classList.remove("show");
    };
});

  // Close dropdown if clicking outside
document.addEventListener("click", function(event) {
    if (!dropdownContent.contains(event.target) && !toggleButton.contains(event.target)) {
        dropdownContent.classList.remove("show");
    }
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}


let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const greenBar = document.querySelector(".green-bar");

    // إضافة شرط الميديا كويري
    if (window.innerWidth > 1269) { 
        if (window.scrollY > lastScrollY) {
            // التمرير لأسفل: يخفي الهيدر
            header.style.top = "-500px";
        } else {
            // التمرير لأعلى: يظهر الهيدر
            header.style.top = "0px";
        }
    } else {
        // عند الشاشات الصغيرة خلي الهيدر يظهر دائمًا
        header.style.top = "0px";
    }

    lastScrollY = window.scrollY;

    // إظهار أو إخفاء الجزء الأخضر
    if (window.scrollY > header.offsetHeight) {
        greenBar.style.display = "none";
    } else {
        greenBar.style.display = "block";
    }
});


const backToTopBtn = document.querySelector(".start");
const headerSection = document.getElementById("header");

window.addEventListener("scroll", () => {
// يظهر الزر بعد تجاوز الهوم
if (window.scrollY > headerSection.offsetHeight) {
backToTopBtn.style.display = "block";
} else {
backToTopBtn.style.display = "none";
}
});

// الرجوع لأعلى الصفحة عند الضغط على الزر
backToTopBtn.addEventListener("click", (e) => {
e.preventDefault();
window.scrollTo({
top: 0,
behavior: "smooth"
});
});

const icon = document.querySelector(".list-icon"); // اسم الكلاس حق الأيقونة
const navList = document.querySelector(".nav-list nav");
const navListUl = document.querySelector(".nav-list nav ul");

// إضافة حدث النقر للأيقونة وللقائمة
icon.addEventListener("click", toggleNav);
navList.addEventListener("click", toggleNav);

// دالة التبديل
function toggleNav(event) {
// تأكد إن المستخدم نقر على الأيقونة أو جزء nav
if (event.target === icon || event.target === navList) {
navList.classList.toggle("open");
navListUl.classList.toggle("open");

// تبديل الأيقونة
if (navList.classList.contains("open")) {
    icon.classList.remove("fa-bars"); // أيقونة القائمة
    icon.classList.add("fa-times");   // أيقونة الإغلاق
} else {
    icon.classList.remove("fa-times"); // أيقونة الإغلاق
    icon.classList.add("fa-bars");     // أيقونة القائمة
}
}
}

    // نجيب كل العناصر داخل القائمة
const listItems = document.querySelectorAll(".overlay ul li a");

// نضيف الحدث لكل عنصر في القائمة
listItems.forEach(item => {
    item.addEventListener("click", () => {
        // نشيل الكلاس "active" من كل العناصر
        listItems.forEach(a => a.classList.remove("active"));
        console.log('click')
        // نضيف الكلاس "active" للعنصر اللي اتضغط عليه
        item.classList.add("active");
    });
});

// اراء العملاء

let currentPersone = 0;
const persone = document.querySelectorAll('.containt-personal');

function changePersone(direction) {
    persone[currentPersone].classList.remove('active');
    currentPersone = (currentPersone + direction + persone.length) % persone.length;
    persone[currentPersone].classList.add('active');
}

const points = document.querySelectorAll('.point-item');
const productss = document.querySelector('.marke-products');

points.forEach((point, index) => {
    point.addEventListener('click', () => {
        // إزالة الصنف النشط من كل النقاط
        points.forEach(p => p.classList.remove('active'));
        // إضافة الصنف النشط للنقطة الحالية
        point.classList.add('active');
        // تغيير إزاحة القائمة لعرض الصورة المطلوبة
        const offset = -index * 20; // إزاحة 20% لكل عنصر
        productss.style.transform = `translateX(${offset}%)`;
    });
});

