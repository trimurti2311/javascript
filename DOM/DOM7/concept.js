
              //theory: event object 

              
              
//     event is a inbuilt object in html
//     when we apply target property on any element  we get the whole html element
//e.g.        on body element





let body = document.querySelector('body')
body.addEventListener('click', function (e) {

    //console.log(e.target)
    //console.log(e.target.tagName)
    //console.log(e.target.className)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               console.log(e.target.className)
    //console.log(e.target.id)
    console.log(e.target.textContent)
})













