<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <span>{{ textMsg }} {{ incrementMsg }}</span>
      <button type="button" @click="incrementClick">increment click</button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Num1 {
  num: number;
}

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

  num1: Num1 = { num: 10 };

  get incrementMsg(): number {
    return this.$store.getters.counter;
  }

  get textMsg(): string {
    return this.$store.getters.message;
  }

  incrementClick() {
    debugger;
    const { num } = this.num1;
    this.$store.dispatch('increment', { num });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
}
</style>
