namespace myfirstnovel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Loaded!");

  //define transition
  export let transition = {
    clock: {
      duration: 1,
      alpha: "",
      edge: 1
    }
  };

  export let items = {
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
  export let sound = {
    //Musik
    backgroundTheme: "Sound/Music/vn_maintheme_loop.wav",
    //Sound
    click: ""
  };

  export let locations = {
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
  export let characters = {
    Narrator: {
      name: ""
    },
    Protagonist: {
      name: ""
    },
    Oma: {
      name: "Nette Dame",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/Omanormal.png",
        smile: "Images/Characters/Omasmile.png",
        sad: "Images/Characters/Omasad.png"
      }
    },
    Pilot: {
      name: "Pilot",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/Omasmile.png" // austausch
      }
    },
    Manalt: {
      name: "Netter Herr",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/Omasmile.png" // austausch
      }
    },
    Teen: {
      name: "Junge Frau",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/Teennormal.png",
        smile: "Images/Characters/Teensmile.png",
        sad: "Images/Characters/Teensad.png"
      }
    }

  };

  export let dataForSave = {
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

  let volume: number = 1.0;

  export function incrementSound(): void {
    if (volume < 100)
      volume += 0.1;
    ƒS.Sound.setMasterVolume(volume);
  }


  export function decrementSound(): void {
    if (volume > 0) {
      volume -= 0.1;
      ƒS.Sound.setMasterVolume(volume);
    }
  }

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
  let gameMenu: ƒS.Menu;

  async function buttonFunc(_option: string): Promise<void> {
    console.log(_option);
    if (_option == inGameMenu.save) {
      await ƒS.Progress.save();
    }
    else if (_option == inGameMenu.load) {
      await ƒS.Progress.load();
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
  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.S:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.D:
        console.log("Load");
        await ƒS.Progress.load();
        break;
    }

  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    // MENU
    gameMenu =
      ƒS.Menu.create(inGameMenu, buttonFunc, "gameMenu");

    let scenes: ƒS.Scenes = [
      { scene: Flughafen01, name: "Flughafen01", next: "Zug01" },
      { scene: Flughafen02, name: "Flughafen02" },
      { scene: Flughafen03, name: "Flughafen03" },
      { id: "Flughafen04", scene: Flughafen04, name: "Flughafen04", next: ""}, 
      
      //next?
      { id: "Flughafenzug", scene: Flughafenzug, name: "Flughafenzug", next: ""}, 
      { scene: Zug01, name: "Zug01" },
      { scene: Zug02, name: "Zug02" },
      { scene: Zug03, name: "Zug03" },

      { scene: Dorf01, name: "Dorf01" }, 
      { scene: ADorf01, name: "ADorf01" }, 
      { scene: BDorf01, name: "BDorf01" }, 
      { scene: AHaus01, name: "AHaus1" }, 

      { scene: BZuhause01, name: "BZuhause01" }, 

      //next?
      { id: "Flughafenanhalter", scene: Flughafenanhalter, name: "Flughafenanhalter", next: ""}, 
      { scene: Anhalter01, name: "Anhalter01" },
      { scene: Anhalter02, name: "Anhalter02" },
      { scene: Anhalter03, name: "Anhalter03" },

      { scene: Wald01, name: "Wald01" },
      { scene: Dorf01, name: "Dorf01" }, 
      { scene: ADorf01, name: "ADorf01" }, 
      { scene: BDorf01, name: "BDorf01" }, 
      { scene: AHaus01, name: "AHaus1" }, 

      { scene: AZuhause01, name: "AZuhause01" }, 
    

      //{ scene: Zug, name: "Zug" },
      //{ scene: city, name: "City" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave.state = ƒS.Progress.setData(dataForSave.state, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);


  }
}
