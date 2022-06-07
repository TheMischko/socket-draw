import knex from "knex";
import knexfile from "../knexfile.js"

const db = knex(knexfile);

export const addNewUser = async (login, password, email) => {
    return new Promise((resolve, reject) => {
        db('users').insert({
            login: login,
            password: password,
            email: email,
            last_login: new Date()
        }).then(() => resolve(), err => reject(err));
    })
}

export const findUser = async(login) => {
    return new Promise((resolve, reject) => {
        db('users').where({login}).first().then((user) => resolve(user), (err) => reject(err));
    });
}