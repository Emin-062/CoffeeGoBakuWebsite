function clickOpenNavSideMobilBar() {
  let mobil_bar = document.getElementsByTagName("nav")[0];
  let bar = document.getElementsByClassName("bar")[0];
  let closeBar = document.getElementsByClassName("close-bar")[0];

  mobil_bar.classList.add("forMobilBar");
  bar.style.display = "none";         
  closeBar.style.display = "flex";

  closeMenuOnOutsideClick();
}

function closeMenuOnOutsideClick() {
  // Получаем элементы один раз, чтобы сравнивать
  const mobil_bar = document.getElementsByTagName("nav")[0];
  const bar = document.getElementsByClassName("bar")[0];

  function handler(event) {
    // Если клик вне навигации и не по кнопке открытия
    if (!mobil_bar.contains(event.target) && event.target !== bar && !bar.contains(event.target)) {
      clickCloseMenu();
      document.removeEventListener("click", handler);
    }
  }

  document.addEventListener("click", handler);
}

function clickCloseMenu() {
  let mobil_bar = document.getElementsByTagName("nav")[0];
  let bar = document.getElementsByClassName("bar")[0];
  let closeBar = document.getElementsByClassName("close-bar")[0];

  mobil_bar.classList.remove("forMobilBar");
  bar.style.display = "flex";        
  closeBar.style.display = "none";    
  document.body.style.backgroundColor = "";
}


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".menu-button");
  
  // Объект соответствия id кнопки -> класс контейнера меню
  const menuMap = {
    "coffee-cold-drinks": ".menu-items-iced-coffee",
    "milkshakes": ".menu-items-milkshakes",
    "delicious-coffee": ".menu-items-delicious-coffee",
    "fresh-juice": ".menu-items-fresh-juice",
    "lemonade": ".menu-items-lemonade",
    "classic-coffee": ".menu-items-classic-coffee",
    "specialty-tea": ".menu-items-specialty-tea",
    "ice-cream": ".menu-items-ice-cream",
    "hot-drinks": ".menu-items-hot-drinks",
    "cold-drinks": ".menu-items-cold-drinks",
    "cocktails-with-fruits": ".menu-items-cocktails-with-fruits",
    "cold-alcohol": ".menu-items-cold-alcohol"
  };

  // Все меню-контейнеры — по значениям из menuMap
  const menuContainers = Object.values(menuMap).map(selector => document.querySelector(selector));

  const menuSection = document.querySelector(".menu");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const btnId = button.id;

      // Если для кнопки есть сопоставленное меню
      if (btnId && menuMap[btnId]) {
        // Скрываем все меню
        menuContainers.forEach(menu => {
          if(menu) menu.classList.remove("active");
        });

        // Показываем нужное меню
        const activeMenu = document.querySelector(menuMap[btnId]);
        if(activeMenu) activeMenu.classList.add("active");

        // Выделяем активную кнопку (удаляем у всех, ставим на текущую)
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Плавный скролл к середине меню
        // Плавный скролл к началу меню
        const rect = activeMenu.getBoundingClientRect();
        const offsetTop = window.scrollY + rect.top;

        window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
        });
      }
    });
  });
});

document.getElementById('scrollToMenu').addEventListener('click', function() {
    document.getElementsByClassName('menu')[0].scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToMenuButton').addEventListener('click', function() {
    document.getElementsByClassName('menu')[0].scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToGallery').addEventListener('click', function() {
    document.getElementsByClassName('gallery')[0].scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToLocations').addEventListener('click', function() {
    document.getElementsByClassName('filiallar')[0].scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToContacts').addEventListener('click', function() {
    document.getElementsByClassName('contacts')[0].scrollIntoView({ behavior: 'smooth' });
});

const scrollBtn = document.getElementById('scrollToTopBtn');
const header = document.querySelector('header');

function updatePosition() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const viewportHeight = window.innerHeight;

  scrollBtn.style.top = scrollTop + viewportHeight - scrollBtn.offsetHeight - 20 + 'px';
  scrollBtn.style.left = '0px';

  if (header) {
    const headerBottom = header.getBoundingClientRect().bottom;
    if (headerBottom > 0) {
      scrollBtn.classList.add('hidden');
    } else {
      scrollBtn.classList.remove('hidden');
    }
  }
}

updatePosition();
window.addEventListener('scroll', updatePosition);
window.addEventListener('resize', updatePosition);

const blackHeart = document.getElementById('blackHeart');
const redHeart = document.getElementById('redHeart');

function toggleHearts() {
  blackHeart.classList.toggle('hidden');
  redHeart.classList.toggle('hidden');

  // Если красное сердце видно — включаем пульсацию
  if (!redHeart.classList.contains('hidden')) {
    redHeart.classList.add('pulse');
  } else {
    redHeart.classList.remove('pulse');
  }
}

blackHeart.addEventListener('click', toggleHearts);
redHeart.addEventListener('click', toggleHearts);








