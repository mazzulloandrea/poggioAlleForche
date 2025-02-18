import scarnacuoia from './scarnacuoia.png';
import scarnacuoia_2020 from './scarnacuoia_2020.png';
import brunello from './brunello.png';
import brunello_2020 from './brunello_2020.png';
import rosso from './rosso.png';
import rosso_2023 from './rosso_2023.png';
import img4 from './foto5.png';
import img5 from './visita_cantina.png';
import img6 from './smaltimento.png';
import scarnacuoia_en from './scarnacuoia_en.png';
import scarnacuoia_2020_en from './scarnacuoia_2020_en.png';
import brunello_en from './brunello_en.png';
import brunello_2020_en from './brunello_2020_en.png';
import rosso_en from './rosso_en.png';
import rosso_2023_en from './rosso_2023_en.png';
import img4_en from './foto5_en.png';
import img5_en from './visita_cantina_en.png';
import img6_en from './smaltimento_en.png';

import mobile1 from './mobile1.png';
import mobile2 from './mobile2.png';
import mobile3 from './mobile3.png';
import mobile4 from './mobile4.png';
import mobile5 from './mobile5.png';
import mobile6 from './mobile6.png';
import mobileMap from './mobile9.png';
import mobile10 from './mobile10.png';
import mobile11 from './mobile11.png';

import mobile2_en from './mobile2_en.png';
import mobile4_en from './mobile4_en.png';
import mobile6_en from './mobile6_en.png';
import mobileMap_en from './mobile9_en.png';
import mobile10_en from './mobile10_en.png';
import mobile11_en from './mobile11_en.png';
import mobile_olio from './mobile_olio.png';
import olio from './olio.png';

import {
  y2019,
  y2019_active,
  y2020,
  y2020_active,
  y2022,
  y2022_active,
  y2023,
  y2023_active,
} from './yearsButton';

import {
  MAP_TAG,
  RECYCLE_TAG,
  VISITED_CELLAR,
  VISITED_CELLAR_MSG,
  VISITED_CELLAR_MSG_EN,
} from '../../../utils';

export { y2019, y2019_active, y2020, y2020_active, y2022, y2022_active, y2023, y2023_active };

const olioIta = `Con la stessa cura con cui lavoriamo le nostre viti coltiviamo nei pressi della sede aziendale, a circa 400 mt slm, 500 piante di olivo delle varietà moraiolo, leccino, frantoio per ottenere un pregiato olio extra vergine d’oliva.
\n\n
Gli olivi sono oggetto di costante manutenzione nel rispetto dell’ambiente con concimazioni organiche annuali e potature periodiche. Le olive sono raccolte manualmente da metà ottobre ad invaiatura appena iniziata per ottenere nelle 24 h successive, con rese molto basse (una media di 10 kg di olio per 100 kg di olive) e tramite spremitura a freddo presso un frantoio locale, un olio EVO ricchissimo di polifenoli, bassa acidità e perossidi.
\n\n
I benefici dell’uso quotidiano di un olio EVO di qualità sono ormai ampiamente riconosciuti. I polifenoli in esso contenuti svolgono una funzione attiva antiossidante e antiinfiammatoria nell’organismo oltre ad inibire la coagulazione del colesterolo cattivo. La bassa acidità e numero di perossidi sono sinonimo di integrità della materia prima usata e dunque dell’ottimo stato di conservazione dei principali nutrienti dell’olio stesso (vitamine E e B in primis).
\n\n
In cucina, i suoi profumi e sapori sono in grado di esaltare sia il più semplice dei piatti sia di accompagnare ingredienti e ricette elaborate.
\n\n
Sebbene il colore non sia un parametro qualitativo, il suo verde smeraldo intenso e vivace è irresistibile. Al naso e al palato sprigiona un bel fruttato con sentori di carciofo ed una nota amara e piccante decisa ma equilibrata. Ottimo da usare a crudo per aggiungere un tocco di carattere toscano a tutte le preparazioni. Conservare a temperatura ambiente e lontano da fonti di luce e calore per mantenere le sue caratteristiche nel tempo.
`;

const olioEn = `The same dedication and care to grow our vineyards is used for our olive grove. The farmhouse, at 400 mt asl (1300 ft asl), is surrounded by 500 magnificient olive trees of some of the most traditional Tuscan varieties such as moraiolo, leccino and frantoio to make a high quality extra-virgin olive oil.
\n\n
The olive grove is annually farmed with organic fertilizer and trees periodically pruned. Olives are hand-picked from mid-October as soon as veraison starts and cold pressed at a local mill whithin 24 hours from picking. Yields are as low as it takes an average of 100 kg of olives to get 10 kg of EVOO of excellent nutrition values, rich in polyphenols, low acidity and peroxides.
\n\n
The advantages of a regular consumption of a high quality EVOO are widely recognized. Polyphenols have an active antioxidant and anti-inflammatory action and inhibit the coagulation of LDL cholesterol. Low acidity and peroxides prove the integrity of the raw material used and therefore the high qualities of its nutrition values (primarly vitamines E and B).
\n\n
In the kitchen, its aromas and flavors are able to elevate the simplest dishes as well as to complement elaborate recipies.
\n\n
Although color is not a qualitative parameter, its bright, intense emerald green is irresistible. On the nose and on the palate it is fruity and reminds of artichoke with a firm yet balanced bitter and spicy note. Great to be drizzled a crudo to add a Tuscan touch to any dish. Store at room temperature (13-18°C / 55-64° F), far from light and heat sources to preserve its qualities over time.
`;

const articleProdotti = {
  ita: {
    mobile: [
      { type: 'img', src: mobile1, spaceTop: true },
      { type: 'img', src: mobile2 },
      { type: 'img', src: mobile3, spaceTop: true },
      { type: 'img', src: mobile4 },
      { type: 'img', src: mobile5, spaceTop: true },
      { type: 'img', src: mobile6 },
      {
        type: 'img',
        src: mobile_olio,
        id: 'imgDescription',
        imgDescription: olioIta,
      },
      { type: 'img', src: mobileMap, spaceTop: true, id: MAP_TAG },
      { type: 'img', src: mobile10, id: RECYCLE_TAG },
      { type: 'img', src: mobile11 },
    ],
    tablet: [
      {
        type: 'img',
        full: true,
        settings: {
          defaultYearSelected: '2019',
          years: [
            { value: '2019', buttonSrc: y2019, buttonSrcActive: y2019_active, src: scarnacuoia },
            {
              value: '2020',
              buttonSrc: y2020,
              buttonSrcActive: y2020_active,
              src: scarnacuoia_2020,
            },
          ],
        },
      },
      {
        type: 'img',
        full: true,
        settings: {
          defaultYearSelected: '2019',
          years: [
            { value: '2019', buttonSrc: y2019, buttonSrcActive: y2019_active, src: brunello },
            {
              value: '2020',
              buttonSrc: y2020,
              buttonSrcActive: y2020_active,
              src: brunello_2020,
            },
          ],
        },
      },
      {
        type: 'img',
        full: true,
        settings: {
          defaultYearSelected: '2022',
          years: [
            { value: '2022', buttonSrc: y2022, buttonSrcActive: y2022_active, src: rosso },
            {
              value: '2023',
              buttonSrc: y2023,
              buttonSrcActive: y2023_active,
              src: rosso_2023,
            },
          ],
        },
      },
      {
        type: 'img',
        src: olio,
        id: 'imgDescription',
        imgDescription: olioIta,
        full: true,
        text: 'right',
      },
      { type: 'map', src: img4, id: MAP_TAG }, // mappa },
      { type: 'img', src: img5, full: true, id: VISITED_CELLAR, subTitle: VISITED_CELLAR_MSG },
      { type: 'recycle', src: img6, id: RECYCLE_TAG },
    ],
    desktop: [
      {
        type: 'img',
        src: scarnacuoia,
        full: true,
        settings: {
          defaultYearSelected: '2019',
          years: [
            { value: '2019', buttonSrc: y2019, buttonSrcActive: y2019_active, src: scarnacuoia },
            {
              value: '2020',
              buttonSrc: y2020,
              buttonSrcActive: y2020_active,
              src: scarnacuoia_2020,
            },
          ],
        },
      },
      {
        type: 'img',
        full: true,
        settings: {
          defaultYearSelected: '2019',
          years: [
            { value: '2019', buttonSrc: y2019, buttonSrcActive: y2019_active, src: scarnacuoia },
            {
              value: '2020',
              buttonSrc: y2020,
              buttonSrcActive: y2020_active,
              src: scarnacuoia_2020,
            },
          ],
        },
      },
      {
        type: 'img',
        full: true,
        settings: {
          defaultYearSelected: '2022',
          years: [
            { value: '2022', buttonSrc: y2022, buttonSrcActive: y2022_active, src: rosso },
            {
              value: '2023',
              buttonSrc: y2023,
              buttonSrcActive: y2023_active,
              src: rosso_2023,
            },
          ],
        },
      },
      {
        type: 'img',
        src: olio,
        id: 'imgDescription',
        imgDescription: olioIta,
        full: true,
        text: 'right',
      },
      { type: 'map', src: img4, id: MAP_TAG }, //mappa },
      { type: 'img', src: img5, full: true, id: VISITED_CELLAR, subTitle: VISITED_CELLAR_MSG },
      { type: 'recycle', src: img6, id: RECYCLE_TAG },
    ],
  },
  eng: {
    mobile: [
      { type: 'img', src: mobile1, spaceTop: true },
      { type: 'img', src: mobile2_en },
      { type: 'img', src: mobile3, spaceTop: true },
      { type: 'img', src: mobile4_en },
      { type: 'img', src: mobile5, spaceTop: true },
      { type: 'img', src: mobile6_en },
      {
        type: 'img',
        src: mobile_olio,
        id: 'imgDescription',
        imgDescription: olioEn,
      },
      { type: 'img', src: mobileMap_en, spaceTop: true, id: MAP_TAG },
      { type: 'img', src: mobile10_en, id: RECYCLE_TAG },
      { type: 'img', src: mobile11_en },
    ],
    tablet: [
      {
        type: 'img',
        // src: scarnacuoia_en,
        full: true,
        settings: {
          defaultYearSelected: '2019',
          years: [
            { value: '2019', buttonSrc: y2019, buttonSrcActive: y2019_active, src: scarnacuoia_en },
            {
              value: '2020',
              buttonSrc: y2020,
              buttonSrcActive: y2020_active,
              src: scarnacuoia_2020_en,
            },
          ],
        },
      },
      {
        type: 'img',
        full: true,
        settings: {
          defaultYearSelected: '2019',
          years: [
            { value: '2019', buttonSrc: y2019, buttonSrcActive: y2019_active, src: brunello_en },
            {
              value: '2020',
              buttonSrc: y2020,
              buttonSrcActive: y2020_active,
              src: brunello_2020_en,
            },
          ],
        },
      },
      {
        type: 'img',
        // src: rosso_en,
        full: true,
        settings: {
          defaultYearSelected: '2022',
          years: [
            { value: '2022', buttonSrc: y2022, buttonSrcActive: y2022_active, src: rosso_en },
            {
              value: '2023',
              buttonSrc: y2023,
              buttonSrcActive: y2023_active,
              src: rosso_2023_en,
            },
          ],
        },
      },
      {
        type: 'img',
        src: olio,
        id: 'imgDescription',
        imgDescription: olioEn,
        full: true,
        text: 'right',
      },
      { type: 'map', src: img4_en, id: MAP_TAG }, // mappa },
      {
        type: 'img',
        src: img5_en,
        full: true,
        id: VISITED_CELLAR,
        subTitle: VISITED_CELLAR_MSG_EN,
      },
      { type: 'recycle', src: img6_en, id: RECYCLE_TAG },
    ],
    desktop: [
      {
        type: 'img',
        // src: scarnacuoia_en,
        full: true,
        settings: {
          defaultYearSelected: '2019',
          years: [
            { value: '2019', buttonSrc: y2019, buttonSrcActive: y2019_active, src: scarnacuoia_en },
            {
              value: '2020',
              buttonSrc: y2020,
              buttonSrcActive: y2020_active,
              src: scarnacuoia_2020_en,
            },
          ],
        },
      },
      {
        type: 'img',
        // src: brunello_en,
        full: true,
        settings: {
          defaultYearSelected: '2019',
          years: [
            { value: '2019', buttonSrc: y2019, buttonSrcActive: y2019_active, src: brunello_en },
            {
              value: '2020',
              buttonSrc: y2020,
              buttonSrcActive: y2020_active,
              src: brunello_2020_en,
            },
          ],
        },
      },
      {
        type: 'img',
        // src: rosso_en,
        full: true,
        settings: {
          defaultYearSelected: '2022',
          years: [
            { value: '2022', buttonSrc: y2022, buttonSrcActive: y2022_active, src: rosso_en },
            {
              value: '2023',
              buttonSrc: y2023,
              buttonSrcActive: y2023_active,
              src: rosso_2023_en,
            },
          ],
        },
      },
      {
        type: 'img',
        src: olio,
        id: 'imgDescription',
        imgDescription: olioEn,
        full: true,
        text: 'right',
      },
      { type: 'map', src: img4_en, id: MAP_TAG }, //mappa },
      {
        type: 'img',
        src: img5_en,
        full: true,
        id: VISITED_CELLAR,
        subTitle: VISITED_CELLAR_MSG_EN,
      },
      // { type: 'img', src: img6_en, full: true, width: 100 },
      { type: 'recycle', src: img6_en, id: RECYCLE_TAG },
    ],
  },
};

export default articleProdotti;
