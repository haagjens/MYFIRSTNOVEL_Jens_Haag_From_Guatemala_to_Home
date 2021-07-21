namespace myfirstnovel {
    export async function Flughafen03(): ƒS.SceneReturn {
      console.log("Flughafen03");
  
      let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
  
      ƒS.Speech.setTickerDelays(30, 2);

      await ƒS.Location.show(locations.Flughafen13);

      await ƒS.Speech.tell(characters.Pilot, "Hallo mein Freund! Naa? Wie erging es dir da hinten? Ich schuldete dem netten Herr Origi noch einen Gefallen. Es scheint wohl etwas wichtiges zu sein, hm?");
      await signalDelay2();
      await ƒS.update(1);
      ƒS.Speech.clear();

      await ƒS.Speech.tell(characters.Pilot, "Naja.. scheint mich wohl nichts anzugehen. Aber gut, ..... wir sind hier nun auf einem kleinen Flugplatz in der Nähe von Rottweil! Ich habe eine Karte im Cockpit, einen Moment ............... ");
      await signalDelay2();
      await ƒS.update(1);
      ƒS.Speech.clear();

      await ƒS.Speech.tell(characters.Pilot, "Genau HIIIIER sind wir gerade... hier ist sogar eine Haltestelle für Züge und in diese Richtung gibt es eine Schnellstraße...... Den Rest musst du eben selbst herausfinden..... haha oder du überlässt es dem Zufall!! Es kommt wie es kommen muss haha... Ich wünsche dir noch eine schöne Reise..... Warte! Kannst du die villeicht gebrauchen?");
      await signalDelay2();
      await ƒS.update(1);
      ƒS.Speech.clear();

      await ƒS.Speech.tell(characters.Narrator, "Karte von Pilot erhalten und Rucksack geöffnet");
  
      ƒS.Inventory.add(items.Ausweis);
      ƒS.Inventory.add(items.Kartebw);
      ƒS.Inventory.add(items.Kartebw);
      await ƒS.Inventory.open();

      
      dataForSave.state.a +- 53;

    }
  }

