import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

const store = () => {
    return new Vuex.Store({
        // state: {
        //     users: []
        // },
        // getters: {
        //     users: state => {
        //         return state.users;
        //     }
        // },
        // setters: {
        //     users: (state, payload) => {
        //         state.users = payload
        //     }
        // },
        // mutations: {
        //     setUsers: (state, payload) => {
        //         state.users = payload
        //     },
        // },
        // actions: {
        //     getAllUsers: async (context) => {
        //         let { data } = await Axios.get('http://localhost:3000/api/user')
        //         // will trigger mutations -> setUsers
        //         context.commit('setUsers', data)
        //     }
        // },
        modules: {
            user: {
                namespaced: true,
                state: {
                    users: []
                },
                getters: {
                    users: state => {
                        return state.users;
                    }
                },
                setters: {
                    users: (state, payload) => {
                        state.users = payload
                    }
                },
                mutations: {
                    setUsers: (state, payload) => {
                        state.users = payload
                    },
                },
                actions: {
                    getAllUsers: async (context) => {
                        let { data } = await Axios.get('http://localhost:3000/api/user')
                        // will trigger mutations -> setUsers
                        context.commit('setUsers', data)
                    }
                },
            }
        }
    });
};

export default store