import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');

// Canonical host + HTTPS redirect (SEO: bitta manzil, dublikat yo'q)
const CANONICAL_HOST = process.env.CANONICAL_HOST || 'diyorstroy.uz';

app.use((req, res, next) => {
    const host = req.headers.host;
    const proto = req.headers['x-forwarded-proto'] || req.protocol;

    // Faqat real domenda ishlaydi — local va preview manzillarga tegmaydi
    if (host === CANONICAL_HOST || host === `www.${CANONICAL_HOST}`) {
        if (proto !== 'https' || host !== CANONICAL_HOST) {
            return res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`);
        }
    }
    next();
});

// SEO fayllari — to'g'ri Content-Type bilan
app.get('/robots.txt', (req, res) => {
    res.type('text/plain; charset=utf-8').sendFile(path.join(__dirname, 'robots.txt'));
});

app.get('/sitemap.xml', (req, res) => {
    res.type('application/xml; charset=utf-8').sendFile(path.join(__dirname, 'sitemap.xml'));
});

app.get('/llms.txt', (req, res) => {
    res.type('text/plain; charset=utf-8').sendFile(path.join(__dirname, 'llms.txt'));
});

app.use(express.static(__dirname, {
    maxAge: '7d',
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('index.html')) res.setHeader('Cache-Control', 'no-cache');
    }
}));

// Statik fayl topilmasa — haqiqiy 404 (soft-404 SEO'ga zarar qiladi)
app.use((req, res) => {
    if (path.extname(req.path)) {
        return res.status(404).type('text/plain').send('404 Not Found');
    }
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
