<script>
import { BRAND } from '@/constants';
import { getPath, isPhoneValid, PHONE_MASK } from '@/utils';
import Popup from '@/components/Popup';

export default {
  name: 'Feedback',
  components: {
    Popup,
  },
  props: {
    model: {
      type: Object,
      default: () => ({}),
    },
    color: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      phone: '',
      agreement: true,
      error: {},
      showPopup: false,
      errorHideTimeout: null,
    };
  },
  computed: {
    brand() {
      return BRAND;
    },
    mask() {
      return PHONE_MASK;
    },
  },
  methods: {
    submit() {
      this.error = {};
      clearTimeout(this.errorHideTimeout);
      if (!this.phone || !isPhoneValid(this.phone)) {
        this.error.phone = true;
      }

      if (!this.agreement) {
        this.error.agreement = 'Необходимо согласиться с условиями';
      }

      if (Object.keys(this.error).length) {
        this.errorHideTimeout = setTimeout(() => this.error = {}, 1000);
        return;
      }

      this.$emit('submit', this.phone);
    },
    getPath(path) {
      return getPath(`${this.model.name.toLowerCase()}/${path}`);
    },
  },
};
</script>

<template>
  <div class="quiz-feedback">
    <div class="quiz-feedback__item quiz-feedback__item--image">
      <div class="quiz-feedback__image">
        <img
          :alt="`${brand} ${model.name}`"
          :src="`img/colors/${this.model.name.toLowerCase()}/${this.color.hex.slice(1, 7)}/1.png`"
        >
      </div>
      <div class="quiz-feedback__interior">
        <div
          v-for="(image, index) in model.interiorImages"
          :key="index"
          class="quiz-feedback__interior-item"
        >
          <div class="quiz-feedback__interior-image">
            <img
              :src="getPath(image)"
              alt="model interior"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="quiz-feedback__item">
      <form
        class="quiz-feedback__form"
        novalidate
        @submit.prevent="submit"
      >
        <div class="quiz-feedback__form-field">
          <div class="quiz-feedback__form-field-input">
            <input
              v-model="phone"
              v-mask="mask"
              :class="{
                error: error.phone,
              }"
              name="phone"
              placeholder="+7 (Ваш телефон)"
              required
              type="tel"
              @input="error.phone = null"
              @focus="phone = phone || '+7'"
              autocapitalize="off"
              autocorrect="off"
              tabindex="0"
              id="phone"
              value
            >
          </div>
          <div class="quiz-feedback__form-agreement">
            <div class="checkmark">
              <input
                id="agreement"
                v-model="agreement"
                :class="{
                  error: error.agreement,
                }"
                type="checkbox"
                @change="error.agreement = null"
              >
              <label for="agreement">
                <span class="checkmark__box"></span>
                Я согласен с <a href="#" @click.prevent="showPopup = true">условиями обработки персональных данных</a>
              </label>
            </div>
          </div>
        </div>
        <div class="quiz-feedback__form-field">
          <h2 class="quiz-feedback__list-head"><span>Вы выбрали:</span></h2>
          <ul class="quiz-feedback__list">
            <li>{{ brand }} {{ model.name }}</li>
            <li>{{ color.name }}</li>
            <li>От {{ model.price }} <span>₽</span><sup>*</sup></li>
          </ul>
          <p class="quiz-feedback__list-footnote">*Стоимость автомобиля в минимальной базовой комплектации</p>
        </div>
        <div class="quiz-feedback__form-field">
          <button class="button button--submit">ОТПРАВИТЬ ЗАЯВКУ</button>
        </div>
      </form>
      <popup
        :show="showPopup"
        @close="showPopup = false"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quiz-feedback {
  position: relative;
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  padding-top: 25px;
  margin-left: -30px;

  &__item {
    flex-shrink: 0;

    &--image {
      width: 60%;
      align-self: stretch;
      position: relative;
      flex-grow: 1;
    }

    &:last-child {
      margin-right: 0;
      width: 321px;
    }
  }

  &__interior {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 32px;
    right: 70px;
  }

  &__interior-item {
    margin-right: 15px;
    width: calc(20% - calc(60px / 5));

    &:last-child {
      margin-right: 0;
    }
  }

  &__interior-image {
    width: 100%;
    height: 0;
    padding-top: 100%;
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
      border: 1px solid #a7a7a7;
    }
  }

  &__form {
    padding: 18px 10px;
    border-radius: 6px;
    background-color: rgba(#363636, .8);
  }

  &__form-agreement {
    color: white;

    a {
      display: inline;
      text-decoration: underline dashed;
      color: inherit;
    }
  }

  &__form-field {
    position: relative;
    margin-bottom: 21px;

    &:last-child {
      margin-bottom: 0;
    }

    input {
      display: block;
      width: calc(100% - 40px);
      padding: 5px 0;
      font-size: 22px;
      color: white;
      border-bottom: 1px solid currentColor;

      &::placeholder {
        font-size: inherit;
        color: currentColor;
      }

      &:focus {
        outline: none;
      }

      &.error {
        animation: blink 1s ease;
      }
    }
  }

  &__form-field-input {
    position: relative;
    margin-bottom: 15px;
  }

  &__list {
    margin-bottom: 8px;
    list-style: none;

    li {
      position: relative;
      padding-left: 15px;
      font-size: 20px;
      color: white;

      sup {
        position: relative;
        top: .2em;
        line-height: 15px;
      }

      span {
        font-weight: 500;
      }

      &::before {
        position: absolute;
        content: '';
        top: calc(.5em + 4px);
        left: 0;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: $c-red;
        transform: translateY(-50%);
      }
    }
  }

  &__list-head {
    margin-bottom: 10px;
    font-size: 20px;
    color: white;

    span {
      border-bottom: 2px solid $c-red;
    }
  }

  &__list-footnote {
    font-size: 10px;
    font-weight: 100;
    color: white;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-family: Arial, sans-serif;
  }
}

@keyframes blink {
  0% {
    color: white;
  }
  25% {
    color: $c-red;
  }
  50% {
    color: white;
  }
  75% {
    color: $c-red;
  }
  100% {
    color: white;
  }
}

</style>
