namespace myfirstnovel {
    export async function Wald01(): ƒS.SceneReturn {
        console.log("Wald01");

        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        await ƒS.Location.show(locations.waldweg);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true); //vogelzwitschern + schritte
        await signalDelay2();
        await signalDelay2();
        await signalDelay2();
        return "Dorf01"
    }
}