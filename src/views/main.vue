<template>
  <div class="container">
    <div class="row" id="mainElement">
      <ListItem v-for="data of dataArr" :key="data.name" :content="data" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ListItem from './ListItem/ListItem.vue';

export default {
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapGetters({
      dataArr: 'dataArr',
    }),
  },

  components: { ListItem },
};
</script>

<style scoped>
.row {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
}
.container {
  margin: 50px;
}
</style>
