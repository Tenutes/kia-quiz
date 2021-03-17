<script>
export default {
  name: 'Success',
};
</script>

<template>
  <div class="quiz-success">
    <div class="quiz-success__wrapper">
      <p>Заявка успешно отправлена!</p>
      <p>В ближайшее время наши менеджеры свяжутся с&nbsp;Вами.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quiz-success {
  padding: 55px 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  flex-grow: 1;

  &__wrapper {
    padding: 55px 35px;
    background-color: rgba(#363636, .8);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;

    p {
      color: white;
      margin-bottom: 25px;
      font-size: 25px;
      text-align: center;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
