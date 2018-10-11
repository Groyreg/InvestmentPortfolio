<template>
  <header
    class="header"
    style="background-image: url('static/img/header.jpg')"
  >
    <section class="header__container">
      <span class="header__title">{{ title }}</span>
      <footer class="header__footer">
        <button
          class="button header__btn-nav"
          type="button">
          {{ navigationBtn }}
        </button>
      </footer>
    </section>
  </header>
</template>

<script>
export default {
  data () {
    return {
      title: 'Hi! There is a good opportunity to create your own investment portfolio.',
      navigationBtn: 'Try it'
    }
  }
}
</script>
