import { A } from "./test";

class B extends A{
    constructor(){
        super();
        console.log("constructor of B called");
    }
}