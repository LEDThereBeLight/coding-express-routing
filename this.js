(function(){
  'use strict';

  function f3(){
    return this;
  }
  f3.call(this) // global object

  function f4(){
    this.herp = "derp";
  }

  // console.log(this.herp)

  function Thing(){
    this.thisIsEasyToUnderstand = "just kidding"
    f4.call(this)
    // prototype = { valueOf : "String!" }
  }

  // Thing.prototype.valueOf = "value"
  var thing = new Thing();
  // console.log(thing)
  console.log(thing.constructor)
  // thing = { thisIsEasyToUnderstand : "just kidding", herp: "derp" };

})();
