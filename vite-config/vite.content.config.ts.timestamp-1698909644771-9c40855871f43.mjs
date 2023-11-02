// vite-config/vite.content.config.ts
import { resolve as resolve2 } from "path";
import { defineConfig as defineConfig2 } from "file:///D:/Me/Code/metadisk/disklet-extension/node_modules/vite/dist/node/index.js";
import vue2 from "file:///D:/Me/Code/metadisk/disklet-extension/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import topLevelAwait2 from "file:///D:/Me/Code/metadisk/disklet-extension/node_modules/vite-plugin-top-level-await/exports/import.mjs";

// vite-config/vite.base.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///D:/Me/Code/metadisk/disklet-extension/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Me/Code/metadisk/disklet-extension/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { nodePolyfills } from "file:///D:/Me/Code/metadisk/disklet-extension/node_modules/vite-plugin-node-polyfills/dist/index.js";
import wasm from "file:///D:/Me/Code/metadisk/disklet-extension/node_modules/vite-plugin-wasm/exports/import.mjs";
import topLevelAwait from "file:///D:/Me/Code/metadisk/disklet-extension/node_modules/vite-plugin-top-level-await/exports/import.mjs";
var __vite_injected_original_dirname = "D:\\Me\\Code\\metadisk\\disklet-extension\\vite-config";
var vite_base_config_default = defineConfig({
  plugins: [vue(), nodePolyfills(), wasm(), topLevelAwait()],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "../src")
    }
  }
});

// vite-config/vite.content.config.ts
var __vite_injected_original_dirname2 = "D:\\Me\\Code\\metadisk\\disklet-extension\\vite-config";
var vite_content_config_default = defineConfig2({
  ...vite_base_config_default,
  plugins: [vue2(), topLevelAwait2()],
  define: {
    "process.env": {}
  },
  resolve: {
    alias: {
      "@": resolve2(__vite_injected_original_dirname2, "../src")
    }
  },
  build: {
    emptyOutDir: false,
    outDir: resolve2(__vite_injected_original_dirname2, "../public"),
    lib: {
      entry: resolve2(__vite_injected_original_dirname2, "../src/content-script/main.ts"),
      name: "Metalet",
      formats: ["es"]
    },
    rollupOptions: {
      output: {
        entryFileNames: "content.js",
        extend: true
      }
    }
  }
});
export {
  vite_content_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS1jb25maWcvdml0ZS5jb250ZW50LmNvbmZpZy50cyIsICJ2aXRlLWNvbmZpZy92aXRlLmJhc2UuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcTWVcXFxcQ29kZVxcXFxtZXRhZGlza1xcXFxkaXNrbGV0LWV4dGVuc2lvblxcXFx2aXRlLWNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcTWVcXFxcQ29kZVxcXFxtZXRhZGlza1xcXFxkaXNrbGV0LWV4dGVuc2lvblxcXFx2aXRlLWNvbmZpZ1xcXFx2aXRlLmNvbnRlbnQuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9NZS9Db2RlL21ldGFkaXNrL2Rpc2tsZXQtZXh0ZW5zaW9uL3ZpdGUtY29uZmlnL3ZpdGUuY29udGVudC5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB0b3BMZXZlbEF3YWl0IGZyb20gJ3ZpdGUtcGx1Z2luLXRvcC1sZXZlbC1hd2FpdCdcblxuaW1wb3J0IGJhc2VDb25maWcgZnJvbSAnLi92aXRlLmJhc2UuY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAuLi5iYXNlQ29uZmlnLFxuICBwbHVnaW5zOiBbdnVlKCksIHRvcExldmVsQXdhaXQoKV0sXG4gIGRlZmluZToge1xuICAgICdwcm9jZXNzLmVudic6IHt9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9zcmMnKSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIGVtcHR5T3V0RGlyOiBmYWxzZSxcbiAgICBvdXREaXI6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vcHVibGljJyksXG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9zcmMvY29udGVudC1zY3JpcHQvbWFpbi50cycpLFxuICAgICAgbmFtZTogJ01ldGFsZXQnLFxuICAgICAgZm9ybWF0czogWydlcyddLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnY29udGVudC5qcycsXG4gICAgICAgIGV4dGVuZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXE1lXFxcXENvZGVcXFxcbWV0YWRpc2tcXFxcZGlza2xldC1leHRlbnNpb25cXFxcdml0ZS1jb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXE1lXFxcXENvZGVcXFxcbWV0YWRpc2tcXFxcZGlza2xldC1leHRlbnNpb25cXFxcdml0ZS1jb25maWdcXFxcdml0ZS5iYXNlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTWUvQ29kZS9tZXRhZGlzay9kaXNrbGV0LWV4dGVuc2lvbi92aXRlLWNvbmZpZy92aXRlLmJhc2UuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgeyBub2RlUG9seWZpbGxzIH0gZnJvbSAndml0ZS1wbHVnaW4tbm9kZS1wb2x5ZmlsbHMnXG5pbXBvcnQgd2FzbSBmcm9tICd2aXRlLXBsdWdpbi13YXNtJ1xuaW1wb3J0IHRvcExldmVsQXdhaXQgZnJvbSAndml0ZS1wbHVnaW4tdG9wLWxldmVsLWF3YWl0J1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbdnVlKCksIG5vZGVQb2x5ZmlsbHMoKSwgd2FzbSgpLCB0b3BMZXZlbEF3YWl0KCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9zcmMnKSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVcsU0FBUyxXQUFBQSxnQkFBZTtBQUN6WCxTQUFTLGdCQUFBQyxxQkFBb0I7QUFDN0IsT0FBT0MsVUFBUztBQUNoQixPQUFPQyxvQkFBbUI7OztBQ0hpVSxTQUFTLGVBQWU7QUFDblgsU0FBUyxvQkFBNkI7QUFDdEMsT0FBTyxTQUFTO0FBQ2hCLFNBQVMscUJBQXFCO0FBQzlCLE9BQU8sVUFBVTtBQUNqQixPQUFPLG1CQUFtQjtBQUwxQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLDJCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxHQUFHLGNBQWMsR0FBRyxLQUFLLEdBQUcsY0FBYyxDQUFDO0FBQUEsRUFDekQsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLFFBQVE7QUFBQSxJQUNsQztBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QURkRCxJQUFNQyxvQ0FBbUM7QUFPekMsSUFBTyw4QkFBUUMsY0FBYTtBQUFBLEVBQzFCLEdBQUc7QUFBQSxFQUNILFNBQVMsQ0FBQ0MsS0FBSSxHQUFHQyxlQUFjLENBQUM7QUFBQSxFQUNoQyxRQUFRO0FBQUEsSUFDTixlQUFlLENBQUM7QUFBQSxFQUNsQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBS0MsU0FBUUMsbUNBQVcsUUFBUTtBQUFBLElBQ2xDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsYUFBYTtBQUFBLElBQ2IsUUFBUUQsU0FBUUMsbUNBQVcsV0FBVztBQUFBLElBQ3RDLEtBQUs7QUFBQSxNQUNILE9BQU9ELFNBQVFDLG1DQUFXLCtCQUErQjtBQUFBLE1BQ3pELE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDaEI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJyZXNvbHZlIiwgImRlZmluZUNvbmZpZyIsICJ2dWUiLCAidG9wTGV2ZWxBd2FpdCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJkZWZpbmVDb25maWciLCAidnVlIiwgInRvcExldmVsQXdhaXQiLCAicmVzb2x2ZSIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSJdCn0K
