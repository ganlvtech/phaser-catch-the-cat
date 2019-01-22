export default {
    textures: [
        'images/bottom_left/1.svg',
        'images/bottom_left/2.svg',
        'images/bottom_left/3.svg',
        'images/bottom_left/4.svg',
        'images/bottom_left/5.svg',
        'images/left/1.svg',
        'images/left/2.svg',
        'images/left/3.svg',
        'images/left/4.svg',
        'images/left/5.svg',
        'images/top_left/1.svg',
        'images/top_left/2.svg',
        'images/top_left/3.svg',
        'images/top_left/4.svg',
        'images/top_left/5.svg'
    ],
    animations: [
        {
            name: 'left_step',
            textures: [
                'images/left/1.svg',
                'images/left/2.svg',
                'images/left/3.svg',
                'images/left/4.svg',
                'images/left/5.svg'
            ],
            repeat: 0
        },
        {
            name: 'top_left_step',
            textures: [
                'images/top_left/1.svg',
                'images/top_left/2.svg',
                'images/top_left/3.svg',
                'images/top_left/4.svg',
                'images/top_left/5.svg'
            ],
            repeat: 0
        },
        {
            name: 'bottom_left_step',
            textures: [
                'images/bottom_left/1.svg',
                'images/bottom_left/2.svg',
                'images/bottom_left/3.svg',
                'images/bottom_left/4.svg',
                'images/bottom_left/5.svg'
            ],
            repeat: 0
        },
        {
            name: 'left_run',
            textures: [
                'images/left/2.svg',
                'images/left/3.svg',
                'images/left/4.svg',
                'images/left/5.svg'
            ],
            repeat: 3
        },
        {
            name: 'top_left_run',
            textures: [
                'images/top_left/2.svg',
                'images/top_left/3.svg',
                'images/top_left/4.svg',
                'images/top_left/5.svg'
            ],
            repeat: 3
        },
        {
            name: 'bottom_left_run',
            textures: [
                'images/bottom_left/2.svg',
                'images/bottom_left/3.svg',
                'images/bottom_left/4.svg',
                'images/bottom_left/5.svg'
            ],
            repeat: 3
        }
    ],
    origins: {
        left: {x: 0.75, y: 0.75},
        top_left: {x: 0.63, y: 0.83},
        bottom_left: {x: 0.65, y: 0.5}
    },
    stopTextures: {
        left: 'images/left/1.svg',
        top_left: 'images/top_left/1.svg',
        bottom_left: 'images/bottom_left/1.svg'
    },
    cannotEscapeTextures: {
        left: 'images/left/2.svg',
        top_left: 'images/top_left/2.svg',
        bottom_left: 'images/bottom_left/2.svg',
    },
    directions: [
        {
            scaleX: 1,
            name: 'left'
        },
        {
            scaleX: 1,
            name: 'top_left'
        },
        {
            scaleX: -1,
            name: 'top_left'
        },
        {
            scaleX: -1,
            name: 'left'
        },
        {
            scaleX: -1,
            name: 'bottom_left'
        },
        {
            scaleX: 1,
            name: 'bottom_left'
        }
    ],
    catDefaultTexture: 'images/bottom_left/1.svg',
    catDefaultDirection: 5,
    catStepLength: 20,
    frameRate: 15
};
