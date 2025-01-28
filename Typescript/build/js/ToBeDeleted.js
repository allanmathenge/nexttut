"use strict";
///////////////// Generics \\\\\\\\\\\\\\\\\
const isTrue1 = (arg) => arg;
const isObj1 = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
const isTrue4 = (arg) => {
    // is array?
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    // is object?
    if (isTrue1(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const getAllUserSpecifics = (userPosts, key) => {
    return userPosts.map(userPost => userPost[key]);
};
class StateObject1 {
    constructor(data) {
        this.data = data;
    }
    get state() {
        return this.data;
    }
    set state(dataVal) {
        this.data = dataVal;
    }
}
const username = new StateObject1("Allan");
console.log(username.state);
username.state = [12];
username.state = 'hello';
