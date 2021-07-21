namespace myfirstnovel {
  export async function city(): ƒS.SceneReturn {
    console.log("City");
  
    /*   let text = {
         Narrator: {
           T0000: "",
           T0001: ""
         },
         Protagonist:{
           T0000:"",
           T0001: ""
         },
         Risa: {
           T0000: "Willkommen",
           T0001: ""
         }
       }; */

      

    await ƒS.Location.show(locations.city);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge)
    await ƒS.Character.show(characters.Teen, characters.Teen.pose.normal, ƒS.positions.bottomleft);
    await ƒS.update(1);
    //  await ƒS.Speech.tell(characters.Risa, text.Risa.T0000);

    await ƒS.Speech.tell(characters.Teen, "Hey......Wohin fährst du?");
    await ƒS.Character.hide(characters.Teen);
    await ƒS.Character.show(characters.Teen, characters.Teen.pose.smile, ƒS.positions.bottomleft);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Teen, "......Ich fahre nach City");

    await ƒS.update(1);
    await ƒS.Character.hide(characters.Teen);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge)









  }
}