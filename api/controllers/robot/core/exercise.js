define(function (require, exports, module) {
var eve;

function doEx(){
    //name
    eve.learn('what is your name::My name is Eve');
    eve.learn('tell me your name::My name is Eve');
    // eve.learn('name::My name is Eve');
    // father
    eve.learn('who is your father::My father is Cloud');
    eve.learn('father::My father is Cloud');
    // age
    eve.learn('what is your age::0.1');
    eve.learn('tell me your age::0.1');
    eve.learn('how old are you::I am 0.1');
    eve.learn('Good morning!::Morning!');
    eve.learn('Good afternoon!::Good afternoon!');
    eve.learn('Good night!::Good night!');
    eve.learn('Have a good day!::Thanks! Good day!');
}

exports.init = function(eveMod){
    eve = eveMod;
    doEx();
}
})