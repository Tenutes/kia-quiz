<script>
export default {
  name: 'Footer',
  props: {
    buttons: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    prevClick() {
      this.$emit('prev-click');
    },
    nextClick() {
      if (this.buttons.next.class === 'disabled') {
        return;
      }

      this.$emit('next-click');
    },
  },
};
</script>

<template>
  <div class="quiz-footer">
    <div class="quiz-footer__item">
      <button
        v-if="buttons.back.show"
        class="quiz-footer__button button"
        @click="prevClick"
      >
        <span class="button__arrow button__arrow--left"></span>
        <span class="button__content">назад</span>
      </button>
    </div>
    <div class="quiz-footer__item">
      <button
        v-if="buttons.next.show"
        class="quiz-footer__button button"
        :class="buttons.next.class"
        @click="nextClick"
      >
        <span class="button__content">далее</span>
        <span class="button__arrow button__arrow--right"></span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quiz-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 75px 35px;
  pointer-events: none;
  z-index: 3;

  &__item {
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__button {
    font-size: 30px;
    font-weight: 100;
    pointer-events: all;
  }
}
</style>
