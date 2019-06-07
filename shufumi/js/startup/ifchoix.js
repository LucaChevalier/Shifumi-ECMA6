import { GameS } from "./game/game.js"

export class IfChoix {
    constructor(domELT) {
        this.domELT = domELT
    }
    initchoix(domELT) {

       class ReturnChoix extends IfChoix {
            constructor(domELT, choix) {
                super(domELT)
                this.choix = choix;
            }
            initgame(domELT, choix) {

                function returnchoix(domELT) {
                    if (domELT.classList.contains("Pierre")) {
                        return choix = 'Pierre'

                    } else if (domELT.classList.contains("Ciseaux")) {
                        return choix = 'Ciseaux'

                    } else if (domELT.classList.contains("Feuille")) {
                        return choix = 'Feuille'
                    }
                }
                returnchoix(domELT)
                function startgame(choix) {
                    let game = new GameS()
                    game.initgame(choix)
                }
                startgame(choix)
            }
        }
        let returnchoix = new ReturnChoix(domELT)
        returnchoix.initgame(domELT)
    }
}