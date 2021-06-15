// == UserScript ==
// @name Testportal Multi Tool
// @namespace https: //*.testportal.pl/
// @version 1.2.16
// @description Ha-ha H @ ck0wansko xd
// @author Czarek Nakamoto (mrcyjanek.net)
// @updateURL https://git.mrcyjanek.net/mrcyjanek/testportal-multitool/raw/branch/main/script.js
// @downloadURL https://git.mrcyjanek.net/mrcyjanek/testportal-multitool/raw/branch/main/script.js
// @match https: //*.testportal.net/*
// @match https: //*.testportal.pl/*
// @grant none
// == / UserScript ==
console.log ('[TESTPORTAL MULTITOOL] Started')
if (typeof exportFunction! == "function") {
    function exportFunction (a, b, c) {
        console.log ('exportFunction (', a, b, c, ')')
        window [c.defineAs] = a
        document [c.defineAs] = a
    }
}
if (document.location.href.includes ("/ exam / LoadTestStart.html")) {
    let honest = document.getElementsByClassName ('honest-respondent-text')
    if (honest [0]) {
        honest [0] .innerHTML = `This test uses the <i> <b>" Honest Solver "</b> </i> technology. However, take it easy, click outside the test area, do what you want. Any attempt to leave the browser tab with the test will not be recorded. Before starting, I recommend that you open your notes so you don't have to search for them later. <br /> Good luck, mummy, I'm sitting in this swamp with you <br /> <a href="https://mrcyjanek.net" target="_blank"> Nakamoto cup. </a> `
    }
    let honestlogo = document.getElementsByClassName ('honest-respondent-icon')
    if (honestlogo [0]) {
        honestlogo [0] .outerHTML = `<img width =" 64px "height =" 64px "src =" https://git.mrcyjanek.net/mrcyjanek/testportal-multitool/raw/branch/main/static/error.svg "> </img>`
    }
} else {
    // eslint-disable-next-line
    OwUKGkPT = (() => {})
    // eslint-disable-next-line
    onCountdownFinished = (() => {return 0});
    setInterval (() => {window.wrappedJSObject.startTime = new Date (). getTime ()}, 777);
    setTimeout (() => {
        RegExp.prototype.test = function (s) {
            if (this.toString (). includes ("native code") && this.toString (). includes ("function")) {
                return true;
            }
        }
        setTimeout (() => {
            hasFocus = function () {return true;};
            exportFunction (hasFocus, document, {defineAs: 'hasFocus'})
        }, 200)
    }, 3000)
    // Languages
    var languages_list = 'xa-ar xa-en ar-es au-en at-de be-fr be-nl br-pt bg-bg ca-en ca-fr ct-ca cl-es cn-zh co-es hr -hr cz-cs dk-da ee-et fi-fi fr-fr de-de gr-el hk-tzh hu-hu in-en id-id id-en ie-en il-he it-it jp-jp kr-kr lv-lv lt-lt xl-es my-ms my-en mx-es nl-nl nz-en no-no pe-es ph-en ph-tl pl-pl pt-pt ro-ro ru- ru sg-en sk-sk sl-sl za-en es-es se-sv ch-de ch-fr ch-it tw-tzh th-th tr-tr ua-uk uk-en us-en ue-es ve -es vn-vi wt-wt'.split ('');
    if (! localStorage.hack_lang) {
        localStorage.hack_lang = prompt ("Oupsie! You haven't given a language that you can communicate with me in. ('en-us') is a good idea \ n \ n" + languages_list.join (','));
    }
    if (! localStorage.hack_lang_alter) {
        localStorage.hack_lang_alter = prompt ("Oups! What alternative language do you choose? I recommend en-en if you are good at English. This language will be used to look for answers when they are not available in '" + localStorage.hack_lang + "' \ nIf you are writing a test eg in German, I recommend changing the alternative language to 'de-de' \ n \ n "+ languages_list.join (','));
    }
    const language = localStorage.hack_lang;
    const languageAlter = localStorage.hack_lang_alter;
    const languageAlterSplit = languageAlter.split ('-') [1];
    const languageSplit = language.split ('-') [1];

    const geneza = "Sorry you have to read this, but dismissing this alert box blows the page, so calmly click ok. Use the opportunity to report errors to @cyjan: mrcyjanek.net on matrix (element.io) or github.com/MrCyjaneK/testportal -multitool on github. "
    // Colors and texts
    if (localStorage.u_hakierMode == "true") {
        const darkBackground = '# 000'
        const lightForeground = '#fff'
        if (document.getElementsByClassName ('test-body-background'). length> 0) {
            document.getElementsByClassName ('test-body-background') [0] .style = "background-color:" + darkBackground + "; color:" + lightForeground + ";";
        }
        if (document.getElementsByClassName ('question-area'). length> 0) {
            document.getElementsByClassName ('question-area') [0] .style = "background-color:" + darkBackground + "; color:" + lightForeground + ";";
        }
        document.body.style = "background-color:" + darkBackground + "; color:" + lightForeground + ";";
        //document.getElementsByClassName('logo_wide logo_default ') [0] .src = "https://mrcyjanek.net/testportal-logo.svg";
        if (document.getElementsByClassName ('warning_wrap warning-typography'). length> 0) {
            document.getElementsByClassName ('warning_wrap warning-typography') [0] .style = "text-align: left; font-family: monospace"; 
        }
    }
    if (document.getElementsByClassName ('warning_icon_text warning_col1'). length> 0) {
        document.getElementsByClassName ('warning_icon_text warning_col1') [0] .innerText = genesis;
    }
    function check (c) {
        if (c == "true") {
            return "checked"
        }
        return null
    }
    exportFunction (check, document, {defineAs: 'check'})
    // Info element
    var infoElementText = `<span> Language: $ {language} </span> | <span> Alternate language: $ {languageAlter} </span> <br />
    <a onclick="localStorage.clear(); window.location.href = window.location.href"> reset config </a> <br />
    Ch3 @ ts: <span id = "cheatscount"> ??? </span> <a onclick="document.cookie ='blurs=0'"> Force zero </a> | <br />
    By: Czarek Nakamoto (mrcyjanek.net) | <a onclick="alert(\` $$$$ genesis }\`)"> Report a bug </a>. <br />
    Where do you want to search for information? <br />
    <label> <input type = "checkbox" $ {check (localStorage.u_hakierMode)} onclick = "localStorage.u_hakierMode = this.checked"> Hakier mode </label> <br />
    <label> <input type = "checkbox" $ {check (localStorage.u_fancybg)} onclick = "localStorage.u_fancybg = this.checked"> Fancy bacground image </label> <input id = "animeurl" type = "text" onchange = "localStorage.animebg = this.value" value = $ {localStorage.animebg? localStorage.animebg: "https://wallpapercave.com/wp/2xF3MmY.jpg"}> </input> <br />
    <label> <input type = "checkbox" $ {check (localStorage.u_googiel)} onclick = "localStorage.u_googiel = this.checked"> Googiel </label> <br />
    <label> <input type = "checkbox" $ {check (localStorage.u_googielImg)} onclick = "localStorage.u_googielImg = this.checked"> Googiel Pictures (click on image to search) </label> <br />
    <label> <input type = "checkbox" $ {check (localStorage.u_kaczka)} onclick = "localStorage.u_kaczka = this.checked"> Kaczka $ {language} </label> <br />
    <label> <input type = "checkbox" $ {check (localStorage.u_kaczkaA)} onclick = "localStorage.u_kaczkaA = this.checked"> Duck $ {languageAlter} </label> <br />
    <label> <input type = "checkbox" $ {check (localStorage.u_jpis)} onclick = "localStorage.u_jpis = this.checked"> ***** *** </label> <br />
    <iframe width = 99% heigh = 128 src = "https://mrcyjanek.net/projects/testportal-multitool/info.html"> </iframe>
    <! - $ {document.getElementsByClassName ('logo_wide') [0] .src} ->
    <hr />
    <details> <summary> Calculator </summary> <iframe width = 99% height = 700 src = "https://www.cymath.com/"> </iframe> </details>
    <hr /> `
    if (localStorage.u_fancybg == "true") {
        setTimeout (() => {
            document.body.style = "background-repeat: no-repeat; background-size: contain; background-image: url (" + document.getElementById ('animeurl'). value + ");"
            document.getElementsByClassName ('test-body-background') [0] .style = "opacity: 0.8;"
        }, 128)
    }
    var infoElement = createElementFromHTML (
        infoElementText
    );
    document.body.insertBefore (infoElement, document.body.firstChild);
    setInterval (() => {
        document.getElementById ('cheatscount'). innerText = getCookie ('blurs');
        if (getCookie ('blurs')! = 0) {
            document.cookie = 'blurs = 0';
        }
    }, 500);
    window.onerror = (() => {console.log ('Oups! I won \' t send this error report ')})
    // Definitions next to the questions
    var body;
    var i;
    // Answers
    const cyrb53 = function (str, seed = 0) {
        let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
        for (let i = 0, ch; i <str.length; i ++) {
            ch = str.charCodeAt (i);
            h1 = Math.imul (h1 ^ ch, 2654435761);
            h2 = Math.imul (h2 ^ ch, 1597334677);
        }
        h1 = Math.imul (h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul (h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul (h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul (h1 ^ (h1 >>> 13), 3266489909);
        return 4294967296 * (2097151 & h2) + (h1 >>> 0);
    };
    exportFunction (cyrb53, document, {defineAs: 'cyrb53'})
    body = document.getElementsByClassName ('question_essence');
    for (i = 0; i <ciala.length; i ++) {
        ((i, body) => {setTimeout (() => {res (body [i], '<details> <summary> Pad </summary> <iframe width = "99%" height = "700" src = "https://pad.riseup.net/p/uwu'+cyrb53(ciala[i].innerText)+'-keep"> </iframe> </details> ')})}) (i, body) ;
    }
    // Questions
    body = document.getElementsByClassName ('answer_body');
    for (i = 0; i <ciala.length; i ++) {
        ((i, body) => {setTimeout (() => {res (body [i], '')})}) (i, body);
    }
    // Generate the response.
    function odp (body, appendix) {
        var tresc_html = cialo.innerHTML;
        var tresc = cialo.innerText;
        var lower_tresc = tresc.toLowerCase ();
        var answer = "";
        if (lower_tresc === 'true' || lower_tresc === 'false') {
            answer = "<p> No definition for true / false </p>";
            cialo.innerHTML = tresc_html + reply
            cialo.outerHTML + = "<hr />"
        } else {
            // Duck 1/2
            if (localStorage.u_kaczkaA == "true") {
                try {
                    var d1_url = "https://api.duckduckgo.com/?q="+encodeURIComponent(tresc)+"&format=json&pretty=1&kl="+languageAlter;
                    var d1_request = new XMLHttpRequest ();
                    d1_request.open ('GET', d1_url, false); // `false` makes the request synchronous
                    d1_request.send (null);
                    var d1_json_reply = JSON.parse (d1_request.responseText);
                    if (d1_request.status === 200 && d1_json_reply.Abstract) {
                        answer + = "<details> <summary> DuckDuckGo -" + languageAlter + "</summary>";
                        answer + = "<p>" + d1_json_reply.Abstract + "</p>";
                        answer + = "</details>";
                    } else {
                        answer + = ""
                    }
                } catch (e) {console.warn (e)}
            }
            // Duck 2/2
            try {
                if (localStorage.u_kaczka == "true") {
                    var d2_url = "https://api.duckduckgo.com/?q="+encodeURIComponent(tresc)+"&format=json&pretty=1&kl="+language;
                    var d2_request = new XMLHttpRequest ();
                    d2_request.open ('GET', d2_url, false); // `false` makes the request synchronous
                    d2_request.send (null);
                    var d2_json_reply = JSON.parse (d2_request.responseText);
                    if (d2_request.status === 200 && d2_json_reply.Abstract) {
                        answer + = "<details> <summary> DuckDuckGo -" + language + "</summary>";
                        answer + = "<p>" + d2_json_reply.Abstract + "</p>";
                        answer + = "</details>";
                    } else {
                        answer + = ""
                    }
                }
            } catch (e) {console.warn (e)}
            // Google
            if (localStorage.u_googiel == "true") {
                answer + = '<details> <summary> Googiel </summary> <iframe width = "99%" height = "700" src = "https://www.google.com/search?igu=1&q='+encodeURI (content) + '"> </iframe> </details>';
            }
        }
        answer + = appendix
        cialo.innerHTML = tresc_html + reply
        cialo.innerHTML + = "<hr />"
    }
    exportFunction (odp, document, {defineAs: 'odp'})
    function createElementFromHTML (htmlString) {
        var div = document.createElement ('div');
        div.innerHTML = htmlString;
        // Change this to div.childNodes to support multiple top-level nodes
        return div;
    }
    function getCookie (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent (document.cookie);
        var ca = decodedCookie.split (';');
        for (var i = 0; i <ca.length; i ++) {
            var c = ca [i];
            while (c.charAt (0) == '') {
                c = c.substring (1);
            }
            if (c.indexOf (name) == 0) {
                return c.substring (name.length, c.length);
            }
        }
        return "???";
    }
    var lazy = document.getElementsByClassName ('lazy');
    for (i = 0; i <lazy.length; i ++) {
        ((lazy, i) => {
            console.log (i)
            setTimeout (() => {
                lazy [i] .src = lazy [i] .getAttribute ('data-src');
                lazy [i] .className = ""
            }, 1)
        }) (lazy, i)
    }
    var imgs = document.getElementsByTagName ('img');
    // imgs = [] // todo
    for (i = 0; i <imgs.length; i ++) {
        ((imgs, i) => {
            setTimeout (() => {
                if (localStorage.u_googielImg == "true") {
                    if (imgs [i]) {
                        imgs [i] .onclick = ((a) => {a = a.target; a.outerHTML + = '<details> <summary> Googiel Image </summary> <iframe width = "99%" height = "700 "src =" https://www.google.com/searchbyimage?igu=1&image_url='+encodeURI(a.src)+ '"> </iframe> </details>';})
                    }
                }
            }, 3333)
        }) (imgs, i)
    }
}
