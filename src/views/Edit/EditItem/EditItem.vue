<template>
  <div class="main">
    <header class="mainElement">
      <p>{{ ContentName }}</p>
      <input type="text" v-model="content.value" />
    </header>
    <div class="saveButton">
      <button type="button" @click="saveItem">Сохранить</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {};
  },
  props: {
    content: {
      type: Object,
      validator(value) {
        return value.name.length > 0;
      },
    },
  },
  methods: {
    ...mapMutations(['EditListArr']),
    saveItem() {
      this.EditListArr({ dataArr: this.dataArr, newItem: this.content });
      this.$router.push('/');
    },
  },
  computed: {
    ContentName() {
      return this.content.name;
    },
    ContentValue() {
      return this.content.value;
    },
    ...mapGetters({
      dataArr: 'dataArr',
    }),
  },
};
</script>

<style scoped>
.mainElement {
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  align-content: start;
}

.mainElement p {
  margin-right: 50px;
  text-align: left;
}

.saveButton {
  margin: auto 10px;
}

.main {
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
</style>
