import { CPUChoix } from "./components/functchoixordi.js"

export class GameS {

    initgame(choix) {
        let cpuchoix = new CPUChoix
        cpuchoix.initcpuchoix(choix)   
    }
}