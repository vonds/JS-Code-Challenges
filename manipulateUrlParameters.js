// https://www.codewars.com/kata/524300d5add6f657e20008ff
function addOrChangeUrlParameter (url, param) {
    url = url.replace(new RegExp(param.split('=')[0]+'=[^&]*'), param);
    return url + (url.indexOf(param) >= 0 ? '' : (url.indexOf('?')>=0?'&':'?')+param);
}