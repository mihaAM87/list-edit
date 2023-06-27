<template>
  <div class="main">
    <header class="mainElement">
      <p>Name: {{ ContentName }}</p>
      <p>Value: {{ ContentValue }}</p>
    </header>
    <div class="editButton">
      <button type="button" @click="showEdit">Редактировать</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
    showEdit() {
      this.$router.push('/edit/' + encodeURI(JSON.stringify(this.content)));
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
  flex-direction: column;
  align-content: start;
}

.mainElement p {
  margin: 0px;
  justify-self: start;
  text-align: left;
  width: 200px;
}

.editButton {
  margin: auto 10px;
}

.main {
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
</style>
