import { IfChoix }from "./startup/ifchoix.js"

let buttons = document.querySelectorAll(".launch")
for (let domELT of buttons) {
    function initselector(e) {
        let ifchoix = new IfChoix(e.target)
        ifchoix.initchoix(e.target)
    }
    domELT.addEventListener("click", initselector)
}













