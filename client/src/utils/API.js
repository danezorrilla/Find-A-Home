import axios from "axios";

export default {

    // Gets the user with the given email
    getUser: function(email){
        return axios.get("/api/user/" + email);
    },

    // Stores a new User to the database
    createUser: function(newUser){
        return axios.post("/api/user", newUser);
    },

    getWishlist: function(email){
        return axios.get("/api/user/" + email + "/wishlist");
    },

    createWishlist: function(email, newWishList){
        return axios.post("/api/wishlist/" + email, newWishList);
    },

    getHouses: function(email){
        return axios.get("/api/user/" + email + "/houses")
    },
    
    // Stores a new House to the database
    createHouse: function(email, newHouse){
    return axios.post("/api/house/" + email, newHouse);
    },

    // Gets the house with the given id
    getHouse: function(){
    return axios.get();
    }
};
