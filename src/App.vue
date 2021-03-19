<script>
import Quiz from './components/Quiz';
import SiteBackground from '@/components/SiteBackground';

export default {
  name: 'App',
  components: {
    SiteBackground,
    Quiz,
  },
  data() {
    return {
      setuped: false,
    };
  },
  mounted() {
    setTimeout(() => this.setuped = true, 2000);
  },
};
</script>

<template>
  <div
    id="#app"
    class="layout"
    :class="{
      setuped,
    }"
  >
    <site-background/>
    <div
      class="layout__content"
      :class="{
        setuped,
      }"
    >
      <quiz
        @done="setuped = false"
      />
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
  position: relative;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(white, .55);
    opacity: 0;
    visibility: hidden;
    transition: .55s ease-out;
    z-index: 2;
  }

  &__content {
    width: 100%;
    height: 100%;
    max-width: 920px;
    max-height: 565px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    opacity: 0;
    visibility: hidden;
    transition: opacity .55s ease-out, visibility .55s ease-out;
    position: relative;
    z-index: 3;
    border: 1px solid transparent;

    &.setuped {
      opacity: 1;
      visibility: visible;
      border: 1px solid #d5d5d5;
    }
  }

  &.setuped {
    &::before {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
