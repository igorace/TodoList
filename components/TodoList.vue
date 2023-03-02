<script setup lang="ts">
import { nanoid } from "nanoid";
import type { Todo, TodosColumn } from "@/types";
import draggable from "vuedraggable";

const todoColumns = useLocalStorage<TodosColumn[]>("todos-app", [
  {
    id: nanoid(),
    title: "Grocceries",
    todos: [
      {
        id: nanoid(),
        title: "TO do nothing",
        isCompleted: false,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        title: "Finish project",
        isCompleted: false,
        createdAt: new Date(),
      },
    ],
  },
]);

function addNewTodo(column: TodosColumn) {
  const todo: Todo = {
    id: nanoid(),
    title: "",
    createdAt: new Date(),
    isCompleted: false,
  };
  column.todos.push(todo);
  nextTick(() => {
    (
      document.querySelector(
        ".todoItem:last-child .title-input"
      ) as HTMLInputElement
    ).focus();
  });
}
</script>

<template>
  <div class="bg-white p-4 rounded-md min-w-[300px]">
    <div v-for="column in todoColumns" :key="column.id">
      <header class="font-bold mb-2">
        <input
          class="p-4 w-4/5 bg-transparent focus:bg-white outline-none"
          type="text"
          v-model="column.title"
        />
      </header>
      <draggable
        v-model="column.todos"
        group="tasks"
        :animation="300"
        handle=".drag-handle"
        item-key="id"
        class="todos"
      >
        <template #item="{ element: todo }: { element: Todo }">
          <div class="todoItem">
            <div
              class="todo flex p-4 border border-blue-600 mb-2 shadow-sm rounded items-center"
            >
              <span class="drag-handle pr-2 cursor-grab">⠿</span>
              <input
                class="bg-transparent outline-none title-input"
                type="text"
                v-model="todo.title"
              />
              <input
                class="place-items-end"
                type="checkbox"
                v-model="todo.isCompleted"
              />
            </div>
          </div>
        </template>
      </draggable>

      <footer class="flex justify-end w-full">
        <button
          class="px-4 m-4 py-2 rounded-full bg-green-600 text-white hover:opacity-80 ease-in duration-300 hover:scale-125"
          @click="addNewTodo(column)"
        >
          <span class="ease-in duration-300 hover:scale-125">+</span>
        </button>
      </footer>
    </div>
  </div>
</template>

<style>
.sortable-drag .todo {
  transform: rotate(5deg);
}

.sortable-ghost .todo {
  position: relative;
}
.sortable-ghost .todo::after {
  content: "";
  @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-300 rounded;
}

.todo:focus,
.todo:focus-visible {
  @apply outline-gray-400 !important;
  outline: gray auto 1px;
}
</style>
