import axios from "axios";

export default {

    // Gets the user with the given id
    getUser: function(){
        return axios.get();
    },

    // Stores a new User to the database
    createUser: function(newUser){
        return axios.post("/api/users", newUser);
    }
};