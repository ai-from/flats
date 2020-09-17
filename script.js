new Vue({
  el: '#flats',
  data: () => ({
    title: 'Квартиры',
    flats: []
  }),
  mounted() {
    // искусственная задержка
    setTimeout(async () => {
      await axios.get('flats.json').then(res => this.flats = res.data.response)
      this.flats.forEach(item => this.$set(item, 'like', false))
    }, 500)
  }
})