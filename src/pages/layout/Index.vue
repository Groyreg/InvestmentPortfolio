<template>
  <div class="layout">
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Header from './includes/header'
import Content from './includes/content'
import Footer from './includes/footer'

export default {
  components: {
    Header,
    Content,
    Footer
  }
}
</script>
