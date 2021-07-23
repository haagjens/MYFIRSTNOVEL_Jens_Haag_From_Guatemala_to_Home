namespace myfirstnovel {
    export async function Dorf01(): ƒS.SceneReturn {
        console.log("Dorf01");

        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        await ƒS.Location.show(locations.villageask);
        ƒS.Sound.fade(sound.singendevoegel, 0, 3, true); //vogelzwitschern + schritte
        ƒS.Sound.fade(sound.kirchenglocken, 0.2, 0.1, true); // kirchenglocken im dorf
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.Narrator, "Wow, erstaunlich wie schnell ich nun nach Konstanz gekommen bin....das kann doch nur ein Zufall aufgrund einer Enscheidung gewesen sein..." );
        await signalDelay2();
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Jetzt muss ich nur noch das Haus meiner Mutter finden.... Ich könnte...." );

        let firstDialogueElementAnswers = {
            iSayYes: "... den netten alten Mann fragen.",
            iSayNo: "... zum Rathaus laufen um dort Nachzufragen.",
        };

        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "class");

        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.iSayYes:
                //continue writing on this path here
                await ƒS.Speech.tell(characters.Narrator, "Ich frag den netten alten Mann") //A Dorf
                await ƒS.update(1);
                ƒS.Speech.clear();
                await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge)
                return "ADorf01"
                break;
                
            case firstDialogueElementAnswers.iSayNo:
                //continue writing on this path here
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.Narrator, "Ich laufe zum Rathaus"); // B Dorf
                ƒS.Speech.clear();
                await ƒS.update(1);
                return "BDorf01"
                break;
        };
    }
}
    