let colorsEnabled = true;
let colorSwapCounter = 0;

function hideColors(){
    let colorSwapText = "";
    if(colorSwapCounter > 0){
        for(let i = 0; i < colorSwapCounter; i++){
            colorSwapText += ", again";
        }
    }

    if(colorsEnabled){
        domCache("aboutMe").classList.add('noColor');
        domCache("colorControl").innerText = `restore joy and whimsy${colorSwapText}`;
        colorSwapCounter++;
    }
    if(!colorsEnabled){
        domCache("aboutMe").classList.remove('noColor');
        domCache("colorControl").innerText = `remove colorslop${colorSwapText}`;
    }

    colorsEnabled = !colorsEnabled;
}