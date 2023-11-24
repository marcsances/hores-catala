# horescatala

[![npm version](https://badge.fury.io/js/horescatala.svg)](https://www.npmjs.com/package/horescatala)

This package provides a method to convert Date instances with a given time to the corresponding Catalan bell (classic)
time format.

Aquest paquet ofereix un métode per a convertir instàncies de tipus Date amb una hora determinada, a la hora de campanar corresponent.

## Usage example / Exemple d'ús

```javascript
const horesCatala = require("horescatala");

const date = new Date(2023, 11, 24, 13, 26, 0, 0);
console.log(horesCatala.toCatalanTime(date));
```

## Building / Compilar

```typescript
npm install
npm run build
```

## Running tests / Executar les proves unitàries

```typescript
npm test
```

## License / Llicència

Copyright 2023, Marc Sances

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

----

Copyright 2023, Marc Sances

Es permet la redistribució i l'ús en formes tant de codi font com binari, amb modificacions o sense, sempre que es compleixin les següents condicions:

1. Les redistribucions de codi font han de mantenir la notificació de drets d'autor anterior, aquesta llista de condicions i la següent exempció de responsabilitat.

2. Les redistribucions en forma binària han de reproduir la notificació de drets d'autor anterior, aquesta llista de condicions i la següent exempció de responsabilitat en la documentació i/o altres materials proporcionats amb la distribució.

3. Ni el nom del titular dels drets d'autor ni els noms dels seus col·laboradors poden ser utilitzats per avalar o promoure productes derivats d'aquest programari sense el permís escrit específic prèvi.

AQUEST PROGRAMARI S'OFEREIX "COM ESTÀ", I QUALSEVOL GARANTIA EXPRESSA O IMPLICADA, INCLOENT, PERÒ NO LIMITANT-SE A, LES GARANTIES IMPLICADES DE COMERCIABILITAT I APTITUD PER A UN PROPÒSIT DETERMINAT, SÓN DECLINADES. EN CAP CAS EL TITULAR DELS DRETS D'AUTOR O ELS SEUS COL·LABORADORS SERAN RESPONSABLES PER DANYS DIRECTES, INDIRECTES, CASUALS, ESPECIALS, EXEMPLARS O CONSEQÜENCIALS (INCLOENT-HI, PERÒ NO DE MANERA LIMITADA, LA ADQUISICIÓ DE BÉNS O SERVEIS DE SUBSTITUCIÓ; LA PÈRDUA D'ÚS, DE DADES O DE BENEFICIS; O INTERRUPCIÓ DE NEGOCIS) PRODUÏTS PER QUALSEVOL CAUSA I AMB INDEPENDÈNCIA DE LA TEORIA DE RESPONSABILITAT, JA SIGUI EN CONTRACTE, RESPONSABILITAT ESTRICTA O AGREUJAMENT (INCLOENT LA NEGLIGÈNCIA O ALTRAMENT) QUE SORPRENGUI EN RELACIÓ AMB L'ÚS D'AQUEST PROGRAMARI, TOT I QUE S'HAGI ESTAT ADVERTIT DE LA POSSIBILITAT D'AQUESTS DANYS.
