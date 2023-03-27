const terms = document.getElementsByClassName("SetPageTerms-term");
const csv = [`"term"|"definition"`];

Array.from(terms).forEach((term) => {
    const word = term
        .querySelector(".SetPageTerm-wordText")
        .textContent.replace(/[\n\r]+/g, "/");
    const def = term
        .querySelector(".SetPageTerm-definitionText")
        .textContent.replace(/[\n\r]+/g, "/");

    csv.push(`"${word}"|"${def}"`);
});
const finalCsv = csv.slice(1);

var blob1 = new Blob([finalCsv.join("\n")], {
    type: "text/plain;charset=utf-8",
});
var url = window.URL || window.webkitURL;
link = url.createObjectURL(blob1);
var a = document.createElement("a");

a.download = `${document.querySelector(".SetPage-setTitle").textContent}.csv`;
a.href = link;
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
