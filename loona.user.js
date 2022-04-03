// ==UserScript==
// @name         Loona overlay
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the canvas!
// @author       nopeless
// @match        https://www.reddit.com/r/place*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            const time = Math.floor(Date.now() / 10000);
            i.src = "https://raw.githubusercontent.com/nopeless/loona-place/master/loona_overlay.png?tstamp=" + time;
            if (i.width === i.height) {
                i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            } else {
               i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
            }
            console.log(i);
            return i;
        })())

    }, false);

}
