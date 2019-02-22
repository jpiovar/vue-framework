<template>
  <div class="hello">
    <h1>{{ msg }} {{ modified }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  props: {
    msg: {
      required: true,
      type: String,
    },
  },
})
export default class HelloWorld extends Vue {
  msg!: string;

  get modified(): string {
    return `${this.msg} modifiedapp`;
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin: 40px 0 0;
}
</style>
