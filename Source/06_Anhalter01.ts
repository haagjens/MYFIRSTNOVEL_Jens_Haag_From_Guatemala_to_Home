namespace myfirstnovel {
    export async function Anhalter01(): ƒS.SceneReturn {
        console.log("Anhalterreden");


        await ƒS.Location.show(locations.goodbyedriver);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Hey mein lieber! wohin musst du denn, villeicht kann ich dich mitnehmen?");

        let firstDialogueElementAnswers = {
            iSayYes: "Konstanz wäre super!?",
            iSayNo: "Einfach nur weg, hier haha. Wohin kannst du mich bringen?",
        };

        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "class");

        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.iSayYes:
                //continue writing on this path here
                await ƒS.Speech.tell(characters.Narrator, "Ich fahre bis kurz vor Konstanz! ....Was ein Zufall, dass du auch nach Konstanz musst, oder? Freut mich sehr, dass ich dich mitnehmen kann.")
                await ƒS.update(1);
                ƒS.Speech.clear();
                await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge)
                break;
            case firstDialogueElementAnswers.iSayNo:
                //continue writing on this path here
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.Narrator, "Ich fahre bis kurz vor Konstanz! ....Was ein Zufall das du auch nach Konstanz musst, oder? Freut mich sehr, dass ich dich mitnehmen kann.");
                ƒS.Speech.clear();
                await ƒS.update(1);
                break;
        };
    }
}