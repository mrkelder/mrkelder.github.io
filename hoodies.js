const fakeData = [
  {
    index: 0,
    name: 'turquoise',
    color: 'turquoise',
    images: [
      { name: 'Front', url: './hoodies/blue_front.webp' },
      { name: 'Left', url: './hoodies/blue_left.webp' },
    ]
  },
  {
    index: 1,
    name: 'heather black',
    color: 'black',
    images: [
      { name: 'Front', url: './hoodies/black_front.webp' },
      { name: 'Left', url: './hoodies/black_left.webp' },
    ]
  }
];

let currentColorThemeIndex = 0;
const product_color_name = document.getElementById('product_color_name');
const image = document.getElementById('image');
const change_view = document.getElementById('change_view');

function changeView(e) {
  const url = e.getAttribute('data-url');
  image.style.backgroundImage = `url('${url}')`;
}

function changeColor(e) {
  currentColorThemeIndex = Number(e.getAttribute('data-index'));
  change_view.innerText = "";
  for (let i of document.getElementsByClassName('color')) {
    i.style.backgroundImage = 'none';
  }

  for (let i of fakeData[currentColorThemeIndex].images) {
    change_view.insertAdjacentHTML('beforeend', `<div class="view" data-url="${i.url}" style="background-image: url('${i.url}');" onclick="changeView(this)"></div>`);
  }

  image.style.backgroundImage = `url('${fakeData[currentColorThemeIndex].images[0].url}')`;

  product_color_name.innerText = fakeData[currentColorThemeIndex].name;

  document.getElementById(`color_${currentColorThemeIndex}`).style.backgroundImage = "url('./tick.png')";
}