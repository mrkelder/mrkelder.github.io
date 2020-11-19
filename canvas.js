const canvas = new fabric.Canvas('c');
canvas.selection = false;
const fileInput = document.getElementById('fileInp');
const colorInput = document.getElementById('choose_color');
let lastlySelectedObject;

document.getElementById('fileInp').addEventListener("change", function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (f) {
    const data = f.target.result;
    fabric.Image.fromURL(data, function (img) {
      const oImg = img.set({ left: 0, top: 0, angle: 0 }).scale(0.1);
      oImg.setControlsVisibility({ mt: false, mb: false, ml: false, mr: false });
      viewObjects[currentViewIndex].imageObjects.push(oImg);
      canvas.add(oImg).renderAll();
      oImg.on('deselected', () => {
        lastlySelectedObject = oImg;
      });
    });
  };
  reader.readAsDataURL(file);
});

document.getElementById('addText').onclick = () => {
  const options = {
    id: viewObjects[currentViewIndex].textObjects.length + 1,
    left: 15,
    top: 15,
    width: 80,
    fontSize: 14,
    fontFamily: 'Arial',
    fill: 'black'
  };
  const textbox = new fabric.Textbox('New Text', options);
  textbox.setControlsVisibility({ mt: false, mb: false });
  textbox.on('deselected', () => {
    lastlySelectedObject = textbox;
  });

  viewObjects[currentViewIndex].textObjects.push(textbox);
  canvas.add(textbox).setActiveObject(textbox);
  canvas.moveTo(textbox, 999);
}

colorInput.oninput = ({ target: { value } }) => {
  if (lastlySelectedObject) {
    lastlySelectedObject.set('fill', value);
    canvas.renderAll();
  }
}

window.addEventListener('click', (event) => {
  if (event.target.tagName.toLowerCase() !== 'canvas') {
    for (let text of viewObjects[currentViewIndex].textObjects) {
      canvas.bringToFront(text);
    }
    canvas.discardActiveObject();
    canvas.renderAll();
  }
});