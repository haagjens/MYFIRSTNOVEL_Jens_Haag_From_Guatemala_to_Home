namespace myfirstnovel {
    export async function Anhalter02(): ƒS.SceneReturn {
        console.log("Anhalter02");

        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        await ƒS.Location.show(locations.black);  
        ƒS.Sound.fade(sound.imauto, 0.2, 0.1, true);
        await ƒS.update(1);
        await ƒS.update(transition.wish.duration, transition.clock.alpha, transition.wish.edge)
        await signalDelay2();
        await signalDelay2();
        await signalDelay2();
        await ƒS.Speech.tell(characters.Narrator, "Die Zeit vergeht wie im Flug............")
        await signalDelay2();
        await signalDelay2();
        await ƒS.update(1);
        ƒS.Sound.fade(sound.imauto, 0, 3, true); //autofahrgeräusche + mumble
        return "Anhalter03"
    }
}