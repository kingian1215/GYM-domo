const nametE1 = document.querySelector("#name");
const weightE1 = document.querySelector("#weight");
const heightE1 = document.querySelector("#height");
const calcE1 = document.querySelector("#calc");

console.log(nametE1, weightE1, heightE1, calcE1);

calcE1.addEventListener("click", () => {
    let name = nametE1.value;
    let weight = weightE1.value;
    let height = heightE1.value;

    // if (isNaN(weight) || isNaN(height)){
        // alert("輸入錯誤");
        // return;
    // }

    let bmi = getBmi(height, weight);
// 
    if (bmi == Infinity){
        alert("輸入錯誤");
        return;
    }
    
    alert(`${name} bmi=${bmi}`)
})

function getBmi(height, weight, point = 2){
    let bmi = weight/(height/100)**2;
    return bmi.toFixed(point);
}