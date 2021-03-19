<script>
import { BRAND } from '@/constants';

export default {
  name: 'Head',
  props: {
    title: {
      type: String,
      default: null,
    },
    counter: {
      type: String,
      default: null,
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
    finished: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    /**
     * Название бренда
     * @return {string}
     */
    brand() {
      return BRAND;
    },
  },
};
</script>

<template>
  <div class="quiz-head">
    <transition
      mode="out-in"
      name="slide-left"
    >
      <div
        v-if="showTitle"
        class="quiz-head__item"
      >
        <p class="quiz-head__counter">{{ counter }}</p>
        <h1>Мой новый {{ brand }}</h1>
        <h2 v-if="title">{{ title }}</h2>
      </div>
    </transition>
    <div
      :class="{
        'quiz-head__action--finished': finished,
      }"
      class="quiz-head__action"
    >
      <transition
        mode="out-in"
        name="slide-left"
      >
        <div
          v-if="!finished"
          class="quiz-head__logo"
        >
          <img alt="KIA Logotype" src="~@/assets/images/logo.png">
        </div>
      </transition>
      <button
        class="quiz-head__action-abort"
        @click="$emit('abort')"
      ></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quiz-head {
  position: relative;

  h1 {
    position: relative;
    z-index: 3;
    font-size: 45px;
    font-weight: 800;
    line-height: 1.22;
  }

  h2 {
    position: relative;
    z-index: 3;
    font-size: 22px;
    font-weight: 400;
    line-height: 1.22;
    color: #6a6a6a;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__counter {
    position: relative;
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 100;
    color: #848282;
    z-index: 3;
  }

  &__action {
    position: absolute;
    top: -25px;
    right: -50px;
    display: flex;

    &--finished {
      z-index: 10;
      top: 0;
      right: 0;
    }
  }

  &__action-abort {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    outline: none;
    transition: .25s;
    cursor: pointer;

    &::before,
    &::after {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      width: 100%;
      height: 1px;
      background: #838181;
      transition: .25s;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:hover,
    &:active {
      transform: rotate(90deg);

      &::before,
      &::after {
        background: black;
      }
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    width: 110px;
    height: 95px;
    margin-right: 20px;
    background: #c31123;

    img {
      display: block;
      width: 100%;
    }
  }
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  transition-duration: 0.5s;
  transition-property: opacity, transform;
  overflow: hidden;
}

.slide-left-enter {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
