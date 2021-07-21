namespace myfirstnovel {
    export async function Wald01(): ƒS.SceneReturn {
        console.log("Waldlauf");


        await ƒS.Location.show(locations.waldweg);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true); //vogelzwitschern + schritte
    }
}