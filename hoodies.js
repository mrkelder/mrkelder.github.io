const fakeData = [
  {
    index: 0,
    name: 'turquoise',
    color: 'turquoise',
    images: [
      { name: 'Front', url: './hoodies/blue_front.webp', objects: [] },
      {
        name: 'Left', url: './hoodies/blue_left.webp', addStyle: {
          backgroundSize: '120%',
          backgroundPosition: '80% 114%'
        }, objects: []
      },
    ]
  },
  {
    index: 1,
    name: 'heather black',
    color: 'black',
    images: [
      { name: 'Front', url: './hoodies/black_front.webp', objects: [] },
      {
        name: 'Left', url: './hoodies/black_left.webp', addStyle: {
          backgroundSize: '120%',
          backgroundPosition: '80% 114%'
        }, objects: []
      },
    ]
  }
];

let currentColorThemeIndex = 0;
const product_color_name = document.getElementById('product_color_name');
const image = document.getElementById('image');
const change_view = document.getElementById('change_view');

function changeView(e) {
  const url = e.getAttribute('data-url');
  const index = e.getAttribute('data-index');
  image.style.backgroundImage = `url('${url}')`;

  if (fakeData[currentColorThemeIndex].images[index].addStyle) {
    image.style.backgroundPosition = fakeData[currentColorThemeIndex].images[index].addStyle.backgroundPosition;
    image.style.backgroundSize = fakeData[currentColorThemeIndex].images[index].addStyle.backgroundSize;
  }
  else {
    image.style.backgroundPosition = "50%";
    image.style.backgroundSize = 'contain';
  }

}

function changeColor(e) {
  currentColorThemeIndex = Number(e.getAttribute('data-index'));
  change_view.innerText = "";
  for (let i of document.getElementsByClassName('color')) {
    i.style.backgroundImage = 'none';
  }

  fakeData[currentColorThemeIndex].images.forEach((i, index) => {
    change_view.insertAdjacentHTML('beforeend', `<div class="view" data-url="${i.url}" data-index="${index}"style="background-image: url('${i.url}');" onclick="changeView(this)"></div>`);
  })

  image.style.backgroundImage = `url('${fakeData[currentColorThemeIndex].images[0].url}')`;
  image.style.backgroundPosition = "50%";
  image.style.backgroundSize = 'contain';

  product_color_name.innerText = fakeData[currentColorThemeIndex].name;

  document.getElementById(`color_${currentColorThemeIndex}`).style.backgroundImage = "url('./tick.png')";
}