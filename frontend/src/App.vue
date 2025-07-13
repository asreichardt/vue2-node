<template>
  <div id="app">
    <h1>Vue 2 + Node</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { message: 'Carregando...' };
  },
  mounted() {
    fetch('/api/hello')
      .then(r => r.json())
      .then(d => this.message = d.message)
      .catch(() => this.message = 'Erro na API');
  }
}
</script>