<template>
  <div class="testing">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TestingVue',
  props: {
    msg: {
      type: String,
    }
  }
}
</script>
