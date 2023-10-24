import title from '../common/title.png';
import subTitle from './subtitle.png';
import img1 from './a.png';
import img2 from './b.png';

const text1 = `“Il vino nasce in vigna e non cantina”, dice Lorenzo che si definisce vignaiolo. Dei suoi filari conosce assolutamente tutto, compresi le problematiche e l’immenso fascino di cui è fiero.
Scarnacuoia 288 e Poggio alle Forche sono fatte di piccoli appezzamenti che danno caratteristiche diverse alle uve.  Le altitudini disuguali delle colline in cui sono coltivate sfruttano microclimi che non sono gli stessi, come i terreni e le esposizioni che danno al Sangiovese note e sfumature che determinano
la particolarità dei prodotti.`;

const text2 = ` Vecchie vigne e giovani piante sono all’origine dei blend che danno al Poggio alle Forche
le sfumature di gusto che lo contraddistinguono.
</br>
</br>
Il POGGIO ALLE FORCHE 2019 è caratterizzato da profumi di frutti rossi maturi, con note violacee persistenti.
Il gusto è pieno e trasversale con sapidità espressiva e note
di bacche di ginepro. Il tannino è armonico e levigato, con un finale lungo e vibrante.`;

const articleViti = {
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

export default articleViti;
