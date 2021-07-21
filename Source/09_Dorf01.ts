namespace myfirstnovel {
    export async function Dorf01(): ƒS.SceneReturn {
        console.log("Dorf");


        await ƒS.Location.show(locations.villageask);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Wow, erstaunlich wie schnell ich nun nach Konstanz gekommen bin....das kann doch nur ein Zufall aufgrund einer Enscheidung gewesen sein..." );
        ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true); // kirchenglocken im dorf
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
                break;
            case firstDialogueElementAnswers.iSayNo:
                //continue writing on this path here
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.Narrator, "Ich laufe zum Rathaus"); // B Dorf
                ƒS.Speech.clear();
                await ƒS.update(1);
                break;
        };
    }
}
    