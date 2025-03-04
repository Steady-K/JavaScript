const menu = [
  {
    id: 1,
    title: '엽기메뉴',
    category: '메인메뉴',
    price: '14,000원',
    img: './images/메인메뉴/엽기메뉴.png',
    desc: `떡볶이/오뎅/반반 中 선택 (떡볶이 -> 분모자 변경시 + 3,000원)<br>* 매운맛, 오리지널, 덜매운맛, 초보맛, 착한맛`,
  },
  {
    id: 2,
    title: '로제메뉴',
    category: '메인메뉴',
    price: '16,000원',
    img: './images/메인메뉴/로제메뉴.png',
    desc: `떡볶이/오뎅/반반 中 선택 (떡볶이 -> 분모자 변경시 + 3,000원)<br>* 오리지널, 착한맛`,
  },
  {
    id: 3,
    title: '마라떡볶이',
    category: '메인메뉴',
    price: '16,000원',
    img: './images/메인메뉴/마라떡볶이.png',
    desc: `떡볶이 메뉴만 선택 가능 (오뎅/반반/분모자 불가)<br>* 오리지널, 착한맛`,
  },
  {
    id: 4,
    title: '마라로제떡볶이',
    category: '메인메뉴',
    price: '18,000원',
    img: './images/메인메뉴/마라로제떡볶이.png',
    desc: `떡볶이 메뉴만 선택 가능 (오뎅/반반/분모자 불가)<br>* 오리지널, 착한맛`,
  },
  {
    id: 5,
    title: '2인 엽기떡볶이',
    category: '메인메뉴',
    price: '9,000원',
    img: './images/메인메뉴/2인엽기떡볶이.png',
    desc: `홀/방문포장 전용(배달불가)<br>* 매운맛, 오리지널, 덜매운맛, 착한맛`,
  },
  {
    id: 6,
    title: '엽기닭볶음탕',
    category: '메인메뉴',
    price: '24,000원',
    img: './images/메인메뉴/엽기닭볶음탕.png',
    desc: '매운맛, 오리지널, 덜매운맛, 초보맛, 착한맛',
  },
  {
    id: 7,
    title: '엽기 무뼈닭발',
    category: '닭발메뉴',
    price: '15,000원',
    img: './images/닭발메뉴/엽기무뼈닭발.jpg',
    desc: '',
  },
  {
    id: 8,
    title: '엽기 국물닭발',
    category: '닭발메뉴',
    price: '15,000원',
    img: './images/닭발메뉴/엽기국물닭발.jpg',
    desc: '',
  },
  {
    id: 9,
    title: '엽기 오돌뼈',
    category: '닭발메뉴',
    price: '14,000원',
    img: './images/닭발메뉴/엽기오돌뼈.jpg',
    desc: '',
  },
  {
    id: 10,
    title: '실속세트',
    category: '세트메뉴',
    price: '17,500원',
    img: './images/세트메뉴/실속세트.jpg',
    desc: `떡볶이 + 주먹김밥 + 모둠튀김(만두 2개, 김말이 1개, 야채튀김 1개)<br>엽기 / 로제(+2,000원)`,
  },
  {
    id: 11,
    title: '베스트세트',
    category: '세트메뉴',
    price: '20,000원',
    img: './images/세트메뉴/베스트세트.jpg',
    desc: `떡볶이 + 주먹김밥 + 모둠튀김(만두 2개, 김말이 1개, 야채튀김 1개) + 중국당면<br>엽기 / 로제(+2,000원)`,
  },
  {
    id: 12,
    title: '스페셜세트',
    category: '세트메뉴',
    price: '25,000원',
    img: './images/세트메뉴/스페셜세트.jpg',
    desc: `떡볶이 + 주먹김밥 + 모둠튀김(만두 2개, 김말이 1개, 야채튀김 1개) + 중국당면 + 엽봉(5개)<br>엽기 / 로제(+2,000원)`,
  },
  {
    id: 13,
    title: '닭발세트',
    category: '세트메뉴',
    price: '17,500원',
    img: './images/세트메뉴/닭발세트.jpg',
    desc: `닭발메뉴 + 주먹김밥 + 계란찜<br>엽기오돌뼈/ 엽기무뼈닭발(+1,000원) / 엽기국물닭발(+1,000원)`,
  },
  {
    id: 15,
    title: '엽기오돌뼈밥',
    category: '사이드/음료',
    price: '4,500원',
    img: './images/사이드,음료/엽기오돌뼈밥.jpg',
    desc: '',
  },
  {
    id: 16,
    title: '참치마요밥',
    category: '사이드/음료',
    price: '3,500원',
    img: './images/사이드,음료/참치마요밥.jpg',
    desc: '',
  },
  {
    id: 17,
    title: '주먹김밥(셀프)',
    category: '사이드/음료',
    price: '2,000원',
    img: './images/사이드,음료/주먹김밥(셀프).jpg',
    desc: '',
  },
  {
    id: 18,
    title: '계란찜',
    category: '사이드/음료',
    price: '2,000원',
    img: './images/사이드,음료/계란찜.jpg',
    desc: '',
  },
  {
    id: 19,
    title: '계란야채죽',
    category: '사이드/음료',
    price: '5,000원',
    img: './images/사이드,음료/계란야채죽.jpg',
    desc: '',
  },
  {
    id: 20,
    title: '순대',
    category: '사이드/음료',
    price: '3,000원',
    img: './images/사이드,음료/순대.jpg',
    desc: '',
  },
  {
    id: 21,
    title: '오뎅튀김(15개)',
    category: '사이드/음료',
    price: '2,000원',
    img: './images/사이드,음료/오뎅튀김(15개).jpg',
    desc: '',
  },
  {
    id: 22,
    title: '오징어튀김(1개)',
    category: '사이드/음료',
    price: '1,000원',
    img: './images/사이드,음료/오징어튀김(1개).jpg',
    desc: '',
  },
  {
    id: 23,
    title: '모둠튀김',
    category: '사이드/음료',
    price: '2,000원',
    img: './images/사이드,음료/모둠튀김.jpg',
    desc: '',
  },
  {
    id: 24,
    title: '만두(4개)',
    category: '사이드/음료',
    price: '2,000원',
    img: './images/사이드,음료/만두(4개).jpg',
    desc: '',
  },
  {
    id: 25,
    title: '김말이(3개)',
    category: '사이드/음료',
    price: '2,000원',
    img: './images/사이드,음료/김말이(3개).jpg',
    desc: '',
  },
  {
    id: 26,
    title: '야채튀김(1개)',
    category: '사이드/음료',
    price: '1,000원',
    img: './images/사이드,음료/야채튀김(1개).jpg',
    desc: '',
  },
  {
    id: 27,
    title: '꿔바로우(5개)',
    category: '사이드/음료',
    price: '5,900원',
    img: './images/사이드,음료/꿔바로우(5개).jpg',
    desc: '',
  },
  {
    id: 28,
    title: '엽봉(5개)',
    category: '사이드/음료',
    price: '5,000원',
    img: './images/사이드,음료/엽봉(5개).jpg',
    desc: '',
  },
  {
    id: 29,
    title: '바삭치즈만두(7개)',
    category: '사이드/음료',
    price: '2,000원',
    img: './images/사이드,음료/바삭치즈만두(7개).jpg',
    desc: '',
  },
  {
    id: 30,
    title: '엽도그',
    category: '사이드/음료',
    price: '2,000원',
    img: './images/사이드,음료/엽도그.jpg',
    desc: '',
  },
  {
    id: 31,
    title: '감자채튀김',
    category: '사이드/음료',
    price: '2,500원',
    img: './images/사이드,음료/감자채튀김.jpg',
    desc: '',
  },
  {
    id: 32,
    title: '엽기시즈닝(버터갈릭맛)',
    category: '사이드/음료',
    price: '300원',
    img: './images/사이드,음료/엽기시즈닝(버터갈릭맛).jpg',
    desc: '',
  },
  {
    id: 33,
    title: '공기밥',
    category: '사이드/음료',
    price: '1,000원',
    img: './images/사이드,음료/공기밥.jpg',
    desc: '',
  },
  {
    id: 34,
    title: '음료(유산균)',
    category: '사이드/음료',
    price: '1,000원',
    img: './images/사이드,음료/음료(유산균).png',
    desc: '',
  },
  {
    id: 35,
    title: '떡추가',
    category: '토핑',
    price: '1,000원',
    img: './images/토핑/떡추가.jpg',
    desc: '',
  },
  {
    id: 36,
    title: '오뎅추가',
    category: '토핑',
    price: '1,000원',
    img: './images/토핑/오뎅추가.jpg',
    desc: '',
  },
  {
    id: 37,
    title: '모짜치즈',
    category: '토핑',
    price: '3,000원',
    img: './images/토핑/모짜치즈.jpg',
    desc: '',
  },
  {
    id: 38,
    title: '콘마요',
    category: '토핑',
    price: '2,500원',
    img: './images/토핑/콘마요.jpg',
    desc: '',
  },
  {
    id: 39,
    title: '햄(7개)',
    category: '토핑',
    price: '1,000원',
    img: './images/토핑/햄(7개).jpg',
    desc: '',
  },
  {
    id: 40,
    title: '베이컨',
    category: '토핑',
    price: '3,000원',
    img: './images/토핑/베이컨.jpg',
    desc: '',
  },
  {
    id: 41,
    title: '우삼겹',
    category: '토핑',
    price: '3,000원',
    img: './images/토핑/우삼겹.jpg',
    desc: '',
  },
  {
    id: 42,
    title: '통유부(4개)',
    category: '토핑',
    price: '1,000원',
    img: './images/토핑/통유부(4개).jpg',
    desc: '',
  },
  {
    id: 43,
    title: '퐁당치즈만두(7개)',
    category: '토핑',
    price: '2,000원',
    img: './images/토핑/퐁당치즈만두(7개).jpg',
    desc: '',
  },
  {
    id: 44,
    title: '계란(2개)',
    category: '토핑',
    price: '1,500원',
    img: './images/토핑/계란(2개).jpg',
    desc: '',
  },
  {
    id: 45,
    title: '메추리알(5개)',
    category: '토핑',
    price: '1,000원',
    img: './images/토핑/메추리알(5개).jpg',
    desc: '',
  },
  {
    id: 46,
    title: '분모자',
    category: '토핑',
    price: '2,500원',
    img: './images/토핑/분모자.jpg',
    desc: '',
  },
  {
    id: 47,
    title: '중국당면',
    category: '토핑',
    price: '2,500원',
    img: './images/토핑/중국당면.jpg',
    desc: '',
  },
  {
    id: 48,
    title: '당면사리',
    category: '토핑',
    price: '2,000원',
    img: './images/토핑/당면사리.jpg',
    desc: '',
  },
  {
    id: 49,
    title: '우동사리',
    category: '토핑',
    price: '2,000원',
    img: './images/토핑/우동사리.jpg',
    desc: '',
  },
  {
    id: 50,
    title: '엽기밀키트',
    category: '밀키트',
    price: '9,000원',
    img: './images/밀키트/엽기밀키트.jpg',
    desc: '',
  },
  {
    id: 51,
    title: '로제밀키트',
    category: '밀키트',
    price: '11,000원',
    img: './images/밀키트/로제밀키트.jpg',
    desc: '',
  },
];

const mainContainer = document.querySelector('.main-container');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems
    .map(function (item) {
      return `<div class="menu-item">
          <img src=${item.img} alt="${item.title}" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
          </div>
        </div>`;
    })
    .join('');

  mainContainer.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['전체메뉴']
  );

  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id="${category}">
            ${category}
          </button>`;
    })
    .join('');

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = btnContainer.querySelectorAll('.filter-btn');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;

      const menuCategory =
        category === '전체메뉴'
          ? menu
          : menu.filter((menuItem) => menuItem.category === category);

      displayMenuItems(menuCategory);
    });
  });
}
