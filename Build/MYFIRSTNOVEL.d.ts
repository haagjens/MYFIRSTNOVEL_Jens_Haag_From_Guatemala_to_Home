declare namespace myfirstnovel {
    function Flughafen01(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function Flughafen02(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function Flughafen03(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function Flughafen04(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function Flughafenanhalter(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function Flughafenzug(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function Anhalter01(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function Anhalter02(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function Anhalter03(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function Zug01(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function Zug02(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function Zug03(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function Wald01(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function Dorf01(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function ADorf01(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function BDorf01(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function AHaus01(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function AZuhause01(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function BZuhause01(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function city(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function Zug(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wish: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let items: {
        Ausweis: {
            name: string;
            description: string;
            image: string;
        };
        Kartebw: {
            name: string;
            description: string;
            image: string;
        };
        Kartebodensee: {
            name: string;
            description: string;
            image: string;
        };
    };
    let sound: {
        backgroundTheme: string;
        click: string;
    };
    let locations: {
        black: {
            name: string;
            background: string;
        };
        Flughafen12: {
            name: string;
            background: string;
        };
        Flughafen13: {
            name: string;
            background: string;
        };
        bushaltestelle: {
            name: string;
            background: string;
        };
        peranhalter: {
            name: string;
            background: string;
        };
        busarrive: {
            name: string;
            background: string;
        };
        inbus: {
            name: string;
            background: string;
        };
        goodbyedriver: {
            name: string;
            background: string;
        };
        verlassenestrasse: {
            name: string;
            background: string;
        };
        waldweg: {
            name: string;
            background: string;
        };
        train: {
            name: string;
            background: string;
        };
        street: {
            name: string;
            background: string;
        };
        dorf: {
            name: string;
            background: string;
        };
        villageask: {
            name: string;
            background: string;
        };
        rathaus: {
            name: string;
            background: string;
        };
        zuhause: {
            name: string;
            background: string;
        };
        zug: {
            name: string;
            background: string;
        };
        city: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Narrator: {
            name: string;
        };
        Protagonist: {
            name: string;
        };
        Oma: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
                sad: string;
            };
        };
        Pilot: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        Manalt: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        Teen: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
                sad: string;
            };
        };
    };
    let dataForSave: {
        score: number;
        Protagonist: {
            name: string;
        };
        ended: boolean;
        state: {
            a: string;
        };
        pickedtrain: boolean;
        pickedanhalter: boolean;
    };
    function incrementSound(): void;
    function decrementSound(): void;
}
