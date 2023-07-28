function getRandomColor(col){
    let randomCo = Math.floor(Math.random() * color.length)
    
    let bgrandom = color[randomCo]
    
    return bgrandom;
}

let color = ["blue","red","green","yellow","orrange"]
let backgroundcol = getRandomColor(color)


function changebackgroundcolor(){
    let bgcolor = document.getElementById('background-change');
    bgcolor.style.backgroundColor = backgroundcol;
    console.log(backgroundcol)
}

changebackgroundcolor();

