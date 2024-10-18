<script setup>
import { EaselOutline, MoonOutline, SunnyOutline } from '@vicons/ionicons5'
import { NEl, NFlex, NIcon, NPopselect } from 'naive-ui'
import { h } from 'vue'

function renderIcon(icon) {
  return () => h(NIcon, { size: 20 }, { default: () => h(icon) })
}
const options = [
  {
    label: 'Light',
    value: 'light',
    icon: renderIcon(SunnyOutline),
  },
  {
    label: 'Dark',
    value: 'dark',
    icon: renderIcon(MoonOutline),
  },
  {
    label: 'Auto',
    value: 'auto',
    icon: renderIcon(EaselOutline),
  },
]

function renderLabel(option) {
  return h(NFlex, { align: 'center' }, {
    default: () => [
      h(option.icon),
      option.label,
    ],
  })
}
</script>

<template>
  <NPopselect :options="options" trigger="click" :render-label="renderLabel">
    <NEl class="fcc icon-btn">
      <NIcon :component="SunnyOutline" :size="20" />
    </NEl>
  </NPopselect>
</template>
