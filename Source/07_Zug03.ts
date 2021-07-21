namespace myfirstnovel {
    export async function Zug03(): ƒS.SceneReturn {
        console.log("Zug03");

        await ƒS.Location.show(locations.busarrive);
        // sound bus
        await ƒS.update(1);
    }
}