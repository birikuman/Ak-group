import { defineConfig } from 'vite';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

function rootImagesPlugin(): Plugin {
  const rootDir = import.meta.dirname || process.cwd();
  const rootImagesDir = path.resolve(rootDir, 'images');
  const publicImagesDir = path.resolve(rootDir, 'public', 'images');

  const syncImages = () => {
    try {
      if (fs.existsSync(rootImagesDir)) {
        if (!fs.existsSync(publicImagesDir)) {
          fs.mkdirSync(publicImagesDir, { recursive: true });
        }
        fs.cpSync(rootImagesDir, publicImagesDir, { 
          recursive: true, 
          force: true, 
          errorOnExist: false,
          filter: (src) => !src.endsWith('.pdf')
        });
      }
    } catch (err) {
      console.warn('[root-images-plugin] Image sync notice:', err instanceof Error ? err.message : err);
    }
  };

  return {
    name: 'root-images-plugin',
    buildStart() {
      syncImages();
    },
    configureServer(server) {
      syncImages();
      
      // Serve files directly from the root /images folder
      server.middlewares.use('/images', (req, res, next) => {
        const reqPath = decodeURIComponent((req.url || '').split('?')[0]);
        const filePath = path.join(rootImagesDir, reqPath);

        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = path.extname(filePath).toLowerCase();
          const mimeTypes: Record<string, string> = {
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.svg': 'image/svg+xml',
            '.webp': 'image/webp',
            '.gif': 'image/gif',
            '.pdf': 'application/pdf',
          };
          res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
          fs.createReadStream(filePath).pipe(res);
          return;
        }
        next();
      });

      // Watch root images folder for changes
      server.watcher.add(rootImagesDir);
      server.watcher.on('all', (_event, filePath) => {
        if (filePath.startsWith(rootImagesDir) && !filePath.endsWith('.pdf')) {
          syncImages();
          server.ws.send({ type: 'full-reload' });
        }
      });
    },
    closeBundle() {
      try {
        const distImagesDir = path.resolve(rootDir, 'dist', 'images');
        if (fs.existsSync(rootImagesDir)) {
          fs.cpSync(rootImagesDir, distImagesDir, { 
            recursive: true, 
            force: true, 
            errorOnExist: false,
            filter: (src) => !src.endsWith('.pdf')
          });
        }
      } catch (err) {
        console.warn('[root-images-plugin] Bundle copy notice:', err instanceof Error ? err.message : err);
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), rootImagesPlugin()],
  build: {
    emptyOutDir: false,
  }
});
