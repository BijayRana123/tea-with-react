/* eslint-disable no-unreachable */
/* eslint-disable no-useless-catch */
import conf from '../conf/conf.js';
import { Client, ID, Databases,Storage,Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.createDocument(conf.appWriteDatabaseId,conf.appWriteCollectionId,
                slug,{
                    title,content,featuredImage,status,userId
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.updateDocument(conf.appWriteDatabaseId,conf.appWriteCollectionId,
                slug,{
                    title,content,featuredImage,status
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        // eslint-disable-next-line no-useless-catch
        try {
                await this.databases.deleteDocument(conf.appWriteDatabaseId,conf.appWriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            throw error;
        }
    }

    async getPost(slug){
        // eslint-disable-next-line no-useless-catch
        try {
                return await this.databases.getDocument(conf.appWriteDatabaseId,conf.appWriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            throw error;
            return false;
        }
    }

    async getPosts(query= [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(conf.appWriteDatabaseId,conf.appWriteCollectionId,query);
            return true;
        } catch (error) {
            throw error;
            return false;
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appWriteBucketId,ID.unique(),file)
            return true;
        } catch (error) {
            throw error;
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(conf.appWriteBucketId,fileId);
            return true;
        } catch (error) {
            throw error;
            return false;
        }
    }
    
    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appWriteBucketId,fileId);
    }

}
const service = new Service();
export default service;