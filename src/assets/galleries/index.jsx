import tradizione1 from './tradizione/foto1.png';
import tradizione2 from './tradizione/foto2.png';
import tradizione3 from './tradizione/family.png';
import tradizione4 from './tradizione/foto3.png';
import tradizione5 from './tradizione/foto4.png';
import tradizione6 from './tradizione/foto5.png';
import tradizione7 from './tradizione/raccolta.png';
import tradizione8 from './tradizione/olive.png';
import tradizione9 from './tradizione/foto6.jpg';
import tradizione10 from './tradizione/foto7.png';
// import tradizione1Colored from './tradizione/foto1_colored.png';
// import tradizioneGif1 from './tradizione/tradizione.gif';
// import tradizioneVideo from '../video/tradizione.MP4';
// const tradizioneVideo = 'https://youtu.be/6_tNfQl8DOc';
const tradizioneVideo = 'https://youtu.be/TTreLz6hTfg';

import tradizione1_en from './tradizione/foto1_en.png';

import viti1 from './viti/foto1.png';
import viti2 from './viti/foto2.png';
import viti3 from './viti/foto3.png';
import viti4 from './viti/foto4.png';
import viti5 from './viti/foto5.png';
import viti6 from './viti/foto6.png';
import viti7 from './viti/tramonto .png';
// import viti1Colored from './viti/foto1_colored.png';
// import vitiGif1 from './viti/viti.gif';
import viti1_en from './viti/foto1_en.png';

import cantina1 from './cantina/foto1.png';
import cantina2 from './cantina/foto2.png';
import cantina3 from './cantina/foto3.png';
import cantina4 from './cantina/foto4.png';
import cantina5 from './cantina/anfore.png';
import cantina6 from './cantina/foto5.png';
import cantina7 from './cantina/foto6.png';
// import cantina1Colored from './cantina/foto1_colored.png';
// import cantinaGif1 from './cantina/cantina.gif';
import cantina1_en from './cantina/foto1_en.png';

import prodotti1 from './prodotti/foto1.png';
import prodotti2 from './prodotti/foto2.png';
import prodotti3 from './prodotti/giuliana.png';
import prodotti4 from './prodotti/foto3.png';
import prodotti5 from './prodotti/olive_lorenzo.png';
import prodotti6 from './prodotti/olive_rete.png';
import prodotti7 from './prodotti/lorenzo_scala.png';
// const prodottiVideo = 'https://youtu.be/6_tNfQl8DOc';

// import prodottiGif1 from './prodotti/prodotti.gif';
import prodotti1_en from './prodotti/foto1_en.png';

// import prodotti1Colored from './prodotti/foto1_colored.png';

import arrowSx from './arrowSx.png';
import arrowDx from './arrowDx.png';
import resizescreenIcon from './resizescreen';
import fullscreenIcon from './fullscreen';

const galleries = {
  tradizione: {
    ita: [
      tradizione1,
      tradizione2,
      tradizione3,
      tradizione4,
      tradizione5,
      tradizione6,
      tradizione7,
      tradizione8,
      tradizione9,
      tradizione10,
    ],
    // colored: tradizione1Colored,
    // gif: tradizioneGif1,
    video: tradizioneVideo,
    eng: [
      tradizione1_en,
      tradizione2,
      tradizione3,
      tradizione4,
      tradizione5,
      tradizione6,
      tradizione7,
      tradizione8,
      tradizione9,
      tradizione10,
    ],
  },
  viti: {
    ita: [viti1, viti2, viti3, viti4, viti5, viti6, viti7],
    eng: [viti1_en, viti2, viti3, viti4, viti5, viti6, viti7],
    // colored: viti1Colored,
    // gif: vitiGif1,
  },
  cantina: {
    ita: [cantina1, cantina2, cantina3, cantina4, cantina5, cantina6, cantina7],
    // colored: cantina1Colored,
    // gif: cantinaGif1,
    eng: [cantina1_en, cantina2, cantina3, cantina4, cantina5, cantina6, cantina7],
  },
  prodotti: {
    ita: [prodotti1, prodotti2, prodotti3, prodotti4, prodotti5, prodotti6, prodotti7],
    // colored: prodotti1Colored,
    // gif: prodottiGif1,
    eng: [prodotti1_en, prodotti2, prodotti3, prodotti4, prodotti5, prodotti6, prodotti7],
  },
  galleryCustom: {
    arrowSx,
    arrowDx,
    fullscreenIcon,
    resizescreenIcon,
  },
};

export default galleries;
