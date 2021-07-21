namespace myfirstnovel {
    export async function Anhalter02(): ƒS.SceneReturn {
        console.log("Anhalterfahrt");


        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true); //autofahrgeräusche + mumble
    }
}