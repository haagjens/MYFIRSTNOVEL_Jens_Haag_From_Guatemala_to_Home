namespace myfirstnovel {
    export async function Zug03(): ƒS.SceneReturn {
        console.log("Zug03");

        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        await ƒS.Location.show(locations.busarrive);
        await ƒS.update(1);
        await signalDelay2();
        await signalDelay2();
        await signalDelay2();
        await ƒS.Speech.tell(characters.Narrator, "Ich nehme diesen Bus nach Konstanz............")
        await signalDelay2();
        await signalDelay2();
        await ƒS.update(1);
        return "ZDorf01"
    }
}