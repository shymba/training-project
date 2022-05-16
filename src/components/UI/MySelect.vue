<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value="">Select from list</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "MySelect",
  props: {
    // modelValue: {
    //   type: String
    // },
    options: Array,
    default: () => []
  },
  data() {
    return{
      modelValue: String
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('onUpdate:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>