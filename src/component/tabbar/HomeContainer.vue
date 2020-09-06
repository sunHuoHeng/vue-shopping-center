<template>
  <div>
    <h1>home</h1>
    <mt-swipe :auto="3000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mint-swipe{
  height: 200px;
  /* background-color: hotpink; */
}
.mint-swipe-item:nth-child(1){
  background-color: aqua;
}
.mint-swipe-item:nth-child(2){
  background-color: red;
}
.mint-swipe-item:nth-child(3){
  background-color: green;
}
</style>