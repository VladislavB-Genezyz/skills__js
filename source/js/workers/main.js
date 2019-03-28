
window.onload = ()=>{
    const first = document.getElementsByName('first')[0];
    const second = document.getElementsByName('second')[0];
    const result = document.querySelector('.result');

    if (window.Worker) {
        const myWorker = new Worker("js/workers/web-worker.js");

        first.onchange = function() {
          myWorker.postMessage([first.value, second.value]);
          console.log('Message posted to worker');
        }

        second.onchange = function() {
          myWorker.postMessage([first.value, second.value]);
          console.log('Message posted to worker');
        }

        myWorker.onmessage = function(e) {
            result.textContent = e.data;
            console.log('Message received from worker');
        }
    } else {
        console.log('Your browser doesn\'t support web workers.')
    }
}
