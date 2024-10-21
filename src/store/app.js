import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    siderCollapsed: false,
    device: 'desktop',
    language: 'zh-CN',
    size: 'default',
    visitedViews: [],
    cachedViews: [],
  }),
  getters: {

  },
  actions: {

  },
})
