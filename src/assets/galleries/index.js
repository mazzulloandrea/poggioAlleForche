import foto1 from './home/Gallery-1,-foto-A.jpg';
import foto2 from './home/Gallery-1,-foto-B.jpg';
import foto3 from './home/Gallery-1,-foto-C.jpg';
import foto4 from './home/Gallery-1,-foto-D.jpg';
import foto5 from './home/Gallery-1,-foto-E.jpg';
import foto6 from './home/Gallery-1,-foto-F.jpg';
import foto7 from './home/Gallery-1,-foto-G.jpg';

import arrowSx from './arrowSx.png';
import arrowDx from './arrowDx.png';

const galleries = {
  tradizione: [foto1, foto2, foto3, foto4, foto5],
  cantina: [foto3, foto4, foto5, foto1, foto2, foto7, foto6],
  viti: [foto4, foto1, foto5, foto3, foto2, foto7, foto6],
  prodotti: [foto1, foto2, foto3, foto4, foto5, foto6, foto7],
  galleryCustom: {
    arrowSx,
    arrowDx,
  },
};

export default galleries;
