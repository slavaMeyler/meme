let gCanvas
let gCtx


  function init() {
    gCanvas = document.querySelector('#canvas')
    gCtx = gCanvas.getContext('2d')

    renderMeme()
  } 




  function renderMeme() {
    const img = new Image()
    img.src = 'meme-imgs (square)/3.jpg'
    img.onload = () => {
      gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xEnd,yEnd
    }
  }