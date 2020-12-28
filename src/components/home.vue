<template>
  <div class="area">
    <div class="header-component">
      <h1>Binary to decimal converter</h1>
    </div>
    <div class="first">
      <label for="first-input">Binary Input</label><br />
      <input
        placeholder="Enter the number in binary"
        v-model="valueFirstInput"
        id="first-input"
        type="text"
      /><br />
      <p v-if="hasError">only 0 and 1 are allowed</p>
    </div>
    <br />
    <div class="second" v-if="!hasError">
      <label>Decimal Output</label><br />
      <input
        id="second-input"
        v-model="valueSecondInput"
        type="text"
        disabled
      /><br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      valueFirstInput: null,
      valueSecondInput: null,
      hasError: false,
    };
  },
  methods: {
    convert(number) {
      if (number == "" || number == null) {
        return null;
      }

      let numberConver = 0;
      let size = String(number).length;
      for (let i = 0; i < size; i++) {
        let base = size - i - 1;
        numberConver += String(number)[i] * Math.pow(2, base);
      }
      return numberConver;
    },
  },
  watch: {
    valueFirstInput(newValue, oldValue) {
      let controlValue = null;

      if (newValue.length <= 8) {
        controlValue = newValue.trim();
      } else {
        controlValue = oldValue.trim();
      }

      if (
        newValue.match(/^[0-1]+$/g) == null &&
        newValue != null &&
        newValue != ""
      ) {
        this.hasError = true;
      } else {
        this.hasError = false;

        this.valueFirstInput = controlValue;

        this.valueSecondInput = this.convert(controlValue);
      }
    },
  },
};
</script>
<style scoped>
.area {
  border: 5px solid black;
  border-radius: 15px;
  margin: auto;
  width: 550px;
  min-height: 200px;
}

.area label {
  font-size: 24px;
}
#first-input,
#second-input {
  font-size: 24px;
}

#second-input {
  background-color: #fff;
  color: black;
}
</style>
