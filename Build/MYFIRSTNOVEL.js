"use strict";
var myfirstnovel;
(function (myfirstnovel) {
    async function Flughafen01() {
        console.log("Flughafen01");
        myfirstnovel.ƒS.Speech.set(myfirstnovel.characters.Narrator, "Dein Name:");
        myfirstnovel.dataForSave.Protagonist.name = await myfirstnovel.ƒS.Speech.getInput();
        console.log(myfirstnovel.dataForSave.Protagonist.name);
        let signalDelay2 = myfirstnovel.ƒS.Progress.defineSignal([() => myfirstnovel.ƒS.Progress.delay(5)]);
        //music
        myfirstnovel.ƒS.Speech.setTickerDelays(30, 2);
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.black);
        // ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
        await myfirstnovel.ƒS.update(1);
        myfirstnovel.ƒS.Speech.set(myfirstnovel.characters.Narrator, "November 1968: " + myfirstnovel.dataForSave.Protagonist.name + " fliegt von seinem 8 Jährigen Auslandsaufenthalt in Guatemala nach Deutschland zurück. Nachdem er eine Nachricht von seinem Bruder erhalten hatte, dass seine Mutter schwer krank auf dem Sterbebett liegt und Sie ihm noch eine letzte persönliche Nachrichten überbringen möchte, versucht Michael so schnell wie nur möglich aus Ciudad de Guatemala nach Deutschland zu kommen.");
        await signalDelay2();
        await myfirstnovel.ƒS.update(1);
        myfirstnovel.ƒS.Speech.clear(); // waiting for click?
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, " " + myfirstnovel.dataForSave.Protagonist.name + " ist auf der Suche nach dem Weg in seine Heimat. Sein Bruder und seine Mutter werden sich sehr wahrscheinlich in seiner alten Heimat aufhalten. Jedoch muss er zuerst einmal den Weg dorthin finden, denn es ist Jahre her als er zuletzt in Deutschland war.");
        await signalDelay2();
        await myfirstnovel.ƒS.update(1);
        myfirstnovel.ƒS.Speech.clear();
    }
    myfirstnovel.Flughafen01 = Flughafen01;
})(myfirstnovel || (myfirstnovel = {}));
// Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
var myfirstnovel;
(function (myfirstnovel) {
    async function Flughafen02() {
        console.log("Flughafen02");
        let signalDelay2 = myfirstnovel.ƒS.Progress.defineSignal([() => myfirstnovel.ƒS.Progress.delay(2)]);
        myfirstnovel.ƒS.Speech.setTickerDelays(30, 2);
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.Flughafen12);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Ein alter Freund, den er von der Arbeit in Guatemala kannte, konnte " + myfirstnovel.dataForSave.Protagonist.name + " einen Last-Minute Flug mit einem Frachtflugzeug, nach Süddeutschland arrangieren.");
        await signalDelay2();
        await myfirstnovel.ƒS.update(1);
        myfirstnovel.ƒS.Speech.clear();
        myfirstnovel.dataForSave.state.a + -53;
    }
    myfirstnovel.Flughafen02 = Flughafen02;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function Flughafen03() {
        console.log("Flughafen03");
        let signalDelay2 = myfirstnovel.ƒS.Progress.defineSignal([() => myfirstnovel.ƒS.Progress.delay(2)]);
        myfirstnovel.ƒS.Speech.setTickerDelays(30, 2);
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.Flughafen13);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Pilot, "Hallo mein Freund! Naa? Wie erging es dir da hinten? Ich schuldete dem netten Herr Origi noch einen Gefallen. Es scheint wohl etwas wichtiges zu sein, hm?");
        await signalDelay2();
        await myfirstnovel.ƒS.update(1);
        myfirstnovel.ƒS.Speech.clear();
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Pilot, "Naja.. scheint mich wohl nichts anzugehen. Aber gut, ..... wir sind hier nun auf einem kleinen Flugplatz in der Nähe von Rottweil! Ich habe eine Karte im Cockpit, einen Moment ............... ");
        await signalDelay2();
        await myfirstnovel.ƒS.update(1);
        myfirstnovel.ƒS.Speech.clear();
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Pilot, "Genau HIIIIER sind wir gerade... hier ist sogar eine Haltestelle für Züge und in diese Richtung gibt es eine Schnellstraße...... Den Rest musst du eben selbst herausfinden..... haha oder du überlässt es dem Zufall!! Es kommt wie es kommen muss haha... Ich wünsche dir noch eine schöne Reise..... Warte! Kannst du die villeicht gebrauchen?");
        await signalDelay2();
        await myfirstnovel.ƒS.update(1);
        myfirstnovel.ƒS.Speech.clear();
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Karte von Pilot erhalten und Rucksack geöffnet");
        myfirstnovel.ƒS.Inventory.add(myfirstnovel.items.Ausweis);
        myfirstnovel.ƒS.Inventory.add(myfirstnovel.items.Kartebw);
        myfirstnovel.ƒS.Inventory.add(myfirstnovel.items.Kartebw);
        await myfirstnovel.ƒS.Inventory.open();
        myfirstnovel.dataForSave.state.a + -53;
    }
    myfirstnovel.Flughafen03 = Flughafen03;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function Flughafen04() {
        console.log("Flughafen04");
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.verlassenestrasse);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Wow, das war ja wirklich ein kleiner Flughafen. Miiiitten im nirgendwo... Ohman....wo ist denn nur meine Uhr.. Ich muss sie wohl auf dem Weg verloren haben...und viel wichtiger, wie komme ich Nachhause?? Hm..........");
        let firstDialogueElementAnswers = {
            iPickAnhalter: "Ob mich die Leute hier wohl per Anhalter mit nehmen?",
            iPickZug: "Hm.. oder soll ich lieber 2 Stunden bis zum Bahnhof laufen?",
        };
        let firstDialogueElement = await myfirstnovel.ƒS.Menu.getInput(firstDialogueElementAnswers, "class");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.iPickAnhalter:
                //continue writing on this path here
                await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Dann versuche ich mal mein Glück mit dem Daumen.");
                await myfirstnovel.ƒS.update(1);
                myfirstnovel.ƒS.Speech.clear();
                await myfirstnovel.ƒS.update(myfirstnovel.transition.clock.duration, myfirstnovel.transition.wish.alpha, myfirstnovel.transition.clock.edge);
                myfirstnovel.dataForSave.pickedanhalter = true;
                break;
            case firstDialogueElementAnswers.iPickZug:
                //continue writing on this path here
                await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Naja....dann laufe ich eben zum Bahnhof");
                await myfirstnovel.ƒS.update(1);
                myfirstnovel.ƒS.Speech.clear();
                await myfirstnovel.ƒS.update(1);
                myfirstnovel.dataForSave.pickedtrain = true;
                break;
        }
        ;
        //????bestimmte szenen nach bestimmten aktionen abspielen(next?)
    }
    myfirstnovel.Flughafen04 = Flughafen04;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function Flughafenanhalter() {
        console.log("Flughafenanhalter");
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.peranhalter);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "3 Stunden später hält ein Auto mit einem netten Fahrer.");
        await myfirstnovel.ƒS.update(1);
        myfirstnovel.ƒS.Speech.clear();
    }
    myfirstnovel.Flughafenanhalter = Flughafenanhalter;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function Flughafenzug() {
        console.log("Flughafenzug");
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.train);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Okay was sagt denn der Plan hier am Bahnsteig......es fahren genau 2 Züge von hier aus Richtung Singen... einer davon ist der hier??? Und er fährt in 5 Minuten los?? WOW, was ein Glück.... dann mal schnell rein hier.");
        await myfirstnovel.ƒS.update(1);
        myfirstnovel.ƒS.Speech.clear();
    }
    myfirstnovel.Flughafenzug = Flughafenzug;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function Anhalter01() {
        console.log("Anhalterreden");
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.goodbyedriver);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Hey mein lieber! wohin musst du denn, villeicht kann ich dich mitnehmen?");
        let firstDialogueElementAnswers = {
            iSayYes: "Konstanz wäre super!?",
            iSayNo: "Einfach nur weg, hier haha. Wohin kannst du mich bringen?",
        };
        let firstDialogueElement = await myfirstnovel.ƒS.Menu.getInput(firstDialogueElementAnswers, "class");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.iSayYes:
                //continue writing on this path here
                await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Ich fahre bis kurz vor Konstanz! ....Was ein Zufall, dass du auch nach Konstanz musst, oder? Freut mich sehr, dass ich dich mitnehmen kann.");
                await myfirstnovel.ƒS.update(1);
                myfirstnovel.ƒS.Speech.clear();
                await myfirstnovel.ƒS.update(myfirstnovel.transition.wish.duration, myfirstnovel.transition.clock.alpha, myfirstnovel.transition.wish.edge);
                break;
            case firstDialogueElementAnswers.iSayNo:
                //continue writing on this path here
                await myfirstnovel.ƒS.update(1);
                await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Ich fahre bis kurz vor Konstanz! ....Was ein Zufall das du auch nach Konstanz musst, oder? Freut mich sehr, dass ich dich mitnehmen kann.");
                myfirstnovel.ƒS.Speech.clear();
                await myfirstnovel.ƒS.update(1);
                break;
        }
        ;
    }
    myfirstnovel.Anhalter01 = Anhalter01;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function Anhalter02() {
        console.log("Anhalterfahrt");
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.black);
        await myfirstnovel.ƒS.update(1);
        myfirstnovel.ƒS.Sound.fade(myfirstnovel.sound.backgroundTheme, 0.2, 0.1, true); //autofahrgeräusche + mumble
    }
    myfirstnovel.Anhalter02 = Anhalter02;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function Anhalter03() {
        console.log("Anhaltergoodbye");
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.goodbyedriver);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Wirklich keine Sorge. Das habe ich gerne gemacht. Und der Zufall wollte eben das wir in die gleiche Richtung fahren....... Und hey ganz wichtig! Hier: die wolltest du mitnehmen! Und ich glaube du musst von hier aus nur noch durch diesen Wald und schon bist du vor Konstanz.");
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Karte von Fahrer erhalten und Rucksack geöffnet");
        myfirstnovel.ƒS.Inventory.add(myfirstnovel.items.Ausweis);
        myfirstnovel.ƒS.Inventory.add(myfirstnovel.items.Kartebw);
        myfirstnovel.ƒS.Inventory.add(myfirstnovel.items.Kartebodensee);
        await myfirstnovel.ƒS.Inventory.open();
        myfirstnovel.dataForSave.state.a + -53;
    }
    myfirstnovel.Anhalter03 = Anhalter03;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function Zug01() {
        console.log("Zug01");
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.zug);
        // länger hier bleiben
        // sound zug
        await myfirstnovel.ƒS.update(1);
    }
    myfirstnovel.Zug01 = Zug01;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function Zug02() {
        console.log("Zug02");
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.city);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Erstaunlich wie lange sich so eine Zugfahrt anfühlt... und das hier soll Singen sein?! Hier hat sich aber auch einiges Verändert in den letzten Jahren. Ich muss nun direkt weiterreisen, am besten......");
        let firstDialogueElementAnswers = {
            iSayYes: "...Frage ich diese junge gut gekleidete Frau.",
            iSayNo: "Frage ich diese etwas ältere Frau.",
        };
        let firstDialogueElement = await myfirstnovel.ƒS.Menu.getInput(firstDialogueElementAnswers, "class");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.iSayYes:
                //continue writing on this path here
                await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Teen, ".....bitte?! Sie wagen es mich anzusprechen? Ich möchte nichts mit diesem dreckigen Abschaum zu tun haben. Bitte halten Sie Abstand und hören Sie auf so zu gaffen.");
                await myfirstnovel.ƒS.update(1);
                myfirstnovel.ƒS.Speech.clear();
                await myfirstnovel.ƒS.update(1);
                await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Ach herje... diese Jugend von heute...seeehr eingebildet.. das verstehe ich nicht.... naja.... aber hey was ist denn das für ein Plan?.........Ahhh ein Stadtplan! Okay.. Wir sind hier... und nicht weit von hier ist diese Bushaltestelle. Von dort aus komme ich sicher nach Konstanz! Dann mach ich mich mal auf den Weg.");
                await myfirstnovel.ƒS.update(myfirstnovel.transition.clock.duration, myfirstnovel.transition.clock.alpha, myfirstnovel.transition.clock.edge);
                break;
            case firstDialogueElementAnswers.iSayNo:
                //continue writing on this path here
                await myfirstnovel.ƒS.update(1);
                await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Oma, "Ohh, junger Mann, da sind sie bei mir richtig. Ich arbeitete einst auf dem Rathaus und kenne die Fahrpläne in und auswendig! Haha. Dort oben ist eine Haltestelle, von der ein Bus nach Konstanz fährt.");
                myfirstnovel.ƒS.Speech.clear();
                await myfirstnovel.ƒS.update(1);
                await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Ohh, vielen Dank nette Frau, ich wünsche Ihnen noch einen schönen Tag. Ich mache mich nun direkt auf dem Weg zur Bushaltestelle.");
                break;
        }
        ;
    }
    myfirstnovel.Zug02 = Zug02;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function Zug03() {
        console.log("Zug03");
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.busarrive);
        // sound bus
        await myfirstnovel.ƒS.update(1);
    }
    myfirstnovel.Zug03 = Zug03;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function Wald01() {
        console.log("Waldlauf");
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.waldweg);
        await myfirstnovel.ƒS.update(1);
        myfirstnovel.ƒS.Sound.fade(myfirstnovel.sound.backgroundTheme, 0.2, 0.1, true); //vogelzwitschern + schritte
    }
    myfirstnovel.Wald01 = Wald01;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function Dorf01() {
        console.log("Dorf");
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.villageask);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Wow, erstaunlich wie schnell ich nun nach Konstanz gekommen bin....das kann doch nur ein Zufall aufgrund einer Enscheidung gewesen sein...");
        myfirstnovel.ƒS.Sound.fade(myfirstnovel.sound.backgroundTheme, 0.2, 0.1, true); // kirchenglocken im dorf
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Jetzt muss ich nur noch das Haus meiner Mutter finden.... Ich könnte....");
        let firstDialogueElementAnswers = {
            iSayYes: "... den netten alten Mann fragen.",
            iSayNo: "... zum Rathaus laufen um dort Nachzufragen.",
        };
        let firstDialogueElement = await myfirstnovel.ƒS.Menu.getInput(firstDialogueElementAnswers, "class");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.iSayYes:
                //continue writing on this path here
                await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Ich frag den netten alten Mann"); //A Dorf
                await myfirstnovel.ƒS.update(1);
                myfirstnovel.ƒS.Speech.clear();
                await myfirstnovel.ƒS.update(myfirstnovel.transition.clock.duration, myfirstnovel.transition.clock.alpha, myfirstnovel.transition.clock.edge);
                break;
            case firstDialogueElementAnswers.iSayNo:
                //continue writing on this path here
                await myfirstnovel.ƒS.update(1);
                await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Ich laufe zum Rathaus"); // B Dorf
                myfirstnovel.ƒS.Speech.clear();
                await myfirstnovel.ƒS.update(1);
                break;
        }
        ;
    }
    myfirstnovel.Dorf01 = Dorf01;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function ADorf01() {
        console.log("ADorf01");
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.villageask);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Manalt, "Sie suachet, nooch d Frau Fischer? Hajoo klaaar kenn I Se... ihra jonger isch vor a bar Johr ge Nordamekrika, nochdem d Vater gstorba isch. Sie isch vor a bar Monet vo da Hauptstroß ins Neubaugebiet zoga. Aber jetzt haune au mitkriagt das sie a aubachene Krankheit kriagt hot ond ihr Sohn Sie sogar pflega muaß. I hoff, s god ihr guad ond se wird wieder gsond.... Uffjedafall gugged se au mol im Neubaugebiet nach, gell, jo. Kein Problem. Tschüss. Scheena Dag.");
        myfirstnovel.ƒS.Sound.fade(myfirstnovel.sound.backgroundTheme, 0.2, 0.1, true); // Kirchglocken
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Wow was ein netter Mann.. der wusste wohl über das geschehen im ganzen Dorf bescheid... Naja, ich mach mich auf den Weg ins Neubaugebiet und suche dort.");
    }
    myfirstnovel.ADorf01 = ADorf01;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function BDorf01() {
        console.log("BDorf01");
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.rathaus);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "!no me digas! Das darf doch wohl nicht wahr sein. Das Rathaus hat geschlossen. Dann frage ich am besten diesen alten Mann, ob er mir weiter helfen kann.");
        await myfirstnovel.ƒS.update(1);
        myfirstnovel.ƒS.Speech.clear();
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Manalt, "Sie suachet, nooch d Frau Fischer? Hajoo klaaar kenn I Se... ihra jonger isch vor a bar Johr ge Nordamekrika, nochdem d Vater gstorba isch. Sie isch vor a bar Monet vo da Hauptstroß ins Neubaugebiet zoga. Aber jetzt haune au mitkriagt das sie a aubachene Krankheit kriagt hot ond ihr Sohn Sie sogar pflega muaß. I hoff, s god ihr guad ond se wird wieder gsond.... Uffjedafall gugged se au mol im Neubaugebiet nach, gell, jo. Kein Problem. Tschüss. Scheena Dag.");
        await myfirstnovel.ƒS.update(1);
        myfirstnovel.ƒS.Speech.clear();
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Wow was ein netter Mann.. der wusste wohl über das geschehen im ganzen Dorf bescheid... Naja, ich mach mich auf den Weg ins Neubaugebiet und suche dort");
    }
    myfirstnovel.BDorf01 = BDorf01;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function AHaus01() {
        console.log("AHaus01");
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.street);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Steht dort drüben nicht sogar Fischer auf dem Klingelschild?");
    }
    myfirstnovel.AHaus01 = AHaus01;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function AZuhause01() {
        console.log("AZuhause01");
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.zuhause);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Hallo mein Bruder! Es freut michg sehr dich zu sehen! Du hast es geschafft! Komm mit ich zeige dir wo deine Mutter liegt Sie hat dir etwas wichtiges zu erzählen!");
        await myfirstnovel.ƒS.update(1);
        myfirstnovel.ƒS.Speech.clear();
    }
    myfirstnovel.AZuhause01 = AZuhause01;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function BZuhause01() {
        console.log("BZuhause01");
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.zuhause);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Hallo mein Bruder! Es freut mich sehr dich zu sehen! Leider muss ich dir sagen, dass du es nicht rechtzeitig geschafft hast.. Unsere Mutter ist vor wenigen Minuten vom Leichenwaagen abegholt worden..");
        await myfirstnovel.ƒS.update(1);
        myfirstnovel.ƒS.Speech.clear();
    }
    myfirstnovel.BZuhause01 = BZuhause01;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function city() {
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
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.city);
        await myfirstnovel.ƒS.update(myfirstnovel.transition.clock.duration, myfirstnovel.transition.clock.alpha, myfirstnovel.transition.clock.edge);
        await myfirstnovel.ƒS.Character.show(myfirstnovel.characters.Teen, myfirstnovel.characters.Teen.pose.normal, myfirstnovel.ƒS.positions.bottomleft);
        await myfirstnovel.ƒS.update(1);
        //  await ƒS.Speech.tell(characters.Risa, text.Risa.T0000);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Teen, "Hey......Wohin fährst du?");
        await myfirstnovel.ƒS.Character.hide(myfirstnovel.characters.Teen);
        await myfirstnovel.ƒS.Character.show(myfirstnovel.characters.Teen, myfirstnovel.characters.Teen.pose.smile, myfirstnovel.ƒS.positions.bottomleft);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Teen, "......Ich fahre nach City");
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Character.hide(myfirstnovel.characters.Teen);
        await myfirstnovel.ƒS.update(myfirstnovel.transition.clock.duration, myfirstnovel.transition.clock.alpha, myfirstnovel.transition.clock.edge);
    }
    myfirstnovel.city = city;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function Zug() {
        console.log("Zug");
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.black);
        await myfirstnovel.ƒS.update(myfirstnovel.transition.clock.duration, myfirstnovel.transition.clock.alpha, myfirstnovel.transition.clock.edge);
        await myfirstnovel.ƒS.Character.show(myfirstnovel.characters.Oma, myfirstnovel.characters.Oma.pose.normal, myfirstnovel.ƒS.positions.bottomleft);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Oma, "Schönes Wetter heute, oder? ");
        await myfirstnovel.ƒS.Character.hide(myfirstnovel.characters.Oma);
        await myfirstnovel.ƒS.Character.show(myfirstnovel.characters.Oma, myfirstnovel.characters.Oma.pose.smile, myfirstnovel.ƒS.positions.bottomleft);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Oma, "Okaaaay", false);
        let firstDialogueElementAnswers = {
            iSayOk: "Ok",
            iSayYes: "Yes",
            iSayNo: "No"
        };
        let firstDialogueElement = await myfirstnovel.ƒS.Menu.getInput(firstDialogueElementAnswers, "class");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.iSayOk:
                //continue writing on this path here
                await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Oma, "BlaBla1");
                await myfirstnovel.ƒS.update(1);
                myfirstnovel.ƒS.Character.hide(myfirstnovel.characters.Oma);
                myfirstnovel.ƒS.Speech.clear();
                await myfirstnovel.ƒS.update(myfirstnovel.transition.clock.duration, myfirstnovel.transition.clock.alpha, myfirstnovel.transition.clock.edge);
                break;
            case firstDialogueElementAnswers.iSayYes:
                //continue writing on this path here
                await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Oma, "Blabla2");
                await myfirstnovel.ƒS.update(1);
                myfirstnovel.ƒS.Character.hide(myfirstnovel.characters.Oma);
                myfirstnovel.ƒS.Speech.clear();
                await myfirstnovel.ƒS.update(myfirstnovel.transition.clock.duration, myfirstnovel.transition.clock.alpha, myfirstnovel.transition.clock.edge);
                break;
            case firstDialogueElementAnswers.iSayNo:
                //continue writing on this path here
                await myfirstnovel.ƒS.Character.hide(myfirstnovel.characters.Oma);
                await myfirstnovel.ƒS.Character.show(myfirstnovel.characters.Oma, myfirstnovel.characters.Oma.pose.sad, myfirstnovel.ƒS.positions.bottomleft);
                await myfirstnovel.ƒS.update(1);
                await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Oma, "Blabla3");
                await myfirstnovel.ƒS.Character.hide(myfirstnovel.characters.Oma);
                myfirstnovel.ƒS.Speech.clear();
                await myfirstnovel.ƒS.update(1);
                break;
        }
        ;
        //????bestimmte szenen nach bestimmten aktionen abspielen
    }
    myfirstnovel.Zug = Zug;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    myfirstnovel.ƒ = FudgeCore;
    myfirstnovel.ƒS = FudgeStory;
    console.log("Loaded!");
    //define transition
    myfirstnovel.transition = {
        clock: {
            duration: 1,
            alpha: "Images/Transitions/035.jpg",
            edge: 1,
        },
        wish: {
            duration: 1,
            alpha: "Images/Transitions/005.jpg",
            edge: 1,
        }
    };
    myfirstnovel.items = {
        Ausweis: {
            name: "Ausweis",
            description: "Ausweis",
            image: "Images/Items/ausweis.png"
        },
        Kartebw: {
            name: "Karte-BW",
            description: "Karte-BW",
            image: "Images/Items/karte.png"
        },
        Kartebodensee: {
            name: "Karte-Bodensee",
            description: "Karte-Bodensee",
            image: "Images/Items/kartebodensee.png"
        }
    };
    //define sound
    myfirstnovel.sound = {
        //Musik
        backgroundTheme: "Sound/Music/vn_maintheme_loop.wav",
        //Sound
        click: ""
    };
    myfirstnovel.locations = {
        black: {
            name: "black",
            background: "Images/Backgrounds/black1.png"
        },
        Flughafen12: {
            name: "Flughafen12",
            background: "Images/Backgrounds/flugzeug_frachtraum.png"
        },
        Flughafen13: {
            name: "Flughafen13",
            background: "Images/Backgrounds/flughafen_pilot.png"
        },
        bushaltestelle: {
            name: "bushaltestelle",
            background: "Images/Backgrounds/bushaltestelle.png"
        },
        peranhalter: {
            name: "peranhalter",
            background: "Images/Backgrounds/peranhalter.png"
        },
        busarrive: {
            name: "busarrive",
            background: "Images/Backgrounds/busarrive.png"
        },
        inbus: {
            name: "inbus",
            background: "Images/Backgrounds/inbus.png"
        },
        goodbyedriver: {
            name: "goodbyedriver",
            background: "Images/Backgrounds/goodbyedriver.png"
        },
        verlassenestrasse: {
            name: "verlassenestrasse",
            background: "Images/Backgrounds/verlassenestrasse.png"
        },
        waldweg: {
            name: "waldweg",
            background: "Images/Backgrounds/waldweg.png"
        },
        train: {
            name: "train",
            background: "Images/Backgrounds/train.png"
        },
        street: {
            name: "street",
            background: "Images/Backgrounds/street.png"
        },
        dorf: {
            name: "dorf",
            background: "Images/Backgrounds/street.png"
        },
        villageask: {
            name: "villageask",
            background: "Images/Backgrounds/villageask.png"
        },
        rathaus: {
            name: "rathaus",
            background: "Images/Backgrounds/rathaus.png"
        },
        zuhause: {
            name: "zuhause",
            background: "Images/Backgrounds/zuhause.png"
        },
        zug: {
            name: "zug",
            background: "Images/Backgrounds/zug_tunnel.png"
        },
        city: {
            name: "city",
            background: "Images/Backgrounds/city_abend.png"
        },
    };
    //define characters
    myfirstnovel.characters = {
        Narrator: {
            name: ""
        },
        Protagonist: {
            name: ""
        },
        Oma: {
            name: "Nette Dame",
            origin: myfirstnovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Omanormal.png",
                smile: "Images/Characters/Omasmile.png",
                sad: "Images/Characters/Omasad.png"
            }
        },
        Pilot: {
            name: "Pilot",
            origin: myfirstnovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Omasmile.png" // austausch
            }
        },
        Manalt: {
            name: "Netter Herr",
            origin: myfirstnovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Omasmile.png" // austausch
            }
        },
        Teen: {
            name: "Junge Frau",
            origin: myfirstnovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Teennormal.png",
                smile: "Images/Characters/Teensmile.png",
                sad: "Images/Characters/Teensad.png"
            }
        }
    };
    myfirstnovel.dataForSave = {
        score: 0,
        Protagonist: {
            name: "Protagonist"
        },
        ended: false,
        state: {
            a: ""
        },
        pickedtrain: false,
        pickedanhalter: false,
    };
    let volume = 1.0;
    function incrementSound() {
        if (volume < 100)
            volume += 0.1;
        myfirstnovel.ƒS.Sound.setMasterVolume(volume);
    }
    myfirstnovel.incrementSound = incrementSound;
    function decrementSound() {
        if (volume > 0) {
            volume -= 0.1;
            myfirstnovel.ƒS.Sound.setMasterVolume(volume);
        }
    }
    myfirstnovel.decrementSound = decrementSound;
    //create Menu with buttons
    let inGameMenu = {
        save: "Save",
        load: "Load",
        close: "Close",
        turnUpVolume: "+",
        turnDownVolume: "-",
        credits: "Credits",
        about: "About"
    };
    //create Menu with buttons
    let gameMenu;
    async function buttonFunc(_option) {
        console.log(_option);
        if (_option == inGameMenu.save) {
            await myfirstnovel.ƒS.Progress.save();
        }
        else if (_option == inGameMenu.load) {
            await myfirstnovel.ƒS.Progress.load();
        }
        else if (_option == inGameMenu.turnUpVolume) {
            incrementSound();
        }
        else if (_option == inGameMenu.turnDownVolume) {
            decrementSound();
        }
        if (_option == inGameMenu.close) {
            gameMenu.close();
        }
    }
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case myfirstnovel.ƒ.KEYBOARD_CODE.S:
                console.log("Save");
                await myfirstnovel.ƒS.Progress.save();
                break;
            case myfirstnovel.ƒ.KEYBOARD_CODE.D:
                console.log("Load");
                await myfirstnovel.ƒS.Progress.load();
                break;
        }
    }
    ;
    window.addEventListener("load", start);
    function start(_event) {
        // MENU
        gameMenu =
            myfirstnovel.ƒS.Menu.create(inGameMenu, buttonFunc, "gameMenu");
        let scenes = [
            { scene: myfirstnovel.Flughafen01, name: "Flughafen01" },
            { scene: myfirstnovel.Flughafen02, name: "Flughafen02" },
            { scene: myfirstnovel.Flughafen03, name: "Flughafen03" },
            { id: "Flughafen04", scene: myfirstnovel.Flughafen04, name: "Flughafen04", next: "" },
            //next?
            { id: "Flughafenzug", scene: myfirstnovel.Flughafenzug, name: "Flughafenzug", next: "Zug01" },
            { scene: myfirstnovel.Zug01, name: "Zug01", next: "Zug02" },
            { scene: myfirstnovel.Zug02, name: "Zug02", next: "Zug03" },
            { scene: myfirstnovel.Zug03, name: "Zug03", next: "Dorf01" },
            { scene: myfirstnovel.Dorf01, name: "Dorf01" },
            { scene: myfirstnovel.ADorf01, name: "ADorf01" },
            { scene: myfirstnovel.BDorf01, name: "BDorf01" },
            { scene: myfirstnovel.AHaus01, name: "AHaus1" },
            { scene: myfirstnovel.BZuhause01, name: "BZuhause01" },
            //next?
            { id: "Flughafenanhalter", scene: myfirstnovel.Flughafenanhalter, name: "Flughafenanhalter", next: "Anhalter01" },
            { scene: myfirstnovel.Anhalter01, name: "Anhalter01", next: "Anhalter02" },
            { scene: myfirstnovel.Anhalter02, name: "Anhalter02", next: "Anhalter03" },
            { scene: myfirstnovel.Anhalter03, name: "Anhalter03", next: "Wald01" },
            { scene: myfirstnovel.Wald01, name: "Wald01" },
            { scene: myfirstnovel.Dorf01, name: "Dorf01" },
            { scene: myfirstnovel.ADorf01, name: "ADorf01" },
            { scene: myfirstnovel.BDorf01, name: "BDorf01" },
            { scene: myfirstnovel.AHaus01, name: "AHaus1" },
            { scene: myfirstnovel.AZuhause01, name: "AZuhause01" },
            //{ scene: Zug, name: "Zug" },
            //{ scene: city, name: "City" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        myfirstnovel.dataForSave.state = myfirstnovel.ƒS.Progress.setData(myfirstnovel.dataForSave.state, uiElement);
        // start the sequence
        myfirstnovel.ƒS.Progress.go(scenes);
    }
})(myfirstnovel || (myfirstnovel = {}));
//# sourceMappingURL=MYFIRSTNOVEL.js.map