<script>
import { getPath } from '@/utils';
import { BRAND } from '@/constants';
import IconBase from '@/common/IconBase';
import IconAccept from '@/common/IconAccept';

export default {
  name: 'Colors',
  components: {
    IconAccept,
    IconBase,
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
  computed: {
    brand() {
      return BRAND;
    },
    imagePath() {
      return `img/colors/${this.model.name.toLowerCase()}/${this.color.hex.slice(1, 7)}`;
    },
  },
  methods: {
    getPath(path) {
      return getPath(path);
    },
  },
  destroyed() {
  }
};
</script>

<template>
  <div class="quiz-colors">
    <div class="quiz-colors__stage">
      <div
        v-if="color"
        class="quiz-colors__stage-sixty"
      >
        <vue-three-sixty
          :key="color.id"
          :amount="24"
          :disableZoom="true"
          :spinReverse="true"
          :imagePath="imagePath"
          fileName="{index}.png"
        />
      </div>
      <div
        v-else
        class="quiz-colors__stage-image"
      >
        <img
          :alt="`${brand} ${model.name}`"
          :src="getPath(model.image)"
        >
      </div>
    </div>
    <div class="quiz-colors__list">
      <div
        v-for="modelColor in model.colors"
        :key="modelColor.id"
        class="quiz-colors__list-item"
        @click="$emit('choose-color', modelColor)"
      >
        <div
          :class="{
            selected: (color || {}).id === modelColor.id,
          }"
          :style="{
           backgroundColor: modelColor.hex
          }"
          class="color"
        >
          <icon-base
            v-if="(color || {}).id === modelColor.id"
            class="color__icon"
            height="24"
            view-box="0 0 24 24"
            width="24"
          >
            <icon-accept/>
          </icon-base>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quiz-colors {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;

  &__stage {
    flex-grow: 1;
    width: 100%;
    margin-bottom: 15px;
    max-width: 550px;
  }

  &__stage-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px auto 0;
  }

  &__stage-sixty {
    max-width: 100%;
    width: 900px;
    margin: 25px auto 0;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    max-width: calc(100% - 260px); // -135px button x2; +10px from margin
    margin: -5px;
  }

  &__list-item {
    margin: 5px;
    transition: .25s;
    cursor: pointer;

    &:hover {
      padding-bottom: 10px;
    }
  }
}
</style>
<style lang="scss">
.v360-viewer-container,
.v360-viewport,
.v360-image-container,
.v360-menu-btns {
  background: none;
}

#v360-menu-btns {
  display: none;
}
</style>
