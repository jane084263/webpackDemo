<template>
  <el-form-item label="证件号码">
    <el-input value="******" disabled placeholder="-"></el-input>
  </el-form-item>
</template>


<script>
export default {
  name: "aaa",
  data: function() {
    return {};
  },
  computed: {
    cardList() {
      let cardList = this.$store.state("creditCard/cardInfo").cardList;
      if (cardList && cardList.length) {
        cardList.map(item => {
          let coverLabel = ;
          return {
            label: item.label,
            value: item.value
          };
        });
      }
    }
  },
  methods: {}
};
</script>