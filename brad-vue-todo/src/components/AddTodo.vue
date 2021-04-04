
<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" name="title" v-model="title" placeholder="Add Todo...">
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
// import uuid from 'uuid';
export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTodo() {
      const newTodo = {
        title: this.title,
        completed: false
      };
      this.$emit('add-todo', newTodo);
      console.log(newTodo);
      this.title = '';
    }
  }
}

</script>

<style scoped>
  form {
    display: flex;
    height: 100%;
  }
  input[type="text"] {
    flex: 10;
    padding: 5px;
  }
  input[type="submit"] {
    flex: 2;
  }
</style>
