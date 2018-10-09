<template>
  <header
    class="header"
    style="background-image: url('/static/img/header.jpg')"
  >
    <section class="header__container">
      <span class="header__title">{{ title }}</span>
      <footer class="header__footer">
        <button
          class="button header__btn-nav"
          type="button">
          <span>{{ navigationBtn }}</span>
          <object
            type="image/svg+xml"
            data="/static/img/arrow_down.svg"
            class="icon"/>
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
