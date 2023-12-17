import title from '../common/title.png';
import subTitle from './subtitle.png';
import subTitle_en from './subtitle_en.png';
import img1 from './La_tradizione_1.png';
import img2 from './La_tradizione_2.jpg';

const text1 = `In principio fu Ofelio Cherubini che alla metà del secolo scorso comprò il podere Scarnacuoia 288 nella zona vocata del Brunello di Montalcino. La sua terza figlia Giuliana e il marito Lorenzo Turchi, dopo 40 anni di esperienza di viticoltori per una grande azienda locale decisero, qualche anno fa, di riprendere la terra e le tradizioni familiari per lanciare POGGIO ALLE FORCHE, un brand di Brunello molto speciale.`;
const text2 = `In edizione limitata, elaborato con tecniche artigianali e uve raccolte a mano, il marchio prende il nome dall’omonima tenuta a due passi dalla basilica di Sant’Antimo, a Castelnuovo dell’Abate, dove vengono prodotte una parte delle uve. Scarnacuoia 288, a poche centinaia di metri dalla Fortezza di Montalcino, resta il cuore pulsante della produzione che non ha niente di industriale. Le uve pregiate sono coltivate in filari che arrivano fino al giardino della casa sul poggio dove Ofelio vive ancora e non c’è giorno che Giuliana e Lorenzo non lavorino alla produzione dei loro vini.`;

const text1_en = `At the beginning it was Ofelio Cherubini who, in the mid 20th century, bought the Scarnacuoia 288 estate in the renowned area of Brunello di Montalcino. His third daughter, Giuliana, and her husband, Lorenzo Turchi, after 40 years of experience as grape growers for a large local company, decided a few years ago to reclaim the land and family traditions to launch POGGIO ALLE FORCHE, a very special Brunello brand.`;
const text2_en = `As a limited edition, crafted with artisanal techniques and handpicked grapes, the brand takes its name from the homonymous estate very close to Basilica of Sant'Antimo in Castelnuovo dell’Abate, where a portion of the grapes is produced. Scarnacuoia 288, just a few hundred meters from the Fortress of Montalcino, remains the beating heart of the production, which is far from industrial. The prized grapes are cultivated in rows that extend to the garden of the house on the hill where Ofelio still lives, and there is not a day when Giuliana and Lorenzo are not working on the production of their wines.`;

const articleTradizione = {
  ita: {
    mobile: [
      { type: 'txt', src: text1, title, subTitle },
      { type: 'imgBck', src: img1 },
      { type: 'txt', src: text2 },
      { type: 'imgBck', src: img2 },
    ],
    tablet: [
      { type: 'txt', src: text1, title: title, subTitle },
      { type: 'imgBck', src: img1 },
      { type: 'txt', src: text2 },
      { type: 'imgBck', src: img2 },
    ],
    desktop: [
      { type: 'txt', src: text1, title: title, subTitle },
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
      { type: 'txt', src: text1_en, title: title, subTitle: subTitle_en },
      { type: 'imgBck', src: img1 },
      { type: 'txt', src: text2_en },
      { type: 'imgBck', src: img2 },
    ],
    desktop: [
      { type: 'txt', src: text1_en, title: title, subTitle: subTitle_en },
      { type: 'imgBck', src: img1 },
      { type: 'imgBck', src: img2 },
      { type: 'txt', src: text2_en },
    ],
  },
};

export default articleTradizione;
