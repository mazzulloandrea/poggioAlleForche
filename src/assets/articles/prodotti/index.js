import img1 from './foto4.png';
import img2 from './foto5.png';
import img3 from './foto6.png';
import img4 from './foto7.png';
import img5 from './foto9.png';

import { mappa, mappaMobile } from './map';

// const text1 = `In principio fu Ofelio Cherubini che alla metà del secolo scorso comprò il podere Scarnacuoia 288 nella zona vocata del Brunello di Montalcino. La sua terza figlia Giuliana e il marito Lorenzo Turchi, dopo 40 anni di esperienza di viticoltori per una grande azienda locale decisero, qualche anno fa, di riprendere la terra e le tradizioni familiari per lanciare POGGIO ALLE FORCHE, un brand di Brunello molto speciale.`;
// const text2 = `In edizione limitata, elaborato con tecniche artigianali e uve raccolte a mano, il marchio prende il nome dall’omonima tenuta a due passi dalla basilica di Sant’Antimo, a Castelnuovo dell’Abate, dove vengono prodotte una parte delle uve. Scarnacuoia 288, a poche centinaia di metri dal Castello di Montalcino, resta il cuore pulsante della produzione che non ha niente di industriale. Le uve pregiate sono coltivate in filari che arrivano fino al giardino della casa sul poggio dove Ofelio vive ancora e non c’è giorno, comprese le feste comandate, che Giuliana e Lorenzo non lavorino alla produzione dei loro vini.`;

const articleTradizione = {
  mobile: [
    // { type: 'txt', src: text1, title, subTitle },
    { type: 'img', src: img1, full: true },
    // { type: 'txt', src: text2 },
    { type: 'img', src: img2, full: true },
    { type: 'img', src: img3, full: true },
    { type: 'img', src: img4, full: true },
    { type: 'img', src: img5, full: true, width: 100 },
    { type: 'map', src: mappaMobile },
  ],
  tablet: [
    { type: 'img', src: img1, full: true },
    { type: 'img', src: img2, full: true },
    { type: 'img', src: img3, full: true },
    { type: 'img', src: img4, full: true },
    { type: 'img', src: img5, full: true, width: 100 },
    { type: 'map', src: mappa },
  ],
  desktop: [
    { type: 'img', src: img1, full: true },
    { type: 'img', src: img2, full: true },
    { type: 'img', src: img3, full: true },
    { type: 'img', src: img4, full: true },
    { type: 'img', src: img5, full: true, width: 100 },
    { type: 'map', src: mappa },
  ],
};

export default articleTradizione;
