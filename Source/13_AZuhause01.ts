namespace myfirstnovel {
    export async function AZuhause01(): ƒS.SceneReturn {
        console.log("AZuhause01");


        await ƒS.Location.show(locations.zuhause);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Hallo mein Bruder! Es freut mich sehr dich zu sehen! Du hast es geschafft! Komm mit ich zeige dir wo deine Mutter liegt Sie hat dir etwas wichtiges zu erzählen!" );
        await ƒS.update(1);
        ƒS.Speech.clear();
    
    }
}