import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  shortcuts: [
    ['fcc', 'flex justify-center content-center'],
    ['icon-btn', 'cursor-pointer rounded p-3 c-[var(--text-color-base)] hover:bg-[var(--button-color-2-hover)] text-1.2em'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
})
