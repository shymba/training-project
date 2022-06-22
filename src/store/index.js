import {createStore} from "vuex";
import {postModule} from "@/store/postModule";

export default createStore({

    // state: {
    //     likes: 2,
    //     isAuth: false
    // },
    // getters: {
    //     doubleLikes(state){
    //         return state.likes * 2;
    //     }
    // },
    // mutations: {
    //     incrementLikes(state) {
    //         state.likes += 1;
    //     },
    //     decrementLikes(state) {
    //         state.likes -= 1;
    //     }
    // },

    modules: {
        post: postModule
    }

})