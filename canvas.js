const canvas = new fabric.Canvas('c');
const fileInput = document.getElementById('fileInp');
const textObjects = [];
const imageObjects = []

document.getElementById('fileInp').addEventListener("change", function (e) {
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function (f) {
    var data = f.target.result;
    fabric.Image.fromURL(data, function (img) {
      var oImg = img.set({ left: 0, top: 0, angle: 0 }).scale(0.1);
      imageObjects.push(oImg);
      canvas.add(oImg).renderAll();
      var a = canvas.setActiveObject(oImg);
      var dataURL = canvas.toDataURL({ format: 'png', quality: 0.8 });
    });
  };
  reader.readAsDataURL(file);
});

document.getElementById('addText').onclick = () => {
  const textbox = new fabric.Textbox('New Text', {
    left: 15,
    top: 15,
    width: 80,
    fontSize: 14,
    fontFamily: 'Arial'
  });
  textObjects.push(textbox);
  canvas.add(textbox).setActiveObject(textbox);
  canvas.moveTo(textbox, 999);
}

window.addEventListener('click' , (event) => {
  if(event.target.tagName.toLowerCase() !== 'canvas'){
    for(let text of textObjects){
      canvas.bringToFront(text)
    }
    canvas.discardActiveObject();
    canvas.renderAll(); 
  }
})




