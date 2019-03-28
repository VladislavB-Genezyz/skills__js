  // прототип с методами для нового элемента
  var MyTimerProto = Object.create(HTMLButtonElement.prototype);
  MyTimerProto.tick = function() {
    this.innerHTML++;
  };

  // регистрируем новый элемент в браузере
  document.registerElement("my-timer", {
    prototype: MyTimerProto,
    extends: 'button'
  });


    // вызовем метод tick() на элементе
  setInterval(function() {
    timer.tick();
  }, 1000);