namespace myfirstnovel {
  export async function Flughafen02(): ƒS.SceneReturn {
    console.log("Flughafen02");

    let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);

    ƒS.Speech.setTickerDelays(30, 2);

    await ƒS.Location.show(locations.Flughafen12);
    ƒS.Sound.fade(sound.frachtraum, 0.2, 0.1, true);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.Narrator, "Ein alter Freund, den er von der Arbeit in Guatemala kannte, konnte " + dataForSave.Protagonist.name + " einen Last-Minute Flug mit einem Frachtflugzeug, nach Süddeutschland arrangieren.");
    await signalDelay2();
    ƒS.Sound.fade(sound.frachtraum, 0, 3, true);
    await ƒS.update(1);
    ƒS.Speech.clear();
    
    return "Flughafen03"
    
  }
}