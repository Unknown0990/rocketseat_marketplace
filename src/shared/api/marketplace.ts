import axios, { AxiosInstance } from 'axios'

export class MarketplaceAPIClient{
    private instance: AxiosInstance;
    private isRefreshing = false;

    constructor(){
        this.instance = axios.create({
            baseURL: "",
        })
    }

    getInstance(){
        return this.instance;
    }
}

export const marketplaceAPIClient = new MarketplaceAPIClient().getInstance();