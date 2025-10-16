[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/bZbcpSVk)
# Maquetació amb temes dinàmics

## Comencem!

Començarem amb el repositori de Vite amb sass i bootstrap  ja configurats

## Objectiu

L'objectiu d'aquesta tasca és demostrar l'habilitat de maquetació i la integració amb un sistema de temes dinàmics basats en Scss/Sass i Vite.
S'ha de maqueta una pàgina amb elements complexos amb bootstra i verificar que el canvi de tema funciona correctament.

## Requisits de maquetació i funcionalitat

### Funcionalitat de temes dinàmics
- Activació: El selector de temes ("theme-selector") ha de canviar l'estil de tota la pàgina.
- No fa falta guardar el tema. En recarregar-se la pàgina, el tema ha de tornar al valor per defecte (default).
- El fons, el color de text, els colors de components, les graelles, etc. han de reflectir els valor del tema escollit.
- Crea com a mínim 3 temes diferents

### Galeria d'imatges 
- Utilitza el sistema de graella de Bootstrap (.row i .col-*) per maquetar les imatges proporcionades en el HTML.
- Els elements han de canviar el nombre de columnes en funció de la mida de la pantalla.
   - Mòbil (xs): 1 columna (col-12).
   - Petita (sm): 2 columnes
   - Mitjana (md): 3 columnes
   - Gran (lg) o superior: 5 columnes.
   - Busca també la forma de fer perquè les mides de les columnes que es nostren variïn en funció del tema (busca informació sobre els mixins make-col i make-row de sass de bootstrap).

### Formulari de contacte
- Hi ha d'haver un formulari de contacte
- L'estil del formulari s'ha d'adaptar al tema.
- Maqueta un formulari de contacte conplet utilitzant les classes de formularis de bootstrap. Com a mínim ha de contenir: nom complet, email, missatge (textare), checkbox d'acceptació i un botó de tipus "subnut" utikitzant la classe btn-primary.

### Altres components
Inclou els següents components, assegurant que els colors i estils depenen de les variables del tema:
- Barra de navegació (navbar): col·locada a l'inici de la pàgina.
- Targeta (card): Una targeta amb un card-header que utilitzi la classe .bg-secondary.
- Alertes: Una alerta .alert-success i una .alert-danger.
- Botons: Un botó btn-secondary.

## Notes
- Tota la configuració de Vite, Sass, els punts d'entrada JS, un exemple de scss i la lògica del theme switcher al fitxer index.htmkl i als directoris src/scss i src/js.
- La vostra tasca es centra en la maquetació HTML i la configuració dels estils per utilitzar aquesta funcionalitat.