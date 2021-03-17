<script>
import { BRAND } from '@/constants';
import { isPhoneValid, PHONE_MASK } from '@/utils';
import Popup from '@/components/Popup';

export default {
  name: 'Feedback',
  components: { Popup },
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
      if (!this.phone || !isPhoneValid(this.phone)) {
        this.error.phone = 'Введите корректный номер телефона';
      }

      if (!this.agreement) {
        this.error.agreement = 'Необходимо согласиться с условиями';
      }

      if (Object.keys(this.error).length) {
        return;
      }

      this.$emit('submit', this.phone);
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
    </div>
    <div class="quiz-feedback__item">
      <form
        class="quiz-feedback__form"
        novalidate
        @submit.prevent="submit"
      >
        <div class="quiz-feedback__form-field">
          <div class="quiz-feedback__form-field-input">
            <label
              v-if="error.phone"
              for="phone"
              class="error"
            >
              {{ error.phone }}
            </label>
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
  flex-grow: 1;
  padding-top: 25px;

  &__item {
    flex-grow: 1;

    &--image {
      flex-shrink: 0;
      width: 60%;
    }

    &:last-child {
      margin-right: 0;
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
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    label.error {
      position: absolute;
      top: 100%;
      font-size: 12px;
      left: 0;
      color: $c-red;
      font-family: Arial, sans-serif;
    }

    input {
      display: block;
      width: calc(100% - 40px);
      padding: 5px 0;
      font-size: 22px;
      color: white;
      border-bottom: 1px solid white;

      &::placeholder {
        font-size: inherit;
        color: white;
      }

      &:focus {
        outline: none;
      }

      &.error {
        border-bottom-color: $c-red;
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
      font-weight: 800;
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

</style>
