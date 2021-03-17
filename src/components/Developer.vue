<script>
export default {
  name: 'Developer',
};
</script>

<template>
  <div class="quiz-developer">
    <div class="quiz-developer__logo">
      <img alt="" src="~@/assets/images/developer.png">
    </div>
    <div class="quiz-developer__info">
      <p>BannerMakers, работаем на стороне клиента и на благо клиента!</p>
      <p>Всегда лучшие идеи, инновационные технологии, безупречное качество!<br>12 лет с АВТОШКОЙ!</p>
      <p>Знаем, как создавать продающие баннеры с самым высоким CTR на рынке!<br>Знаем и понимаем автомобильный рынок!
      </p>
      <p>BannerMakers - всегда на пике технологий!</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quiz-developer {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 35px 30px;
  background-color: rgba(#363636, .8);

  &__logo {
    width: 300px;
    margin-bottom: 35px;
    flex-shrink: 0;
  }

  &__info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    margin-bottom: 35px;
    font-size: 23px;
    line-height: 1.44;
    font-weight: 800;
    text-align: center;
    color: white;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
