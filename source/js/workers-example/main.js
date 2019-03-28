
window.onload = ()=>{
    let wOut = document.getElementsByClassName('workerWrap__withOut')[0];
    let wth = document.getElementsByClassName('workerWrap__with')[0];
    let result = document.getElementsByName('workerWrap__result')[0]
    console.log(wOut,wth);

    wOut.addEventListener('click', ()=>{
        console.log('start');
        large_Array.sort();
        console.log('end');

    })
    
    if (window.Worker) {
        const myWorker = new Worker("js/workers-example/worker.js");
        wth.addEventListener('click', ()=>{
            myWorker.postMessage(large_Array)
            console.log('handed over');
    
        })
        
    } else {
        console.log('Your browser doesn\'t support web workers.')
    }
}
