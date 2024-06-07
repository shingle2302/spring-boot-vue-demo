<script setup>
import {ref} from "vue";

const columns = [
  {
    title: "编号",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "书名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "价格",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "操作",
    dataIndex: "action",
    key: "action",
  }
];

const books = ref([
  {
    "id": 1,
    "name": "领域驱动设计",
    "price": "99.80",
  },
  {
    "id": 2,
    "name": "SAP ERP 财务配置与设计",
    "price": "99.80",
  }
]);

const onDelete = id => {
  books.value = books.value.filter(item => item.id !== id);
};

</script>

<template>
  <div>
    <a-table :data-source="books" :columns="columns">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex==='id'">
          <a>{{ record.id }}</a>
        </template>
        <template v-else-if="column.dataIndex==='action'">
          <a-popconfirm v-if="books.length"
                        title="确定删除?"
                        @confirm="onDelete(record.id)"
          >
            <a>Delete</a>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
  </div>
</template>

<style scoped>

</style>