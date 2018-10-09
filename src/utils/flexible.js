//author: https://github.com/amfe/lib-flexible
(function flexible(window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1

    // adjust body font size
    // function setBodyFontSize() {
    //     if (document.body) {
    //         document.body.style.fontSize = (12 * dpr) + 'px'
    //     } else {
    //         document.addEventListener('DOMContentLoaded', setBodyFontSize)
    //     }
    // }
    // setBodyFontSize();

    // set 1rem = viewWidth / 10
    function setRemUnit() {
        var rem;
        rem = Math.min(docEl.clientHeight, docEl.clientWidth) / 18.75
        if(docEl.style.fontSize !== '20px'){
          docEl.style.fontSize = rem + 'px'
        }
    }

    setRemUnit()

    // reset rem unit on page resize
    // window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports
    if (dpr >= 2) {
      var fakeBody = document.createElement('body')
      var testElement = document.createElement('div')
      testElement.style.border = '.5px solid transparent'
      fakeBody.appendChild(testElement)
      docEl.appendChild(fakeBody)
      if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines')
      }
      docEl.removeChild(fakeBody)
    }
}(window, document))
