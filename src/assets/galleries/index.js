import foto1 from './home/Gallery-1,-foto-A.png';
import foto2 from './home/Gallery-1,-foto-B.png';
import foto3 from './home/Gallery-1,-foto-C.png';
import foto4 from './home/Gallery-1,-foto-D.png';
import foto5 from './home/Gallery-1,-foto-E.png';

import arrowSx from './arrowSx.png';
import arrowDx from './arrowDx.png';

const galleries = {
  tradizione: [foto1, foto2, foto3, foto4, foto5],
  cantina: [foto3, foto4, foto5, foto1, foto2],
  viti: [foto4, foto1, foto5, foto3, foto2],
  vini: [foto1, foto2, foto3, foto4, foto5],
  galleryCustom: {
    arrowSx,
    arrowDx,
  },
};

export default galleries;
