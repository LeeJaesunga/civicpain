document.addEventListener("DOMContentLoaded", function () {
  // ▼ 유관기관 사이트 드롭다운
  const sitesBtn = document.getElementById("sites_btn");
  const sitesList = document.querySelector(".sites_link_list");

  sitesBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    sitesList.style.display = (sitesList.style.display === "block") ? "none" : "block";
  });

  document.addEventListener("click", function () {
    sitesList.style.display = "none";
    allMenu.style.display = "none";
  });

  sitesList.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // ▼ PC All Menu 토글
  const menuBtn = document.getElementById("pc_menu_btn");
  const allMenu = document.getElementById("all_menu");

  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    const isVisible = allMenu.style.display === "block";
    allMenu.style.display = isVisible ? "none" : "block";
  });

  allMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // ▼ GNB 메뉴 하위 메뉴 토글
  const gnbItems = document.querySelectorAll('#gnb .dep1_li');

  gnbItems.forEach(item => {
    const subMenu = item.querySelector('.sub_menu');
    const link = item.querySelector('.dep1_a');

    if (subMenu && link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const isOpen = subMenu.style.display === 'block';
        subMenu.style.display = isOpen ? 'none' : 'block';
      });
    }
  });
});
