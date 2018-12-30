var ta = document.createElement("textarea");
var reg = /(www.amazon.[a-z]+.?[a-z]*)\/(.*?)\//;
if (location.href.match(reg)[2].match(/%/)) {
    ta.value = location.href.replace(reg, '$1/').replace(/\?.*/, '');
} else {
    ta.value = location.href.match(/.*\//)[0];
}
document.body.appendChild(ta);
ta.select();
document.execCommand('copy');
ta.parentElement.removeChild(ta);