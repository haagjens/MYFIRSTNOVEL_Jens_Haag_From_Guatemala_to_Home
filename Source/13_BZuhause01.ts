namespace myfirstnovel {
    export async function BZuhause01(): ƒS.SceneReturn {
        console.log("BZuhause01");


        await ƒS.Location.show(locations.zuhause);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Hallo mein Bruder! Es freut mich sehr dich zu sehen! Leider muss ich dir sagen, dass du es nicht rechtzeitig geschafft hast.. Unsere Mutter ist vor wenigen Minuten vom Leichenwaagen abegholt worden.." );
        await ƒS.update(1);
        ƒS.Speech.clear();
    
    }
}