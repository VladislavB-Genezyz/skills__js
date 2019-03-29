window.onload = () =>{
    let elem = document.getElementById('elem');
    console.log(elem)
    // let root = elem.createShadowRoot();
    // root.innerHTML = `<h3><content select="h2">Vasya</content></h3>\
    //                     <content></content>
    //                     <p>Привет из подполья!</p>`;



    // создать новое дерево Shadow DOM для elem
    var root = elem.createShadowRoot();

    root.innerHTML = `<h3><content select="h2">Vasya</content></h3>\
                        <content></content>
                         <p>Привет из подполья!</p>`;


    // прочитать данные из Shadow DOM для elem
    var root = elem.shadowRoot;
    // Привет из подполья!
    document.write("<p>p:" + root.querySelector('p').innerHTML);
    // пусто, так как физически узлы - вне content
    document.write("<p>content:" + root.querySelector('content').innerHTML);
}
