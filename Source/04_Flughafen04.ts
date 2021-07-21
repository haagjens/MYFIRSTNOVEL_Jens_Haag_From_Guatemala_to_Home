namespace myfirstnovel {
    export async function Flughafen04(): ƒS.SceneReturn {
        console.log("Flughafen04");


        await ƒS.Location.show(locations.verlassenestrasse);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Wow, das war ja wirklich ein kleiner Flughafen. Miiiitten im nirgendwo... Ohman....wo ist denn nur meine Uhr.. Ich muss sie wohl auf dem Weg verloren haben...und viel wichtiger, wie komme ich Nachhause?? Hm..........");

        let firstDialogueElementAnswers = {
            iPickAnhalter: "Ob mich die Leute hier wohl per Anhalter mit nehmen?",
            iSayNo: "Hm.. oder soll ich lieber 2 Stunden bis zum Bahnhof laufen?",
        };

        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "class");

        switch (firstDialogueElement) {

            case firstDialogueElementAnswers.iPickAnhalter:
                //continue writing on this path here
                await ƒS.Speech.tell(characters.Narrator, "Dann versuche ich mal mein Glück mit dem Daumen.")
                await ƒS.update(1);
                ƒS.Speech.clear();
                await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge)
                dataForSave.pickedanhalter = true;
                break;

            case firstDialogueElementAnswers.iSayNo:
                //continue writing on this path here
                await ƒS.Speech.tell(characters.Narrator, "Naja....dann laufe ich eben zum Bahnhof");
                await ƒS.update(1);
                ƒS.Speech.clear();
                await ƒS.update(1);
                dataForSave.pickedtrain = true;
                break;
        };

        //????bestimmte szenen nach bestimmten aktionen abspielen(next?)




    }
}