namespace myfirstnovel {
    export async function ZAHaus01(): ƒS.SceneReturn {
        console.log("ZAHaus01");


        await ƒS.Location.show(locations.street);
        ƒS.Sound.fade(sound.kirchenglocken, 0, 3, true);
        ƒS.Sound.fade(sound.mainTheme, 0.1, 0.3, true);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Steht dort drüben nicht sogar Fischer auf dem Klingelschild?"); 
        return "ZBZuhause01"
    }
}