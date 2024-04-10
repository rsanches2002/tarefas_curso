
import {File_1_Mod1, File_1_Mod3} from "./s1.js";
import {File_2_ModN2} from "./s2.js";

function File_5_Mod1(){
    console.log("File_5_Mod1");
} //private

export function File_5_Mod2(){
    console.log("File_5_Mod2");
}

export function File_5_Mod3(){
    console.log("File_5_Mod3");
}

export function File_5_Mod4(){
    console.log("File_5_Mod4");
}

function File_5_Mod5(){
    console.log("File_5_Mod5");
} 

export function File_5_Mod6(){
    console.log("File_5_Mod6");
}

function File_5_Mod7(){
    console.log("File_5_Mod7");
}

export let File_5_ModN1 = 1;
let File_5_ModN2 = 2; //private
export let File_5_ModN3 = 3;
let File_5_ModN4 = 4;
export let File_5_ModN5 = 5;
let File_5_ModN6 = 6;
export let File_5_ModN7 = 7;
export let File_5_ModN8 = 8;
export let File_5_ModN9 = 9;

export default {
    File_5_Mod5,
    File_5_Mod7,
    File_5_ModN4,
    File_5_ModN6,
}