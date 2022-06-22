<script>
import { defineComponent, ref, reactive, computed } from "vue";

export default defineComponent({
  setup() {
    let text = ref("");
    let list = reactive([]);
    let id = 1;

    // 计算属性
    const computedText = computed(() => {
      return text.value;
    });

    const addItem = () => {
      list.push({
        id: ++id,
        text: text.value,
        done: false,
      });
      text.value = "";
    };

    const update = (id) => {
      list.map((item) => {
        if (item.id === id) {
          item.done = !item.done;
        }
      });
    };

    const removeItem = (id) => {
      const index = list.findIndex((item) => item.id === id);
      list.splice(index, 1);
    };

    return {
      text,
      list,
      addItem,
      removeItem,
      computedText,
      update,
    };
  },
});
</script>

<template>
  <div class="todo">
    <h1>TODO LIST</h1>

    <div class="box">
      <a-input
        v-model:value="text"
        @keyup.enter="addItem"
        placeholder="请输入内容"
      />
      <a-button class="todo-btn" type="primary" @click="addItem">
        Add Item
      </a-button>
    </div>
    <p>{{ computedText }}</p>
    <div class="list">
      <ul>
        <li v-for="item in list" :key="item.id">
          <span :class="{ line: item.done }" @click="update(item.id)"
            >{{ item.text }}
          </span>
          <a @click="removeItem(item.id)">x</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.todo {
  width: 600px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
  h2 {
    margin-bottom: 20px;
  }
  .box {
    display: flex;
    justify-content: space-between;

    .todo-btn {
      margin-left: 10px;
    }
  }
  .list {
    ul {
      list-style: none;

      li {
        text-align: left;
        margin-top: 20px;

        span {
          width: 100px;
          display: inline-block;
        }
      }
    }
  }

  .line {
    text-decoration: line-through;
  }
}
</style>
