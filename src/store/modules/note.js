import moment from 'moment';

const note = JSON.parse(localStorage.note || '[]');

export default {
  state: {
    noteList: note,
    curNote: {},
  },

  mutations: {
    addNote(state, oneNote) {
      state.noteList = [...state.noteList, oneNote];
    },
    removeNote(state) {
      const index = state.noteList.indexOf(state.curNote);
      state.noteList.splice(index, 1);
      state.curNote = state.noteList[0];
    },
    allNote(state) {
      return state.noteList;
    },
    toggleLike(state) {
      state.curNote.love = !state.curNote.love;
    },
    save(state) {
      localStorage.note = JSON.stringify(state.noteList);
    },
    updateTitle(state, { value }) {
      state.curNote.title = value;
    },
    updateContent(state, { value }) {
      state.curNote.content = value;
    },
    setCurNote(state, curNote) {
      state.curNote = curNote;
    },
  },

  actions: {
    add({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const time = moment().format('MMMM Do YYYY, h:mm:ss a');
          commit('addNote', {
            title: '日记',
            time,
            content: '内容...',
            love: false,
          });
          resolve();
        }, 1000);
      });
    },
    remove({ commit }) {
      return new Promise((resolve) => {
        commit('removeNote');
        resolve();
      });
    },
    all({ commit }) {
      commit('allNote');
    },
    save({ commit }) {
      commit('save');
    },
    toggleLike({ commit }, index) {
      commit('toggleLike', index);
    },
  },

  // getters: {
  //   noteTitleMap(state) {
  //     return state.noteList.map(item => item.title);
  //   },
  // },
};
