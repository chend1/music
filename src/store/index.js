import Vue from 'vue'
import Vuex from 'vuex'
import {getSongData,getSongPlay,Music} from 'network/song'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 播放音乐的下标
    count: 0,
    // 播放的音乐列表
    playList: [],
    // 播放的音乐信息
    musicMsg: {},
    // 是否播放，
    isPlay: false
  },
  mutations: {
    increment (state) {
      state.count++
    },
    addPlayList(state,res){
      let music = new Music()
      music.url = res[0].data.data[0].url;
      music.id = res[0].data.data[0].id;
      music.name = res[1].data.songs[0].name;
      music.time = res[1].data.songs[0].dt;
      music.aut_id = res[1].data.songs[0].ar[0].id;
      music.author = res[1].data.songs[0].ar[0].name;
      music.head = res[1].data.songs[0].al.picUrl;
      state.musicMsg = music;
      if(!state.playList.find( item => item.id === music.id)){
        state.playList.unshift(state.musicMsg)
      }
      state.isPlay = true;
    },
    stopClick(state){
      state.isPlay = !state.isPlay
    }
  },
  actions:{
    addPlayList({commit},id){
      Promise.all([getSongPlay(id),getSongData(id)]).then( res => {
        console.log(res);
        commit('addPlayList',res)
      }).catch( err => {
        console.log(err);
      })
    }
  }
})

export default store