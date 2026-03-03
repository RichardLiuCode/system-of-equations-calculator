console.log("Script Loaded"); // Delete this line when making a project

document.getElementById("inputValueCopyBtn").addEventListener("click", function () {
    document.getElementById("input").select();
    navigator.clipboard.writeText(document.getElementById("input").value);
});
document.getElementById("resultValueCopyBtn").addEventListener("click", function () {
    document.getElementById("result").select();
    navigator.clipboard.writeText(document.getElementById("result").value);
});