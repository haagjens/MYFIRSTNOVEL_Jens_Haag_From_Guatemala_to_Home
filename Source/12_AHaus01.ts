namespace myfirstnovel {
    export async function AHaus01(): ƒS.SceneReturn {
        console.log("AHaus01");


        await ƒS.Location.show(locations.street);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Steht dort drüben nicht sogar Fischer auf dem Klingelschild?"); 
        return "AZuhause01"
    }
}