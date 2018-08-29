import axios from "axios";

export default {

    // Gets the user with the given id
    getUser: function(){
        return axios.get();
    },

    // Stores a new User to the database
    createUser: function(newUser){
        return axios.post("/api/user", newUser);
    }, 
    
    // Gets the user with the given id
    getUser: function(){
    return axios.get();
    
    },
    
    // Stores a new House to the database
    createHouse: function(newHouse){
    return axios.post("/api/house", newHouse);
    },

    // Gets the house with the given id
    getHouse: function(){
    return axios.get();
    }
};
