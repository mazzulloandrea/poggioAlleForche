import title from './title.png';
import subTitle from './subtitle.png';
import img1 from './a.png';
import img2 from './b.png';
// import img3 from './La_tradizione_3.png';
// import img4 from './La_tradizione_4.png';

// const title = 'LA TRADIZIONE';
// const subTitle = 'La <i>nostra</i> casa sul Poggio';

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

// const text1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
// Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
// `;
// const text2 =
//   'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
// const text3 =
//   'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';
// const text4 =
//   'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

const articleViti = {
  mobile: [
    { type: 'txt', src: text1, title, subTitle },
    { type: 'img', src: img1 },
    { type: 'txt', src: text2 },
    { type: 'img', src: img2 },
    // { type: 'txt', src: text3 },
    // { type: 'img', src: img3 },
    // { type: 'txt', src: text4 },
    // { type: 'img', src: img4 },
  ],
  tablet: [
    { type: 'txt', src: text1, title, subTitle },
    { type: 'img', src: img1 },
    { type: 'txt', src: text2 },
    { type: 'img', src: img2 },
    // { type: 'txt', src: text3 },
    // { type: 'img', src: img3 },
    // { type: 'txt', src: text4 },
    // { type: 'img', src: img4 },
  ],
  desktop: [
    { type: 'txt', src: text1, title, subTitle },
    { type: 'img', src: img1 },
    { type: 'img', src: img2 },
    { type: 'txt', src: text2 },
    // { type: 'txt', src: text3 },
    // { type: 'img', src: img3 },
    // { type: 'img', src: img4 },
    // { type: 'txt', src: text4 },
  ],
};

export default articleViti;
