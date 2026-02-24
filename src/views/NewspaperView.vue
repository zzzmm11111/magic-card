<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="p-4 flex items-center gap-2 border-b border-slate-200">
      <RouterLink v-slot="{ navigate }" to="/" custom>
        <NButton quaternary size="small" @click="navigate">← 返回</NButton>
      </RouterLink>
      <h1 class="text-lg font-semibold text-slate-700">
        哈利波特报纸
      </h1>
    </header>
    <main class="flex-1 p-4">
      <div class="text-slate-500">
        哈利波特报纸 · 占位内容
      </div>
    </main>
  </div>
</template>
