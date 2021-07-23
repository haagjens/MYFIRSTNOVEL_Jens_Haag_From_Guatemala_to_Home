namespace myfirstnovel {
    export async function Zug01(): ƒS.SceneReturn {
        console.log("Zug01");

        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        await ƒS.Location.show(locations.zug);
        ƒS.Sound.fade(sound.train, 0.2, 0.1, true);
        await ƒS.update(1);
        await signalDelay2();
        await signalDelay2();
        await signalDelay2();
        await ƒS.Speech.tell(characters.Narrator, "Die Zeit vergeht sehr langsam............")
        ƒS.Sound.fade(sound.train, 0, 3, true);
        await ƒS.update(1);
        await signalDelay2();
        await signalDelay2();
        await ƒS.update(1);
        return "Zug02"
    }
}