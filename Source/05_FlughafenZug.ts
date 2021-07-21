namespace myfirstnovel {
    export async function Flughafenzug(): ƒS.SceneReturn {
        console.log("Flughafenzug");


        await ƒS.Location.show(locations.train);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Okay was sagt denn der Plan hier am Bahnsteig......es fahren genau 2 Züge von hier aus Richtung Singen... einer davon ist der hier??? Und er fährt in 5 Minuten los?? WOW, was ein Glück.... dann mal schnell rein hier." );
        await ƒS.update(1);
        ƒS.Speech.clear();
        
    
    }
}