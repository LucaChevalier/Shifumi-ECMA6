import { Constructor } from "./construtorgame.js";

export class RESULTFunct extends Constructor {

    initresultfunct(choix, choixOrdi, resultat) {

        function ifresult() {
            
            if (choix === choixOrdi) {
                return resultat = "Egalité";

            } else if (choix === 'Pierre') {
                if (choixOrdi === 'Ciseaux') {
                    return resultat = "Vous avez gagné";

                } else {
                    return resultat = "Vous avez perdu";

                }
            } else if (choix === 'Ciseaux') {
                if (choixOrdi === 'Feuille') {
                    return resultat = "Vous avez gagné";


                } else {
                    return resultat = "Vous avez perdu";

                }
            } else if (choix === 'Feuille') {
                if (choixOrdi === 'Pierre') {
                    return resultat = "Vous avez gagné";

                } else {
                    return resultat = "Vous avez perdu";

                }
            }
        }
        ifresult()
        document.getElementById("test").innerHTML = resultat
    }
}
