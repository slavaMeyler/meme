let gCanvas
let gCtx


function init() {
    
 gCanvas = document.querySelector('#canvas')
 gCtx = gCanvas.getContext('2d')
  renderImgs()
  renderMeme()
}





function renderMeme() {
    const meme = getMeme()
    const img = new Image()
    img.src = `meme-imgs/${gMeme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xEnd,yEnd
      }
      console.log(this)
}


function renderImgs() {
    const imgs =createImgs()
    const elList = document.querySelector('.place-list')
   
    // const elList = document.querySelector('.place-list')
    let strHtmls = gImgs.map(({ id }) => {
        return `
        <img class="img"src="meme-imgs/${id}.jpg" onclick="onImgChange(${id})"  alt=""> 
     `
      })
      .join('')
    elList.innerHTML = strHtmls
  }

  function onImgChange(id){
    imgChange(id)
   
  }