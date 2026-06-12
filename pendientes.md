# Pendientes — AspiranteD

_Última actualización: 2026-06-12 · handoff para continuar en otro PC._

---
## 📨 MENSAJE PARA TI (léelo desde el otro PC)

Hola Guillem — esto es lo que tienes que saber al sentarte en el otro PC:

1. **Todo está sincronizado y subido.** En el otro PC haz `git pull` dentro de
   `AspiranteD.github.io` y tendrás `main` en el commit `6630b53` (limpio, sin nada
   pendiente de subir). Acabo de hacer `git pull` aquí: **"Already up to date"**, así que
   los dos lados coinciden.
2. **El email NO se pudo enviar** — este entorno no tiene canal (ni Gmail MCP, ni navegador
   conectado). Por eso te dejo el informe aquí en vez de por correo. Si quieres email la
   próxima vez, conecta la extensión Claude for Chrome o un conector de Gmail (ver punto 1
   de PENDIENTE más abajo).
3. **No uses la carpeta `CursorProjects/AspiranteD.github.io`** — es un checkout viejo que
   apunta al mismo repo de GitHub; si haces `push` desde ahí machacas la web. Usa siempre
   la copia buena. (Detalle en PENDIENTE punto 2.)
4. El resumen de lo corregido hoy está en "Hecho esta sesión" y lo que falta en "PENDIENTE".
5. **Revisión COMPLETA y convergida** (4 iteraciones): index ×4, CVs, sesion-fotos, sitemap,
   robots y los 20 blogs traducidos — todo revisado y limpio. Se corrigieron 2 incoherencias
   reales (claves stat huérfanas + sufijo "(en inglés)" falso), ya subidas. **No quedan bugs.**
   Lo único abierto es 1 decisión de contenido tuya: "6 vs 25+ modelos" (punto 4). El loop
   automático se ha PARADO porque ya no queda trabajo sustantivo (ver mensaje del chat).

El loop sigue activo en la sesión original (auditoría profunda programada). Si cierras esa
sesión el loop para, pero el repo ya está a salvo en GitHub.
---

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

### 3. Auditoría profunda — HECHA (iteración 3), todo limpio salvo 1 punto
- ✅ `cv/index.html` + `cv/es/index.html` — revisados a fondo. Coherentes entre sí y con la
  home (KPIs +50% / 40.000+ / ~100/día / ~40h/sem, experiencia, proyectos, idiomas).
  Traducción fiel (el ES usa "DANA de 2024"). Sin bugs.
- ✅ `sesion-fotos/index.html` — revisado. `noindex,nofollow`, NO enlazado ni en sitemap →
  bien oculto. Coherente con la marca. Sin bugs.
- ✅ `sitemap.xml` / `robots.txt` — bien formados; 26 URLs reales, sin exponer páginas
  privadas. (Detalle menor: todos los `lastmod` = 2026-06-06, algo desactualizados; no es bug.)
- ✅ Integridad de enlaces de todo el sitio: 0 rotos.
- ✅ **Blogs traducidos — REVISADOS** (iteración 4): SEO impecable en los 20 (lang correcto,
  canonical autorreferencial, 5 hreflang con 4 destinos correctos + x-default, back-links
  localizados a /es//fr//pt/). Prosa verificada (muestra ES de reusalia-full-system):
  natural y profesional, sin leakage de inglés. Calidad alta. **Sin bugs.**

### 4. ⚠️ ÚNICA inconsistencia de contenido por decidir (no la toco — es tu dato real)
Cuántos modelos de base de datos: **3 fuentes, 2 cifras distintas**:
- Home (`index.html`, `arch.s3.i2`): **"6 domain models"**, FastAPI services.
- README perfil + los 5 posts de blog (todas las lenguas): **"25+ DB models / +25 modelos"**.
La home es la que discrepa (2 vs 1). Puede ser intencionado (6 modelos de *dominio* ≠ 25+
*tablas*), pero un visitante que pase de la home al blog ve "6" y luego "25+". **Decide tú**
cuál es el mensaje y, si quieres, te unifico las dos cifras en un commit.

### 5. Deuda arquitectónica (no es bug)
Hay **4 copias completas** de `index.html` (~130 KB c/u) con el diccionario i18n entero
duplicado ×4. Cualquier cambio futuro hay que replicarlo a mano en los 4 → riesgo de drift.
A futuro: generar las páginas localizadas desde una sola fuente (paso de build).

---
> _Nota: este archivo está commiteado en el repo (público en GitHub Pages, accesible en
> `aspiranted.github.io/pendientes.md`). Si prefieres que sea privado, se mueve a
> `.pendientes.md` (gitignored) — pero entonces no se sincroniza a otro PC._
