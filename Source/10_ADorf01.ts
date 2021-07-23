namespace myfirstnovel {
    export async function ADorf01(): ƒS.SceneReturn {
        console.log("ADorf01");

        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        await ƒS.Location.show(locations.villageask);
       // ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true); // Kirchglocken
        await ƒS.update(1);
        ƒS.Character.show(characters.Manalt, characters.Manalt.pose.normal, ƒS.positions.bottomcenter);
        await signalDelay2();
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Manalt, "Sie suachet, nooch d Frau Fischer? Hajoo klaaar kenn I Se... ihra jonger isch vor a bar Johr ge Nordamekrika, nochdem d Vater gstorba isch. Sie isch vor a bar Monet vo da Hauptstroß ins Neubaugebiet zoga. Aber jetzt haune au mitkriagt das sie a aubachene Krankheit kriagt hot ond ihr Sohn Sie sogar pflega muaß. I hoff, s god ihr guad ond se wird wieder gsond.... Uffjedafall gugged se au mol im Neubaugebiet nach, gell, jo. Kein Problem. Tschüss. Scheena Dag.");
        await ƒS.update(1);

        ƒS.Character.hide(characters.Manalt);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Wow, was ein netter Mann.. der wusste wohl über das Geschehen im ganzen Dorf bescheid... Naja, ich mach mich auf den Weg ins Neubaugebiet und suche dort." );
        await signalDelay2();
        await ƒS.update(1);
        return "AHaus01"
        
    }
}