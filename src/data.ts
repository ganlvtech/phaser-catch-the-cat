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
    textures: {
        "bottom_left_1": bottom_left_1,
        "bottom_left_2": bottom_left_2,
        "bottom_left_3": bottom_left_3,
        "bottom_left_4": bottom_left_4,
        "bottom_left_5": bottom_left_5,
        "left_1": left_1,
        "left_2": left_2,
        "left_3": left_3,
        "left_4": left_4,
        "left_5": left_5,
        "top_left_1": top_left_1,
        "top_left_2": top_left_2,
        "top_left_3": top_left_3,
        "top_left_4": top_left_4,
        "top_left_5": top_left_5,
    },
    animations: [
        {
            name: "left_step",
            textures: [
                "left_1",
                "left_2",
                "left_3",
                "left_4",
                "left_5",
            ],
            repeat: 0,
        },
        {
            name: "top_left_step",
            textures: [
                "top_left_1",
                "top_left_2",
                "top_left_3",
                "top_left_4",
                "top_left_5",
            ],
            repeat: 0,
        },
        {
            name: "bottom_left_step",
            textures: [
                "bottom_left_1",
                "bottom_left_2",
                "bottom_left_3",
                "bottom_left_4",
                "bottom_left_5",
            ],
            repeat: 0,
        },
        {
            name: "left_run",
            textures: [
                "left_2",
                "left_3",
                "left_4",
                "left_5",
            ],
            repeat: 3,
        },
        {
            name: "top_left_run",
            textures: [
                "top_left_2",
                "top_left_3",
                "top_left_4",
                "top_left_5",
            ],
            repeat: 3,
        },
        {
            name: "bottom_left_run",
            textures: [
                "bottom_left_2",
                "bottom_left_3",
                "bottom_left_4",
                "bottom_left_5",
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
        left: "left_1",
        top_left: "top_left_1",
        bottom_left: "bottom_left_1",
    },
    cannotEscapeTextures: {
        left: "left_2",
        top_left: "top_left_2",
        bottom_left: "bottom_left_2",
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
    catDefaultDirection: 5,
    catStepLength: 20,
    frameRate: 15,
    translations: {},
};
