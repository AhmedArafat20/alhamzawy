
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// فتح وإغلاق قائمة الموبايل
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// إغلاق القائمة عند الضغط على أي رابط
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// إغلاق القائمة عند الضغط خارجها
document.addEventListener("click", (event) => {
    if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        navLinks.classList.remove("active");
    }
});
