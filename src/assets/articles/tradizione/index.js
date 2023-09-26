// import title from './title.png';
import title2 from './title_2.png';
import subTitle from './subtitle.png';
import img1 from './La_tradizione_1.png';
import img2 from './La_tradizione_2.png';
// import img3 from './La_tradizione_3.png';
// import img4 from './La_tradizione_4.png';

// const title = 'LA TRADIZIONE';
// const subTitle = 'La <i>nostra</i> casa sul Poggio';

const text1 = `In principio fu Ofelio Cherubini che alla metà del secolo scorso comprò il podere Scarnacuoia 288 nella zona vocata del Brunello di Montalcino. La sua terza figlia Giuliana e il marito Lorenzo Turchi, dopo 40 anni di esperienza di viticoltori per una grande azienda locale decisero, qualche anno fa, di riprendere la terra e le tradizioni familiari per lanciare POGGIO ALLE FORCHE, un brand di Brunello molto speciale.`;
const text2 = `In edizione limitata, elaborato con tecniche artigianali e uve raccolte a mano, il marchio prende il nome dall’omonima tenuta a due passi dalla basilica di Sant’Antimo, a Castelnuovo dell’Abate, dove vengono prodotte una parte delle uve. Scarnacuoia 288, a poche centinaia di metri dal Castello di Montalcino, resta il cuore pulsante della produzione che non ha niente di industriale. Le uve pregiate sono coltivate in filari che arrivano fino al giardino della casa sul poggio dove Ofelio vive ancora e non c’è giorno, comprese le feste comandate, che Giuliana e Lorenzo non lavorino alla produzione dei loro vini.`;

// const text1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
// Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
// `;
// const text2 =
//   'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
// const text3 =
//   'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';
// const text4 =
//   'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

const articleTradizione = {
  mobile: [
    { type: 'txt', src: text1, title: title2, subTitle },
    { type: 'img', src: img1 },
    { type: 'txt', src: text2 },
    { type: 'img', src: img2 },
    // { type: 'txt', src: text3 },
    // { type: 'img', src: img3 },
    // { type: 'txt', src: text4 },
    // { type: 'img', src: img4 },
  ],
  tablet: [
    { type: 'txt', src: text1, title: title2, subTitle },
    { type: 'img', src: img1 },
    { type: 'txt', src: text2 },
    { type: 'img', src: img2 },
    // { type: 'txt', src: text3 },
    // { type: 'img', src: img3 },
    // { type: 'txt', src: text4 },
    // { type: 'img', src: img4 },
  ],
  desktop: [
    { type: 'txt', src: text1, title: title2, subTitle },
    { type: 'img', src: img1 },
    { type: 'img', src: img2 },
    { type: 'txt', src: text2 },
    // { type: 'txt', src: text3 },
    // { type: 'img', src: img3 },
    // { type: 'img', src: img4 },
    // { type: 'txt', src: text4 },
  ],
};

export default articleTradizione;
