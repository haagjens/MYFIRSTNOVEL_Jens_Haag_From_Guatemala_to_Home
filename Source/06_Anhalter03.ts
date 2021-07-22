namespace myfirstnovel {
    export async function Anhalter03(): ƒS.SceneReturn {
        console.log("Anhalter03");


        await ƒS.Location.show(locations.goodbyedriver);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Wirklich keine Sorge. Das habe ich gerne gemacht. Und der Zufall wollte eben das wir in die gleiche Richtung fahren....... Und hey ganz wichtig! Hier: die wolltest du mitnehmen! Und ich glaube du musst von hier aus nur noch durch diesen Wald und schon bist du vor Konstanz.");
        await ƒS.Speech.tell(characters.Narrator, "Karte von Fahrer erhalten und Rucksack geöffnet");
  
      ƒS.Inventory.add(items.Ausweis);
      ƒS.Inventory.add(items.Kartebw);
      ƒS.Inventory.add(items.Kartebodensee);
      await ƒS.Inventory.open();

      
      return "Wald01"
    }
}

