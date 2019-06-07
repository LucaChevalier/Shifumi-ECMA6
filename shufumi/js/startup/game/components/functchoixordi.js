import { Constructor } from "./construtorgame.js"
import { RESULTFunct } from "./functresult.js"

export class CPUChoix extends Constructor {

    initcpuchoix(choix, choixOrdi) {

        let imgPierre = new Image()
        imgPierre.src = 'img/Pierre.png'
        let imgFeuille = new Image()
        imgFeuille.src = 'img/Feuille.png'
        let imgCiseaux = new Image()
        imgCiseaux.src = 'img/Ciseaux.png'

        let random = Math.floor(Math.random() * 3 + 1)
        let imgSpawn = document.getElementById("imgDiv")

        function ifcpu() {
            if (random === 1) {
                imgSpawn.replaceChild(imgPierre, imgSpawn.childNodes[0])
                return choixOrdi = 'Pierre'

            } else if (random === 2) {
                imgSpawn.replaceChild(imgFeuille, imgSpawn.childNodes[0])
                return choixOrdi = 'Feuille'

            } else {
                imgSpawn.replaceChild(imgCiseaux, imgSpawn.childNodes[0])
                return choixOrdi = 'Ciseaux';
            }
        }
        ifcpu()
        let resultfunc = new RESULTFunct
        resultfunc.initresultfunct(choix, choixOrdi)
    }
}