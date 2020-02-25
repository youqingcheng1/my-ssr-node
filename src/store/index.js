
import Vue from 'vue'
import Vuex from 'vuex';
import actions from './action';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
    list:[],
    details:{},
    count:0,
}


const store = new Vuex.Store({
    state,
    actions,
    mutations,
    strict: process.env.NODE_ENV !== 'production'
});

export default store;