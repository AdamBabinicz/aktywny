import images from "./images";

// skills
const skills = [
  {
    title: "HTML",
    value: "95%",
  },
  {
    title: "CSS/SASS",
    value: "85%",
  },
  {
    title: "REACT",
    value: "75%",
  },
  {
    title: "GIT",
    value: "15%",
  },
];

// stats
const stats = [
  {
    img: `${images.icon_briefcase}`,
    value: 107,
    title: "wykonane projekty",
  },
  {
    img: `${images.icon_clock}`,
    value: "4 lata",
    title: "aerobic w wodzie",
  },
  {
    img: `${images.icon_star_white}`,
    value: "3 lata",
    title: "wolontariat sportowy",
  },
  {
    img: `${images.icon_heart}`,
    value: "2 rok",
    title: "ćwiczenia 'mocny kręgosłup'",
  },
];

// works
const works = [
  {
    img: `${images.work_1}`,
  },
  {
    img: `${images.work_2}`,
  },
  {
    img: `${images.work_3}`,
  },
  {
    img: `${images.work_4}`,
  },
  {
    img: `${images.work_5}`,
  },
  {
    img: `${images.work_6}`,
  },
  {
    img: `${images.work_7}`,
  },
  {
    img: `${images.work_8}`,
  },
];

// services
const services = [
  {
    img: `${images.icon_diamond}`,
    title: "HTML5",
    text: "Język znaczników wykorzystywany do tworzenia i prezentowania stron internetowych www.",
  },
  {
    img: `${images.icon_archer}`,
    title: "CSS",
    text: "Kaskadowe arkusze stylów CSS (ang. Cascading Style Sheets) to kod służący do nadawania wyglądu strony.",
  },
  {
    img: `${images.icon_phone}`,
    title: "REACT",
    text: "Javascriptowa biblioteka służąca do tworzenia interfejsów użytkownika.",
  },
  {
    img: `${images.icon_console}`,
    title: "GIT",
    text: "Rozproszony system kontroli wersji.",
  },
  {
    img: `${images.icon_plane}`,
    title: "SEO / MARKETING",
    text: "Działania, których celem jest zwiększenie widoczności strony internetowej w organicznych wynikach wyszukiwania wyszukiwarki min. Google, na określone słowa kluczowe.",
  },
  {
    img: `${images.icon_star}`,
    title: "SASS",
    text: "Rozszerzenie możliwości zapisu CSS-a.",
  },
  {
    img: `${images.icon_fantasy}`,
    title: "JavaScript",
    text: "Skryptowy oraz wieloparadygmatowy język programowania, stworzony przez firmę Netscape, najczęściej stosowany na stronach internetowych.",
  },
  {
    img: `${images.icon_paint}`,
    title: "C++",
    text: "Język został zaprojektowany przez Bjarne Stroustrupa jako rozszerzenie języka C o obiektowe mechanizmy abstrakcji danych i silną statyczną kontrolę typów.",
  },
];

// testimonials
const testimonials = [
  {
    name: "Elon Musk",
    text: "Nawet niektórzy z najlepszych inżynierów sztucznej inteligencji na świecie nie zdają sobie sprawy, jak zaawansowana stała się sztuczna inteligencja Tesli.",
  },
  {
    name: "Albert Einstein",
    text: "Gdyby ludzie rozmawiali tylko o tym, co rozumieją, zapadłaby nad światem wielka cisza.",
  },
  {
    name: "Thomas Sowell",
    text: "Gdybym mógł udzielić jednej rady młodym ludziom myślącym o swojej przyszłości, byłaby to taka: nie zakładaj niczego z góry, sprawdź, jakie są możliwości/okazje.",
  },
  {
    name: "Michio Kaku",
    text: "Inteligencja wydaje się być skorelowana ze złożonością, z jaką możemy symulować przyszłe wydarzenia.",
  },
];

export default { skills, stats, works, services, testimonials };
