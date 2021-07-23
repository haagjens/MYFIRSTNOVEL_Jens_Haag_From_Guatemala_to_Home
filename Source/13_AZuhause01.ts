namespace myfirstnovel {
    export async function AZuhause01(): ƒS.SceneReturn {
        console.log("AZuhause01");


        await ƒS.Location.show(locations.zuhause);
        ƒS.Sound.fade(sound.kirchenglocken, 0, 3, true);
        ƒS.Sound.fade(sound.mainTheme, 0.1, 0.3, true);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Hallo mein Bruder! Es freut mich sehr dich zu sehen! Du hast es geschafft! Komm mit ich zeige dir wo deine Mutter liegt Sie hat dir etwas wichtiges zu erzählen!" );
        await ƒS.update(1);
        ƒS.Speech.clear();
        return "AZuhause01"
        
    }
}