# Pendientes — AspiranteD

_Última actualización: 2026-06-12 · handoff para continuar en otro PC._

## Estado actual
- **`main` limpio y subido.** `origin/main` == local == commit `678be1d`.
- Trabajo de esta sesión integrado por encima de `09add26` (photo-session lookbook,
  que ya estaba en el remote desde otro PC).
- `git clone`/`git pull` en el otro PC y tienes todo.

## Hecho esta sesión (revisión + correcciones)
1. **Claves i18n huérfanas eliminadas** (`stat.1n`, `stat.4l`, `stat.4n`): el statstrip
   tiene 3 stats (`ERP`/`5`/`100%`), esas claves eran de una versión vieja de 4 stats.
   32 líneas muertas fuera, en los 4 archivos index (root + es/fr/pt).
2. **Títulos de blog en la home traducidos** a es/fr/pt para coincidir con los posts
   (que SÍ están traducidos), y quitado el sufijo engañoso "(en inglés)/(en anglais)/(em inglês)".
3. Validado: cada bloque de idioma sigue siendo JSON válido, paridad de claves
   171/171/171/171, 0 enlaces internos rotos en las 26 páginas HTML.

## PENDIENTE
### 1. Email de informes — NO ENVIADO (bloqueado por entorno)
No hay canal de email disponible en esta sesión: ni MCP de Gmail, ni navegador Chrome
conectado, ni conector de email en el registro. **No se pudo mandar el informe por email.**
Para habilitarlo la próxima vez, elige una:
- Conectar la extensión Claude for Chrome (con tu Gmail abierto) → puedo redactar y enviar.
- Conectar un conector/MCP de Gmail en Claude.
- O dame un SMTP/app-password y un script lo envía.
Mientras tanto, el informe completo está abajo y en `ASPIRANTED-REVIEW-LOG.md` (local).

### 2. Repo duplicado peligroso — `CursorProjects/AspiranteD.github.io`
Es un checkout LOCAL antiguo (arquitectura vieja: css/js/lang separados, `i18n.js`) que
apunta al **mismo remote** que el repo bueno (`Claude/AspiranteD.github.io`). Riesgo: un
`git push` desde ahí podría sobrescribir el sitio en producción. **No se ha tocado.**
Recomendación: archivarlo o borrarlo en local para evitar confusión/accidentes.

### 3. Auditoría profunda aún no hecha (para la próxima vuelta del loop)
- `cv/index.html` y `cv/es/index.html` — revisión de traducción/coherencia línea por línea
  (solo se hizo chequeo rápido: email coherente, sin placeholders).
- Contenido de los 20 archivos de blog localizados (es/fr/pt × 5) — revisión de traducción.
- `sesion-fotos/index.html` — archivo nuevo del otro PC, aún sin revisar.

### 4. Nota menor de coherencia (decisión de contenido tuya)
El README del repo de perfil (`AspiranteD/AspiranteD`) dice "25+ DB models" mientras la
web dice "6 domain models". Defendible (modelos de dominio ≠ todas las tablas), pero
quizá unificar el mensaje.

### 5. Deuda arquitectónica (no es bug)
Hay **4 copias completas** de `index.html` (~130 KB c/u) con el diccionario i18n entero
duplicado ×4. Cualquier cambio futuro hay que replicarlo a mano en los 4 → riesgo de drift.
A futuro: generar las páginas localizadas desde una sola fuente (paso de build).

---
> _Nota: este archivo está commiteado en el repo (público en GitHub Pages, accesible en
> `aspiranted.github.io/pendientes.md`). Si prefieres que sea privado, se mueve a
> `.pendientes.md` (gitignored) — pero entonces no se sincroniza a otro PC._
