import title from './title.png';
import subTitle from './subtitle.png';
import img1 from './cantine_1.png';
import img2 from './cantine_2.png';

const text1 = `A dieci passi da casa, piccola, moderna e essenziale,
accoglie i migliori grappoli di una vendemmia a cui partecipa tutta la famiglia, compresi figli, sorelle e nipoti, con la supervisione di Lorenzo, che sceglie solo i migliori grappoli.
“La vinificazione è un momento fondamentale, di cui curo ogni minimo particolare”, dice Giuliana che non dimentica l’importanza di un lavoro che definisce “di coppia”.
“Condivido con Lorenzo vita e lavoro in vigna e in cantina
da 40 anni, la nostra è una simbiosi, una passione che dura
e ha formato il cemento su cui si è costruita l’azienda”.`;

const text2 = `Lo SCARNACUOIA 288 del 2019 si presenta all’olfatto
con note fitte di vaniglia e cacao dalla forte intensità balsamica.
In bocca è armonico e avvolgente con un tannino rotondo
ed equilibrato arricchito di profumi agrumati persistenti.`;

const articleTradizione = {
  mobile: [
    { type: 'txt', src: text1, title, subTitle },
    { type: 'img', src: img1 },
    { type: 'txt', src: text2 },
    { type: 'img', src: img2 },
  ],
  tablet: [
    { type: 'txt', src: text1, title, subTitle },
    { type: 'img', src: img1 },
    { type: 'txt', src: text2 },
    { type: 'img', src: img2 },
  ],
  desktop: [
    { type: 'txt', src: text1, title, subTitle },
    { type: 'img', src: img1 },
    { type: 'img', src: img2 },
    { type: 'txt', src: text2 },
  ],
};

export default articleTradizione;
