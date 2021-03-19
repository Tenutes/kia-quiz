<script>
export default {
  name: 'SiteBackground',
};
</script>

<template>
  <div class="sb">
    <iframe src="https://www.autonews.ru/" frameborder="0"></iframe>
  </div>
</template>

<style lang="scss" scoped>
.sb {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  iframe {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>
