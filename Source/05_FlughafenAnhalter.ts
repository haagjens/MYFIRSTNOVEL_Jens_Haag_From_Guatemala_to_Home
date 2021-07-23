namespace myfirstnovel {
    export async function Flughafenanhalter(): ƒS.SceneReturn {
        console.log("Flughafenanhalter");

        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        ƒS.Speech.setTickerDelays(30, 2);

        await ƒS.Location.show(locations.peranhalter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "3 Stunden später hält ein Auto mit einem netten Fahrer." );
        await signalDelay2();
        ƒS.Sound.fade(sound.flugplatz, 0, 3, true);
        await ƒS.update(1);
        ƒS.Speech.clear();
        return "Anhalter01"
    }
}