<template>
  <div class="home">
    <h1>首页</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { onMounted, reactive } from 'vue';
// 调用接口
import { testFn } from '@/api/enrollment';

export default {
  name: 'Home',
  components: {},
  setup() {
    const state = reactive({});
    const getParams = () => {
      const params = {
        data: 'wangyc',
      };
      testFn(params)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    };
    onMounted(() => {
      getParams();
    });
    return {
      state,
    };
  },
};
</script>
