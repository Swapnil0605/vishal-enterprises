import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import contactHandler from './api/contact.js';

function apiDevServerPlugin() {
    return {
        name: 'api-dev-server',
        configureServer(server) {
            server.middlewares.use('/api/contact', async (req, res) => {
                if (req.method !== 'POST') {
                    res.statusCode = 405;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: 'Method not allowed' }));
                    return;
                }

                let body = '';
                req.on('data', chunk => {
                    body += chunk;
                });

                req.on('end', async () => {
                    try {
                        req.body = body ? JSON.parse(body) : {};
                    } catch (e) {
                        req.body = {};
                    }

                    // Mock Express-like response helpers for handler compatibility
                    const mockedRes = {
                        statusCode: 200,
                        setHeader: (k, v) => res.setHeader(k, v),
                        status(code) {
                            this.statusCode = code;
                            return this;
                        },
                        json(data) {
                            res.statusCode = this.statusCode;
                            res.setHeader('Content-Type', 'application/json');
                            res.end(JSON.stringify(data));
                        }
                    };

                    try {
                        await contactHandler(req, mockedRes);
                    } catch (err) {
                        console.error('[Vite API Dev Server Error]:', err);
                        res.statusCode = 500;
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify({ error: err.message || 'Internal server error' }));
                    }
                });
            });
        }
    };
}

export default defineConfig(({ mode }) => {
    // Load all env variables including non-VITE_ ones for dev server
    const env = loadEnv(mode, process.cwd(), '');
    Object.assign(process.env, env);

    return {
        plugins: [react(), apiDevServerPlugin()],
    };
});
