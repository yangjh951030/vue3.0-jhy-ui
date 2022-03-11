interface ImportMetaEnv {
    readonly VITE_BASE_URL: string
    readonly VITE_MODE: string
    readonly NODE_ENV: string
    readonly ENV: string
    // 更多环境变量...　　
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }