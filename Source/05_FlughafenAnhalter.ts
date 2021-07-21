namespace myfirstnovel {
    export async function Flughafenanhalter(): ƒS.SceneReturn {
        console.log("Flughafenanhalter");


        await ƒS.Location.show(locations.peranhalter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "3 Stunden später hält ein Auto mit einem netten Fahrer." );
        await ƒS.update(1);
        ƒS.Speech.clear();
    
    }
}