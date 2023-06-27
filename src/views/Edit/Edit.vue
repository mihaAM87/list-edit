<template>
  <div class="container">
    <div class="row" id="editElement">
      <EditItem :key="Content.name" :content="Content" />
    </div>
  </div>
</template>

<script>
import EditItem from './EditItem/EditItem.vue';

export default {
  data() {
    return {};
  },
  computed: {
    Content() {
      return JSON.parse(decodeURI(this.$route.params.content));
    },
  },
  // mounted() {
  //   this.content = JSON.parse("[{'name': '1', 'value': '2'}]");
  // },
  components: { EditItem },
};
</script>

<style scoped>
.row {
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
}

.container {
  margin: 50px;
}
</style>
