/* eslint-disable no-unreachable */
import conf from "../conf/conf.js";
import {Client,Account,ID} from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        // eslint-disable-next-line no-useless-catch
        try {
           const userAccount =  await this.account.create(ID.unique(),email,password,name);
           if(userAccount){
                //another action
                return this.logIn({email,password});
           }else{
             return userAccount;
           }
        } catch (error) {
            throw error;
        };
    }

    async logIn({email,password}){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logOut() {
        // eslint-disable-next-line no-useless-catch
        try {
           await this.account.deleteSessions('current'); 
        } catch (error) {
            throw error;
        }
    }

};
const authService = new AuthService();
export default authService;