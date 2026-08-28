import axios, { AxiosInstance } from 'axios'
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getBaseURL = () => {
    return Platform.select({
        ios: "http://localhost:3001",
        android: "http://10.0.2.2:3001"
    })
}

export const baseURL = getBaseURL()

export class MarketplaceAPIClient{
    private instance: AxiosInstance;
    private isRefreshing = false;

    constructor(){
        this.instance = axios.create({
            baseURL,
        })

        this.setUpInterceptors()
    }

    getInstance(){
        return this.instance;
    }

    private setUpInterceptors(){
        this.instance.interceptors.request.use(async (config) => {
            const userData = await AsyncStorage.getItem("marketplace-auth");

            console.log(userData)
            
            if(userData){
                const { state: { token } } = JSON.parse(userData)

                console.log(token)
                if(token){
                    config.headers.Authorization = `Bearer ${token}`
                }
            }

            return config
        }, (error) => {
            return Promise.reject(error)
        })
    }
}

export const marketplaceAPIClient = new MarketplaceAPIClient().getInstance();