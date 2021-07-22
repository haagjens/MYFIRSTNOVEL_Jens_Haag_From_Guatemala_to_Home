namespace myfirstnovel {
    export async function Zug01(): ƒS.SceneReturn {
        console.log("Zug01");

        await ƒS.Location.show(locations.zug);
        // länger hier bleiben
        // sound zug
        await ƒS.update(1);
        return "Zug02"
    }
}