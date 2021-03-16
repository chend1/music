import Vue from 'vue'
import Vuex from 'vuex'
import {getSongData,getSongPlay,Music} from 'network/song'
import {getRankDetail} from 'network/ranking'
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
    isPlay: false,
    // 播放列表是否显示
    listIsShow: false,
    // 是否登录
    token: false,
    // 存储localStorage
    // localList: [],
    // 是否显示添加提示
    addPoint: false
  },
  mutations: {
    increment (state) {
      state.count++
    },
    // 选择播放歌曲
    addPlayList(state,res){
      let music = new Music(res[1].data.songs[0].al.picUrl,res[0].data.data[0].url,res[1].data.songs[0].dt,res[1].data.songs[0].name,res[1].data.songs[0].ar[0].name,res[0].data.data[0].id,res[1].data.songs[0].ar[0].id)
      state.musicMsg = music;
      if(!state.playList.find( item => item.id === music.id)){
        state.playList.unshift(state.musicMsg);
        state.count = 0;
        // 存储在本地
        // localStorage.setItem("songPlayList", JSON.stringify(state.playList));
      }
      state.addPoint = true
      state.isPlay = true;
    },
    // 添加播放列表
    addPlayItem(state,res){
      let music = new Music(res[1].data.songs[0].al.picUrl,res[0].data.data[0].url,res[1].data.songs[0].dt,res[1].data.songs[0].name,res[1].data.songs[0].ar[0].name,res[0].data.data[0].id,res[1].data.songs[0].ar[0].id)
      if(!state.playList.find( item => item.id === music.id)){
        state.playList.push(music);
        state.addPoint = true
        // 存储在本地
        // localStorage.setItem("songPlayList", JSON.stringify(state.playList));
      }
      state.addPoint = true
    },
    // 音乐列表重新加载事件
    loadPlayList(state){
      if(JSON.parse(localStorage.getItem("songPlayList"))){
        // 获取存储在本地的播放列表
        // state.playList = JSON.parse(localStorage.getItem("songPlayList"));
        // state.musicMsg = state.playList[state.count]
      }
    },
    stopClick(state){
      state.isPlay = !state.isPlay
    },
    playStop(state){
      state.isPlay = false
    },
    listShow(state){
      state.listIsShow = !state.listIsShow
    },
    closeList(state){
      state.listIsShow = false
    },
    // 音乐播放完触发事件
    playEnd(state,idx){
      if(idx || idx === 0){
        state.count = idx;
      } else {
        state.count++;
      }
      state.musicMsg = state.playList[state.count]
    },
    // 上一曲
    backClick(state,idx){
      if(idx){
        state.count = idx;
      } else {
        state.count--;
      }
      state.musicMsg = state.playList[state.count];
    },
    // 音乐列表单击事件
    playListClick(state,id){
      state.musicMsg = state.playList.find( item => item.id === id);
      state.count = state.playList.indexOf(state.playList.find( item => item.id === id));
      state.isPlay = true
    },
    // 隐藏提示
    hidePoint(state){
      state.addPoint = false
    },
    addPlaySheet(state,value){
      state.playList = value;
      state.count = 0;
      state.musicMsg = state.playList[state.count];
      state.isPlay = true;
      // 存储在本地
      // localStorage.setItem("songPlayList", JSON.stringify(state.playList));
    }
  },
  actions:{
    addPlayList({commit},id){
      Promise.all([getSongPlay(id),getSongData(id)]).then( res => {
        commit('addPlayList',res)
      }).catch( err => {
        console.log(err);
      })
      setTimeout(() => {
        commit('hidePoint')
      }, 2000);
    },
    addPlayItem({commit},id){
      Promise.all([getSongPlay(id),getSongData(id)]).then( res => {
        commit('addPlayItem',res)
      }).catch( err => {
        console.log(err);
      })
      setTimeout(() => {
        commit('hidePoint')
      }, 2000);
    },
    // 添加整个歌单
    addPlaySheet({commit},id){
      getRankDetail(id).then( res => {
        let arrList = [];
        let result = res.data.playlist.tracks
        for(let i in result ){
          // let music = new Music(头像，地址，时间，歌名，作者，歌曲id，作者id)
          let music = new Music(result[i].al.picUrl,'',result[i].dt,result[i].name,result[i].ar[0].name,result[i].id,result[i].ar[0].id)
          arrList.push(music)
        }
        return arrList
      }).then( value => {
        for(let i in value ){
          // 请求播放地址
          getSongPlay(value[i].id).then( res => {
            value[i].src = res.data.data[0].url
          })
        }
        commit('addPlaySheet',value)
      })
    }
  },
  getters: {
    contrast(state){
      return state.playList[state.count].id
    }
  }
})

export default store