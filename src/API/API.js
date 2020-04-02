import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY':'c2812a99-b1c5-4f1a-b023-99177b7645a3'
    }
});

export const usersAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    getUserProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    auth(){
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
};
