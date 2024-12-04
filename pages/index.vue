<script setup lang="ts">
import type { ApiResponse } from '~/models/ApiResponse';
import { serverUrl } from '~/utils/EnvUtil';

const { data: apiResult, status } = await useFetch(serverUrl() + '/api/post')
</script>

<template>
  <div>
    {{status}}
  </div>
  <div v-for="(item, index) in (apiResult as ApiResponse<any>).data.data" :key="index">
    {{item.title}}
  </div>
</template>