export const initialState = {
    characters: {
        "rocket": {
            charName: 'Rocket',
            butterflies: {
                cleanRoom: 2,
                washDishes: 2,
                goShopping: 1,
            },
        },
        "stakar": {
            charName: 'Stakar',
            butterflies: {
                cleanRoom: 0,
                washDishes: 0,
            },
        },
        "nebular": {
            charName: 'Nebular',
            butterflies: {
                cleanRoom: 0,
                washDishes: 0,
            },
        },
        "gomar": {
            charName: 'Gamora',
            butterflies: {
                cleanRoom: 0,
                washDishes: 0,
            },
        }
    },
    tasks: {
        "cleanRoom": {
            taskName: 'clean room',
            icon: 'fas fa-award'
        },
        "washDishes": {
            taskName: 'wash dishes',
            icon: 'far fa-clock'
        },
        "goShopping": {
            taskName: 'go shopping',
            icon: 'fas fa-money-check-alt'
        }
    }
}