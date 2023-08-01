import "./assets/scss/main.scss";
import AirDatepicker from 'air-datepicker';
import localeZh from 'air-datepicker/locale/zh';
// import 'air-datepicker/air-datepicker.css';

const datepicker = new AirDatepicker('#datepicker', {
  selectedDates: [new Date()],
  locale: localeZh,
  onSelect(date) {
    getTime(date)
  }
})
const selectHours = document.querySelector('#selectHoures')
selectHours.addEventListener('change', function () {
  const date = datepicker.lastSelectedDate
  const hour = this.value
  getTime(date, hour)
})

const menuLink = document.querySelectorAll(".menu-link");
const mask = document.querySelector(".menu-mask");
const menuBtn = document.querySelector(".hamburger-btn");
menuBtn.addEventListener("click", function () {
  mask.classList.toggle("hidden");
});

mask.addEventListener("click", function (e) {
  // e.stopPropagation();
  if (e.target === mask) {
    mask.classList.toggle("hidden");
  }
});

menuLink.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (el.nextSibling) {
      e.preventDefault();
      if (el.classList.contains("menu-active")) {
        el.classList.toggle("menu-active");
        el.nextSibling.classList.toggle("hidden");
      } else {
        el.classList.toggle("menu-active");
        el.nextSibling.classList.toggle("hidden");
      }
    }
  });
});

// function renderList(id) {
//   const targetUl = document.getElementById(id)

//   const svgColor = id === 'list2' ? 'text-white' : 'text-primary'

//   const templateLi = `
//     <li class="flex items-center mt-6">
//       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 stroke-current ${svgColor}" fill="none"
//         viewBox="0 0 24 24" stroke="currentColor">
//         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//           d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
//       </svg>
//       item bla bla bla
//     </li>
//   `

//   let htmlStr = ''
//   for (let index = 0; index < 5; index++) {
//     htmlStr += templateLi
//   }

//   targetUl.innerHTML = htmlStr
// }

// renderList('list1')
// renderList('list2')
// renderList('list3')
