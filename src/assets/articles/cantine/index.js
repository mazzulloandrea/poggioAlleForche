import title from '../common/title.png';
import subTitle from './subtitle.png';
import img1 from './cantine_1.png';
import img2 from './cantine_2.png';

const text1 = `A dieci passi da casa, piccola, moderna e essenziale,
accoglie i migliori grappoli di una vendemmia a cui partecipa tutta la famiglia, compresi figli, sorelle e nipoti, con la supervisione di Lorenzo, che sceglie solo i migliori grappoli.
“La vinificazione è un momento fondamentale, di cui curo ogni minimo particolare”, dice Giuliana che non dimentica l’importanza di un lavoro che definisce “di coppia”.`;

const text2 = `“Condivido con Lorenzo vita e lavoro in vigna e in cantina
da 40 anni, la nostra è una simbiosi, una passione che dura
e ha formato il cemento su cui si è costruita l’azienda”.`;

const text1_en = `Ten steps from home, small, modern and essential, it welcomes the finest clusters of a harvest in which the entire family participates, including children, sisters and nephews, under the supervision of Lorenzo, who selects only the best bunches. “Winemaking is a crucial moment, of which I take care of every detail”, says Giuliana, who does not forget the importance of a job she defines as “a partnership”.`;

const text2_en = `“I have shared life and work in the vineyard and in the cellar with Lorenzo for 40 years. Ours is a symbiosis, a passion that endures and has formed the foundation upon which the company is built”.`;

const articleCantina = {
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
      { type: 'txt', src: text1_en, title, subTitle },
      { type: 'imgBck', src: img1 },
      { type: 'txt', src: text2_en },
      { type: 'imgBck', src: img2 },
    ],
    tablet: [
      { type: 'txt', src: text1_en, title, subTitle },
      { type: 'imgBck', src: img1 },
      { type: 'txt', src: text2_en },
      { type: 'imgBck', src: img2 },
    ],
    desktop: [
      { type: 'txt', src: text1_en, title, subTitle },
      { type: 'imgBck', src: img1 },
      { type: 'imgBck', src: img2 },
      { type: 'txt', src: text2_en },
    ],
  },
};

export default articleCantina;
