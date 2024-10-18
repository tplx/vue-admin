<script setup>
import logoUrl from '@/assets/vue.svg'
import { HomeOutline } from '@vicons/ionicons5'
import { NIcon, NLayout, NLayoutContent, NLayoutHeader, NLayoutSider, NMenu, NScrollbar } from 'naive-ui'
import { h } from 'vue'
import { RouterView } from 'vue-router'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const menuOptions = [
  {
    label: '首页',
    key: 'home',
    icon: renderIcon(HomeOutline),
  },
]
</script>

<template>
  <NLayout has-sider embedded class="h-full w-full">
    <NLayoutSider
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :native-scrollbar="false"
      show-trigger="arrow-circle"
      content-class="flex flex-col min-h-full"
      bordered
    >
      <!-- logo -->
      <div class="h-60px flex cursor-pointer items-center justify-center gap-2 px-2 text-xl border-b">
        <img :src="logoUrl" alt="logo" class="h-8 w-8">
        <span class="of-hidden text-ellipsis ws-nowrap text-lg font-bold">Navie UI</span>
      </div>
      <NScrollbar class="flex-1">
        <NMenu
          :options="menuOptions"
          :collapsed="false"
          :indent="20"
          :collapsed-width="64"
        />
      </NScrollbar>
    </NLayoutSider>

    <NLayout>
      <NLayoutHeader bordered>
        <div class="h-60px flex items-center justify-between px-2">
          <div class="h-full flex items-center">
            left
          </div>

          <div class="h-full flex items-center gap-1 px-xl">
            right
          </div>
        </div>
      </NLayoutHeader>

      <NLayoutContent content-class="p-2">
        <RouterView />
      </NLayoutContent>
    </NLayout>
  </NLayout>
</template>
