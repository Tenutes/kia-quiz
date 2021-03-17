<script>
import Quiz from './components/Quiz';

export default {
  name: 'App',
  components: {
    Quiz,
  },
};
</script>

<template>
  <div id="#app" class="layout">
    <div class="layout__content">
      <quiz/>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/sass/app.scss"></style>

<style lang="scss">

.mb-1 {
  margin-bottom: 5px !important;
}

.mb-2 {
  margin-bottom: 10px !important;
}

.mb-3 {
  margin-bottom: 15px !important;
}

.mb-4 {
  margin-bottom: 20px !important;
}

.disabled {
  pointer-events: none;
}

.fs-xs {
  font-size: 14px;
}

.color-gray {
  color: gray !important;
}

html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
}

body {
  width: auto;
  margin: 0 auto;
  font-family: $font;
  font-size: 16px;
  font-weight: normal;
  overflow-y: scroll;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;

  * {
    box-sizing: inherit;
  }
}

img {
  max-width: 100%;
  height: auto;
}

p, ul, li, h1, h2, h3, table, tr, td {
  margin: 0;
  padding: 0;
}

table {
  border-spacing: 0;
}

em {
  font-style: normal;
}

a {
  display: block;
  text-decoration: none;
  color: black;
}

ul {
  list-style: none;
}

button {
  padding: 0;
  border: 0;
  background-color: transparent;
}

address {
  font-style: normal;
}

fieldset, input {
  margin: 0;
  padding: 0;
  border: none;
  background: none;
}

input, label, pre {
  display: block;
}

svg {
  display: inline-block;
  vertical-align: middle;
}

.container {
  min-width: 290px;
  margin: 0 auto;
}

.nobr {
  white-space: nowrap;
}

.layout {
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    width: 100%;
    height: 100%;
    max-width: 920px;
    max-height: 565px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
