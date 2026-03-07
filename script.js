document.getElementById("convert").addEventListener("click", function () {
    const a1 = parseFloat(document.getElementById("a1").value);
    const b1 = parseFloat(document.getElementById("b1").value);
    const c1 = parseFloat(document.getElementById("c1").value);
    const a2 = parseFloat(document.getElementById("a2").value);
    const b2 = parseFloat(document.getElementById("b2").value);
    const c2 = parseFloat(document.getElementById("c2").value);
    const y = (a1 * c2 - a2 * c1) / (a1 * b2 - a2 * b1);
    const x = (b2 * c1 - b1 * c2) / (a1 * b2 - a2 * b1);
    const stepsTextString = `Step 1:
         #--------#
        ${a1}x + ${b1}y = ${c1}
         #--------#
        ${b1}y = ${c1} - ${a1}x
         #--------#
        y = ${c1 / b1} - ${a1}x ÷ ${b1}
         #--------#
         #--------#
        Step 2:
         #--------#
        ${a2 != 1 ? a2 : ""}x + ${b2}y = ${c2}
         #--------#
        ${a2 != 1 ? a2 : ""}x + ${b2}(${c1 / b1} - ${a1}x/${b1}) = ${c2}
         #--------#
        ${a2 != 1 ? a2 : ""}x + ${b2 * (c1 / b1)} - ${b2}(${a1}x/${b1}) = ${c2}
         #--------#
        ${a2 != 1 ? a2 : ""}x - ${b2}(${a1}x/${b1}) = ${c2 - (b2 * (c1 / b1))}
         #--------#
        ${a2 != 1 ? a2 : ""}x - [${b2}(${a1}/${b1})]x = ${c2 - (b2 * (c1 / b1))}
         #--------#
        ${a2 != 1 ? a2 : ""}x - ${b2 * a1 / b1}x = ${c2 - (b2 * (c1 / b1))}
         #--------#
        ${a2 - b2 * a1 / b1}x = ${c2 - (b2 * (c1 / b1))}
         #--------#
        ${a2 - b2 * a1 / b1 == 1 ? `x = ${c2 - (b2 * (c1 / b1))} ` : ` ${a2 - b2 * a1 / b1}x/${a2 - b2 * a1 / b1} = ${c2 - (b2 * (c1 / b1))}/${a2 - b2 * a1 / b1}`}
        ${a2 - b2 * a1 / b1 != 1 ? `#--------#x = ${(c2 - (b2 * (c1 / b1))) / (a2 - b2 * a1 / b1)}` : ""}
         #--------#
         #--------#
        Step 3:
         #--------#
        ${a2}x + ${b2}y = ${c2}
         #--------#
        ${a2}(${(c2 - (b2 * (c1 / b1))) / (a2 - b2 * a1 / b1)}) + ${b2}y = ${c2}
         #--------#
         ${a2 * ((c2 - (b2 * (c1 / b1))) / (a2 - b2 * a1 / b1))} + ${b2}y = ${c2}
         #--------#
        ${b2}y = ${c2} - ${a2 * ((c2 - (b2 * (c1 / b1))) / (a2 - b2 * a1 / b1))}
         #--------#
        ${b2}y = ${c2 - (a2 * ((c2 - (b2 * (c1 / b1))) / (a2 - b2 * a1 / b1)))}
         #--------#
        ${b2 == 1 ? `y = ${c2 - (a2 * ((c2 - (b2 * (c1 / b1))) / (a2 - b2 * a1 / b1)))}` : `${b2}y/${b2} = ${c2 - (a2 * ((c2 - (b2 * (c1 / b1))) / (a2 - b2 * a1 / b1)))}/${b2}`}
         #--------#
        ${b2 != 1 ? `y = ${(c2 - (a2 * ((c2 - (b2 * (c1 / b1))) / (a2 - b2 * a1 / b1)))) / b2}` : ""}
        `;
    const stepsArray = stepsTextString.split("#--------#");
    const beautifiedHTMLString = stepsArray.map(function (text) {
        for (let i = 0; i < 7; i++) {
            text = text.replace("- -", "+ ");
            text = text.replace("+ -", "- ");
            text = text.replace("\n", "");
        }
        return text;
    }).join("<br>");

    document.getElementById("result").innerHTML =
        `<p style="border:none">${beautifiedHTMLString}</p>
        <br>
<p style="border:none">The solution is x = ${x} and y = ${y}.</p>
    `;
    Plotly.newPlot("graph", {
        "data": [{ "x": [x], "y": [y] }],
        "layout": { autosize: true }
    });
});

document.getElementById("inputValueCopyBtn").addEventListener("click", function () {
    document.getElementById("input").select();
    navigator.clipboard.writeText(document.getElementById("input").value);
});
document.getElementById("resultValueCopyBtn").addEventListener("click", function () {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents("result");
    selection.removeAllRanges();
    selection.addRange(range);
    range.select();
    navigator.clipboard.writeText(document.getElementById("result").value);
});