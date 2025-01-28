///////////////// Generics \\\\\\\\\\\\\\\\\

const isTrue1 = <T>(arg: T): T => arg

const isObj1 = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

const isTrue4 = <T>(arg: T): {arg: T, is:boolean} => {
    // is array?
    if (Array.isArray(arg) && !arg.length) {
        return {arg, is: false}
    }

    // is object?
    if (isTrue1(arg) && !Object.keys(arg as keyof T).length) {
        return {arg, is: false}
    }

    return { arg, is: !!arg}
}

/////////////////////// example \\\\\\\\\\\\\\\\\\\\\

interface UserPosts {
    posts: string
}

const getAllUserSpecifics = <T extends UserPosts, K extends keyof T>(userPosts: T[], key: K): T[K][] => {
    return userPosts.map( userPost => userPost[key])
}

class StateObject1<T> {
    private data: T

    constructor(data: T) {
        this.data = data
    }

    get state(): T {
        return this.data
    }

    set state(dataVal: T) {
        this.data = dataVal
    }
}

const username = new StateObject1<string | number[]>("Allan")
console.log(username.state)
username.state = [12]
username.state = 'hello'