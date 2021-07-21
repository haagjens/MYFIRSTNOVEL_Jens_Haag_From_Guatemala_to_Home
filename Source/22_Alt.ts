namespace myfirstnovel {
  export async function Zug(): ƒS.SceneReturn {
    console.log("Zug");


    await ƒS.Location.show(locations.black);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge)
    await ƒS.Character.show(characters.Oma, characters.Oma.pose.normal, ƒS.positions.bottomleft);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Oma, "Schönes Wetter heute, oder? ");
    await ƒS.Character.hide(characters.Oma);
    await ƒS.Character.show(characters.Oma, characters.Oma.pose.smile, ƒS.positions.bottomleft);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Oma, "Okaaaay", false);

    let firstDialogueElementAnswers = {
      iSayOk: "Ok",
      iSayYes: "Yes",
      iSayNo: "No"
    };

    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "class");

    switch (firstDialogueElement) {
      case firstDialogueElementAnswers.iSayOk:
        //continue writing on this path here
        await ƒS.Speech.tell(characters.Oma, "BlaBla1")
        await ƒS.update(1);
        ƒS.Character.hide(characters.Oma);
        ƒS.Speech.clear();
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        break;
      case firstDialogueElementAnswers.iSayYes:
        //continue writing on this path here
        await ƒS.Speech.tell(characters.Oma, "Blabla2")
        await ƒS.update(1);
        ƒS.Character.hide(characters.Oma);
        ƒS.Speech.clear();
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge)
        break;
      case firstDialogueElementAnswers.iSayNo:
        //continue writing on this path here
        await ƒS.Character.hide(characters.Oma);
        await ƒS.Character.show(characters.Oma, characters.Oma.pose.sad, ƒS.positions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Oma, "Blabla3");
        await ƒS.Character.hide(characters.Oma);
        ƒS.Speech.clear();
        await ƒS.update(1);
        break;
    };

    //????bestimmte szenen nach bestimmten aktionen abspielen




  }
}