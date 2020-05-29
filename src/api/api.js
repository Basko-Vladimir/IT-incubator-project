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

    follow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
};

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },

    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
};

export const securityAPI = {
    getCaptchaURL(){
        return instance.get('security/get-captcha-url')
            .then(response => response.data)
    }
};

export const profileAPI = {
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },

    getUserProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },

    updateUserStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then( response => response.data)
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },

    updateProfile(profile) {
        return instance.put('profile', profile)
    }
};

