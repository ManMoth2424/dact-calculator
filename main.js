aElem = document.getElementById("a-text-input")
thetaRadOutput = document.getElementById("theta-rad-text-output")
tehtaDegOutput = document.getElementById("theta-deg-text-output")
lengthTextOutput = document.getElementById("length-text-output")
function submit(){
    a = Number(aElem.value)

    b = 50 * 60/(60-a)

    theta = 120 * Math.PI / b
    l = b-(b-50)*Math.cos(60*Math.PI/b)

    thetaRadOutput.innerText = theta
    lengthTextOutput.innerText = l
    tehtaDegOutput.innerText = 2.16*10**4/b
}