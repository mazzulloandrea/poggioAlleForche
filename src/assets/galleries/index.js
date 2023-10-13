import tradizione1 from './tradizione/foto1.png';
import tradizione2 from './tradizione/foto2.png';
import tradizione3 from './tradizione/foto3.png';
import tradizione4 from './tradizione/foto4.png';
import tradizione5 from './tradizione/foto5.png';
import tradizione6 from './tradizione/foto6.jpg';
import tradizione7 from './tradizione/foto7.png';
// import tradizione1Colored from './tradizione/foto1_colored.png';
import tradizioneGif1 from './tradizione/gif1.gif';

import viti1 from './viti/foto1.png';
import viti2 from './viti/foto2.jpg';
import viti3 from './viti/foto3.jpg';
import viti4 from './viti/foto4.jpg';
import viti5 from './viti/foto5.jpg';
import viti1Colored from './viti/foto1_colored.png';

import cantina1 from './cantina/foto1.png';
import cantina2 from './cantina/foto2.jpg';
import cantina3 from './cantina/foto3.jpg';
import cantina4 from './cantina/foto4.jpg';
import cantina5 from './cantina/foto5.jpg';
import cantina1Colored from './cantina/foto1_colored.png';

import prodotti1 from './prodotti/foto1.png';
import prodotti2 from './prodotti/foto2.jpg';
import prodotti3 from './prodotti/foto3.jpg';
import prodotti4 from './prodotti/foto4.jpg';
import prodotti5 from './prodotti/foto5.jpg';
import prodotti1Colored from './prodotti/foto1_colored.png';

import arrowSx from './arrowSx.png';
import arrowDx from './arrowDx.png';
import resizescreenIcon from './resizescreen';
import fullscreenIcon from './fullscreen';

const galleries = {
  tradizione: {
    list: [
      tradizione1,
      tradizione2,
      tradizione3,
      tradizione4,
      tradizione5,
      tradizione6,
      tradizione7,
    ],
    // colored: tradizione1Colored,
    gif: tradizioneGif1,
  },
  viti: {
    list: [viti1, viti2, viti3, viti4, viti5],
    // colored: viti1Colored,
    gif: tradizioneGif1,
  },
  cantina: {
    list: [cantina1, cantina2, cantina3, cantina4, cantina5],
    // colored: cantina1Colored,
    gif: tradizioneGif1,
  },
  prodotti: {
    list: [prodotti1, prodotti2, prodotti3, prodotti4, prodotti5],
    // colored: prodotti1Colored,
    gif: tradizioneGif1,
  },
  galleryCustom: {
    arrowSx,
    arrowDx,
    fullscreenIcon,
    resizescreenIcon,
  },
};

export default galleries;
