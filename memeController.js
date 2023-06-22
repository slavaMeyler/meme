let gCanvas
let gCtx


function init() {
    
 gCanvas = document.querySelector('#canvas')
 gCtx = gCanvas.getContext('2d')
  renderImgs()
  
}




renderMeme()
function renderMeme() {
    const meme = getMeme()
    meme.src = `meme-imgs/${gMeme.selectedImgId}.jpg`
    meme.onload = () => {
        gCtx.drawImage(meme, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xEnd,yEnd
    }
   return meme
}


function renderImgs() {
    const imgs =creatImgs()
    const elList = document.querySelector('.place-list')
   
    // const elList = document.querySelector('.place-list')
    let strHtmls = gImgs.map(({ id }) => {
        return `
        <img class="img"src="meme-imgs/${id}.jpg" alt=""> 
     `
      })
      .join('')
    elList.innerHTML = strHtmls
  }

