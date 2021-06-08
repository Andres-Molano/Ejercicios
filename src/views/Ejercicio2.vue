<template>
  <div class="todo">
    <h1 class="todo-title">Todos</h1>
    <form class="todo-form" id="todo" @submit.prevent="add()">
      <input
        v-model="input"
        class="todo-input"
        type="text"
        id="input"
        placeholder="Enter your todo"
      />
      <ul class="todo-todos" id="todos">
        <li
          class="todo-item"
          @contextmenu="show($event, index)"
          @click="ready(index)"
          :ref="index"
          v-for="(tarea, index) in this.tareas"
          :key="index"
        >
          {{ tarea }}
        </li>
      </ul>
    </form>
    <small
      >Left-click to toggle completed.<br />
      Right-click to delete todo.</small
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      tareas: [],
    };
  },
  methods: {
    add() {
      this.tareas.push(this.input);
      this.input = "";
    },
    ready(index) {
      this.$refs[index][0].classList.toggle("completed");
    },
    show(e, index) {
      e.preventDefault();
      this.$refs[index][0].remove();
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
.todo {
  background-color: #fcf6f5ff;
  color: #444444;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
  &-form {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  &-title {
    color: #f65058ff;
    font-size: 10rem;
    text-align: center;
    opacity: 0.5;
  }
  &-input {
    border: none;
    color: rgb(45, 57, 83);
    font-size: 2rem;
    padding: 1rem 2rem;
    display: block;
    width: 100%;
    &::placeholder {
      color: #d5d5d5;
    }
    &:focus {
      outline-color: #edc2b8ff;
    }
  }
  &-todos {
    background-color: #fff;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  &-item {
    border-top: 1px solid #e5e5e5;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    &.completed {
      color: #b6b6b6;
      text-decoration: line-through;
    }
  }
}
small {
  margin-top: 3rem;
  text-align: center;
  color: #b5b5b5;
}
</style>
