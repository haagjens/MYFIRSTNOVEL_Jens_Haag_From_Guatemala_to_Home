namespace myfirstnovel {
    export async function Zug02(): ƒS.SceneReturn {
        console.log("Zug02");


        await ƒS.Location.show(locations.city);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Erstaunlich wie lange sich so eine Zugfahrt anfühlt... und das hier soll Singen sein?! Hier hat sich aber auch einiges Verändert in den letzten Jahren. Ich muss nun direkt weiterreisen, am besten......");

        let firstDialogueElementAnswers = {
            iSayYes: "...Frage ich diese junge gut gekleidete Frau.",
            iSayNo: "Frage ich diese etwas ältere Frau.",
        };

        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "class");

        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.iSayYes:
                //continue writing on this path here
                await ƒS.Character.show(characters.Teen, characters.Teen.pose.sad, ƒS.positions.bottomleft);
                await ƒS.Speech.tell(characters.Teen, ".....bitte?! Sie wagen es mich anzusprechen? Ich möchte nichts mit diesem dreckigen Abschaum zu tun haben. Bitte halten Sie Abstand und hören Sie auf so zu gaffen.")
                await ƒS.update(1);
                ƒS.Speech.clear();
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.Narrator, "Ach herje... diese Jugend von heute...seeehr eingebildet.. das verstehe ich nicht.... naja.... aber hey was ist denn das für ein Plan?.........Ahhh ein Stadtplan! Okay.. Wir sind hier... und nicht weit von hier ist diese Bushaltestelle. Von dort aus komme ich sicher nach Konstanz! Dann mach ich mich mal auf den Weg." );
                await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge)
                return "Zug03"
                break;
            case firstDialogueElementAnswers.iSayNo:
                //continue writing on this path here
                await ƒS.update(1);
                await ƒS.Character.show(characters.Oma, characters.Oma.pose.normal, ƒS.positions.bottomleft);
                await ƒS.Speech.tell(characters.Oma, "Ohh, junger Mann, da sind sie bei mir richtig. Ich arbeitete einst auf dem Rathaus und kenne die Fahrpläne in und auswendig! Haha. Dort oben ist eine Haltestelle, von der ein Bus nach Konstanz fährt.");
                ƒS.Speech.clear();
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.Narrator, "Ohh, vielen Dank nette Frau, ich wünsche Ihnen noch einen schönen Tag. Ich mache mich nun direkt auf dem Weg zur Bushaltestelle." );
                return "Zug03"
                break;
        };
    }
}