namespace myfirstnovel {
    export async function ADorf01(): ƒS.SceneReturn {
        console.log("ADorf01");


        await ƒS.Location.show(locations.villageask);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Manalt, "Sie suachet, nooch d Frau Fischer? Hajoo klaaar kenn I Se... ihra jonger isch vor a bar Johr ge Nordamekrika, nochdem d Vater gstorba isch. Sie isch vor a bar Monet vo da Hauptstroß ins Neubaugebiet zoga. Aber jetzt haune au mitkriagt das sie a aubachene Krankheit kriagt hot ond ihr Sohn Sie sogar pflega muaß. I hoff, s god ihr guad ond se wird wieder gsond.... Uffjedafall gugged se au mol im Neubaugebiet nach, gell, jo. Kein Problem. Tschüss. Scheena Dag.");
        ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true); // Kirchglocken
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Wow was ein netter Mann.. der wusste wohl über das geschehen im ganzen Dorf bescheid... Naja, ich mach mich auf den Weg ins Neubaugebiet und suche dort." );

        
    }
}