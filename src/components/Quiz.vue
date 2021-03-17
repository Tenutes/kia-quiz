<script>
import ParallaxBackground from 'vue-parallax-background';

import { STEPS } from '@/constants';
import HeadVue from '@/components/Head';
import List from '@/components/List';
import Colors from '@/components/Colors';
import Feedback from '@/components/Feedback';
import Success from '@/components/Success';
import Developer from '@/components/Developer';
import Firework from '@/components/Firework';

export default {
  name: 'Quiz',
  components: {
    Firework,
    Developer,
    Success,
    HeadVue,
    List,
    Colors,
    Feedback,
    ParallaxBackground,
  },
  props: {},
  data() {
    return {
      step_id: 1,
      formSent: false,
      model: null,
      color: null,
      showDeveloper: false,
      transitionName: 'slide-right',
      quizAborted: false,
    };
  },
  computed: {
    /**
     * Активный шаг
     * @return {{component: string, id: number, title: string}}
     */
    activeStep() {
      return STEPS.find(({ id }) => id === this.step_id);
    },
    /**
     * Текущее активное название компонента
     * @return {string}
     */
    component() {
      return this.activeStep.component;
    },
    /**
     * Кол-во пройденных шагов
     * @return {string}
     */
    stepCount() {
      return `${this.activeStep.id}/${STEPS.filter(({ countable }) => countable).length}`;
    },
  },
  methods: {
    /**
     * @function
     * Прерываем Quiz
     */
    abortQuiz() {
      this.quizAborted = true;
    },
    chooseModel(model) {
      this.model = model;
      this.loadNextStep();
    },
    setColor(color) {
      this.color = color;
    },
    chooseColor(color) {
      this.setColor(color);
      this.loadNextStep();
    },
    loadNextStep() {
      this.transitionName = 'slide-left';
      this.step_id++;
    },
    submit(phone) {
      // submit with phone
      Promise.resolve().then(() => {
        this.formSent = true;
        this.loadNextStep();
        setTimeout(() => {
          this.showDeveloper = true;
          this.loadNextStep();
        }, 5000);
      });
    },
  },
};
</script>

<template>
  <div
    v-if="!quizAborted"
    :class="{
      'quiz--finished': showDeveloper,
    }"
    class="quiz"
  >
    <firework
      v-if="formSent"
    />
    <parallax-background
      :friction="1/300"
      :speedFactor="3"
      bg-img="background-city.jpg"
      event-type="mousemove"
      fixed
    />
    <head-vue
      :counter="stepCount"
      :finished="showDeveloper"
      :show-title="!formSent"
      :title="activeStep.title"
      @abort="abortQuiz"
    />
    <transition
      :name="transitionName"
      mode="out-in"
    >
      <component
        :is="component"
        :color="color"
        :model="model"
        @submit="submit"
        @choose-model="chooseModel"
        @choose-color="chooseColor"
        @set-color="setColor"
      />
    </transition>
  </div>
</template>

<style lang="scss">

.quiz {
  user-select: none;

  *:not(input) {
    user-select: none;
  }
}

.header {
  position: absolute;
  width: 100%;
  height: 95%;
  top: 5%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &__bg {
    pointer-events: none;
    z-index: 0!important;
    width: calc(100% / 1.1) !important;
    height: calc(100% / 1.1) !important;
    min-height: 1px !important;
    background-size: contain!important;
    background-repeat: no-repeat;
  }
}

</style>

<style lang="scss" scoped>
.quiz {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 25px 50px 50px;
  background: url(~@/assets/images/background/background.jpg);
  overflow: hidden;

  &--finished {
    padding: 0;
  }

  &__city {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: top;
    }
  }
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  transition-duration: 0.5s;
  transition-property: opacity, transform;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(3em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-3em, 0);
}
</style>
