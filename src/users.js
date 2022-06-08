import express from "express";
import crypto from "crypto";
import { addNewUser, findUser, findUserByEmail } from "./database.js";
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const userRouter = express.Router();

const SALT = process.env.PSW_SALT;
const PSW_ITERATIONS = 100000;
const PSW_LENGTH = 64;
const PSW_ALG = 'sha512';


const privateKey = process.env.JWT_PRIVATE;

/**
 * Routes
 */

userRouter.post("/register", async (req, res) => {
    try{
        const {login, password, email} = req.body;
        // Check if all data is set
        if(!password || !login || !email){
            res.send({
                status: "error", 
                message: "Didn't get all data.", 
                err_key: "WRNG_ARG"}).status(200);
                return;
        }
        //Check password length
        if(password.length < 4){
            res.send({
                status: "error", 
                message: "Password is too short.", 
                err_key: "PSW_SHORT"}).status(200);
                return;
        }
        //Check email
        if(!validateEmail(email)){
            res.send({
                status: "error", 
                message: "Email is not valid.", 
                err_key: "MAIL_INVALID"}).status(200);
                return;
        }
        // Check if login exists.
        let user = await findUser(login);
        if(user){
            res.send({
                status: "error", 
                message: "User with that login exists.", 
                err_key: "USR_LGN_EXSTS"}).status(200);
                return;
        }
        // Check if email exists.
        user = await findUserByEmail(email);
        if(user){
            res.send({
                status: "error", 
                message: "User with that email exists.", 
                err_key: "USR_MAIL_EXSTS"}).status(200);
                return;
        }

        console.log(`Registering new user "${login}" with email "${email}" and password "${password}"`);
        const userToken = await createUser(login, password, email);
        res.send({
            status: "ok", 
            token: userToken}).status(201);

    } catch(exception) {
        res.send("Error during parsing user information.").status(400);
    };
});

userRouter.post("/login", async (req, res) => {
    try{
        const {login, password} = req.body;
        if(!password || !login){
            res.send({
                status: "error", 
                message: "Didn't get all data.", 
                err_key: "WRNG_ARG"}).status(200);
                return;
        }
             
        findUser(login).then((user) => {
            if(!user){
                res.send({status: "error", message: "Wrong login", err_key: "WRNG_LOGIN"});
                return;
            }
            crypto.pbkdf2(password, SALT, PSW_ITERATIONS, PSW_LENGTH, PSW_ALG, (err, hash) => {
                if(err) res.send("Internal problem with hashing").status(400);

                const reqPassword = hash.toString('hex');
                if(reqPassword === user.password){
                    jwt.sign({login}, privateKey, (err, token) => {
                        if(err) res.send("Internal problem with token hashing").status(400);
                        res.send({status: "ok", token: token}).status(200);
                    });
                } else {
                    res.send({status: "error", message: "Wrong password", err_key: "WRNG_PSW"});
                }
            });
        }, err => res.send({status: "error", message: "Wrong login", err_key: "WRNG_LOGIN"}));

    } catch(err) {
        res.send("Error during loging in.").status(400);
    }
});

/**
 * Methods
 */

/**
 * Creates new user in database.
 * @param {String} login 
 * @param {String} password 
 * @param {String} email 
 * @returns JWT access token for new user.
 */
const createUser = async(login, password, email) => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(password, SALT, PSW_ITERATIONS, PSW_LENGTH, PSW_ALG, (err, hash) => {
            if(err) reject(err);
            const passwordHash = hash.toString('hex');
            addNewUser(login, passwordHash, email).then(
                () => {
                    jwt.sign({login}, privateKey, (err, token) => {
                        if(err) reject(err);
                        resolve(token);
                    });
                }, (err) => reject(err));
        });
    });
};

export const readToken = async(token) => {
    return new Promise((resolve) => {
        jwt.verify(token, privateKey, (err, decoded) => {
            if(err) {
                console.error(err);
                resolve({"status": "invalid"})
            }
            resolve({"status": "valid", content: decoded})
        });
    })
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export default userRouter;