function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}
if(typeof browser !== 'undefined'){
    injectScript( browser.extension.getURL('/js/script.js'), 'body');
}
else if(typeof chrome !== 'undefined'){
    injectScript( chrome.extension.getURL('/js/script.js'), 'body');
}