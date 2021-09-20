var ta = document.createElement('textarea');
var reg = /(www.amazon.[a-z]+.?[a-z]*)\/(.*?)\//;
var fp = location.href.match(reg)[2];
if (fp.match(/%/)) {
  ta.value = location.href.replace(reg, '$1/').replace(/[a-z]+=.*$/, '');
} else {
  ta.value = location.href.match(/.*[\/|?]/)[0].replace(/\?/, '');
}
document.body.appendChild(ta);
ta.select();
document.execCommand('copy');
ta.parentElement.removeChild(ta);
