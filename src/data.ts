import * as bottom_left_1 from "../assets/images/bottom_left/1.svg";
import * as bottom_left_2 from "../assets/images/bottom_left/2.svg";
import * as bottom_left_3 from "../assets/images/bottom_left/3.svg";
import * as bottom_left_4 from "../assets/images/bottom_left/4.svg";
import * as bottom_left_5 from "../assets/images/bottom_left/5.svg";
import * as left_1 from "../assets/images/left/1.svg";
import * as left_2 from "../assets/images/left/2.svg";
import * as left_3 from "../assets/images/left/3.svg";
import * as left_4 from "../assets/images/left/4.svg";
import * as left_5 from "../assets/images/left/5.svg";
import * as top_left_1 from "../assets/images/top_left/1.svg";
import * as top_left_2 from "../assets/images/top_left/2.svg";
import * as top_left_3 from "../assets/images/top_left/3.svg";
import * as top_left_4 from "../assets/images/top_left/4.svg";
import * as top_left_5 from "../assets/images/top_left/5.svg";

export default {
    texturesData: {
        "images/bottom_left/1.svg": bottom_left_1,
        "images/bottom_left/2.svg": bottom_left_2,
        "images/bottom_left/3.svg": bottom_left_3,
        "images/bottom_left/4.svg": bottom_left_4,
        "images/bottom_left/5.svg": bottom_left_5,
        "images/left/1.svg": left_1,
        "images/left/2.svg": left_2,
        "images/left/3.svg": left_3,
        "images/left/4.svg": left_4,
        "images/left/5.svg": left_5,
        "images/top_left/1.svg": top_left_1,
        "images/top_left/2.svg": top_left_2,
        "images/top_left/3.svg": top_left_3,
        "images/top_left/4.svg": top_left_4,
        "images/top_left/5.svg": top_left_5,
    },
    textures: [
        "images/bottom_left/1.svg",
        "images/bottom_left/2.svg",
        "images/bottom_left/3.svg",
        "images/bottom_left/4.svg",
        "images/bottom_left/5.svg",
        "images/left/1.svg",
        "images/left/2.svg",
        "images/left/3.svg",
        "images/left/4.svg",
        "images/left/5.svg",
        "images/top_left/1.svg",
        "images/top_left/2.svg",
        "images/top_left/3.svg",
        "images/top_left/4.svg",
        "images/top_left/5.svg",
    ],
    animations: [
        {
            name: "left_step",
            textures: [
                "images/left/1.svg",
                "images/left/2.svg",
                "images/left/3.svg",
                "images/left/4.svg",
                "images/left/5.svg",
            ],
            repeat: 0,
        },
        {
            name: "top_left_step",
            textures: [
                "images/top_left/1.svg",
                "images/top_left/2.svg",
                "images/top_left/3.svg",
                "images/top_left/4.svg",
                "images/top_left/5.svg",
            ],
            repeat: 0,
        },
        {
            name: "bottom_left_step",
            textures: [
                "images/bottom_left/1.svg",
                "images/bottom_left/2.svg",
                "images/bottom_left/3.svg",
                "images/bottom_left/4.svg",
                "images/bottom_left/5.svg",
            ],
            repeat: 0,
        },
        {
            name: "left_run",
            textures: [
                "images/left/2.svg",
                "images/left/3.svg",
                "images/left/4.svg",
                "images/left/5.svg",
            ],
            repeat: 3,
        },
        {
            name: "top_left_run",
            textures: [
                "images/top_left/2.svg",
                "images/top_left/3.svg",
                "images/top_left/4.svg",
                "images/top_left/5.svg",
            ],
            repeat: 3,
        },
        {
            name: "bottom_left_run",
            textures: [
                "images/bottom_left/2.svg",
                "images/bottom_left/3.svg",
                "images/bottom_left/4.svg",
                "images/bottom_left/5.svg",
            ],
            repeat: 3,
        },
    ],
    origins: {
        left: {x: 0.75, y: 0.75},
        top_left: {x: 0.63, y: 0.83},
        bottom_left: {x: 0.65, y: 0.5},
    },
    stopTextures: {
        left: "images/left/1.svg",
        top_left: "images/top_left/1.svg",
        bottom_left: "images/bottom_left/1.svg",
    },
    cannotEscapeTextures: {
        left: "images/left/2.svg",
        top_left: "images/top_left/2.svg",
        bottom_left: "images/bottom_left/2.svg",
    },
    directions: [
        {
            scaleX: 1,
            name: "left",
        },
        {
            scaleX: 1,
            name: "top_left",
        },
        {
            scaleX: -1,
            name: "top_left",
        },
        {
            scaleX: -1,
            name: "left",
        },
        {
            scaleX: -1,
            name: "bottom_left",
        },
        {
            scaleX: 1,
            name: "bottom_left",
        },
    ],
    catDefaultTexture: "images/bottom_left/1.svg",
    catDefaultDirection: 5,
    catStepLength: 20,
    frameRate: 15,
    translations: {},
};
