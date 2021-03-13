<script>
export default {
  name: 'IconBase',
  props: {
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    viewBox: {
      type: String,
      default: '0 0 24 24',
    },
  },
};
</script>

<template>
  <svg
    :height="height"
    :viewBox="viewBox"
    :width="width"
    role="presentation"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="currentColor">
      <slot/>
    </g>
  </svg>
</template>
