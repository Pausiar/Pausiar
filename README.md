# Pausiar

Portfolio personal de Pausiar publicado con GitHub Pages en `https://pausiar.github.io/`.

## Web

Este repositorio sirve una web estática desde la raíz del repo:

- `index.html`: portfolio principal.
- `assets/css/style.css`: estilos del portfolio y páginas legales.
- `assets/js/app.js`: navegación responsive, animaciones y render de proyectos.
- `legal/`: privacidad, cookies, aviso legal y términos de uso.
- `robots.txt` y `sitemap.xml`: SEO básico para GitHub Pages.

## Desarrollo local

No requiere dependencias ni build. Puedes abrir `index.html` directamente en el navegador o levantar un servidor estático:

```bash
python3 -m http.server 4173
```

Después abre `http://localhost:4173/`.

## Despliegue

Al ser un repositorio de usuario (`Pausiar/Pausiar`), GitHub Pages puede publicar la raíz de la rama principal y servir la web en:

```text
https://pausiar.github.io/
```

## Legal

Se añadieron páginas legales básicas para una web portfolio en España/UE. Los datos fiscales/personales que no estaban publicados quedan marcados como `[COMPLETAR: ...]` dentro de las páginas legales.
