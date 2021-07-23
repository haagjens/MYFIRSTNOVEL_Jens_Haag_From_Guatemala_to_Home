namespace myfirstnovel {
    export async function Flughafenzug(): ƒS.SceneReturn {
        console.log("Flughafenzug");

        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(5)]);

        await ƒS.Location.show(locations.train);
        await ƒS.update(1);
        await signalDelay2();
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Okay was sagt denn der Plan hier am Bahnsteig......es fahren genau 2 Züge von hier aus Richtung Singen... einer davon ist der hier??? Und er fährt in 5 Minuten los?? WOW, was ein Glück.... dann mal schnell rein hier." );
        ƒS.Sound.fade(sound.flugplatz, 0, 3, true);
        await ƒS.update(1);
        ƒS.Speech.clear();
        return "Zug01"
    
    }
}