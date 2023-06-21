// var gImgs = [{ id: 1, url: 'meme-imgs/1.jpg', keywords: ['funny', 'cat'] }]
const gImgs=[]
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red'
        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }



function getMeme() {
    return gMeme
}

function getImages() {
    return gImgs
}

function setLineTxt() {


}
creatImgs()
function creatImgs() {
    for (var i = 0; i < 18; i++) {
        const id = i + 1
        const img = {
            id,
            url: `meme-imgs/${id}.jpg`,
            keywords: []
        }
        gImgs.push(img)
    }
console.log(gImgs)
}