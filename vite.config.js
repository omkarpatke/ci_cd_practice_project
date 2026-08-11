import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ci_cd_practice_project/',
  plugins: [react()],
})