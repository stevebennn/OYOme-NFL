import { Injectable } from '@angular/core';

@Injectable()
export class StepsService {

    constructor() { }

    steps = [
        { name: "team" },
        { name: "skintone" },
        { name: "eyes" },
        { name: "eyebrows"},
        { name: "noses"},
        { name: "mouths"},
        { name: "beards"},
        // { name: "packaging"}
    ]

    opts = {
        "teams": [
            {name: "nflari"},
            {name: "nflatl"},
            {name: "nflbal"},
            {name: "nflcle"}
        ],
        "noses": [
            "001","002","003","004","005","006","007","008"
        ],
        "nose_accessories": [
            "000","001","002"
        ],
        "mouths": [
            "001","002","003","004","005","006","007","008","009","010","011","012","013","014","015"
        ],
        "mouth_accessories": [
            "000","001","002","003","004","005","006","007","008"
        ],
        "torsos": [
            {name: "wht",hex:"#FFF"},
            {name: "blk",hex:"#000"},
            {name: "123",hex:"#eddb0d"},
            {name: "186",hex:"#f80000"},
            {name: "187",hex:"#a00e0e"},
            {name: "287",hex:"#230fb9"},
            {name: "289",hex:"#0d134c"},
            {name: "348",hex:"#1aa517"},
            {name: "1655",hex:"#ed5f0d"}
        ],
        "legs" : [
            {name: "wht",hex:"#FFF"},
            {name: "blk",hex:"#000"},
            {name: "123",hex:"#eddb0d"},
            {name: "186",hex:"#f80000"},
            {name: "187",hex:"#a00e0e"},
            {name: "287",hex:"#230fb9"},
            {name: "289",hex:"#0d134c"},
            {name: "348",hex:"#1aa517"},
            {name: "1655",hex:"#ed5f0d"}
        ],
        "skintones": [
            {name: "001",hex:"#ffcd9c"},
            {name: "002",hex:"#daa268"},
            {name: "003",hex:"#815120"}
        ],
        "eyes": ["001","002","003","004","005","006","007","008"],
        "eye_accessories": ["000","001","002","003","004","005"],
        "eyebrows": ["001","002","003","004","005","006","007","008","009","010","011"],
        "hairstyles": ["null","spikey","ponytail"],
        "haircolors" : [
            {name: "blk",hex:"#000"}, // black
            {name: "4625",hex:"#472519"}, // dark brown
            {name: "464",hex:"#78421E"}, // medium brown
            {name: "7599",hex:"#E6481F"}, // red
            {name: "116",hex:"#F0E022"}  // blonde / yellow
        ],
        "beards": ["000","001","002","003","004","005","006","007"],
        "shirts": ["000","001","002","003","004","005","006","007","008","009","010"],
        "packaging": ["001","002","003","004","005"]
    }

}

