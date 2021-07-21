namespace myfirstnovel {
  export async function Flughafen01(): ƒS.SceneReturn {
    console.log("Flughafen01");

    dataForSave.Protagonist.name = await ƒS.Speech.getInput();
    console.log(dataForSave.Protagonist.name);

    let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

    // Text anzeigen
    // ƒS.Text.addClass("cssklasse");
    // await ƒS.Text.print("Text dein ich anzeigen lassen möchte.");
    // ƒS.Text.close();

    ƒS.Speech.setTickerDelays(30, 2);

    await ƒS.Location.show(locations.black);
    // ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
    await ƒS.update(1);
    ƒS.Speech.set(characters.Narrator, "November 1968: "+dataForSave.Protagonist.name+" fliegt von seinem 8 Jährigen Auslandsaufenthalt in Guatemala nach Deutschland zurück. Nachdem er eine Nachricht von seinem Bruder erhalten hatte, dass seine Mutter schwer krank auf dem Sterbebett liegt und Sie ihm noch eine letzte persönliche Nachrichten überbringen möchte, versucht Michael so schnell wie nur möglich aus Ciudad de Guatemala nach Deutschland zu kommen.");
    await signalDelay2();
      await ƒS.update(1);
      ƒS.Speech.clear(); // waiting for click?

      await ƒS.Speech.tell(characters.Narrator, " "+dataForSave.Protagonist.name+" ist auf der Suche nach dem Weg in seine Heimat. Sein Bruder und seine Mutter werden sich sehr wahrscheinlich in seiner alten Heimat aufhalten. Jedoch muss er zuerst einmal den Weg dorthin finden, denn es ist Jahre her als er zuletzt in Deutschland war.");
      await signalDelay2();
      await ƒS.update(1);
      ƒS.Speech.clear();

  }
}

// Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);