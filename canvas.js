const canvas = document.getElementById('canvas');
const difX = canvas.clientTop;
const objects = [];
let focusedElement = undefined;
let mouseDown = false;
let movingElementId = undefined;

document.getElementById('addText').onclick = () => {
  const currentId = objects.length;
  objects.push({ id: `text_${currentId}`, index: currentId, type: 'text', value: 'New Text', width: '14px', color: '#000', rotation: 0, x: 225, y: 225 });
  // canvas.insertAdjacentHTML('afterbegin', `<p class="object_text" id="text_${objects.length - 1}" style="">New Text</p>`);
  canvas.insertAdjacentHTML('afterbegin', `<input disabled class="object_text" data-id="${currentId}" id="text_${currentId}" size="8" value="New Text"/>`);
}

window.addEventListener('dblclick', (event) => {
  if (event.target.getAttribute('class') === 'object_text') {
    // Removes disabled attribute from text ojbect
    event.target.removeAttribute('disabled');
    event.target.focus();
    document.getElementById('choose_color').removeAttribute('disabled');
    document.getElementById('rotation').removeAttribute('disabled');
    document.getElementById('scale').removeAttribute('disabled');
    focusedElement = objects[Number(event.target.getAttribute('data-id'))];
  }
});

window.addEventListener('click', (event) => {
  if (event.target.getAttribute('class') !== 'object_text' && event.target.getAttribute('id') !== 'choose_color') {
    // Sets disabled attribute in case of clicking anything besides text object
    for (let i of document.getElementsByClassName('object_text')) {
      i.setAttribute('disabled', 'disabled');
      document.getElementById('choose_color').setAttribute('disabled', 'disabled');
      document.getElementById('choose_color').value = '#000';
      document.getElementById('rotation').setAttribute('disabled', 'disabled');
      document.getElementById('rotation').value = 0;
      document.getElementById('scale').setAttribute('disabled', 'disabled');
      document.getElementById('scale').value = 14;
      focusedElement = undefined;
    }
  }
});

window.addEventListener('focusout', event => {
  if (event.target.getAttribute('class') === 'object_text') {
    // Doesn't allow chosen input to loose focus
    event.target.focus();
  }
});

window.addEventListener('input', event => {
  // Input events
  if (event.target.getAttribute('class') === 'object_text') {
    // Changes value of a particular text object
    const id = Number(event.target.getAttribute('data-id'));
    objects[id].value = event.target.value;
    if (objects[id].value.length === 0) {
      // Resizes input depending on a quantity of letters
      document.getElementById(objects[id].id).setAttribute('size', 1);
    }
    else {
      document.getElementById(objects[id].id).setAttribute('size', objects[id].value.length);
    }
  }

  if (event.target.getAttribute('id') === 'choose_color') {
    document.getElementById(focusedElement.id).style.color = event.target.value;
    objects[focusedElement.index].color = event.target.value;
  }

  if (event.target.getAttribute('id') === 'rotation') {
    document.getElementById(focusedElement.id).style.transform = `rotate(${event.target.value}deg)`;
    objects[focusedElement.index].rotation = Number(event.target.value);
  }

  if (event.target.getAttribute('id') === 'scale') {
    document.getElementById(focusedElement.id).style.fontSize = `${event.target.value}px`;
    objects[focusedElement.index].rotation = Number(event.target.value);
  }
});

window.addEventListener('drag', (event) => {
  if (event.target.getAttribute('class') === 'object_text') {
    event.preventDefault();
  }
});

window.addEventListener('mousedown', (event) => {
  if (event.target.getAttribute('class') === 'object_text') {
    movingElementId = event.target.getAttribute('id');
  }
});

window.addEventListener('mousemove', (event) => {
  if (movingElementId) {
    const difObj = document.getElementById('imp_image_section');
    const { offsetLeft, offsetTop } = difObj;
    const x = event.clientX - offsetLeft - 10;
    const y = event.clientY - offsetTop - 25;
    document.getElementById(movingElementId).style.transform = `translate(${x}px , ${y}px)`; // Depending on deference between client coordinates and object's coordinates , we calculate final coordinates
    objects[objects.findIndex(i => i.id === movingElementId)].x = x;
    objects[objects.findIndex(i => i.id === movingElementId)].y = y;
  }
});

window.addEventListener('mouseup', (event) => {
  movingElementId = undefined;
});