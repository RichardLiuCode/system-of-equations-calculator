document.getElementById("convert").addEventListener("click", function () {
    const a1 = parseFloat(document.getElementById("a1").value);
    const b1 = parseFloat(document.getElementById("b1").value);
    const c1 = parseFloat(document.getElementById("c1").value);
    const a2 = parseFloat(document.getElementById("a2").value);
    const b2 = parseFloat(document.getElementById("b2").value);
    const c2 = parseFloat(document.getElementById("c2").value);
    const y = (a1 * c2 - a2 * c1) / (a1 * b2 - a2 * b1);
    const x = (b2 * c1 - b1 * c2) / (a1 * b2 - a2 * b1);
    document.getElementById("result").value = "The solution is x = " + x + " and " + "y = " + y;
});

document.getElementById("inputValueCopyBtn").addEventListener("click", function () {
    document.getElementById("input").select();
    navigator.clipboard.writeText(document.getElementById("input").value);
});
document.getElementById("resultValueCopyBtn").addEventListener("click", function () {
    document.getElementById("result").select();
    navigator.clipboard.writeText(document.getElementById("result").value);
});

const ctx = document.getElementById("graph").getContext("2d");
let maxWidth = document.getElementById("graph").width;
let maxHeight = document.getElementById("graph").height;
ctx.fillStyle = "white";;
ctx.fillRect(0, 0, 1000, 1000);
ctx.strokeStyle = "black";
ctx.strokeWidth = "5";
ctx.beginPath();
for (let i = 0; i < 20; i++) {
    ctx.moveTo(50, i * 50);
    ctx.lineTo(maxWidth - 50, i * 50);
    ctx.moveTo(i * 50, 50);
    ctx.lineTo(i * 50, maxHeight - 50);
}
ctx.stroke();
