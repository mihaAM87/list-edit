export default {
  EditListArr(context, data) {
    let targetItem = {};
    for (const dataArItem of data.dataArr) {
      if (dataArItem.name === data.newItem.name) {
        targetItem = dataArItem;
        break;
      }
    }
    targetItem.value = data.newItem.value;
  },
};
