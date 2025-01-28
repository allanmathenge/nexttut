
///////////////// GENERICS \\\\\\\\\\\\\

// generic allows you to have a type holder: a typeof variable
// <T> is type parameter or type variable

const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true))
console.log(isObj('John'))
console.log(isObj([1, 3, 4]))
console.log(isObj({name:'John'}))
console.log(isObj(null))

// utility functions are necessary when your function needs a logic on what to return
// !! is double bang operator

const isTrue = <T>(arg: T): {arg: T, is: boolean} => {

    // if we have an array
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is:false }
    }

    // an object
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is:false}
    }

    // if we have 0 or 1
    return { arg, is: !!arg }
}

console.log('\n Type Parameters \n')


interface BoolCheck<T> {
    value: T
    is: boolean
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {

    // if we have an array
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is:false }
    }

    // an object
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is:false}
    }

    // if we have 0 or 1
    return { value: arg, is: !!arg}
}

console.log(checkBoolValue(false))
console.log(checkBoolValue(0))
console.log(checkBoolValue(1))
console.log(checkBoolValue(true))
console.log(checkBoolValue('Allan'))
console.log(checkBoolValue(''))
console.log(checkBoolValue(null))
console.log(checkBoolValue(undefined))
console.log(checkBoolValue({}))
console.log(checkBoolValue({name: 'Allan'}))
console.log(checkBoolValue([]))
console.log(checkBoolValue([1, 2, 3]))
console.log(checkBoolValue(NaN))
console.log(checkBoolValue(-0))


interface HasId {
    id: number
}
const processUser = <T extends HasId>(user: T): T => {
    // process user logic here
    return user
}

console.log(processUser({id:1, name: 'Allan'}))
// console.log(processUser({ name: 'Allan'}))

// We build K as the type of the first key we pass in
const getUsersProperty = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

////////////// user[key] identifies the values of the user \\\\\\\\\\\\\\\

const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
        }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
            "lat": "29.4572",
            "lng": "-164.2990"
        }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
        }
    }
]
console.log('\n \n')

console.log(getUsersProperty(usersArray, "email"))
console.log(getUsersProperty(usersArray, "username"))

//// Using generic in a class \\\\\\\\\\\\\

class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const firstState = new StateObject<string>("John")
// console.log(firstState.state)
firstState.state = "John"
// firstState.state = 12
const secondtState = new StateObject(12)

const myState = new StateObject<(string | number | boolean)[]>([])

myState.state = [444, "bs", false]


