namespace myfirstnovel {
    export async function Flughafen04(): ƒS.SceneReturn {
        console.log("Flughafen04");

        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        ƒS.Speech.setTickerDelays(30, 2);

        await ƒS.Location.show(locations.verlassenestrasse);
        ƒS.Sound.fade(sound.flugplatz, 0.2, 0.1, true);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Wow, das war ja wirklich ein kleiner Flughafen. Miiiitten im nirgendwo... Ohman....wo ist denn nur meine Uhr.. Ich muss sie wohl auf dem Weg verloren haben...und viel wichtiger, wie komme ich Nachhause?? Hm..........");

        let firstDialogueElementAnswers = {
            iPickAnhalter: "Ob mich die Leute hier wohl per Anhalter mit nehmen?",
            iPickZug: "Hm.. oder soll ich lieber 2 Stunden bis zum Bahnhof laufen?",
        };

        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "class");




        switch (firstDialogueElement) {

            case firstDialogueElementAnswers.iPickAnhalter:
                //continue writing on this path here
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.Narrator, "Dann versuche ich mal mein Glück mit dem Daumen.")
                await signalDelay2();
                ƒS.Sound.fade(sound.flugplatz, 0, 3, true);
                await ƒS.update(1);
                ƒS.Speech.clear();
                dataForSave.iPickAnhalter = true;
                return "Flughafenanhalter";
                break;

            case firstDialogueElementAnswers.iPickZug:
                //continue writing on this path here
                await ƒS.Speech.tell(characters.Narrator, "Naja....dann laufe ich eben zum Bahnhof");
                await signalDelay2();
                ƒS.Sound.fade(sound.flugplatz, 0, 3, true);
                await ƒS.update(1);
                ƒS.Speech.clear();
                await ƒS.update(1);
                dataForSave.iPickZug = true;
                return "Flughafenzug";
                break;
        };

        //????bestimmte szenen nach bestimmten aktionen abspielen(next?)




    }
}