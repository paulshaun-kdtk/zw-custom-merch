import { Client, Account } from "appwrite";

var client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);

export const account = new Account(client);
