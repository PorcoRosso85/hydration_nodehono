const Head = function () {
  return (
    <html
      lang="en"
      data-darkreader-mode="dynamic"
      data-darkreader-scheme="dark"
      class="fontawesome-i2svg-active fontawesome-i2svg-complete"
    >
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossorigin="anonymous"
        ></script>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              ':host,:root{--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Solid";--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Regular";--fa-font-light:normal 300 1em/1 "Font Awesome 6 Light";--fa-font-thin:normal 100 1em/1 "Font Awesome 6 Thin";--fa-font-duotone:normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-sharp-solid:normal 900 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-regular:normal 400 1em/1 "Font Awesome 6 Sharp";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-counter-scale,.25));transform:scale(var(--fa-counter-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top left;transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width,2em) * -1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}',
          }}
        />
        <style
          className="darkreader darkreader--sync"
          media="screen"
          dangerouslySetInnerHTML={{ __html: "" }}
        />
        <style
          className="darkreader darkreader--fallback"
          media="screen"
          dangerouslySetInnerHTML={{ __html: "" }}
        />
        <style
          className="darkreader darkreader--text"
          media="screen"
          dangerouslySetInnerHTML={{ __html: "" }}
        />
        <style
          className="darkreader darkreader--invert"
          media="screen"
          dangerouslySetInnerHTML={{
            __html:
              '.jfk-bubble.gtx-bubble, .captcheck_answer_label > input + img, span#closed_text > img[src^="https://www.gstatic.com/images/branding/googlelogo"], span[data-href^="https://www.hcaptcha.com/"] > #icon, #bit-notification-bar-iframe, ::-webkit-calendar-picker-indicator {\n    filter: invert(100%) hue-rotate(180deg) brightness(85%) grayscale(15%) sepia(10%) !important;\n}',
          }}
        />
        <style
          className="darkreader darkreader--inline"
          media="screen"
          dangerouslySetInnerHTML={{
            __html:
              "[data-darkreader-inline-bgcolor] {\n  background-color: var(--darkreader-inline-bgcolor) !important;\n}\n[data-darkreader-inline-bgimage] {\n  background-image: var(--darkreader-inline-bgimage) !important;\n}\n[data-darkreader-inline-border] {\n  border-color: var(--darkreader-inline-border) !important;\n}\n[data-darkreader-inline-border-bottom] {\n  border-bottom-color: var(--darkreader-inline-border-bottom) !important;\n}\n[data-darkreader-inline-border-left] {\n  border-left-color: var(--darkreader-inline-border-left) !important;\n}\n[data-darkreader-inline-border-right] {\n  border-right-color: var(--darkreader-inline-border-right) !important;\n}\n[data-darkreader-inline-border-top] {\n  border-top-color: var(--darkreader-inline-border-top) !important;\n}\n[data-darkreader-inline-boxshadow] {\n  box-shadow: var(--darkreader-inline-boxshadow) !important;\n}\n[data-darkreader-inline-color] {\n  color: var(--darkreader-inline-color) !important;\n}\n[data-darkreader-inline-fill] {\n  fill: var(--darkreader-inline-fill) !important;\n}\n[data-darkreader-inline-stroke] {\n  stroke: var(--darkreader-inline-stroke) !important;\n}\n[data-darkreader-inline-outline] {\n  outline-color: var(--darkreader-inline-outline) !important;\n}\n[data-darkreader-inline-stopcolor] {\n  stop-color: var(--darkreader-inline-stopcolor) !important;\n}",
          }}
        />
        <style
          className="darkreader darkreader--variables"
          media="screen"
          dangerouslySetInnerHTML={{
            __html:
              ":root {\n   --darkreader-neutral-background: #000102;\n   --darkreader-neutral-text: #c6c0b7;\n   --darkreader-selection-background: #003889;\n   --darkreader-selection-text: #d7d2ca;\n}",
          }}
        />
        <style
          className="darkreader darkreader--root-vars"
          media="screen"
          dangerouslySetInnerHTML={{ __html: "" }}
        />
        <style
          className="darkreader darkreader--user-agent"
          media="screen"
          dangerouslySetInnerHTML={{
            __html:
              "html {\n    color-scheme: dark !important;\n}\nhtml, body {\n    border-color: #5f574b;\n    color: #d6d2ca;\n}\na {\n    color: #357ac9;\n}\ntable {\n    border-color: #434747;\n}\n::placeholder {\n    color: #9f978c;\n}\ninput:-webkit-autofill,\ntextarea:-webkit-autofill,\nselect:-webkit-autofill {\n    background-color: #2c2e00 !important;\n    color: #d6d2ca !important;\n}\n::-webkit-scrollbar {\n    background-color: #0d0f10;\n    color: #989084;\n}\n::-webkit-scrollbar-thumb {\n    background-color: #333637;\n}\n::-webkit-scrollbar-thumb:hover {\n    background-color: #464a4b;\n}\n::-webkit-scrollbar-thumb:active {\n    background-color: #363a3b;\n}\n::-webkit-scrollbar-corner {\n    background-color: #050607;\n}\n::selection {\n    background-color: #003889 !important;\n    color: #d7d2ca !important;\n}\n::-moz-selection {\n    background-color: #003889 !important;\n    color: #d7d2ca !important;\n}",
          }}
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Grayscale - Start Bootstrap Theme</title>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        {/* Font Awesome icons (free version)*/}
        <meta name="darkreader" content="df26f169c0a04c27932c77b4aa8b3096" />
        <style
          className="darkreader darkreader--override"
          media="screen"
          dangerouslySetInnerHTML={{
            __html:
              ".vimvixen-hint {\n    background-color: #5e3f00 !important;\n    border-color: #ba9a21 !important;\n    color: #dfd4b6 !important;\n}\n#vimvixen-console-frame {\n    color-scheme: light !important\n}\n::placeholder {\n    opacity: 0.5 !important;\n}\n#edge-translate-panel-body,\n.MuiTypography-body1,\n.nfe-quote-text {\n    color: var(--darkreader-neutral-text) !important;\n}\ngr-main-header {\n    background-color: #04242e !important;\n}\n.tou-z65h9k,\n.tou-mignzq,\n.tou-1b6i2ox,\n.tou-lnqlqk {\n    background-color: var(--darkreader-neutral-background) !important;\n}\n.tou-75mvi {\n    background-color: #000b12 !important;\n}\n.tou-ta9e87,\n.tou-1w3fhi0,\n.tou-1b8t2us,\n.tou-py7lfi,\n.tou-1lpmd9d,\n.tou-1frrtv8,\n.tou-17ezmgn {\n    background-color: #000000 !important;\n}\n.tou-uknfeu {\n    background-color: #0c0300 !important;\n}\n.tou-6i3zyv {\n    background-color: #13404e !important;\n}\ndiv.mermaid-viewer-control-panel .btn {\n  fill: var(--darkreader-neutral-text);\n  background-color: var(--darkreader-neutral-background);\n}\nsvg g rect.er {\n  fill: var(--darkreader-neutral-background) !important;\n}\nsvg g rect.er.entityBox {\n  fill: var(--darkreader-neutral-background) !important;\n}\nsvg g rect.er.attributeBoxOdd {\n  fill: var(--darkreader-neutral-background) !important;\n}\nsvg g rect.er.attributeBoxEven {\n  fill-opacity: 0.8 !important;\n  fill: var(--darkreader-selection-background);\n}\nsvg rect.er.relationshipLabelBox {\n  fill: var(--darkreader-neutral-background) !important;\n}\nsvg g g.nodes rect, svg g g.nodes polygon {\n  fill: var(--darkreader-neutral-background) !important;\n}\nsvg g rect.task {\n  fill: var(--darkreader-selection-background) !important;\n}\nsvg line.messageLine0, svg line.messageLine1 {\n  stroke: var(--darkreader-neutral-text) !important;\n}\ndiv.mermaid .actor {\n  fill: var(--darkreader-neutral-background) !important;\n}",
          }}
        />
        {/* Google fonts*/}
        <link
          href="https://fonts.googleapis.com/css?family=Varela+Round"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        {/* Core theme CSS (includes Bootstrap)*/}
        <link href="css/styles.css" rel="stylesheet" />
        <style
          className="darkreader darkreader--sync"
          media="screen"
          dangerouslySetInnerHTML={{ __html: "" }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".d-none {\n    display: none;\n}\n.invalid-feedback {\n    display: none;\n}\n.btn.disabled {\n    pointer-events: none;\n    opacity: 0.65;\n}",
          }}
        />
        <style
          className="darkreader darkreader--sync"
          media="screen"
          dangerouslySetInnerHTML={{ __html: "" }}
        />
      </head>
    </html>
  );
};

const HeaderDataCurrentStyleJson = {
  layout: "brandingCenter",
  action: {
    buttonText: "Get Started",
    newWindow: false,
  },
  showSocial: true,
  socialOptions: {
    socialBorderShape: "none",
    socialBorderStyle: "outline",
    socialBorderThickness: {
      unit: "px",
      value: 1.0,
    },
  },
  sectionTheme: "",
  menuOverlayAnimation: "fade",
  cartStyle: "cart",
  cartText: "Cart",
  showEmptyCartState: true,
  cartOptions: {
    iconType: "stroke-1",
    cartBorderShape: "none",
    cartBorderStyle: "outline",
    cartBorderThickness: {
      unit: "px",
      value: 1.0,
    },
  },
  showButton: false,
  showCart: true,
  showAccountLogin: true,
  headerStyle: "dynamic",
  languagePicker: {
    enabled: false,
    iconEnabled: false,
    iconType: "globe",
    flagShape: "shiny",
    languageFlags: [],
  },
  mobileOptions: {
    layout: "logoCenterNavLeft",
    menuIcon: "doubleLineHamburger",
    menuIconOptions: {
      style: "doubleLineHamburger",
      thickness: {
        unit: "px",
        value: 1.0,
      },
    },
  },
  dynamicOptions: {
    border: {
      enabled: false,
      position: "allSides",
      thickness: {
        unit: "px",
        value: 4.0,
      },
      color: {
        type: "SITE_PALETTE_COLOR",
        sitePaletteColor: {
          colorName: "black",
          alphaModifier: 1.0,
        },
      },
    },
  },
  solidOptions: {
    headerOpacity: {
      unit: "%",
      value: 100.0,
    },
    border: {
      enabled: false,
      position: "allSides",
      thickness: {
        unit: "px",
        value: 4.0,
      },
      color: {
        type: "SITE_PALETTE_COLOR",
        sitePaletteColor: {
          colorName: "black",
          alphaModifier: 1.0,
        },
      },
    },
    dropShadow: {
      enabled: false,
      blur: {
        unit: "px",
        value: 30.0,
      },
      spread: {
        unit: "px",
        value: 0.0,
      },
      distance: {
        unit: "px",
        value: 0.0,
      },
      color: {
        type: "SITE_PALETTE_COLOR",
        sitePaletteColor: {
          colorName: "black",
          alphaModifier: 1.0,
        },
      },
    },
    blurBackground: {
      enabled: false,
      blurRadius: {
        unit: "px",
        value: 12.0,
      },
    },
    backgroundColor: {
      type: "SITE_PALETTE_COLOR",
      sitePaletteColor: {
        colorName: "white",
        alphaModifier: 1.0,
      },
    },
    navigationColor: {
      type: "SITE_PALETTE_COLOR",
      sitePaletteColor: {
        colorName: "black",
        alphaModifier: 1.0,
      },
    },
  },
  gradientOptions: {
    gradientType: "faded",
    headerOpacity: {
      unit: "%",
      value: 90.0,
    },
    border: {
      enabled: false,
      position: "allSides",
      thickness: {
        unit: "px",
        value: 4.0,
      },
      color: {
        type: "SITE_PALETTE_COLOR",
        sitePaletteColor: {
          colorName: "black",
          alphaModifier: 1.0,
        },
      },
    },
    dropShadow: {
      enabled: false,
      blur: {
        unit: "px",
        value: 30.0,
      },
      spread: {
        unit: "px",
        value: 0.0,
      },
      distance: {
        unit: "px",
        value: 0.0,
      },
      color: {
        type: "SITE_PALETTE_COLOR",
        sitePaletteColor: {
          colorName: "black",
          alphaModifier: 1.0,
        },
      },
    },
    blurBackground: {
      enabled: false,
      blurRadius: {
        unit: "px",
        value: 12.0,
      },
    },
    backgroundColor: {
      type: "SITE_PALETTE_COLOR",
      sitePaletteColor: {
        colorName: "white",
        alphaModifier: 1.0,
      },
    },
    navigationColor: {
      type: "SITE_PALETTE_COLOR",
      sitePaletteColor: {
        colorName: "black",
        alphaModifier: 1.0,
      },
    },
  },
  dropShadowOptions: {
    enabled: false,
    blur: {
      unit: "px",
      value: 12.0,
    },
    spread: {
      unit: "px",
      value: 0.0,
    },
    distance: {
      unit: "px",
      value: 12.0,
    },
  },
  borderOptions: {
    enabled: false,
    position: "allSides",
    thickness: {
      unit: "px",
      value: 4.0,
    },
    color: {
      type: "SITE_PALETTE_COLOR",
      sitePaletteColor: {
        colorName: "black",
        alphaModifier: 1.0,
      },
    },
  },
  showPromotedElement: false,
  buttonVariant: "primary",
  blurBackground: {
    enabled: false,
    blurRadius: {
      unit: "px",
      value: 12.0,
    },
  },
  headerOpacity: {
    unit: "%",
    value: 100.0,
  },
};

const HeaderStyle = ``;

const Header = function () {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="mx-auto my-0 text-uppercase">Grayscale</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              A free, responsive, one page Bootstrap theme created by Start
              Bootstrap.
            </h2>
            <a className="btn btn-primary" href="#about">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const Nav = function () {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <svg
              class="svg-inline--fa fa-bars"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                data-darkreader-inline-fill=""
                style="--darkreader-inline-fill: currentColor;"
              ></path>
            </svg>
            {/* <!-- <i class="fas fa-bars"></i> Font Awesome fontawesome.com --> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#signup">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

const Main = function () {
  return (
    <main>
      <section className="about-section text-center" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">Built with Bootstrap 5</h2>
              <p className="text-white-50">
                Grayscale is a free Bootstrap theme created by Start Bootstrap.
                It can be yours right now, simply download the template on
                <a href="https://startbootstrap.com/theme/grayscale/">
                  the preview page.
                </a>
                The theme is open source, and you can use it for any purpose,
                personal or commercial.
              </p>
            </div>
          </div>
          <img className="img-fluid" src="assets/img/ipad.png" alt="..." />
        </div>
      </section>
      <section className="projects-section bg-light" id="projects">
        <div className="container px-4 px-lg-5">
          {/* Featured Project Row*/}
          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-8 col-lg-7">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src="assets/img/bg-masthead.jpg"
                alt="..."
              />
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>Shoreline</h4>
                <p className="text-black-50 mb-0">
                  Grayscale is open source and MIT licensed. This means you can
                  use it for any project - even commercial projects! Download
                  it, customize it, and publish your website!
                </p>
              </div>
            </div>
          </div>
          {/* Project One Row*/}
          <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="assets/img/demo-image-01.jpg"
                alt="..."
              />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">Misty</h4>
                    <p className="mb-0 text-white-50">
                      An example of where you can put an image of a project, or
                      anything else, along with a description.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project Two Row*/}
          <div className="row gx-0 justify-content-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="assets/img/demo-image-02.jpg"
                alt="..."
              />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">Mountains</h4>
                    <p className="mb-0 text-white-50">
                      Another example of a project with its respective
                      description. These sections work well responsively as
                      well!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="signup-section" id="signup">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <svg
                class="svg-inline--fa fa-paper-plane fa-2x mb-2 text-white"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="paper-plane"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"
                  data-darkreader-inline-fill=""
                  style="--darkreader-inline-fill: currentColor;"
                ></path>
              </svg>
              {/* <!-- <i class="far fa-paper-plane fa-2x mb-2 text-white"></i> Font Awesome fontawesome.com --> */}
              <h2 className="text-white mb-5">Subscribe to receive updates!</h2>
              {/* * * * * * * * * * * * * * * **/}
              {/* * * SB Forms Contact Form * **/}
              {/* * * * * * * * * * * * * * * **/}
              {/* This form is pre-integrated with SB Forms.*/}
              {/* To make this form functional, sign up at*/}
              {/* https://startbootstrap.com/solution/contact-forms*/}
              {/* to get an API token!*/}
              <form
                className="form-signup"
                id="contactForm"
                data-sb-form-api-token="API_TOKEN"
              >
                {/* Email address input*/}
                <div className="row input-group-newsletter">
                  <div className="col">
                    <input
                      className="form-control"
                      id="emailAddress"
                      type="email"
                      placeholder="Enter email address..."
                      aria-label="Enter email address..."
                      data-sb-validations="required,email"
                      data-sb-can-submit="no"
                    />
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-primary disabled"
                      id="submitButton"
                      type="submit"
                    >
                      Notify Me!
                    </button>
                  </div>
                </div>
                <div
                  className="invalid-feedback mt-2"
                  data-sb-feedback="emailAddress:required"
                >
                  An email is required.
                </div>
                <div
                  className="invalid-feedback mt-2"
                  data-sb-feedback="emailAddress:email"
                >
                  Email is not valid.
                </div>
                {/* Submit success message*/}
                {/**/}
                {/* This is what your users will see when the form*/}
                {/* has successfully submitted*/}
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3 mt-2 text-white">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>
                {/* Submit error message*/}
                {/**/}
                {/* This is what your users will see when there is*/}
                {/* an error submitting the form*/}
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3 mt-2">
                    Error sending message!
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section bg-black">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="cd-body text-center">
                  <svg
                    class="svg-inline--fa fa-map-location-dot text-primary mb-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="map-location-dot"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                      data-darkreader-inline-fill=""
                      style="--darkreader-inline-fill: currentColor;"
                    ></path>
                  </svg>
                  {/* <!-- <i class="fas fa-map-marked-alt text-primary mb-2"></i> Font Awesome fontawesome.com --> d-body text-center"> */}
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    4923 Market Street, Orlando FL
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  {/* <svg class="svg-inline--fa fa-envelope text-primary mb-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;"></path></svg><!-- <i class="fas fa-envelope text-primary mb-2"></i> Font Awesome fontawesome.com --> */}
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    <a href="#!">hello@yourdomain.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <svg
                    class="svg-inline--fa fa-mobile-screen-button text-primary mb-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="mobile-screen-button"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M0 64C0 28.7 28.7 0 64 0H288c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM208 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM288 64H64V384H288V64z"
                      data-darkreader-inline-fill=""
                      style="--darkreader-inline-fill: currentColor;"
                    ></path>
                  </svg>
                  {/* <!-- <i class="fas fa-mobile-alt text-primary mb-2"></i> Font Awesome fontawesome.com --> */}
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">+1 (555) 902-8832</div>
                </div>
              </div>
            </div>
          </div>
          <div className="social d-flex justify-content-center">
            <a class="mx-2" href="#!">
              <svg
                class="svg-inline--fa fa-twitter"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  data-darkreader-inline-fill=""
                  style="--darkreader-inline-fill: currentColor;"
                ></path>
              </svg>
              {/* <!-- <i class="fab fa-twitter"></i> Font Awesome fontawesome.com --> */}
            </a>
            <a class="mx-2" href="#!">
              <svg
                class="svg-inline--fa fa-facebook-f"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  data-darkreader-inline-fill=""
                  style="--darkreader-inline-fill: currentColor;"
                ></path>
              </svg>
              {/* <!-- <i class="fab fa-facebook-f"></i> Font Awesome fontawesome.com --> */}
            </a>
            <a class="mx-2" href="#!">
              <svg
                class="svg-inline--fa fa-github"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  data-darkreader-inline-fill=""
                  style="--darkreader-inline-fill: currentColor;"
                ></path>
              </svg>
              {/* <!-- <i class="fab fa-github"></i> Font Awesome fontawesome.com --> */}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

const Footer = function () {
  return (
    <footer className="footer bg-black small text-center text-white-50">
      <div className="container px-4 px-lg-5">
        Copyright © Your Website 2023
      </div>
    </footer>
  );
};

const Script = function () {
  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </>
  );
};

const Body = function () {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Footer />
      <Script />
    </>
  );
};

const App = function () {
  return (
    <>
      <Head />
      <Body />
    </>
  );
};

export { App as GrayScale0001 };
