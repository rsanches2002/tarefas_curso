//maneira 1

function f1(){
    console.log("f1");
}

function f2(){
    console.log("f2");
}

function f3(){
    console.log("f3");
}

export function f4(){
    console.log("f4");
}

export default {
    f1,
    f3
};

export var numero = 10;