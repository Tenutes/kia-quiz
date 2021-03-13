<script>
import { BRAND, MODELS } from '@/constants';
import { getPath } from '@/utils';
import IconBase from '@/common/IconBase';
import IconClick from '@/common/IconClick';

export default {
  name: 'List',
  components: {
    IconBase,
    IconClick,
  },
  props: {
    model: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      currentFocus: null,
    };
  },
  computed: {
    /**
     * Список Моделей
     * @return {[{image: string, price: string, name: string, id: number, colors: [{images: [], name: string, id: number}]}]}
     */
    models() {
      return MODELS;
    },
    /**
     * Название бренда
     * @return {string}
     */
    brand() {
      return BRAND;
    },
  },
  methods: {
    getPath(path) {
      return getPath(path);
    },
    chooseModel(model) {
      this.$emit('choose-model', model);
    },
  },
};
</script>

<template>
  <div
    class="quiz-list"
    @mouseleave="currentFocus = null"
  >
    <div class="quiz-list__wrapper">
      <div
        :class="{
          animated: !currentFocus,
        }"
        class="quiz-list__click"
      >
        <div class="wave">
          <div></div>
        </div>
        <icon-base
          class="svg"
          height="40"
          view-box="0 0 297 297"
          width="40"
        >
          <icon-click/>
        </icon-base>
      </div>
      <div
        v-for="scopeModel in models"
        :key="scopeModel.id"
        :class="{
          [scopeModel.name]: true,
          selected: (model || {}).id === scopeModel.id,
          focused: currentFocus && currentFocus === scopeModel.id,
          unfocused: currentFocus && currentFocus !== scopeModel.id,
        }"
        class="quiz-list__item"
        @click="chooseModel(scopeModel)"
        @mouseover="currentFocus = scopeModel.id"
      >
        <div class="quiz-list__item-image">
          <img
            :alt="`${brand} ${scopeModel.name}`"
            :src="getPath(scopeModel.image)"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quiz-list {
  display: flex;
  flex-grow: 1;
  align-items: center;
  position: relative;
  z-index: 2;
  $root: &;
  margin: 0 -50px;
  width: calc(100% + 100px);

  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }

  &__item {
    position: relative;
    width: 25%;
    text-align: center;
    transition: .45s;
    cursor: pointer;

    img {
      transition: .45s;
      transform: scale(1.2);
    }

    &.Stinger {
      img {
        transform: translateY(10px) scale(1.2);
      }
    }

    &.unfocused {
      width: 15%;
    }

    &.focused {
      width: 55%;

      img {
        transform: scale(1);
      }

      &.Stinger {
        img {
          transform: translateY(20px) scale(1);
        }
      }
    }

    &.selected {
      &::after {
        opacity: 1;
      }

      &::before {
        opacity: 0;
      }
    }

    &::before,
    &::after {
      position: absolute;
      content: '';
      left: 0;
      width: 100%;
      bottom: 12.5%;
      height: 23%;
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: contain;
      transition: .45s;
      pointer-events: none;
    }

    &::before {
      background-image: url(~@/assets/images/background/circle.png);
    }

    &::after {
      opacity: 0;
      background-image: url(~@/assets/images/background/circle-active.png);
    }
  }

  &__item-image {
    position: relative;
    z-index: 1;
  }

  &__click {
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    transition: .25s;
    transform: translate(-50%, -50%);

    .svg {
      animation: click 1.25s linear infinite;
    }

    .wave {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 60px;
      height: 60px;
      transform: translate(11%, -11%);

      div {
        position: absolute;
        top: 30px;
        left: 30px;
        width: 0;
        height: 0;
        opacity: 1;
        border: 2px solid black;
        border-radius: 50%;
        animation: wave 1.25s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        animation-delay: .45s;
      }
    }

    &.animated {
      opacity: 1;
    }
  }
}

@keyframes click {
  0%, 20%, 100% {
    transform: scale(1);
  }

  40% {
    transform: scale(.75);
  }
}

@keyframes wave {
  0% {
    top: 30px;
    left: 30px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    opacity: 0;
  }
}
</style>
