<template>
  <div id="note">
    Note
    <div>
      <button @click='adds'>add</button>
      <button @click='handleRemove'>remove</button>
      <button @click="filter">love</button>
      <button @click="all">all</button>
      <button @click="save">save</button>
      <button @click="handleLike">{{isLike ? '讨厌' : '喜欢'}}</button>
      <h1>list</h1>
      <ul>
        <li
          v-for="note in noteList"
          @click="choseNote(note)"
        >
          {{note.title}}
        </li>
      </ul>
    </div>
    <hr />
    <input :value="curNote.title" @input="handleUpdateTitle" />
    <em>{{curNote.time}}</em>
    <textarea
     :value="curNote.content"
     @input="handleUpdateContent"
     rows="8"
     cols="80"
     class="content"
    >
    </textarea>
  </div>
</template>

<script>
import {mapGetters, mapState, mapActions, mapMutations} from 'Vuex';
import './Note.css';
export default {
  data() {
    return {
      status: 'all',
    }
  },
  computed: {
    ...mapState({
      noteList(state) {
        if (this.status === 'all') {
          return state.note.noteList;
        } else if (this.status === 'like') {
          return state.note.noteList.filter(item => item.love);
        }
      },
      curNote(state) {
        return state.note.curNote;
      },
    }),
    isLike() {
      return this.curNote.love;
    },
  },
  methods: {
    ...mapActions([
      'remove',
      'save',
      'add',
      'toggleLike',
      'all',
    ]),
    ...mapMutations([
      'setCurNote',
      'updateTitle',
      'updateContent',
    ]),
    adds() {
      this.add();
    },
    choseNote(note) {
      this.setCurNote(note);
    },
    handleUpdateTitle(e) {
      this.updateTitle({
        value: e.target.value,
      });
    },
    handleUpdateContent(e) {
      this.updateContent({
        value: e.target.value,
      });
    },
    handleLike() {
      this.toggleLike();
    },
    handleRemove() {
      this.remove();
    },
    all() {
      this.status = 'all';
    },
    filter() {
      this.status = 'like';
    }
  },
};


</script>
