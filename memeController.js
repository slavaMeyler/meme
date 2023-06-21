let gCanvas
let gCtx


function init() {
    
 gCanvas = document.querySelector('#canvas')
 gCtx = gCanvas.getContext('2d')
  renderImgs()
}





// function renderMeme() {
//     const img = new Image()
//     img.src = 'meme-imgs/1.jpg'
//     img.onload = () => {
//         gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xEnd,yEnd
//     }
// }


function renderImgs() {
    var strHTML = ''
    for (var i = 0; i < gImgs.length; i++) {
      
            strHTML += `<section>
            <img class="img"src="meme-imgs/${id}.jpg" alt=""> 
        </section>
         `

        }
    
    const elContainer = document.querySelector('.board')
    elContainer.innerHTML = strHTML
}

function renderImgs() {
    const imgs = creatImgs()
  
    // const elList = document.querySelector('.place-list')
    let strHtmls = gImgs.map(({ id }) => {
        return `
        <section>
        <img class="img"src="meme-imgs/${id}.jpg" alt=""> 
    </section>
     `
          
      })
      .join('')
    elList.innerHTML = strHtmls
  }