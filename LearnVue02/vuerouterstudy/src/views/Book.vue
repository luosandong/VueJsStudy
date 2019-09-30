<style lang="stylus" scoped></style>
<template>
  <div>
    <h1>{{title}}</h1>
    <h2>{{bookName}}</h2>
    <ul>
      <li>Java编程思想</li>
      <li>C# 高级程序设计</li>
      <li>Python入门</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "书箱分类"
    };
  },
  computed: {
    bookName() {
      console.log(this.$route.params.bookId);
      return this.$route.params.bookId;
    }
  }
};
</script>