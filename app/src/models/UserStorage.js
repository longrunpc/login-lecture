"use strict";

class UserStorage{
    static #users = {
        id: ["chan", "aaa", "bbb"],
        psword: ["111","222","333"],
        name: ["찬","에이","비"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field]=users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;