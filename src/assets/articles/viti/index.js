import title from '../common/title.png';
import subTitle from './subtitle.png';
import subTitle_en from './subtitle_en.png';
import img1 from './Le_viti_1.png';
import img2 from './Le_viti_2.png';

const text1 = `“Il vino nasce in vigna e non in cantina”, dice Lorenzo che si definisce vignaiolo. Dei suoi filari conosce assolutamente tutto, compresi le problematiche e l’immenso fascino di cui è fiero.
Scarnacuoia 288 e Poggio alle Forche sono fatte di piccoli appezzamenti che danno caratteristiche diverse alle uve.  Le altitudini disuguali delle colline in cui sono coltivate sfruttano microclimi che non sono gli stessi, come i terreni e le esposizioni che danno al Sangiovese note e sfumature che determinano
la particolarità dei prodotti.`;

const text2 = `Vecchie vigne e giovani piante sono all’origine dei blend che danno al Poggio alle Forche
le sfumature di gusto che lo contraddistinguono.`;

const text1_en = `"Wine is born in the vineyard and not in the cellar," says Lorenzo, who defines himself as a “vignaiolo” (“vine grower”). He knows absolutely everything about his rows, including the challenges and the immense charm of which he is proud.
Scarnacuoia 288 and Poggio alle Forche consist of small plots of land that impart different characteristics to the grapes. The uneven altitudes of the hills where they are cultivated exploit microclimates that are not the same, just like the soils and exposures that give the Sangiovese distinct notes and nuances, determining the uniqueness of the products.`;

const text2_en = `Old vines and young plants are at the origin of the blends that give Poggio alle Forche the taste nuances that distinguish it.`;

const articleViti = {
  ita: {
    mobile: [
      { type: 'txt', src: text1, title, subTitle },
      { type: 'imgBck', src: img1 },
      { type: 'txt', src: text2 },
      { type: 'imgBck', src: img2 },
    ],
    tablet: [
      { type: 'txt', src: text1, title, subTitle },
      { type: 'imgBck', src: img1 },
      { type: 'txt', src: text2 },
      { type: 'imgBck', src: img2 },
    ],
    desktop: [
      { type: 'txt', src: text1, title, subTitle },
      { type: 'imgBck', src: img1 },
      { type: 'imgBck', src: img2 },
      { type: 'txt', src: text2 },
    ],
  },
  eng: {
    mobile: [
      { type: 'txt', src: text1_en, title, subTitle: subTitle_en },
      { type: 'imgBck', src: img1 },
      { type: 'txt', src: text2_en },
      { type: 'imgBck', src: img2 },
    ],
    tablet: [
      { type: 'txt', src: text1_en, title, subTitle: subTitle_en },
      { type: 'imgBck', src: img1 },
      { type: 'txt', src: text2_en },
      { type: 'imgBck', src: img2 },
    ],
    desktop: [
      { type: 'txt', src: text1_en, title, subTitle: subTitle_en },
      { type: 'imgBck', src: img1 },
      { type: 'imgBck', src: img2 },
      { type: 'txt', src: text2_en },
    ],
  },
};

export default articleViti;
