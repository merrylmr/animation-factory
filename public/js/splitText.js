/*!
 * SplitText 3.12.3
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!function(D, u) {
    "object" == typeof exports && "undefined" != typeof module ? u(exports) : "function" == typeof define && define.amd ? define(["exports"], u) : u((D = D || self).window = D.window || {})
}(this, function(u) {
    "use strict";
    var b = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    function n(D) {
        U = document,
            e = window,
        (i = i || D || e.gsap || console.warn("Please gsap.registerPlugin(SplitText)")) && (r = i.utils.toArray,
            s = i.core.context || function() {}
            ,
            t = 1)
    }
    function q() {
        return String.fromCharCode.apply(null, arguments)
    }
    function v(D) {
        return e.getComputedStyle(D)
    }
    function w(D) {
        return "absolute" === D.position || !0 === D.absolute
    }
    function x(D, u) {
        for (var e, t = u.length; -1 < --t; )
            if (e = u[t],
            D.substr(0, e.length) === e)
                return e.length
    }
    function z(D, u) {
        void 0 === D && (D = "");
        var e = ~D.indexOf("++")
            , t = 1;
        return e && (D = D.split("++").join("")),
            function() {
                return "<" + u + " style='position:relative;display:inline-block;'" + (D ? " class='" + D + (e ? t++ : "") + "'>" : ">")
            }
    }
    function A(D, u, e) {
        var t = D.nodeType;
        if (1 === t || 9 === t || 11 === t)
            for (D = D.firstChild; D; D = D.nextSibling)
                A(D, u, e);
        else
            3 !== t && 4 !== t || (D.nodeValue = D.nodeValue.split(u).join(e))
    }
    function B(D, u) {
        for (var e = u.length; -1 < --e; )
            D.push(u[e])
    }
    function C(D, u, e) {
        for (var t; D && D !== u; ) {
            if (t = D._next || D.nextSibling)
                return t.textContent.charAt(0) === e;
            D = D.parentNode || D._parent
        }
    }
    function D(u) {
        var e, t, F = r(u.childNodes), i = F.length;
        for (e = 0; e < i; e++)
            (t = F[e])._isSplit ? D(t) : e && t.previousSibling && 3 === t.previousSibling.nodeType ? (t.previousSibling.nodeValue += 3 === t.nodeType ? t.nodeValue : t.firstChild.nodeValue,
                u.removeChild(t)) : 3 !== t.nodeType && (u.insertBefore(t.firstChild, t),
                u.removeChild(t))
    }
    function E(D, u) {
        return parseFloat(u[D]) || 0
    }
    function F(u, e, t, F, i, n, s) {
        var r, o, l, d, a, p, h, f, c, g, x, y, b = v(u), S = E("paddingLeft", b), _ = -999, m = E("borderBottomWidth", b) + E("borderTopWidth", b), q = E("borderLeftWidth", b) + E("borderRightWidth", b), T = E("paddingTop", b) + E("paddingBottom", b), N = E("paddingLeft", b) + E("paddingRight", b), L = E("fontSize", b) * (e.lineThreshold || .2), W = b.textAlign, H = [], O = [], j = [], k = e.wordDelimiter || " ", V = e.tag ? e.tag : e.span ? "span" : "div", M = e.type || e.split || "chars,words,lines", R = i && ~M.indexOf("lines") ? [] : null, P = ~M.indexOf("words"), z = ~M.indexOf("chars"), G = w(e), $ = e.linesClass, I = ~($ || "").indexOf("++"), J = [], K = "flex" === b.display, Q = u.style.display;
        for (I && ($ = $.split("++").join("")),
             K && (u.style.display = "block"),
                 l = (o = u.getElementsByTagName("*")).length,
                 a = [],
                 r = 0; r < l; r++)
            a[r] = o[r];
        if (R || G)
            for (r = 0; r < l; r++)
                ((p = (d = a[r]).parentNode === u) || G || z && !P) && (y = d.offsetTop,
                R && p && Math.abs(y - _) > L && ("BR" !== d.nodeName || 0 === r) && (h = [],
                    R.push(h),
                    _ = y),
                G && (d._x = d.offsetLeft,
                    d._y = y,
                    d._w = d.offsetWidth,
                    d._h = d.offsetHeight),
                R && ((d._isSplit && p || !z && p || P && p || !P && d.parentNode.parentNode === u && !d.parentNode._isSplit) && (h.push(d),
                    d._x -= S,
                C(d, u, k) && (d._wordEnd = !0)),
                "BR" === d.nodeName && (d.nextSibling && "BR" === d.nextSibling.nodeName || 0 === r) && R.push([])));
        for (r = 0; r < l; r++)
            if (p = (d = a[r]).parentNode === u,
            "BR" !== d.nodeName)
                if (G && (c = d.style,
                P || p || (d._x += d.parentNode._x,
                    d._y += d.parentNode._y),
                    c.left = d._x + "px",
                    c.top = d._y + "px",
                    c.position = "absolute",
                    c.display = "block",
                    c.width = d._w + 1 + "px",
                    c.height = d._h + "px"),
                !P && z)
                    if (d._isSplit)
                        for (d._next = o = d.nextSibling,
                                 d.parentNode.appendChild(d); o && 3 === o.nodeType && " " === o.textContent; )
                            d._next = o.nextSibling,
                                d.parentNode.appendChild(o),
                                o = o.nextSibling;
                    else
                        d.parentNode._isSplit ? (d._parent = d.parentNode,
                        !d.previousSibling && d.firstChild && (d.firstChild._isFirst = !0),
                        d.nextSibling && " " === d.nextSibling.textContent && !d.nextSibling.nextSibling && J.push(d.nextSibling),
                            d._next = d.nextSibling && d.nextSibling._isFirst ? null : d.nextSibling,
                            d.parentNode.removeChild(d),
                            a.splice(r--, 1),
                            l--) : p || (y = !d.nextSibling && C(d.parentNode, u, k),
                        d.parentNode._parent && d.parentNode._parent.appendChild(d),
                        y && d.parentNode.appendChild(U.createTextNode(" ")),
                        "span" === V && (d.style.display = "inline"),
                            H.push(d));
                else
                    d.parentNode._isSplit && !d._isSplit && "" !== d.innerHTML ? O.push(d) : z && !d._isSplit && ("span" === V && (d.style.display = "inline"),
                        H.push(d));
            else
                R || G ? (d.parentNode && d.parentNode.removeChild(d),
                    a.splice(r--, 1),
                    l--) : P || u.appendChild(d);
        for (r = J.length; -1 < --r; )
            J[r].parentNode.removeChild(J[r]);
        if (R) {
            for (G && (g = U.createElement(V),
                u.appendChild(g),
                x = g.offsetWidth + "px",
                y = g.offsetParent === u ? 0 : u.offsetLeft,
                u.removeChild(g)),
                     c = u.style.cssText,
                     u.style.cssText = "display:none;"; u.firstChild; )
                u.removeChild(u.firstChild);
            for (f = " " === k && (!G || !P && !z),
                     r = 0; r < R.length; r++) {
                for (h = R[r],
                         (g = U.createElement(V)).style.cssText = "display:block;text-align:" + W + ";position:" + (G ? "absolute;" : "relative;"),
                     $ && (g.className = $ + (I ? r + 1 : "")),
                         j.push(g),
                         l = h.length,
                         o = 0; o < l; o++)
                    "BR" !== h[o].nodeName && (d = h[o],
                        g.appendChild(d),
                    f && d._wordEnd && g.appendChild(U.createTextNode(" ")),
                    G && (0 === o && (g.style.top = d._y + "px",
                        g.style.left = S + y + "px"),
                        d.style.top = "0px",
                    y && (d.style.left = d._x - y + "px")));
                0 === l ? g.innerHTML = "&nbsp;" : P || z || (D(g),
                    A(g, String.fromCharCode(160), " ")),
                G && (g.style.width = x,
                    g.style.height = d._h + "px"),
                    u.appendChild(g)
            }
            u.style.cssText = c
        }
        G && (s > u.clientHeight && (u.style.height = s - T + "px",
        u.clientHeight < s && (u.style.height = s + m + "px")),
        n > u.clientWidth && (u.style.width = n - N + "px",
        u.clientWidth < n && (u.style.width = n + q + "px"))),
        K && (Q ? u.style.display = Q : u.style.removeProperty("display")),
            B(t, H),
        P && B(F, O),
            B(i, j)
    }
    function G(D, u, e, t) {
        function sb(D) {
            return D === p || D === m && " " === p
        }
        var F, i, n, C, s, E, r, o, l = u.tag ? u.tag : u.span ? "span" : "div", d = ~(u.type || u.split || "chars,words,lines").indexOf("chars"), a = w(u), p = u.wordDelimiter || " ", h = " " !== p ? "" : a ? "&#173; " : " ", f = "</" + l + ">", B = 1, c = u.specialChars ? "function" == typeof u.specialChars ? u.specialChars : x : null, g = U.createElement("div"), y = D.parentNode;
        for (y.insertBefore(g, D),
                 g.textContent = D.nodeValue,
                 y.removeChild(D),
                 r = -1 !== (F = function getText(D) {
                     var u = D.nodeType
                         , e = "";
                     if (1 === u || 9 === u || 11 === u) {
                         if ("string" == typeof D.textContent)
                             return D.textContent;
                         for (D = D.firstChild; D; D = D.nextSibling)
                             e += getText(D)
                     } else if (3 === u || 4 === u)
                         return D.nodeValue;
                     return e
                 }(D = g)).indexOf("<"),
             !1 !== u.reduceWhiteSpace && (F = F.replace(_, " ").replace(S, "")),
             r && (F = F.split("<").join("{{LT}}")),
                 s = F.length,
                 i = (" " === F.charAt(0) ? h : "") + e(),
                 n = 0; n < s; n++)
            if (E = F.charAt(n),
            c && (o = c(F.substr(n), u.specialChars)))
                E = F.substr(n, o || 1),
                    i += d && " " !== E ? t() + E + "</" + l + ">" : E,
                    n += o - 1;
            else if (sb(E) && !sb(F.charAt(n - 1)) && n) {
                for (i += B ? f : "",
                         B = 0; sb(F.charAt(n + 1)); )
                    i += h,
                        n++;
                n === s - 1 ? i += h : ")" !== F.charAt(n + 1) && (i += h + e(),
                    B = 1)
            } else
                "{" === E && "{{LT}}" === F.substr(n, 6) ? (i += d ? t() + "{{LT}}</" + l + ">" : "{{LT}}",
                    n += 5) : 55296 <= E.charCodeAt(0) && E.charCodeAt(0) <= 56319 || 65024 <= F.charCodeAt(n + 1) && F.charCodeAt(n + 1) <= 65039 ? (C = ((F.substr(n, 12).split(b) || [])[1] || "").length || 2,
                    i += d && " " !== E ? t() + F.substr(n, C) + "</" + l + ">" : F.substr(n, C),
                    n += C - 1) : i += d && " " !== E ? t() + E + "</" + l + ">" : E;
        D.outerHTML = i + (B ? f : ""),
        r && A(y, "{{LT}}", "<")
    }
    function H(D, u, e, t) {
        var F, i, n = r(D.childNodes), C = n.length, s = w(u);
        if (3 !== D.nodeType || 1 < C) {
            for (u.absolute = !1,
                     F = 0; F < C; F++)
                (i = n[F])._next = i._isFirst = i._parent = i._wordEnd = null,
                3 === i.nodeType && !/\S+/.test(i.nodeValue) || (s && 3 !== i.nodeType && "inline" === v(i).display && (i.style.display = "inline-block",
                    i.style.position = "relative"),
                    i._isSplit = !0,
                    H(i, u, e, t));
            return u.absolute = s,
                void (D._isSplit = !0)
        }
        G(D, u, e, t)
    }
    var U, e, t, i, s, r, o, S = /(?:\r|\n|\t\t)/g, _ = /(?:\s\s+)/g, m = String.fromCharCode(160), l = "SplitText", d = q(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), a = q(103, 115, 97, 112, 46, 99, 111, 109), p = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/, h = function(D) {
        var u = "undefined" != typeof window
            , e = 0 === (u ? window.location.href : "").indexOf(q(102, 105, 108, 101, 58, 47, 47)) || -1 !== D.indexOf(q(108, 111, 99, 97, 108, 104, 111, 115, 116)) || p.test(D)
            , t = [d, a, q(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), q(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), q(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), q(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), q(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), q(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), q(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), q(99, 100, 112, 110, 46, 105, 111), q(112, 101, 110, 115, 46, 105, 111), q(103, 97, 110, 110, 111, 110, 46, 116, 118), q(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), q(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), q(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), q(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), q(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), q(112, 108, 110, 107, 114, 46, 99, 111), q(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), q(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), q(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), q(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), q(99, 115, 98, 46, 97, 112, 112), q(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), q(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), q(99, 111, 100, 105, 101, 114, 46, 105, 111), q(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), q(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), q(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), q(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), q(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), q(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)]
            , F = t.length;
        for (setTimeout(function checkWarn() {
            if (u)
                if ("loading" === document.readyState || "interactive" === document.readyState)
                    document.addEventListener("readystatechange", checkWarn);
                else {
                    document.removeEventListener("readystatechange", checkWarn);
                    // var D = "object" == typeof i ? i : u && window.gsap;
                    // u && window.console && !window._gsapWarned && "object" == typeof D && !1 !== D.config().trialWarn && (console.log(q(37, 99, 87, 97, 114, 110, 105, 110, 103), q(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)),
                    //     console.log(q(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + l + q(32, 105, 115, 32, 108, 111, 97, 100, 101, 100, 32, 116, 104, 97, 116, 32, 111, 110, 108, 121, 32, 119, 111, 114, 107, 115, 32, 108, 111, 99, 97, 108, 108, 121, 32, 97, 110, 100, 32, 111, 110, 32, 100, 111, 109, 97, 105, 110, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 32, 97, 110, 100, 32, 99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111, 46, 32, 42, 42, 42, 32, 68, 79, 32, 78, 79, 84, 32, 68, 69, 80, 76, 79, 89, 32, 84, 72, 73, 83, 32, 70, 73, 76, 69, 32, 42, 42, 42, 32, 76, 111, 97, 100, 105, 110, 103, 32, 105, 116, 32, 111, 110, 32, 97, 110, 32, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 32, 115, 105, 116, 101, 32, 118, 105, 111, 108, 97, 116, 101, 115, 32, 116, 104, 101, 32, 108, 105, 99, 101, 110, 115, 101, 32, 97, 110, 100, 32, 119, 105, 108, 108, 32, 99, 97, 117, 115, 101, 32, 97, 32, 114, 101, 100, 105, 114, 101, 99, 116, 46, 32, 80, 108, 101, 97, 115, 101, 32, 106, 111, 105, 110, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 116, 111, 32, 103, 101, 116, 32, 102, 117, 108, 108, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 98, 111, 110, 117, 115, 32, 112, 108, 117, 103, 105, 110, 115, 32, 116, 104, 97, 116, 32, 98, 111, 111, 115, 116, 32, 121, 111, 117, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 115, 117, 112, 101, 114, 112, 111, 119, 101, 114, 115, 46, 32, 68, 105, 115, 97, 98, 108, 101, 32, 116, 104, 105, 115, 32, 119, 97, 114, 110, 105, 110, 103, 32, 119, 105, 116, 104, 32, 103, 115, 97, 112, 46, 99, 111, 110, 102, 105, 103, 40, 123, 116, 114, 105, 97, 108, 87, 97, 114, 110, 58, 32, 102, 97, 108, 115, 101, 125, 41, 59)),
                    //     console.log(q(37, 99, 71, 101, 116, 32, 117, 110, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 102, 105, 108, 101, 115, 32, 97, 116, 32, 104, 116, 116, 112, 115, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98), q(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)),
                    //     window._gsapWarned = 1)
                }
        }, 50); -1 < --F; )
            if (-1 !== D.indexOf(t[F]))
                return !0;
        return !0
    }("undefined" != typeof window ? window.location.host : ""), f = ((o = SplitText.prototype).split = function split(D) {
        this.isSplit && this.revert(),
            this.vars = D = D || this.vars,
            this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var u, e, t, i = this.elements.length, n = D.tag ? D.tag : D.span ? "span" : "div", C = z(D.wordsClass, n), s = z(D.charsClass, n); -1 < --i; )
            t = this.elements[i],
                this._originals[i] = {
                    html: t.innerHTML,
                    style: t.getAttribute("style")
                },
                u = t.clientHeight,
                e = t.clientWidth,
                H(t, D, C, s),
                F(t, D, this.chars, this.words, this.lines, e, u);
        return this.chars.reverse(),
            this.words.reverse(),
            this.lines.reverse(),
            this.isSplit = !0,
            this
    }
        ,
        o.revert = function revert() {
            var e = this._originals;
            if (!e)
                throw "revert() call wasn't scoped properly.";
            return this.elements.forEach(function(D, u) {
                D.innerHTML = e[u].html,
                    D.setAttribute("style", e[u].style)
            }),
                this.chars = [],
                this.words = [],
                this.lines = [],
                this.isSplit = !1,
                this
        }
        ,
        SplitText.create = function create(D, u) {
            return new SplitText(D,u)
        }
        ,
        SplitText);
    function SplitText(D, u) {
        t || n(),
            this.elements = r(D),
            this.chars = [],
            this.words = [],
            this.lines = [],
            this._originals = [],
            this.vars = u || {},
            s(this),
        h && this.split(u)
    }
    f.version = "3.12.3",
        f.register = n,
        u.SplitText = f,
        u.default = f;
    if (typeof (window) === "undefined" || window !== u) {
        Object.defineProperty(u, "__esModule", {
            value: !0
        })
    } else {
        delete u.default
    }
});
