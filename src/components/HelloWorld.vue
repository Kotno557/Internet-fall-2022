<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      <a href="https://www.nttu.edu.tw/" target="_blank" rel="noopener"
        >國立臺東大學</a
      >–<a href="https://wcsie.nttu.edu.tw/" target="_blank" rel="noopener"
        >資訊工程學系</a
      >三年級的學生
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1 {
  text-align: center;
  font-family: "黑體-繁", "微軟正黑體", sans-serif;
  font-weight: bold;
  text-decoration: underline;
}
.greetings h3 {
  text-align: center;
  font-family: "Helvetica", "Arial", "LiHei Pro", "黑體-繁", "微軟正黑體",
    sans-serif;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
