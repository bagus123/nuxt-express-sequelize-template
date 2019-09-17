import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

const store = () => {
    return new Vuex.Store({
        state: {
            users: []
        },
        getters: {
            users: state => {
                return state.users;
            }
        },
        mutations: {
            SET_USERS: (state, payload) => {
                state.users = payload
            },
        },
        actions: {
            getAllUsers: async (context) => {
                let { data } = await Axios.get('http://localhost:3000/user')
                context.commit('SET_USERS', data)
            }
        },
    });
};

export default store