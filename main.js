let aElem = document.getElementById("a-text-input")
let thetaRadOutput = document.getElementById("theta-rad-text-output")
let tehtaDegOutput = document.getElementById("theta-deg-text-output")
let lTextOutput = document.getElementById("length-text-output")
let widthTextOutput =document.getElementById("width-text-output")
let abTextOutput = document.getElementById("ab-text-output")
let bcTextOutput = document.getElementById("bc-text-output")

let outputSe = document.getElementById("output-se")

function submit(event){ // 1. 引数に event を追加
    // 2. もしボタンが <button type="submit"> などの場合は、画面リロードを防ぐ
    if (event) event.preventDefault(); 

    let a = Number(aElem.value)

    let b = 50 * 60/(60-a)

    let theta = 120 * Math.PI / b
    let l = b-(b-50)*Math.cos(60*Math.PI/b)

    thetaRadOutput.innerText = theta
    tehtaDegOutput.innerText = 2.16*10**4/b
    lTextOutput.innerText = l
    widthTextOutput.innerText = 2*b*Math.sin(60*Math.PI/b)
    abTextOutput.innerText = 50*Math.cos(60*Math.PI/b)
    bcTextOutput.innerText = 50*Math.sin(60*Math.PI/b)

    outputSe.play()

    // 3. タイマーを使ってスクロール処理をわずかに遅らせる
    setTimeout(() => {
        bcTextOutput.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest' // 画面外の時だけスマートに移動させるオプション（おすすめ）
        })
    }, 10);
}