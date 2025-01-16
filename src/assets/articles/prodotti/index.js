import img1 from './foto1.png';
import img2 from './foto2.png';
import img3 from './foto3.png';
import img4 from './foto5.png';
import img5 from './visita_cantina.png';
// import img6 from './foto6.png';
import img6 from './smaltimento.png';
import img1_en from './foto1_en.png';
import img2_en from './foto2_en.png';
import img3_en from './foto3_en.png';
import img4_en from './foto5_en.png';
import img5_en from './visita_cantina_en.png';
// import img6_en from './foto6_en.png';
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

import {
  MAP_TAG,
  RECYCLE_TAG,
  VISITED_CELLAR,
  VISITED_CELLAR_MSG,
  VISITED_CELLAR_MSG_EN,
} from '../../../utils';

const articleProdotti = {
  ita: {
    mobile: [
      { type: 'img', src: mobile1, spaceTop: true },
      // { type: 'img', src: mobile2 },
      {
        type: 'img',
        src: mobile_olio,
        id: 'imgDescription',
        imgDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      },
      { type: 'img', src: mobile3, spaceTop: true },
      { type: 'img', src: mobile4 },
      { type: 'img', src: mobile5, spaceTop: true },
      { type: 'img', src: mobile6 },
      { type: 'img', src: mobileMap, spaceTop: true, id: MAP_TAG },
      { type: 'img', src: mobile10, id: RECYCLE_TAG },
      { type: 'img', src: mobile11 },
    ],
    tablet: [
      { type: 'img', src: img1, full: true },
      { type: 'img', src: img2, full: true },
      { type: 'img', src: img3, full: true },
      { type: 'map', src: img4, id: MAP_TAG }, // mappa },
      { type: 'img', src: img5, full: true, id: VISITED_CELLAR, subTitle: VISITED_CELLAR_MSG },
      { type: 'recycle', src: img6, id: RECYCLE_TAG },
    ],
    desktop: [
      { type: 'img', src: img1, full: true },
      { type: 'img', src: img2, full: true },
      { type: 'img', src: img3, full: true },
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
      { type: 'img', src: mobileMap_en, spaceTop: true, id: MAP_TAG },
      { type: 'img', src: mobile10_en, id: RECYCLE_TAG },
      { type: 'img', src: mobile11_en },
    ],
    tablet: [
      { type: 'img', src: img1_en, full: true },
      { type: 'img', src: img2_en, full: true },
      { type: 'img', src: img3_en, full: true },
      { type: 'map', src: img4_en, id: MAP_TAG }, // mappa },
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
    desktop: [
      { type: 'img', src: img1_en, full: true },
      { type: 'img', src: img2_en, full: true },
      { type: 'img', src: img3_en, full: true },
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
