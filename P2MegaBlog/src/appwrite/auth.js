import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class Authservice {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            // Log the user in after creating the account
            if (userAccount) {
                return this.login({ email, password });
            }
            return userAccount; // Return userAccount if something went wrong
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            // Check if the user already has an active session
            const currentUser = await this.getCurrentUser();
            if (currentUser) {
                // User is already logged in
                return currentUser;
            }
            // Create a new session
            await this.account.createEmailPasswordSession(email, password);
            return this.getCurrentUser();
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new Authservice();
export default authService;
