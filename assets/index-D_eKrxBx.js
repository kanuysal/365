var Ao = Object.defineProperty;
var So = (e, t, n) =>
  t in e
    ? Ao(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var f = (e, t, n) => So(e, typeof t != "symbol" ? t + "" : t, n);
const productNames = ["Sevilla Kınalık", "Cordoba Kınalık", "Granada Nişanlık", "Rubina Kınalık", "Zafira Nişanlık", "Estrella Nişanlık", "Rosalinda Nişanlık", "Esmeralda Abiye", "Alhambra Kaftan", "Leonor Gelinlik", "Estafania Abiye", "Soledad Abiye", "Isabella Gelinlik", "Irene Gelinlik", "Catalina Gelinlik", "Bird After Party", "Aslı Gelinlik", "Pronovias", "Estela Kınalık", "Azahara Kaftan", "Sultana Kaftan", "Rosalia", "Amaranta Kınalık", "Carmen Kadife", "Brisa Gelinlik", "Reina Gelinlik", "Clara Gelinlik", "Kosova Şalvar", "Asha Nişanlık", "Pantera Abiye", "Kali Kaftan", "Turquesa Nişanlık", "Gece Nişanlık", "Hatun Kaftan", "Renk Abiye", "Devin Nişanlık", "Ruby Kınalık", "Albana Şalvar", "Donika Şalvar", "Zana Şalvar", "Kuğu Şalvar", "Şeyda Şalvar", "Era Abiye", "Maya Abiye", "Viento Abiye", "Almira Abiye", "Anka Abiye", "Vega Abiye", "Flora Abiye", "Serpil Gelinlik", "Zerafet Nişanlık", "Aydan Gelinlik Plus OUTLET", "Elsa Nişanlık", "Fulya Şalvar", "Serena Elbise", "Zen Abiye", "Iona Kadife", "Scarlet", "Mavi Nişanlık", "Mercan After Party", "Asel Kaftan", "Sultan Kaftan", "Corina Kinalik", "Alfa", "Peri Nişanlık", "Wave Abiye", "Duygu Plus", "Meliha Abiye", "Victoria Gelinlik", "Dilek", "Gloria After Party", "Daisy After Party", "Duru Gelinlik", "Venüs After Party", "Lona After Party", "Gonca Gelinlik", "Giselle After Party", "Odette After Party", "Aysel Gelinlik", "Mediha Gelinlik", "Valerian Nişanlık", "Zelda After Party", "Lina Gelinlik", "Valery Nişanlık", "Pinkie Abiye", "Petit Gelinlik", "Kate Gelinlik", "Roma Gelinlik", "Songül Gelinlik", "Ashley After Party", "Simay Gelinlik", "Ayda Gelinlik", "Ahu Gelinlik", "Paris Gelinlik", "Bianca Gelinlik", "Celine Gelinlik", "Stellar Kınalık", "Pera Gelinlik", "Safiye Kınalık", "Nevbahar", "Jale", "Kösem Kınalık", "Şehrazat Kınalık", "Belkıs Kınalık", "Süreyya Kınalık", "Afitap Kınalık", "Dilruba Kınalık", "Hürrem Kınalık", "Devran Kınalık", "Yakut Kınalık", "Gülfem Kınalık", "Anka Kınalık", "Hüma Kınalık", "Berta", "Lilly Nişanlık", "Hanzade", "Efsun Kına Nişan Elbisesi", "Valeria Kına", "Mihrimah After Party", "Nova After Party", "Cherry Kınalık", "Verda Kaftan", "Nova", "Amada Kınalık", "Blush Nişanlık", "Nazende Kınalık", "Athena Kınalık", "Bridgerton Nişanlık", "Rhea Kınalık", "Hera Kınalık", "Milla", "Arya Nişanlık", "Novia", "Narin Nişanlık", "Clara Nişanlık", "Stephany", "Neva Nişanlık", "Alya Nişanlık", "Sky Nişanlık", "Vera Nişanlık", "Naime Kınalık", "Velvet Kadife", "Pandora Kaftan", "Lavanta Nişanlık", "Esra Nişanlık", "Ajda Gelinlik", "Nadide Gelinlik", "Asya Nişanlık", "Eleni Gelinlik", "Barbie", "Alba Kınalık", "Merve Nişanlık", "Dark Nişanlık", "Ayna After Party", "Başak", "Gamze Nişanlık", "Veronica Sleeve", "Elenora Kontes", "Rebeca", "Veronica Gelinlik", "Yağmur Sirena Gelinlik", "Kırmızı İnci Nişanlık", "Tuba Nişanlık Plus", "Adria After Party Plus", "Aylin Gelinlik Plus", "Saliha Gelinlik Plus", "Monica Nişanlık Plus", "Eva Nişanlık Plus", "Gül Plus Kınalık Nişanlık", "Rosso Plus Kına Elbisesi", "Nazlı Plus Kınalık", "Grace Nikah Elbisesi", "Pearl Nikah", "Emma Kina After Party", "Aynur Kaftan", "Gabriela Nişanlık", "Hüma Nişanlık", "Zümra Nişanlık", "Eylül After Party", "Zeliha Gelinlik", "Aitana Gelinlik", "Naz After Party", "Melis After Party", "Merve After Party", "Nehir Kadife", "Irmak Gelinlik OUTLET", "Diana Abiye", "Sema Nişanlık", "Nihan Nişan Kına Elbisesi", "Meltem Elbise", "Buket Elbise", "Aslıhan Elbise", "Melahat Nişanlık", "Maya Kınalık Nişanlık", "Chloe Gelinlik", "Katya Nişanlık", "Sanem Kınalık", "Defne Nişanlık", "Nilay Nişanlık", "Sakura Kınalık Nişanlık", "Rabia Kaftan", "Hürrem Kaftan", "Seren Kaftan", "Gülendam Kaftan", "Filiz Kadife", "Mahi Devran Kaftan", "Fikriye Kaftan", "Bella Kınalık Nişanlık", "İpek After Party", "Lara Nişanlık", "Lidya Kınalık", "Hülya Kınalık", "Çağla Kınalık", "Alice Kınalık", "Doğa Kınalık", "Ceyda Nişanlık", "Pelin Nişanlık", "Ece Kınalık After Party", "Deniz Kınalık", "Seher Nişanlık", "Hicran Kınalık", "Yasemin Gelinlik", "Nurdan Gelinlik", "Müge Gelinlik OUTLET", "Gaye Gelinlik", "Harem Gelinlik", "Yeliz Gelinlik", "Elmira Gelinlik OUTLET", "Saliha Gelinlik", "Ahsen Gelinlik OUTLET", "İnci Gelinlik OUTLET", "Betül Gelinlik", "Zeynep Gelinlik", "Cansu Gelinlik", "Nil Gelinlik", "Yaren Gelinlik", "Rana Gelinlik", "Özge Gelinlik OUTLET", "Dilşat Kınalık", "Burcu Gelinlik OUTLET", "Şebnem Kınalık", "Hande Gelinlik OUTLET", "Jasmin Gelinlik OUTLET", "Pınar Gelinlik", "Masal Nişanlık", "Medine Nişanlık", "Karya Kınalık", "Hilal Kadife", "Esra Kadife", "Alexa Abiye", "Öykü  After Party", "Ahsen Şalvar", "Asena Kınalık", "Dilan Kaftan", "Ayşenur Kaftan", "Sudenaz Kaftan", "Mira Gelinlik", "Serra Gelinlik", "Nur Abiye", "Tilly Abiye", "Eden Kasnak Abiye", "Mia Abiye", "Beliz Gelinlik OUTLET", "Ela Gelinlik", "Ayşe Abiye", "Melek Abiye", "Nora Abiye", "Amara Abiye", "Eliza Abiye", "Ophelia Abiye", "Elodie Abiye", "Zara Abiye", "Ayla Abiye", "Ada Abiye", "Millie Abiye", "Aria Abiye", "Grace Abiye", "Charlotte Abiye", "Rosie Abiye", "Daisy Abiye", "Elsie Abiye", "Bonnie Abiye", "Ava Abiye", "Isabella Abiye", "Harper Abiye", "Lily Abiye", "Alize Nişanlık", "Olivia Abiye", "Barcelona Gelinlik Abiye"];
const gapData = {
  4: { text: "Mina Lidya Özel Koleksiyonu", link: "https://minalidya.com", btnText: "İncele" },
  9: { text: "Haute Couture Hikayemiz", link: "https://minalidya.com", btnText: "Keşfet" },
  14: { text: "Mağaza Randevusu", link: "https://minalidya.com/randevu", btnText: "Randevu Al" }
};

import { g as C } from "./vendor_gsap-CB87Sc6I.js";
import {
  W as Ho,
  A as Lo,
  P as Ri,
  u as Vo,
  v as Dt,
  w as Oi,
  M as Ge,
  B as Po,
  x as Nn,
  y as et,
  z as Vn,
  E as hn,
  V as st,
  G as vt,
  S as Te,
  c as Pn,
  T as Bi,
  I as ge,
  J as Wn,
  K as te,
  O as _o,
  Q as Do,
  X as Fo,
  Y as Ro,
  Z as Ve,
  _ as Ft,
  $ as Oo,
  a0 as Bo,
  a1 as Zo,
  a2 as vn,
  a3 as Un,
  a4 as ei,
  a5 as zo,
  a6 as Io,
  a7 as $o,
  a8 as Go,
  a9 as Yo,
  aa as Zi,
  ab as Ke,
  ac as qo,
  ad as Xo,
  ae as No,
} from "./vendor_three_core-CkF7M0VR.js";
import { K as Wo } from "./vendor_three_examples-k4Rq5mQf.js";
import { l as Uo } from "./vendor_lottie-5F-0dq5R.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const a of o)
      if (a.type === "childList")
        for (const r of a.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const a = {};
    return (
      o.integrity && (a.integrity = o.integrity),
      o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const a = n(o);
    fetch(o.href, a);
  }
})();
function jo(e) {
  const t = new Ho({ antialias: !0 });
  return (
    t.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
    t.setSize(window.innerWidth, window.innerHeight),
    (t.shadowMap.enabled = !1),
    (t.toneMapping = Lo),
    (t.toneMappingExposure = 1.25),
    e.appendChild(t.domElement),
    t
  );
}
function Qo() {
  const e = new Ri(50, window.innerWidth / window.innerHeight, 0.1, 200);
  return (e.position.set(0, 1.65, 0), e.lookAt(0, 1.65, 72), e);
}
function Jo() {
  const e = new Vo();
  return (
    (e.background = new Dt(16119024)),
    (e.fog = new Oi(16119024, 3, 65)),
    e
  );
}
function Ko(e, t) {
  window.addEventListener("resize", () => {
    ((e.aspect = window.innerWidth / window.innerHeight),
      e.updateProjectionMatrix(),
      t.setSize(window.innerWidth, window.innerHeight),
      t.setPixelRatio(Math.min(window.devicePixelRatio, 2)));
  });
}
const nt = 72,
  K = 6.3,
  ts = new Ge({ color: 16777215, side: Po }),
  es = new Nn({ color: 15263976, roughness: 0.15, metalness: 0.15 }),
  ns = new Ge({ color: 16777215 });
function is(e) {
  const t = new et(new Vn(nt + 0.15, 72), es);
  ((t.rotation.x = -Math.PI / 2), e.add(t));
  const n = new et(new Vn(nt + 0.15, 72), ns);
  ((n.rotation.x = Math.PI / 2), (n.position.y = K), e.add(n));
  const i = new et(new hn(nt, nt, K, 144, 1, !0), ts);
  return ((i.position.y = K / 2), e.add(i), { ceiling: n });
}
const os = [
    {
      id: "w01",
      title: "Morning Silence",
      year: 2023,
      size: "60 × 85 cm",
      medium: "Oil on linen",
      description:
        "A study of early morning light across still water. The surface holds the sky without moving.",
      image: "/images/IMG_3790.jpg",
      wall: "left",
      index: 0,
    },
    {
      id: "w02",
      title: "Threshold",
      year: 2022,
      size: "60 × 85 cm",
      medium: "Acrylic on canvas",
      description:
        "A doorway between two grey rooms. What lies beyond is left to the viewer.",
      image: "/images/IMG_3795.jpg",
      wall: "left",
      index: 1,
    },
    {
      id: "w03",
      title: "Field Study I",
      year: 2024,
      size: "60 × 85 cm",
      medium: "Pencil and gouache",
      description:
        "Documentation of an empty field at dusk. The grass is indifferent to observation.",
      image: "/images/IMG_3796.jpg",
      wall: "left",
      index: 2,
    },
    {
      id: "w04",
      title: "Interior with White Chair",
      year: 2021,
      size: "60 × 85 cm",
      medium: "Oil on panel",
      description:
        "The chair waits. Sunlight travels across the floor in its own time.",
      image: "/images/IMG_3822.jpg",
      wall: "left",
      index: 3,
    },
    {
      id: "w05",
      title: "Low Tide",
      year: 2023,
      size: "60 × 85 cm",
      medium: "Watercolor on paper",
      description:
        "The sea pulls back and the sand is briefly exposed to the cool air.",
      image: "/images/IMG_3823.jpg",
      wall: "left",
      index: 4,
    },
    {
      id: "w06",
      title: "Overcast",
      year: 2022,
      size: "60 × 85 cm",
      medium: "Oil on linen",
      description:
        "A flat white sky over a low horizon. Silence rendered in three tones.",
      image: "/images/IMG_3826.jpg",
      wall: "right",
      index: 0,
    },
    {
      id: "w07",
      title: "Still Pool",
      year: 2024,
      size: "60 × 85 cm",
      medium: "Oil on canvas",
      description:
        "Reflections in a forest pool. The trees do not know they are upside down.",
      image: "/images/IMG_3834.jpg",
      wall: "right",
      index: 1,
    },
    {
      id: "w08",
      title: "Corridor",
      year: 2021,
      size: "60 × 85 cm",
      medium: "Graphite on paper",
      description:
        "A long hallway with no end visible. The walls are paper-white.",
      image: "/images/IMG_3837.jpg",
      wall: "right",
      index: 2,
    },
    {
      id: "w09",
      title: "Garden at Rest",
      year: 2023,
      size: "60 × 85 cm",
      medium: "Acrylic on board",
      description:
        "The garden in November. Everything is preparing to be nothing for a while.",
      image: "/images/IMG_4234.jpg",
      wall: "right",
      index: 3,
    },
    {
      id: "w10",
      title: "Study in Grey",
      year: 2022,
      size: "60 × 85 cm",
      medium: "Oil on linen",
      description:
        "A monochrome investigation of surface, texture, and quiet persistence.",
      image: "/images/IMG_4253.jpg",
      wall: "right",
      index: 4,
    },
    {
      id: "w11",
      title: "The Quiet Room",
      year: 2024,
      size: "80 × 115 cm",
      medium: "Oil on canvas",
      description:
        "A large interior with no figures. The room breathes on its own. This is the artist's central statement: space as presence.",
      image: "/images/IMG_4261.jpg",
      wall: "far",
      index: 0,
    },
  ],
  rt = 366,
  productSlugs = ["sevilla-kinalik","cordoba-kinalik","granada-kinalik","rubina-kinalik","zafira-nisanlik","estrella-nisanlik","rosalinda-nisanlik","esmeralda-abiye","alhambra-kaftan","leonor-gelinlik","estaania-abiye","soledad-abiye","isabella-gelinlik","irene-gelinlik","catalina-gelinlik","bird-after-party","asli-gelinlik","pronovias-gelinlik","estela-kinalik","azahara-kaftan","sultana-kaftan","rosalia","amaranta-kinalik","carmen-abiye","brisa-gelinlik","reina-gelinlik","clara-gelinlik","kosova-salvar","asha-nisanlik","pantera-abiye","kali-kaftan","turquesa-nisanlik","gece-nisanlik","hatun-kaftan","renk-abiye","devin-nisanlik","ruby-kinalik","albana-salvar","donika-salvar","zana-salvar","kugu-salvar","seyda-salvar","era-abiye","maya-abiye","viento-abiye","almira-abiye","anka-abiye","vega-abiye","flora-abiye","serpil-gelinlik","zerafet-nisan-elbisesi","aydan-gelinlik-plus","elsa-prenses-model-nisan-elbisesi","fulya-kadife-salvar","serena-elbise","zen-abiye","iona-kadife","scarlet-kinalik","mavi-nisanlik","mercan-after-party","asel-kaftan","sultan-kaftan","corina-kirmizi-kina-elbisesi","alfa","peri-nisanlik","wave-abiye","duygu-plus","meliha-tasli-abiye","victoria-gelinlik","dilek-gelinlik","gloria-after-party","daisy-after-party","duru-gelinlik","venus-after-party","lona-after-party","gonca-gelinlik","giselle-after-party","odette-after-party","aysel-tesettur-gelinlik","mediha-tesettur-gelinlik","valerian-nisanlik","zelda-after-party","lina-tesettur-gelinlik","valery-nisanlik","pinkie-abiye","petit-gelinlik","kate-gelinlik","roma-gelinlik","songul-gelinlik","ashley-after-party","simay-gelinlik","ayda-gelinlik","ahu-prenses-model-gelinlik","paris-gelinlik","bianca-gelinlik","celine-gelinlik","stellar-kinalik","pera-gelinlik","safiye-kinalik","nevbahar","jale","kosem-kinalik","sehrazat-kinalik","belkis-kinalik","sureyya-kinalik","afitap-kinalik","dilruba-kinalik","hurrem-kinalik","devran-kinalik","yakut-kinalik","gulfem-kinalik","anka-kinalik","huma-kinalik","berta-bride","lilly-nisanlik","hanzade-gelinlik","efsun-kina-nisan-elbisesi","valeria-kina","mihrimah-after-party","nova-after-party","cherry-kinalik","verda-kaftan","nova","amada-kinalik","blush-nisanlik","nazende-kinalik","athena-kinalik","bridgerton-nisanlik","rhea-kinalik","hera-kinalik","milla","arya-nisanlik","novia","narin-nisanlik","clara-nisanlik","stephany","neva-nisanlik","alya-nisanlik","sky-nisanlik","vera-nisanlik","naime-kinalik","velvet-kadife","pandora-kaftan","lavanta-nisanlik","esra-nisanlik","ajda-gelinlik","nadide-gelinlik","asya-nisanlik","eleni-gelinlik","barbie-nisanlik","alba-kinalik","merve-nisanlik","dark-nisanlik","ayna-after-party","basak-nisanlik","gamze-nisanlik","veronica-sleeve-gelinlik","elenora-kontes-gelinlik","rebeca-elbise","veronica-gelinlik","yagmur-gelinlik2","kirmizi-inci-kinalik","tuba-nisanlik-plus","adria-after-party-plus","aylin-gelinlik-plus","saliha-gelinlik-plus","monica-nisanlik-plus","eva-nisanlik-plus","gul-nisanlik-plus","rosso-kinalik-plus","nazli-kinalik-plus","grace-nikah-elbisesi","pearl-gelinlik","emma-kirmizi-nisan-elbisesi","aynur-kaftan","gabriela-nisan-elbisesi","huma-nisan-elbisesi","zumra-nisan-elbisesi","eylul-after-party-gelin-elbisesi","zeliha-uc-boyutlu-cicekli-gelinlik","aitana-gelinlik","naz-after-party-gelin-elbisesi","after-party-gelinlik-kristal","merve-after-party-gelin-elbisesi","nehir-kadife-abiye","irmak-gelinlik","diana-balik-model-abiye","sema-prenses-soz-elbisesi","nihan-prenses-model-nisan-elbisesi","meltem-kina-elbisesi","buket-balik-model-abiye-elbise","aslihan-soz-elbisesi","melahat-nisan-elbisesi","maya-prenses-model-nisan-elbisesi","chloe-dantelli-gelinlik","katya-prenses-model-nisan-elbisesi","sanem-kirmizi-kina-elbisesi","defne-prenses-model-nisan-elbisesi","nilay-prenses-model-nisan-elbisesi","sakura-nisan-elbisesi","rabia-kaftan","hurrem-kaftan","seren-kaftan","gulendam-kadife-kaftan","filiz-kadife-abiye-kaftan","mahi-devran-kaftan","fikriye-kaftan","bella-nisan-elbisesi","ipek-after","lara-nisan-elbisesi","lidya-kina-elbisesi","hulya-kirmizi-kina-elbisesi","cagla-kirmizi-kina-elbisesi","alice-kina-elbisesi","doga-kirmizi-nisan-elbisesi","ceyda-nisan-elbisesi","pelin-nisan-elbisesi","ece-kina-elbisesi","deniz-kirmizi-nisan-elbisesi","seher-nisan-elbisesi","hicran-kina-elbisesi","yasemin-tesettur-gelinlik","nurdan-tesettur-gelinlik","muge-tesettur-gelinlik","gaye-tesettur-gelinlik","harem-tesettur-gelinlik","yeliz-tesettur-gelinlik","elmira-prenses-model-gelinlik","saliha-tesettur-gelinlik","ahsen-prenses-model-gelinlik","inci-detayli-gelinlik","betul-tesettur-gelinlik","zeynep-tesettur-gelinlik","cansu-prenses-model-gelinlik","nil-prenses-model-gelinlik","yaren-prenses-model-gelinlik","rana-beyaz-gelinlik","ozge-prenses-model-gelinlik","dilsat-kirmizi-kina-elbisesi","burcu-gelinlik","sebnem-kirmizi-kina-elbisesi","hande-tesettur-gelinlik","jasmin-tesettur-gelinlik","pinar-balik-model-gelinlik","masal-nisan-elbisesi","medine-prenses-model-nisan-elbisesi","karya-kirmizi-kina-elbisesi","hilal-kadife-abiye-ve-nisan-elbisesi","esra-kadife-kina-elbisesi","alexa-after-party-gelin-elbisesi","after-party-gelinlik-3d","ahsen-kina-elbisesi","asena-kirmizi-kina-elbisesi","dilan-kaftan","aysenur-kaftan","sudenaz-kaftan","mira-a-kesim-gelinlik","serra-tesettur-gelinlik","tesettur-tas-puskul-gold","tilly-mini-abiye","eden-beyaz-mini-elbise-ve-kasnak-isleme-abiye","mia-abiye-balik-model-soz-elbisesi","beliz-prenses-model-gelinlik","ela-gelinlik","ayse-abiye-soz-elbisesi","melek-abiye-soz-elbisesi","nora-modern-soz-elbisesi-ve-after-party","amara-abiye-mavi-nisan-elbisesi","eliza-tasli-abiye","ophelia-after-party-gelin-elbisesi-ve-abiye","elodie-tasli-abiye","zara-after-party-gelin-elbisesi-ve-abiye","ayla-tasli-abiye","ada-tasli-soz-elbisesi-abiye","millie-abiye-soz-elbisesi","aria-tasli-abiye","grace-abiye-soz-elbisesi","charlotte-abiye-elbise","rosie-abiye-soz-elbisesi","daisy-abiye-soz-elbisesi","elsie-abiye-soz-elbisesi","maxi-kollu-silver-siyah-puskullu","ava-abiye-soz-elbisesi","isabella-tasli-abiye","harper-islemeli-soz-elbisesi-abiye","lily-balik-model-abiye","alize-nisan-elbisesi","olivia-abiye-tesettur-gelinlik","barcelona-gelinlik-beyaz-soz-elbisesi"],
  ss = 1.1,
  as = 1.6,
  Mn = 0.8,
  Ht = 0.04,
  _n = 1.7,
  rs = 2.67,
  zi = 0.13,
  ls = 55,
  cs = 0;
function ds(e) {
  if ((e + 1) % 5 === 0) {
    return "card.png";
  }
  const imgIdx = (e + 1) - Math.floor((e + 1) / 5);
  return `images/products/${String(imgIdx).padStart(4, "0")}.avif`;
}
const ni = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  hs = [
    "Oca",
    "Şub",
    "Mar",
    "Nis",
    "May",
    "Haz",
    "Tem",
    "Ağu",
    "Eyl",
    "Eki",
    "Kas",
    "Ara",
  ];
function ps(e) {
  if (e === 0) return "Dec 31";
  let t = e,
    n = 0;
  for (; t > ni[n]; ) ((t -= ni[n]), n++);
  return `${hs[n]} ${t}`;
}
function us() {
  const e = os;
  return Array.from({ length: rt }, (t, n) => {
    const i = e[n];
    return {
      id: i ? i.id : `w${String(n + 1).padStart(3, "0")}`,
      title: ps(n),
      year: "MİNA LİDYA",
      size: "297mm × 420mm",
      medium: i ? i.medium : "Mixed media",
      description: i ? i.description : "",
      image: ds(n),
      index: n,
    };
  });
}
function fs() {
  return new Nn({ color: 15789544, roughness: 0.85 });
}
const ms = 0.8,
  ys = new Nn({ color: 1710618, roughness: 0.25, metalness: 0.75 });
let nn = null;
function ws(e) {
  if (nn) return nn;
  const t = new Bi().load(e + "images/shadow.png");
  return (
    (t.flipY = !1),
    (nn = new ge({ map: t, transparent: !0, depthWrite: !1, opacity: 0.55 })),
    nn
  );
}
function gs(e, t, n, i) {
  const o = new Wn(),
    a = new et(new te(e, t), n);
  ((a.position.z = Ht / 2 + 0.001),
    o.add(a),
    [
      { w: e + Ht * 2, h: Ht, x: 0, y: t / 2 + Ht / 2 },
      { w: e + Ht * 2, h: Ht, x: 0, y: -0.8200000000000001 },
      { w: Ht, h: t, x: -0.5700000000000001, y: 0 },
      { w: Ht, h: t, x: e / 2 + Ht / 2, y: 0 },
    ].forEach(({ w: l, h: p, x: u, y: w }) => {
      const m = new et(new _o(l, p, Ht), ys);
      (m.position.set(u, w, 0), o.add(m));
    }));
  const s = e + 0.38,
    d = t + 1.2,
    c = new et(new te(s, d), i);
  return ((c.position.z = -0.1), (c.position.y = 0.2), o.add(c), o);
}
function xs(e, t, n, i = ls, o = cs, a = 0) {
  const r = us(),
    s = [],
    d = r.map(() => fs()),
    c = new Array(rt).fill(!1),
    l = new Array(rt).fill(!1);
  let p = 0,
    u = 0;
  const w = new Array(rt).fill(1),
    m = new Set(),
    x = [],
    y = "./",
    g = new Bi(),
    b = ws(y);
  r.forEach((V) => {
    const k = gs(ss, as, d[V.index], b),
      M = -(2 * Math.PI * V.index) / rt,
      S = Math.sin(M),
      B = Math.cos(M),
      $ = nt - zi,
      F = new st($ * S, _n, $ * B),
      z = new vt(0, Math.PI + M, 0),
      N = nt - rs,
      ut = new st(N * S, _n, N * B),
      dt = F.clone();
    (k.position.copy(F),
      k.rotation.copy(z),
      k.scale.set(Mn, Mn, Mn),
      (k.userData.workId = V.id),
      e.add(k));
    const W = k.children[0];
    ((W.userData.workId = V.id),
      s.push({
        mesh: W,
        work: V,
        focusPosition: ut,
        focusTarget: dt,
        angle: M,
      }));
  });
  let A = 0;
  const E = i * i,
    L = o > 0 ? o * o : 1 / 0;
  function v(V, k) {
    let M = -1,
      S = -1;
    for (let $ = 0; $ < rt; $++) {
      if (!c[$]) continue;
      const F = s[$].focusTarget.x - V.x,
        z = s[$].focusTarget.z - V.z,
        N = F * F + z * z;
      N > k && N > S && ((S = N), (M = $));
    }
    if (M === -1) return !1;
    const B = d[M];
    return (
      B.map && (B.map.dispose(), (B.map = null), (B.needsUpdate = !0)),
      (c[M] = !1),
      p--,
      !0
    );
  }
  ((s.lazyUpdate = function (k) {
    if (A++ % 10 === 0 && !(k.y > 10))
      for (let M = 0; M < rt; M++) {
        const S = s[M].focusTarget.x - k.x,
          B = s[M].focusTarget.z - k.z,
          $ = S * S + B * B;
        if (c[M] && $ > L) {
          const F = d[M];
          (F.map && (F.map.dispose(), (F.map = null), (F.needsUpdate = !0)),
            (c[M] = !1),
            p--);
          continue;
        }
        if (!(c[M] || l[M]) && $ < E) {
          if (a > 0 && p + u >= a && !v(k, $)) continue;
          ((l[M] = !0), u++);
          const F = M;
          g.load(
            y + s[F].work.image,
            (z) => {
              ((z.colorSpace = Te),
                x.push({ idx: F, tex: z, fade: !0 }),
                (l[F] = !1),
                u--,
                (c[F] = !0),
                p++);
            },
            void 0,
            () => {
              ((l[F] = !1), u--);
            },
          );
        }
      }
  }),
    (s.updateFades = function (k) {
      for (const M of m)
        ((w[M] = Math.min(1, w[M] + k / ms)),
          (d[M].opacity = w[M]),
          w[M] >= 1 &&
            ((d[M].transparent = !1), (d[M].needsUpdate = !0), m.delete(M)));
    }),
    (s.drainUpload = function (k) {
      if (x.length === 0) return;
      const { idx: M, tex: S, fade: B } = x.shift();
      ((S.generateMipmaps = !1), (S.minFilter = Pn), k.initTexture(S));
      const $ = d[M].map;
      ($ && $ !== S && $.dispose(),
        (S.image = null),
        (d[M].map = S),
        B
          ? ((d[M].transparent = !0),
            (d[M].opacity = 0),
            (d[M].needsUpdate = !0),
            (w[M] = 0),
            m.add(M))
          : (d[M].needsUpdate = !0));
    }),
    (s.preloadNear = function (k) {
      const M = [];
      for (let S = 0; S < rt; S++) {
        if (c[S] || l[S]) continue;
        const B = s[S].focusTarget.x - k.x,
          $ = s[S].focusTarget.z - k.z,
          F = B * B + $ * $;
        F < E && M.push({ idx: S, d2: F });
      }
      M.sort((S, B) => S.d2 - B.d2);
      for (const { idx: S } of M) {
        if (a > 0 && p + u >= a) break;
        ((l[S] = !0), u++);
        const B = S;
        g.load(
          y + s[B].work.image,
          ($) => {
            (($.colorSpace = Te),
              x.push({ idx: B, tex: $, fade: !1 }),
              (l[B] = !1),
              u--,
              c[B] || p++,
              (c[B] = !0));
          },
          void 0,
          () => {
            ((l[B] = !1), u--);
          },
        );
      }
    }),
    (s.forceReloadTexture = function (k) {
      l[k] ||
        ((l[k] = !0),
        u++,
        g.load(
          y + s[k].work.image,
          (M) => {
            ((M.colorSpace = Te),
              x.push({ idx: k, tex: M, fade: !1 }),
              (l[k] = !1),
              u--,
              c[k] || p++,
              (c[k] = !0));
          },
          void 0,
          () => {
            ((l[k] = !1), u--);
          },
        ));
    }),
    (s.resetLoaded = function (k) {
      (c[k] && p--, l[k] && u--, (c[k] = !1), (l[k] = !1));
    }),
    (s.isFullyLoaded = function (k) {
      return c[k];
    }),
    (s.loadAll = function (k) {
      let S = 0,
        B = 0;
      for (let z = 0; z < rt; z++) c[z] && B++;
      if ((k == null || k(B, rt), B === rt)) return;
      const $ = [];
      for (let z = 0; z < rt; z++) !c[z] && !l[z] && $.push(z);
      const F = () => {
        for (; S < 6 && $.length > 0; ) {
          const z = $.shift();
          ((l[z] = !0),
            S++,
            g.load(
              y + s[z].work.image,
              (N) => {
                ((N.colorSpace = Te),
                  (N.generateMipmaps = !1),
                  (N.minFilter = Pn),
                  (d[z].map = N),
                  (d[z].needsUpdate = !0),
                  (l[z] = !1),
                  c[z] || p++,
                  (c[z] = !0),
                  S--);
                let ut = 0;
                for (let dt = 0; dt < rt; dt++) c[dt] && ut++;
                (k == null || k(ut, rt), F());
              },
              void 0,
              () => {
                ((l[z] = !1), S--, F());
              },
            ));
        }
      };
      F();
    }));
  const P = 12;
  for (let V = -P; V < P; V++) {
    const k = ((V % rt) + rt) % rt;
    if (l[k] || c[k]) continue;
    ((l[k] = !0), u++);
    const M = k;
    g.load(
      y + s[M].work.image,
      (S) => {
        ((S.colorSpace = Te),
          x.push({ idx: M, tex: S, fade: !1 }),
          (l[M] = !1),
          u--,
          c[M] || p++,
          (c[M] = !0));
      },
      void 0,
      () => {
        ((l[M] = !1), u--);
      },
    );
  }
  return s;
}
const ii = 2.8;
function vs(e) {
  const t = nt - zi - ii;
  return new st(t * Math.sin(e.angle), _n + ii, t * Math.cos(e.angle));
}
const Ii = Math.PI / 15,
  Cs = 0.42,
  bs = 0.065,
  oi = 0.0075,
  Ms = 0,
  Ze = 22,
  ks = Ze * 1.5,
  Ts = 0.06,
  Es = 0.22,
  As = 0.025,
  kn = 16;
function Ss(e) {
  const t = new Do(16777215, 15263456, 0.55);
  e.add(t);
  const n = new Fo(16775408, 0.55);
  return (
    n.position.set(2, 8, 4),
    (n.castShadow = !1),
    e.add(n),
    { hemi: t, dir: n }
  );
}
function Hs(e) {
  return new st(e.focusTarget.x, e.focusTarget.y + Ms, e.focusTarget.z);
}
function Ls(e, t) {
  const n = new st().subVectors(t, e).normalize();
  return e.clone().addScaledVector(n, bs);
}
function Vs(e, t, n) {
  const i = new Ge({ color: 16119285 }),
    o = new Ge({ color: 15921647 }),
    a = new Ge({ color: 14539994 }),
    r = new ge({ color: 16777215 }),
    s = K - t.y,
    d = new et(new hn(oi, oi, s, 8), i);
  (d.position.set(t.x, t.y + s / 2, t.z), e.add(d));
  const c = new Wn();
  c.position.copy(t);
  const l = new hn(0.0325, 0.0525, 0.14, 14),
    p = new et(l, o),
    u = new et(new Oo(0.0525, 0.006, 8, 20), a);
  ((u.position.y = -0.07), (u.rotation.x = Math.PI / 2), p.add(u));
  const w = new et(new Bo(0.021, 10, 10), r);
  ((w.position.y = -0.065), p.add(w));
  const m = new st().subVectors(n, t).normalize();
  (p.quaternion.setFromUnitVectors(new st(0, -1, 0), m), c.add(p), e.add(c));
}
function Ps(e, t, n) {
  const o = t.distanceTo(n) * 0.92,
    a = Math.tan(Ii) * o * 1.3,
    r = new Zo(a, o, 48, 10, !0),
    s = new vn({
      uniforms: {
        uColor: { value: new Dt(16775408) },
        uMaxOpacity: { value: 0.15 },
        uBaseRadius: { value: a },
      },
      vertexShader: `
      uniform float uBaseRadius;
      varying float vRadial;
      varying float vAxial;
      void main() {
        vRadial = length(vec2(position.x, position.z)) / uBaseRadius;
        vAxial  = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
      fragmentShader: `
      uniform vec3  uColor;
      uniform float uMaxOpacity;
      varying float vRadial;
      varying float vAxial;
      void main() {
        float radial = exp(-vRadial * vRadial * 4.5);
        // Non-linear axial: Gaussian-like hotspot at aperture, fast falloff toward painting.
        // vAxial=1 → apex (bright), vAxial=0 → base (near painting, mostly faded)
        float axial  = 0.15 + 0.85 * exp(-pow(1.0 - vAxial, 1.5) * 3.0);
        float a      = radial * axial * uMaxOpacity;
        gl_FragColor = vec4(uColor * a, a);
      }
    `,
      transparent: !0,
      side: Un,
      blending: Ft,
      depthWrite: !1,
    }),
    d = new et(r, s),
    c = new st().lerpVectors(t, n, 0.475);
  d.position.copy(c);
  const l = new st().subVectors(t, c).normalize();
  return (d.quaternion.setFromUnitVectors(new st(0, 1, 0), l), e.add(d), d);
}
function $i(e, t, n) {
  const a = document.createElement("canvas");
  ((a.width = 1024), (a.height = 192));
  const r = a.getContext("2d");
  r.clearRect(0, 0, 1024, 192);
  const s = Math.round(192 * 0.36);
  ((r.font = `400 ${s}px "Helvetica Neue", Helvetica, Arial, sans-serif`),
    (r.textAlign = "center"),
    (r.textBaseline = "middle"),
    (r.fillStyle = "#fff8f0"),
    (r.shadowColor = "#fff8f0"));
  for (const [v, P] of [
    [32, 0.5],
    [14, 0.75],
    [0, 1],
  ])
    ((r.shadowBlur = v), (r.globalAlpha = P), r.fillText(n, 1024 / 2, 192 / 2));
  const d = new Ve(a),
    c = t.angle,
    l = nt - 0.04,
    p = 1.35,
    u = p * (192 / 1024),
    w = u * 0.46 * 0.52,
    m = t.focusTarget.y + 0.66 + u / 2 + 0.03 + w,
    x = new ge({
      map: d,
      transparent: !0,
      blending: Ft,
      depthWrite: !1,
      opacity: 0,
    }),
    y = new et(new te(p, u), x);
  (y.position.set(l * Math.sin(c), m, l * Math.cos(c)),
    y.rotation.set(0, Math.PI + c, 0),
    e.add(y));
  const g = 0.52,
    b = 0.32,
    A = (Math.PI * 2) / 4;
  let E = 0,
    L = !1;
  return {
    show() {
      L = !0;
    },
    update(v) {
      L &&
        ((E = Math.min(1, E + 0.015)),
        (x.opacity = (g + Math.sin(v * A) * b) * E));
    },
  };
}
function _s(e, t) {
  return $i(e, t, "Başlangıç");
}
function Ds(e, t) {
  const o = 0.25312500000000004,
    a = o * 0.46 * 0.52,
    r = 0.66 + o / 2 + 0.03 + a,
    s = 256,
    d = 256,
    c = document.createElement("canvas");
  ((c.width = s), (c.height = d));
  const l = c.getContext("2d"),
    p = s / 2,
    u = d / 2,
    w = s * 0.28;
  l.shadowColor = "#fff8f0";
  for (const [_, Z] of [
    [40, 0.35],
    [16, 0.7],
    [0, 1],
  ])
    ((l.shadowBlur = _),
      (l.globalAlpha = Z),
      l.beginPath(),
      l.arc(p, u, w, 0, Math.PI * 2),
      (l.fillStyle = "#fff8f0"),
      l.fill());
  const m = new Ve(c),
    x = new Vn(0.118, 32),
    y = 256,
    g = 256,
    b = document.createElement("canvas");
  ((b.width = y), (b.height = g));
  const A = b.getContext("2d"),
    E = A.createRadialGradient(y / 2, g / 2, 0, y / 2, g / 2, y * 0.5);
  (E.addColorStop(0, "rgba(255,248,240,0.9)"),
    E.addColorStop(0.3, "rgba(255,248,240,0.45)"),
    E.addColorStop(0.65, "rgba(255,248,240,0.1)"),
    E.addColorStop(1, "rgba(255,248,240,0)"),
    (A.fillStyle = E),
    A.fillRect(0, 0, y, g));
  const L = new Ve(b),
    v = nt - 0.04,
    P = t.map(
      () =>
        new ge({
          map: m,
          transparent: !0,
          blending: Ft,
          depthWrite: !1,
          depthTest: !1,
          opacity: 0,
        }),
    ),
    V = 4.5,
    k = t.map(
      () =>
        new ge({
          map: L,
          transparent: !0,
          blending: Ft,
          depthWrite: !1,
          depthTest: !1,
          opacity: 0,
        }),
    ),
    M = t.map((_, Z) => {
      const I = _.angle,
        H = new et(x, P[Z]);
      return (
        (H.renderOrder = 1),
        H.position.set(v * Math.sin(I), _.focusTarget.y + r, v * Math.cos(I)),
        H.rotation.set(0, Math.PI + I, 0),
        (H.visible = !1),
        Z !== 0 && Z !== 365 && e.add(H),
        H
      );
    }),
    S = t.map((_, Z) => {
      const I = _.angle,
        H = new et(x, k[Z]);
      return (
        (H.renderOrder = 0),
        H.scale.setScalar(V),
        H.position.set(v * Math.sin(I), _.focusTarget.y + r, v * Math.cos(I)),
        H.rotation.set(0, Math.PI + I, 0),
        (H.visible = !1),
        Z !== 0 && Z !== 365 && e.add(H),
        H
      );
    }),
    B = (Math.PI * 2) / 4,
    $ = t.map(() => ({
      p1: Math.random() * Math.PI * 2,
      p2: Math.random() * Math.PI * 2,
      p3: Math.random() * Math.PI * 2,
      f1: B * (0.7 + Math.random() * 0.7),
      f2: B * (2.3 + Math.random() * 2),
      f3: B * (5.1 + Math.random() * 3),
    })),
    F = 0.52,
    z = 0.32,
    N = 5;
  let ut = !1,
    dt = 1;
  const W = t.map(() => !1);
  return {
    show(_) {
      _ !== 0 && _ !== 365 && ((M[_].visible = !0), (S[_].visible = !0));
    },
    update(_) {
      if (ut) {
        const Z = F + Math.sin(_ * B) * z;
        M.forEach((I, H) => {
          if (I.visible)
            if ((S[H].position.copy(I.position), W[H])) {
              const U = I.position.x,
                ht = I.position.z,
                ft = Math.sqrt(U * U + ht * ht),
                Ct = nt * 0.5;
              if (ft < Ct && ft > 0.01) {
                const mt = 1 - ft / Ct,
                  J = Math.atan2(U, ht),
                  wt = 1 + mt * 2.2,
                  se = 1 - mt * 0.72;
                (I.rotation.set(-Math.PI / 2, 0, J),
                  I.scale.set(N * se, N * wt, N),
                  S[H].rotation.set(-Math.PI / 2, 0, J),
                  S[H].scale.set(V * se, V * wt, V));
              }
              const { p1: Zt, p2: Me, p3: Re, f1: oe, f2: Cn, f3: bn } = $[H],
                en =
                  Math.sin(_ * oe + Zt) * 0.55 +
                  Math.sin(_ * Cn + Me) * 0.3 +
                  Math.sin(_ * bn + Re) * 0.15,
                lt = Math.max(0.5, Math.min(1, 0.58 + en * 0.92)) * dt;
              ((P[H].opacity = lt), (k[H].opacity = lt * 0.55));
            } else ((P[H].opacity = Z), (k[H].opacity = Z * 0.4));
        });
      } else {
        const Z = F + Math.sin(_ * B) * z;
        M.forEach((I, H) => {
          I.visible && ((P[H].opacity = Z), (k[H].opacity = Z * 0.4));
        });
      }
    },
    setTopDown(_, Z = 0) {
      t.forEach((I, H) => {
        if (H === 0 || H === 365) return;
        const U = M[H],
          ht = S[H],
          ft = I.angle;
        _
          ? ((ht.visible = !1),
            U.position.set(
              nt * Math.sin(ft),
              I.focusTarget.y + 0.05,
              nt * Math.cos(ft),
            ),
            U.rotation.set(-Math.PI / 2, 0, 0),
            Z > 0
              ? (U.scale.setScalar(1),
                C.to(U.scale, {
                  x: N,
                  y: N,
                  z: N,
                  duration: Z,
                  ease: "power2.inOut",
                }))
              : U.scale.setScalar(N))
          : (U.position.set(
              v * Math.sin(ft),
              I.focusTarget.y + r,
              v * Math.cos(ft),
            ),
            U.rotation.set(0, Math.PI + ft, 0),
            U.scale.setScalar(1),
            ht.position.copy(U.position),
            ht.rotation.copy(U.rotation),
            (ht.visible = U.visible));
      });
    },
    startOutro(_, Z) {
      ((ut = !0),
        M.forEach((Ct, Zt) => {
          Ct.visible &&
            (S[Zt].position.copy(Ct.position), (S[Zt].visible = !0));
        }));
      const I = M.filter((Ct) => Ct.visible),
        H = I.length;
      if (H === 0) {
        (Z == null || Z(), _());
        return;
      }
      let U = 0,
        ht = !1;
      const ft = H - Math.max(5, Math.ceil(H * 0.18));
      (I.forEach((Ct) => {
        const Zt = M.indexOf(Ct),
          Me = 2 + Math.random() * 4.5,
          Re = Math.random() * 2;
        C.to(Ct.position, {
          x: 0,
          z: 0,
          duration: Me,
          delay: Re,
          ease: "power2.in",
          onStart() {
            W[Zt] = !0;
          },
          onComplete() {
            if (
              (U++, !ht && U >= ft && ((ht = !0), Z == null || Z()), U >= H)
            ) {
              const oe = { v: 1 };
              C.to(oe, {
                v: 0,
                duration: 0.6,
                ease: "power2.in",
                onUpdate() {
                  dt = oe.v;
                },
                onComplete: _,
              });
            }
          },
        });
      }),
        setTimeout(
          () => {
            (ht || ((ht = !0), Z == null || Z()), U < H && _());
          },
          (2 + 4.5 + 2 + 1.5) * 1e3,
        ));
    },
  };
}
function Fs(e, t) {
  return $i(e, t, "Bitiş");
}
function Rs(e, t) {
  const n = t.map((b) => vs(b)),
    i = t.map((b) => Hs(b)),
    o = t.map((b, A) => Ls(n[A], i[A])),
    a = [];
  t.forEach((b, A) => {
    (Vs(e, n[A], i[A]), a.push(Ps(e, o[A], i[A])));
  });
  const r = Array.from({ length: kn }, () => {
      const b = new Ro(16775408, Ze, 18, Ii, Cs, 2);
      return (
        (b.castShadow = !1),
        (b.visible = !1),
        e.add(b),
        e.add(b.target),
        b
      );
    }),
    s = t.map((b, A) => ({ i: A, dist: 0 }));
  let d = 0,
    c = !0,
    l = 1,
    p = -1,
    u = 0,
    w = 0;
  const m = new Float32Array(t.length).fill(0),
    x = new Uint8Array(t.length);
  let y = 1,
    g = 1;
  return {
    update: function (A) {
      if (((u += (w - u) * Ts), !c)) {
        for (const v of r) v.visible = !1;
        return;
      }
      w === 0 && u < 0.005 && ((u = 0), (p = -1));
      const E = g < y ? Es : As;
      if (((y += (g - y) * E), y < 0.002 && (y = 0), d++ % 6 === 0)) {
        for (let v = 0; v < t.length; v++)
          ((s[v].i = v), (s[v].dist = t[v].focusTarget.distanceTo(A)));
        s.sort((v, P) => v.dist - P.dist);
      }
      const L = Ze + (ks - Ze) * u;
      x.fill(0);
      for (let v = 0; v < kn; v++)
        if (v < s.length) {
          const P = s[v].i;
          ((x[P] = 1),
            (m[P] += (1 - m[P]) * 0.05),
            r[v].position.copy(o[P]),
            r[v].target.position.copy(i[P]),
            r[v].target.updateMatrixWorld());
          const V = P === p ? L : Ze,
            k = P === p ? 1 : Math.pow(1 - v / kn, 1.8);
          ((r[v].intensity = V * m[P] * y * k * l), (r[v].visible = !0));
        } else r[v].visible = !1;
      for (let v = 0; v < t.length; v++)
        !x[v] && m[v] > 0 && ((m[v] *= 0.85), m[v] < 0.01 && (m[v] = 0));
    },
    setFocused: function (A) {
      A === null ? (w = 0) : ((p = t.indexOf(A)), (w = 1), (u = 0));
    },
    setMoving: function (A) {
      g = A ? 0 : 1;
    },
    setBeamsVisible: function (A, E) {
      if (A)
        if (E) {
          c = !0;
          for (const v of a) {
            const P = v.material;
            ((P.uniforms.uMaxOpacity.value = 0), (v.visible = !0));
          }
          l = 0;
          const L = { v: 0 };
          (C.to(L, {
            v: 1,
            duration: E.duration,
            ease: "power2.out",
            onUpdate() {
              l = L.v;
            },
            onComplete() {
              l = 1;
            },
          }),
            C.to(
              a.map((v) => v.material.uniforms.uMaxOpacity),
              { value: 0.15, duration: E.duration, ease: "power2.out" },
            ));
        } else {
          ((c = !0), (l = 1));
          for (const L of a) L.visible = !0;
        }
      else if (E != null && E.duration) {
        c = !1;
        const L = { v: l };
        (C.to(L, {
          v: 0,
          duration: E.duration,
          ease: "power2.in",
          onUpdate() {
            l = L.v;
          },
          onComplete() {
            for (const v of a) v.visible = !1;
            for (const v of r) ((v.visible = !1), (v.intensity = 0));
            (m.fill(0), (l = 0));
          },
        }),
          C.to(
            a.map((v) => v.material.uniforms.uMaxOpacity),
            { value: 0, duration: E.duration, ease: "power2.in" },
          ));
      } else {
        c = !1;
        for (const L of a) L.visible = !1;
        for (const L of r) ((L.visible = !1), (L.intensity = 0));
        (m.fill(0), (l = 0));
      }
    },
  };
}
const Et = nt / 10,
  Os = 1e3,
  Bs = 400;
function Zs() {
  const t = document.createElement("canvas");
  t.width = t.height = 64;
  const n = t.getContext("2d"),
    i = n.createRadialGradient(64 / 2, 64 / 2, 0, 64 / 2, 64 / 2, 64 / 2);
  return (
    i.addColorStop(0, "rgba(255, 220, 140, 1.00)"),
    i.addColorStop(0.3, "rgba(255, 195, 100, 0.70)"),
    i.addColorStop(0.65, "rgba(255, 170,  70, 0.25)"),
    i.addColorStop(1, "rgba(255, 150,  50, 0.00)"),
    (n.fillStyle = i),
    n.fillRect(0, 0, 64, 64),
    new Ve(t)
  );
}
function zs() {
  const t = document.createElement("canvas");
  t.width = t.height = 256;
  const n = t.getContext("2d"),
    i = n.createRadialGradient(256 / 2, 256 / 2, 0, 256 / 2, 256 / 2, 256 / 2);
  return (
    i.addColorStop(0, "rgba(255, 240, 180, 0.90)"),
    i.addColorStop(0.25, "rgba(255, 220, 130, 0.55)"),
    i.addColorStop(0.6, "rgba(255, 200,  90, 0.15)"),
    i.addColorStop(1, "rgba(255, 180,  60, 0.00)"),
    (n.fillStyle = i),
    n.fillRect(0, 0, 256, 256),
    new Ve(t)
  );
}
class si {
  constructor(t, n, i, o, a, r, s, d) {
    f(this, "positions");
    f(this, "posY");
    f(this, "baseX");
    f(this, "baseZ");
    f(this, "speedY");
    f(this, "ampX");
    f(this, "ampZ");
    f(this, "freqX");
    f(this, "freqZ");
    f(this, "phaseX");
    f(this, "phaseZ");
    f(this, "geom");
    f(this, "points");
    f(this, "n");
    f(this, "minSpeed");
    f(this, "maxSpeed");
    f(this, "minAmp");
    f(this, "maxAmp");
    f(this, "minFreq");
    f(this, "maxFreq");
    ((this.n = t),
      ([this.minSpeed, this.maxSpeed] = a),
      ([this.minAmp, this.maxAmp] = r),
      ([this.minFreq, this.maxFreq] = s),
      (this.positions = new Float32Array(t * 3)),
      (this.posY = new Float32Array(t)),
      (this.baseX = new Float32Array(t)),
      (this.baseZ = new Float32Array(t)),
      (this.speedY = new Float32Array(t)),
      (this.ampX = new Float32Array(t)),
      (this.ampZ = new Float32Array(t)),
      (this.freqX = new Float32Array(t)),
      (this.freqZ = new Float32Array(t)),
      (this.phaseX = new Float32Array(t)),
      (this.phaseZ = new Float32Array(t)));
    for (let c = 0; c < t; c++) this.spawn(c, !0);
    ((this.geom = new zo()),
      this.geom.setAttribute("position", new Io(this.positions, 3)),
      (this.points = new $o(
        this.geom,
        new Go({
          map: d,
          color: o,
          size: n,
          transparent: !0,
          opacity: i,
          depthWrite: !1,
          blending: Ft,
          sizeAttenuation: !0,
        }),
      )));
  }
  spawn(t, n = !1) {
    const i = Math.random() * Math.PI * 2,
      o = Math.sqrt(Math.random()) * Et * 0.6;
    ((this.baseX[t] = Math.cos(i) * o),
      (this.baseZ[t] = Math.sin(i) * o),
      (this.posY[t] = n ? Math.random() * K : 0),
      (this.speedY[t] =
        this.minSpeed + Math.random() * (this.maxSpeed - this.minSpeed)),
      (this.ampX[t] =
        this.minAmp + Math.random() * (this.maxAmp - this.minAmp)),
      (this.ampZ[t] =
        this.minAmp + Math.random() * (this.maxAmp - this.minAmp)),
      (this.freqX[t] =
        this.minFreq + Math.random() * (this.maxFreq - this.minFreq)),
      (this.freqZ[t] =
        this.minFreq + Math.random() * (this.maxFreq - this.minFreq)),
      (this.phaseX[t] = Math.random() * Math.PI * 2),
      (this.phaseZ[t] = Math.random() * Math.PI * 2));
  }
  update(t, n) {
    for (let i = 0; i < this.n; i++) {
      ((this.posY[i] += this.speedY[i] * t), this.posY[i] > K && this.spawn(i));
      const o = this.ampX[i] * Math.sin(n * this.freqX[i] + this.phaseX[i]),
        a = this.ampZ[i] * Math.cos(n * this.freqZ[i] + this.phaseZ[i]);
      let r = this.baseX[i] + o,
        s = this.baseZ[i] + a;
      const d = r * r + s * s;
      if (d > Et * Et) {
        const c = Et / Math.sqrt(d);
        ((r *= c), (s *= c));
      }
      ((this.positions[i * 3 + 0] = r),
        (this.positions[i * 3 + 1] = this.posY[i]),
        (this.positions[i * 3 + 2] = s));
    }
    this.geom.attributes.position.needsUpdate = !0;
  }
}
const Is = `
  varying float vY;
  varying vec3  vNormal;
  varying vec3  vViewPos;
  void main() {
    vY        = uv.y;
    vNormal   = normalize(normalMatrix * normal);
    vec4 vp   = modelViewMatrix * vec4(position, 1.0);
    vViewPos  = vp.xyz;
    gl_Position = projectionMatrix * vp;
  }
`,
  $s = `
  uniform vec3  uColor;
  uniform float uMaxOpacity;
  uniform float uPulse;
  varying float vY;
  varying vec3  vNormal;
  varying vec3  vViewPos;
  void main() {
    vec3  viewDir = normalize(-vViewPos);
    float edge    = pow(abs(dot(vNormal, viewDir)), 0.55);
    float axial   = smoothstep(0.0, 0.07, vY) * smoothstep(1.0, 0.93, vY);
    float a       = edge * axial * uMaxOpacity * uPulse;
    gl_FragColor  = vec4(uColor * a, 1.0);
  }
`;
function Gs(e, t) {
  return new et(
    new hn(e, e, K, 48, 1, !0),
    new vn({
      uniforms: {
        uColor: { value: new Dt(16774616) },
        uMaxOpacity: { value: t },
        uPulse: { value: 1 },
      },
      vertexShader: Is,
      fragmentShader: $s,
      transparent: !0,
      side: Un,
      depthWrite: !1,
      blending: Ft,
    }),
  );
}
const Ys = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  qs = `
  uniform float uTime;
  uniform float uOpacity;
  varying vec2  vUv;

  float ray(vec2 uv, float angle, float sharpness) {
    vec2  dir    = vec2(cos(angle), sin(angle));
    vec2  fromCt = uv - vec2(0.5);
    float d      = abs(dot(normalize(fromCt + 0.001), dir) - 1.0);
    float r      = length(fromCt);
    // fade toward edge and toward center
    float fade   = smoothstep(0.0, 0.08, r) * smoothstep(0.5, 0.25, r);
    return fade * pow(max(0.0, 1.0 - d * sharpness), 2.5);
  }

  void main() {
    float t  = uTime * 0.06;
    float v  = 0.0;
    // 8 rays, slowly rotating, slightly different speeds
    for (int i = 0; i < 8; i++) {
      float base = float(i) * 3.14159 * 2.0 / 8.0;
      float a    = base + t * (1.0 + float(i) * 0.07);
      v += ray(vUv, a, 18.0) * (0.7 + 0.3 * sin(t * 0.5 + float(i)));
    }
    v = clamp(v, 0.0, 1.0);
    gl_FragColor = vec4(vec3(1.0, 0.95, 0.80) * v * uOpacity, v * uOpacity);
  }
`;
function ai() {
  return new et(
    new te(Et * 1.4, Et * 1.4),
    new vn({
      uniforms: { uTime: { value: 0 }, uOpacity: { value: 0.1 } },
      vertexShader: Ys,
      fragmentShader: qs,
      transparent: !0,
      depthWrite: !1,
      blending: Ft,
      side: Un,
    }),
  );
}
function Xs() {
  const e = zs();
  return new et(
    new te(Et * 5, Et * 5),
    new ge({
      map: e,
      transparent: !0,
      opacity: 0.55,
      depthWrite: !1,
      depthTest: !1,
      blending: Ft,
    }),
  );
}
function Ns(e) {
  const t = new Wn();
  e.add(t);
  const n = [
      { r: Et, opacity: 0.012 },
      { r: Et * 0.55, opacity: 0.045 },
      { r: Et * 0.2, opacity: 0.15 },
      { r: 0.12, opacity: 0.45 },
    ],
    i = [];
  for (const { r: m, opacity: x } of n) {
    const y = Gs(m, x);
    ((y.position.y = K / 2), t.add(y), i.push(y));
  }
  const o = ai();
  ((o.rotation.x = -Math.PI / 2), (o.position.y = K * 0.85), t.add(o));
  const a = ai();
  ((a.rotation.x = -Math.PI / 2),
    (a.position.y = K * 0.7),
    (a.material.uniforms.uOpacity.value = 0.05),
    t.add(a));
  const r = Xs();
  ((r.rotation.x = -Math.PI / 2), (r.position.y = 0.01), e.add(r));
  const s = new ei(16775392, 0.35, 18);
  (s.position.set(0, 0.5, 0), e.add(s));
  const d = new ei(16776672, 0.5, K * 1.2);
  (d.position.set(0, K - 0.3, 0), e.add(d));
  const c = Zs(),
    l = new si(
      Os,
      0.08,
      0.5,
      16763002,
      [0.04, 0.18],
      [0.05, 0.35],
      [0.25, 0.8],
      c,
    ),
    p = new si(
      Bs,
      0.14,
      0.7,
      16771232,
      [0.15, 0.55],
      [0.1, 0.55],
      [0.5, 1.6],
      c,
    );
  (e.add(l.points), e.add(p.points));
  let u = 0,
    w = !0;
  return {
    setVisible(m, x) {
      if (((w = m), !m)) {
        t.visible = !1;
        return;
      }
      if (!x) {
        t.visible = !0;
        return;
      }
      const y = x.duration;
      (i.forEach((g, b) => {
        ((g.material.uniforms.uMaxOpacity.value = 0),
          C.to(g.material.uniforms.uMaxOpacity, {
            value: n[b].opacity,
            duration: y,
            ease: "power2.out",
          }));
      }),
        [
          { mesh: o, target: 0.1 },
          { mesh: a, target: 0.05 },
        ].forEach(({ mesh: g, target: b }) => {
          ((g.material.uniforms.uOpacity.value = 0),
            C.to(g.material.uniforms.uOpacity, {
              value: b,
              duration: y,
              ease: "power2.out",
            }));
        }),
        (t.visible = !0));
    },
    update(m) {
      const x = Math.min(m, 100) / 1e3;
      if (((u += x), l.update(x, u), p.update(x, u), !w)) return;
      const y = 0.82 + 0.18 * (0.5 + 0.5 * Math.sin(u * 1.26));
      for (const v of i) {
        const P = v.material;
        P.uniforms.uPulse.value = y;
      }
      const g = 0.006,
        b = g * (Math.sin(u * 0.37) + 0.45 * Math.sin(u * 0.91 + 1.1)),
        A = g * (Math.cos(u * 0.29) + 0.4 * Math.cos(u * 0.73 + 2.3));
      ((t.rotation.x = b), (t.rotation.z = A));
      const E = 1 + 0.04 * Math.sin(u * 1.26 + 0.5);
      (i[2] && i[2].scale.set(E, 1, E),
        i[3] && i[3].scale.set(E * 1.02, 1, E * 1.02),
        (o.material.uniforms.uTime.value = u),
        (a.material.uniforms.uTime.value = u + 1.5));
      const L = r.material;
      ((L.opacity = 0.4 + 0.15 * (0.5 + 0.5 * Math.sin(u * 1.26))),
        (s.intensity = 0.25 + 0.15 * y),
        (d.intensity = 0.35 + 0.2 * y));
    },
  };
}
class Gi {
  constructor(t, n = "16px") {
    f(this, "canvas");
    f(this, "container");
    f(this, "isDragging", !1);
    f(this, "touchId", null);
    f(this, "centerX", 65);
    f(this, "centerY", 65);
    f(this, "currentX", 65);
    f(this, "currentY", 65);
    f(this, "radius", 30);
    f(this, "maxDist", 46);
    f(this, "moveX", 0);
    f(this, "moveY", 0);
    f(this, "dpr");
    f(this, "onTouchStart", (t) => {
      if (this.isDragging) return;
      t.preventDefault();
      const n = t.changedTouches[0],
        i = this.canvas.getBoundingClientRect(),
        o = n.clientX - i.left,
        a = n.clientY - i.top;
      Math.hypot(o - this.centerX, a - this.centerY) < this.maxDist + 22 &&
        ((this.isDragging = !0),
        (this.touchId = n.identifier),
        this.updatePosition(o, a));
    });
    f(this, "onTouchMove", (t) => {
      if (!this.isDragging || this.touchId === null) return;
      t.preventDefault();
      let n = null;
      for (let o = 0; o < t.touches.length; o++)
        if (t.touches[o].identifier === this.touchId) {
          n = t.touches[o];
          break;
        }
      if (!n) return;
      const i = this.canvas.getBoundingClientRect();
      this.updatePosition(n.clientX - i.left, n.clientY - i.top);
    });
    f(this, "onTouchEnd", (t) => {
      if (this.touchId !== null) {
        for (let n = 0; n < t.changedTouches.length; n++)
          if (t.changedTouches[n].identifier === this.touchId) {
            ((this.isDragging = !1),
              (this.touchId = null),
              (this.currentX = this.centerX),
              (this.currentY = this.centerY),
              (this.moveX = 0),
              (this.moveY = 0),
              this.draw());
            break;
          }
      }
    });
    ((this.dpr = Math.min(window.devicePixelRatio || 1, 2)),
      (this.container = document.createElement("div")),
      (this.container.dataset.joystick = "1"),
      (this.container.style.cssText = `
      position: fixed;
      ${t}: 16px;
      bottom: calc(${n} + env(safe-area-inset-bottom, 0px));
      width: 130px;
      height: 130px;
      z-index: 100;
      pointer-events: auto;
      touch-action: none;
    `),
      (this.canvas = document.createElement("canvas")),
      (this.canvas.width = Math.round(130 * this.dpr)),
      (this.canvas.height = Math.round(130 * this.dpr)),
      (this.canvas.style.cssText =
        "display: block; width: 130px; height: 130px;"),
      this.container.appendChild(this.canvas),
      this.canvas.addEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      document.addEventListener("touchmove", this.onTouchMove, { passive: !1 }),
      document.addEventListener("touchend", this.onTouchEnd, { passive: !1 }),
      document.addEventListener("touchcancel", this.onTouchEnd, {
        passive: !1,
      }),
      (this.container.style.opacity = "0"),
      document.body.appendChild(this.container),
      this.draw());
  }
  show() {
    ((this.container.style.transition = "opacity 0.8s ease"),
      (this.container.style.opacity = "1"),
      (this.container.style.pointerEvents = "auto"));
  }
  hide() {
    ((this.container.style.transition = "opacity 0.5s ease"),
      (this.container.style.opacity = "0"),
      (this.container.style.pointerEvents = "none"));
  }
  updatePosition(t, n) {
    const i = t - this.centerX,
      o = n - this.centerY;
    if (Math.hypot(i, o) > this.maxDist) {
      const r = Math.atan2(o, i);
      ((this.currentX = this.centerX + Math.cos(r) * this.maxDist),
        (this.currentY = this.centerY + Math.sin(r) * this.maxDist));
    } else ((this.currentX = t), (this.currentY = n));
    ((this.moveX = (this.currentX - this.centerX) / this.maxDist),
      (this.moveY = (this.currentY - this.centerY) / this.maxDist),
      this.draw());
  }
  draw() {
    const t = this.canvas.getContext("2d"),
      n = 130,
      i = 130,
      o = this.dpr;
    (t.setTransform(o, 0, 0, o, 0, 0),
      t.clearRect(0, 0, n, i),
      t.beginPath(),
      t.arc(this.centerX, this.centerY, this.maxDist, 0, Math.PI * 2),
      (t.strokeStyle = "rgba(255, 255, 255, 0.22)"),
      (t.lineWidth = 1.2),
      t.stroke(),
      t.beginPath(),
      t.arc(this.centerX, this.centerY, this.maxDist, 0, Math.PI * 2),
      (t.fillStyle = "rgba(255, 255, 255, 0.05)"),
      t.fill(),
      (t.strokeStyle = "rgba(255,255,255,0.10)"),
      (t.lineWidth = 0.8),
      t.beginPath(),
      t.moveTo(this.centerX - this.maxDist, this.centerY),
      t.lineTo(this.centerX + this.maxDist, this.centerY),
      t.moveTo(this.centerX, this.centerY - this.maxDist),
      t.lineTo(this.centerX, this.centerY + this.maxDist),
      t.stroke());
    const a = this.currentX,
      r = this.currentY,
      s = this.radius * 0.6,
      d = t.createRadialGradient(a - s * 0.2, r - s * 0.2, 0, a, r, s);
    (d.addColorStop(0, "rgba(255, 255, 255, 0.95)"),
      d.addColorStop(1, "rgba(220, 220, 220, 0.55)"),
      t.beginPath(),
      t.arc(a, r, s, 0, Math.PI * 2),
      (t.fillStyle = d),
      t.fill(),
      t.beginPath(),
      t.arc(a, r, s, 0, Math.PI * 2),
      (t.strokeStyle = "rgba(255, 255, 255, 0.45)"),
      (t.lineWidth = 0.8),
      t.stroke());
  }
}
class Ws extends Gi {
  constructor() {
    super("left", "40px");
  }
  getInput(t) {
    return { forward: -this.moveY * t, right: this.moveX * t };
  }
}
class Us extends Gi {
  constructor() {
    super("right", "40px");
  }
}
const on = 70,
  ae = 0.1,
  js = 0.16,
  sn = 0.003,
  ri = 0.022,
  li = 0.1,
  ci = 0.15,
  di = 0.9,
  ke = Math.PI * 0.44,
  Tn = Math.PI / 5.5,
  Qs = 0.3,
  Js = 5.8;
class Ks {
  constructor(t, n) {
    f(this, "camera");
    f(this, "keys", {});
    f(this, "isDragging", !1);
    f(this, "prevMouse", { x: 0, y: 0 });
    f(this, "yaw", Math.PI);
    f(this, "pitch", 0);
    f(this, "roll", 0);
    f(this, "targetYaw", Math.PI);
    f(this, "targetPitch", 0);
    f(this, "targetRoll", 0);
    f(this, "velFwd", 0);
    f(this, "velRight", 0);
    f(this, "enabled", !0);
    f(this, "mobile");
    f(this, "_euler", new vt(0, 0, 0, "YXZ"));
    f(this, "_fwd", new st());
    f(this, "_right", new st());
    f(this, "moveJoy", null);
    f(this, "lookJoy", null);
    f(this, "onKeyDown", (t) => {
      this.keys[t.code] = !0;
    });
    f(this, "onKeyUp", (t) => {
      this.keys[t.code] = !1;
    });
    f(this, "onMouseDown", (t) => {
      t.button === 0 &&
        ((this.isDragging = !0),
        (this.prevMouse = { x: t.clientX, y: t.clientY }));
    });
    f(this, "onMouseUp", () => {
      this.isDragging = !1;
    });
    f(this, "onMouseMove", (t) => {
      if (!this.isDragging || !this.enabled) return;
      const n = t.clientX - this.prevMouse.x,
        i = t.clientY - this.prevMouse.y;
      ((this.prevMouse = { x: t.clientX, y: t.clientY }),
        (this.targetYaw += n * sn),
        (this.targetPitch -= i * sn),
        (this.targetPitch = Math.max(-ke, Math.min(ke, this.targetPitch))));
    });
    f(this, "touchStart", { x: 0, y: 0 });
    f(this, "onTouchStart", (t) => {
      t.touches.length === 1 &&
        (this.touchStart = {
          x: t.touches[0].clientX,
          y: t.touches[0].clientY,
        });
    });
    f(this, "onTouchMove", (t) => {
      if (!this.enabled || t.touches.length !== 1) return;
      const n = t.touches[0].clientX - this.touchStart.x,
        i = t.touches[0].clientY - this.touchStart.y;
      ((this.touchStart = { x: t.touches[0].clientX, y: t.touches[0].clientY }),
        (this.targetYaw += n * sn * 1.5),
        (this.targetPitch -= i * sn * 1.5),
        (this.targetPitch = Math.max(-ke, Math.min(ke, this.targetPitch))));
    });
    this.camera = t;
    const i = navigator.userAgent;
    ((this.mobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        i,
      ) ||
      (navigator.maxTouchPoints > 1 && /Macintosh/i.test(i))),
      window.addEventListener("keydown", this.onKeyDown),
      window.addEventListener("keyup", this.onKeyUp),
      n.addEventListener("mousedown", this.onMouseDown),
      window.addEventListener("mouseup", this.onMouseUp),
      window.addEventListener("mousemove", this.onMouseMove),
      this.mobile
        ? ((this.moveJoy = new Ws()), (this.lookJoy = new Us()))
        : (n.addEventListener("touchstart", this.onTouchStart, { passive: !0 }),
          n.addEventListener("touchmove", this.onTouchMove, { passive: !0 })));
  }
  showMobileControls() {
    var t, n;
    ((t = this.moveJoy) == null || t.show(),
      (n = this.lookJoy) == null || n.show());
  }
  hideMobileControls() {
    var t, n;
    ((t = this.moveJoy) == null || t.hide(),
      (n = this.lookJoy) == null || n.hide());
  }
  setEnabled(t) {
    ((this.enabled = t),
      t ||
        ((this.velFwd = this.velRight = 0), (this.roll = this.targetRoll = 0)));
  }
  update() {
    if (!this.enabled) return;
    const t = this.yaw;
    ((this.yaw += (this.targetYaw - this.yaw) * li),
      (this.pitch += (this.targetPitch - this.pitch) * li));
    const n = this.yaw - t;
    this.lookJoy &&
      (this.lookJoy.moveX !== 0 || this.lookJoy.moveY !== 0) &&
      ((this.targetYaw -= this.lookJoy.moveX * ri),
      (this.targetPitch -= this.lookJoy.moveY * ri),
      (this.targetPitch = Math.max(-ke, Math.min(ke, this.targetPitch))));
    const i = Math.sin(this.yaw),
      o = Math.cos(this.yaw);
    (this._fwd.set(-i, 0, -o), this._right.set(o, 0, -i));
    const a = this._fwd,
      r = this._right;
    let s = 0,
      d = 0;
    if (
      ((this.keys.ArrowUp || this.keys.KeyW) && (s += ae),
      (this.keys.ArrowDown || this.keys.KeyS) && (s -= ae),
      (this.keys.ArrowLeft || this.keys.KeyA) && (d -= ae),
      (this.keys.ArrowRight || this.keys.KeyD) && (d += ae),
      this.moveJoy)
    ) {
      const w = this.moveJoy.getInput(js);
      ((s += w.forward), (d += w.right));
    }
    ((this.velFwd =
      s !== 0 ? this.velFwd + (s - this.velFwd) * ci : this.velFwd * di),
      (this.velRight =
        d !== 0
          ? this.velRight + (d - this.velRight) * ci
          : this.velRight * di),
      Math.abs(this.velFwd) < 1e-4 && (this.velFwd = 0),
      Math.abs(this.velRight) < 1e-4 && (this.velRight = 0));
    const c = this.camera.position;
    (c.addScaledVector(a, this.velFwd),
      c.addScaledVector(r, this.velRight),
      (c.y = Math.max(Qs, Math.min(Js, c.y))));
    const l = c.x * c.x + c.z * c.z;
    if (l > on * on) {
      const w = Math.sqrt(l);
      ((c.x = (c.x / w) * on), (c.z = (c.z / w) * on));
    }
    const p = -(this.velRight / ae) * Tn * 0.75,
      u = n * 40;
    ((this.targetRoll = Math.max(-Tn, Math.min(Tn, p + u))),
      (this.roll += (this.targetRoll - this.roll) * 0.07),
      Math.abs(this.roll) < 1e-4 && (this.roll = 0),
      this._euler.set(this.pitch, this.yaw, this.roll),
      this.camera.quaternion.setFromEuler(this._euler));
  }
  setYaw(t) {
    ((this.yaw = t), (this.targetYaw = t));
  }
  setPitch(t) {
    ((this.pitch = t), (this.targetPitch = t));
  }
  setRoll(t) {
    ((this.roll = 0), (this.targetRoll = 0));
  }
  getYaw() {
    return this.yaw;
  }
  getPitch() {
    return this.pitch;
  }
  get strafeDir() {
    return this.velRight / ae;
  }
  get forwardDir() {
    return this.velFwd / ae;
  }
}
const t0 =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
function e0(e) {
  return e + ". Gün";
}
class n0 {
  constructor() {
    f(this, "label");
    f(this, "labelInner");
    f(this, "closeBtn");
    f(this, "prevBtn");
    f(this, "nextBtn");
    f(this, "_visible", !1);
    f(this, "labelTimer", null);
    f(this, "closeTimer", null);
    f(this, "navTimer", null);
    f(this, "arrowShown", new Map());
    (this.injectStyles(),
      ({ label: this.label, inner: this.labelInner } = this.makeLabel()),
      (this.closeBtn = this.makeClose()),
      (this.prevBtn = this.makeArrow("prev")),
      (this.nextBtn = this.makeArrow("next")));
  }
  injectStyles() {
    const t = document.createElement("style");
    ((t.textContent = `
      /* ── Day label — centered on painting ── */
      .dp-label {
        position: fixed;
        top: 80%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: baseline;
        white-space: nowrap;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 700;
        letter-spacing: 0.04em;
        color: #fff;
        opacity: 0;
        filter: blur(8px);
        transition: opacity 1.1s ease, filter 1.1s ease;
        z-index: 110;
        pointer-events: none;
      }
      .dp-label.dp-label-show {
        opacity: 1;
        filter: blur(0px);
        pointer-events: auto;
      }
      .gap-link { transition: all 0.3s ease; display: inline-block; cursor: pointer; }
      .gap-link:hover { background: #fff !important; color: #000 !important; border-color: #fff !important; }
      .dp-label-day  { font-size: 12px; opacity: 0.75; }
      .dp-label-date { font-size: 24px; }

      /* ── Title mask: clips the sliding inner row ── */
      .dp-label-mask  { overflow: hidden; padding: 0.1em 0; }
      .dp-label-inner { display: flex; align-items: baseline; }

      /* ── Close (×) — moved to top-right of the image ── */
      .dp-close-btn {
        position: fixed;
        top: 8%;
        right: 8%;
        translate: 0 0;
        width: 96px;
        height: 96px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        cursor: pointer;
        z-index: 110;
        padding: 0;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      .dp-close-btn.dp-close-show {
        pointer-events: auto;
        opacity: 1;
      }
      .dp-close-btn::before,
      .dp-close-btn::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 62px;
        height: 1px;
        translate: -50% -50%;
        background-color: rgba(255, 255, 255, 0.85);
        transform-origin: center;
        transform: rotate(45deg) scaleX(0);
        transition: transform 0.35s ease 0.05s, background-color 0.2s, width 0.3s ease;
      }
      .dp-close-btn::after {
        transform: rotate(-45deg) scaleX(0);
        transition: transform 0.35s ease 0.12s, background-color 0.2s, width 0.3s ease;
      }
      .dp-close-btn.dp-close-show::before { transform: rotate(45deg) scaleX(1); }
      .dp-close-btn.dp-close-show::after  { transform: rotate(-45deg) scaleX(1); }

      /* ── Nav arrows — line-grow-fold animation (JS-driven) ── */
      .dp-nav {
        position: fixed;
        top: 50%;
        margin-top: -48px;
        width: 96px;
        height: 96px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        cursor: pointer;
        z-index: 110;
        pointer-events: none;
        overflow: hidden;
      }
      .dp-nav.prev { left: 24px; }
      .dp-nav.next { right: 24px; }
      .dp-nav.dp-nav-show { pointer-events: auto; }

      /* White arrow — CSS lines */
      .arrow-white {
        position: absolute;
        inset: 0;
        z-index: 1;
        transition: transform 0.48s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s ease 0.04s;
      }
      .arrow-white::before,
      .arrow-white::after {
        content: '';
        position: absolute;
        width: 41px;
        height: 1px;
        top: 50%;
        margin-top: -0.5px;
        background: rgba(255, 255, 255, 0.8);
      }
      .dp-nav.prev .arrow-white::before,
      .dp-nav.prev .arrow-white::after { left: 35px; transform-origin: left center; }
      .dp-nav.prev .arrow-white::before { transform: rotate(-90deg) scaleX(0); }
      .dp-nav.prev .arrow-white::after  { transform: rotate(90deg)  scaleX(0); }
      .dp-nav.next .arrow-white::before,
      .dp-nav.next .arrow-white::after { right: 35px; transform-origin: right center; }
      .dp-nav.next .arrow-white::before { transform: rotate(90deg)  scaleX(0); }
      .dp-nav.next .arrow-white::after  { transform: rotate(-90deg) scaleX(0); }

      /* show: dot→vert (480ms easeOut) → chevron (620ms easeOutQuart)  total 1100ms */
      /* hide: chevron→vert (340ms easeInQuart) → dot (400ms easeInOut) total  740ms */
      @keyframes nav-arm-a-in {
        0%   { transform: rotate(-90deg) scaleX(0); animation-timing-function: cubic-bezier(0, 0, 0.42, 1); }
        44%  { transform: rotate(-90deg) scaleX(1); animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); }
        100% { transform: rotate(-45deg) scaleX(1); }
      }
      @keyframes nav-arm-b-in {
        0%   { transform: rotate(90deg) scaleX(0); animation-timing-function: cubic-bezier(0, 0, 0.42, 1); }
        44%  { transform: rotate(90deg) scaleX(1); animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); }
        100% { transform: rotate(45deg) scaleX(1); }
      }
      @keyframes nav-arm-a-out {
        0%   { transform: rotate(-45deg) scaleX(1); animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22); }
        46%  { transform: rotate(-90deg) scaleX(1); animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95); }
        100% { transform: rotate(-90deg) scaleX(0); }
      }
      @keyframes nav-arm-b-out {
        0%   { transform: rotate(45deg) scaleX(1); animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22); }
        46%  { transform: rotate(90deg) scaleX(1); animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95); }
        100% { transform: rotate(90deg) scaleX(0); }
      }
      /* prev: top=arm-a, bot=arm-b  |  next: top=arm-b, bot=arm-a */
      .dp-nav.prev.dp-nav-in  .arrow-white::before { animation: nav-arm-a-in  1.1s  forwards; }
      .dp-nav.prev.dp-nav-in  .arrow-white::after  { animation: nav-arm-b-in  1.1s  forwards; }
      .dp-nav.prev.dp-nav-out .arrow-white::before { animation: nav-arm-a-out 0.74s forwards; }
      .dp-nav.prev.dp-nav-out .arrow-white::after  { animation: nav-arm-b-out 0.74s forwards; }
      .dp-nav.next.dp-nav-in  .arrow-white::before { animation: nav-arm-b-in  1.1s  forwards; }
      .dp-nav.next.dp-nav-in  .arrow-white::after  { animation: nav-arm-a-in  1.1s  forwards; }
      .dp-nav.next.dp-nav-out .arrow-white::before { animation: nav-arm-b-out 0.74s forwards; }
      .dp-nav.next.dp-nav-out .arrow-white::after  { animation: nav-arm-a-out 0.74s forwards; }

      /* Grey arrow hover layer — clipped to circle */
      .arrow-hover-layer {
        position: absolute;
        inset: 0;
        z-index: 2;
        pointer-events: none;
        overflow: hidden;
        border-radius: 50%;
      }
      /* Grey arrow — CSS lines, starts offscreen, slides in on hover */
      .arrow-grey {
        position: absolute;
        inset: 0;
      }
      .arrow-grey::before,
      .arrow-grey::after {
        content: '';
        position: absolute;
        width: 41px;
        height: 1px;
        top: 50%;
        margin-top: -0.5px;
        background: rgba(180, 180, 180, 0.8);
      }
      .dp-nav.prev .arrow-grey::before,
      .dp-nav.prev .arrow-grey::after { left: 35px; transform-origin: left center; }
      .dp-nav.prev .arrow-grey::before { transform: rotate(-45deg); }
      .dp-nav.prev .arrow-grey::after  { transform: rotate(45deg);  }
      .dp-nav.next .arrow-grey::before,
      .dp-nav.next .arrow-grey::after { right: 35px; transform-origin: right center; }
      .dp-nav.next .arrow-grey::before { transform: rotate(45deg);  }
      .dp-nav.next .arrow-grey::after  { transform: rotate(-45deg); }
      /* Instant snap offscreen on hover-out */
      .dp-nav.prev .arrow-grey { transform: translateX(40px);  opacity: 0; transition: transform 0s, opacity 0s; }
      .dp-nav.next .arrow-grey { transform: translateX(-40px); opacity: 0; transition: transform 0s, opacity 0s; }

      .dp-nav:active { transform: scale(0.9); }

      @media (hover: hover) and (pointer: fine) {
        .dp-close-btn:not(.outro-close-btn):not(.topdown-close-btn):hover::before,
        .dp-close-btn:not(.outro-close-btn):not(.topdown-close-btn):hover::after { width: 74px; background-color: rgba(180, 180, 180, 0.8); }
        .dp-close-btn.topdown-close-btn { transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .dp-close-btn.topdown-close-btn:hover { transform: scale(1.2); }
        .dp-close-btn.topdown-close-btn:hover::before,
        .dp-close-btn.topdown-close-btn:hover::after { background-color: rgba(255, 255, 255, 1); }

        /* Hover-in: white arrow fades out */
        .dp-nav:hover .arrow-white {
          opacity: 0;
          transition: opacity 0.1s ease;
        }
        /* Hover-in: grey slides from inside circle to center */
        .dp-nav:hover .arrow-grey {
          transform: translateX(0);
          opacity: 1;
          transition: transform 0.48s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s ease;
        }
      }
    `),
      document.head.appendChild(t));
  }
  makeLabel() {
    const t = document.createElement("div");
    t.className = "dp-label";
    const n = document.createElement("div");
    n.className = "dp-label-mask";
    const i = document.createElement("div");
    return (
      (i.className = "dp-label-inner"),
      n.appendChild(i),
      t.appendChild(n),
      document.body.appendChild(t),
      { label: t, inner: i }
    );
  }
  setContent(t) {
    const n = t.index + 1;
    if (n % 5 === 0) {
      this.labelInner.style.flexDirection = "column";
      this.labelInner.style.alignItems = "center";
      this.labelInner.style.whiteSpace = "normal";
      this.labelInner.style.textAlign = "center";
      
      this.labelInner.innerHTML = `
        <div style="font-size: 28px; font-weight: bold; margin-bottom: 10px; letter-spacing: 2px;">MİNA LİDYA</div>
        <div style="font-size: 16px; opacity: 0.9; margin-bottom: 5px;">Her güne bir kıyafet yapıyoruz, geniş koleksiyonumuzu inceleyiniz.</div>
        <div style="font-size: 16px; opacity: 0.9; margin-bottom: 15px; font-style: italic;">Sevgiyle yapıyoruz, aşkla giyiniz.</div>
        <div style="margin-bottom: 20px;">
          <a href="https://minalidya.com" target="_blank" style="color: #fff; text-decoration: underline; font-weight: bold; font-size: 18px;">minalidya.com</a>
        </div>
        <div style="display: flex; gap: 25px; align-items: center; pointer-events: auto;">
          <a href="https://instagram.com/minalidyagelinlik" target="_blank" title="Instagram" style="color: #fff;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z"/></svg>
          </a>
          <a href="https://wa.me/905421131641" target="_blank" title="WhatsApp" style="color: #fff;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.132-1.347a9.96 9.96 0 004.887 1.277h.005c5.505 0 9.989-4.478 9.99-9.984A9.967 9.967 0 0012.012 2zm4.957 13.535c-.218.614-1.248 1.154-1.722 1.223-.474.069-1.05.095-2.693-.56-2.101-.84-3.456-2.985-3.561-3.125-.105-.14-1.126-1.492-1.126-2.846 0-1.353.711-2.019.965-2.282.254-.263.553-.329.737-.329l.527.006c.163.007.385-.062.601.455.216.517.737 1.79.803 1.922.066.132.109.285.022.46-.087.175-.163.245-.32.425-.157.18-.328.376-.468.506-.157.144-.321.302-.138.614.183.312.812 1.34 1.742 2.168.93.828 1.716 1.085 2.032 1.241.315.156.499.131.683-.079s.79-.92.999-1.236c.21-.316.421-.263.71-.157.289.105 1.839.868 2.155 1.026.315.157.527.236.605.368.079.133.079.764-.139 1.378z"/></svg>
          </a>
          <a href="https://minalidya.wedding" target="_blank" title="Web" style="color: #fff;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.93 6H16c-.225-1.57-.611-2.977-1.116-4.116 1.737.914 3.197 2.302 4.047 4.116zM12 4.03c.636 1.456 1.108 3.32 1.258 5.47H10.74c.15-2.15.622-4.014 1.258-5.47zM3.5 12c0-.702.083-1.383.238-2h3.522c-.046.653-.07 1.32-.07 2s.024 1.347.07 2H3.738c-.155-.617-.238-1.298-.238-2zm.57 4h2.93c.225 1.57.611 2.977 1.116 4.116-1.737-.914-3.197-2.302-4.047-4.116zm2.93-8H4.07c.85-1.814 2.31-3.202 4.047-4.116-.505 1.139-.891 2.546-1.116 4.116zM12 19.97c-.636-1.456-1.108-3.32-1.258-5.47h2.516c-.15 2.15-.622 4.014-1.258 5.47zM16.74 14H7.26c-.046-.653-.07-1.32-.07-2s.024-1.347.07-2h9.48c.046.653.07 1.32.07 2s-.024 1.347-.07 2zm.33 6.116c.505-1.139.891-2.546 1.116-4.116h2.93c-.85 1.814-2.31 3.202-4.047 4.116zM16.74 9h3.522c.155.617.238 1.298.238 2s-.083 1.383-.238 2H16.74c.046-.653.07-1.32.07-2s-.024-1.347-.07-2z"/></svg>
          </a>
        </div>
      `;
    } else {
      this.labelInner.style.flexDirection = "row";
      this.labelInner.style.alignItems = "baseline";
      this.labelInner.style.whiteSpace = "nowrap";
      this.labelInner.style.textAlign = "left";
      const p = Math.floor(t.index / 5) * 4 + (t.index % 5) + 1;
      const firstWord = (productNames[p-1] || t.title).split(" ")[0];
      const s = productSlugs[p - 1] || firstWord.toLowerCase().replace(/ /g, "-");
      this.labelInner.innerHTML = `<span class="dp-label-day">${n}. Gün&ensp;|&ensp;</span><a href="https://minalidya.wedding/urun/${s}" target="_blank" class="dp-label-title-link">${firstWord}</a>`;
    }
  }
  makeClose() {
    const t = document.createElement("button");
    return (
      (t.className = "dp-close-btn"),
      t.setAttribute("aria-label", "Kapat"),
      document.body.appendChild(t),
      t
    );
  }
  makeArrow(t) {
    const n = document.createElement("button");
    return (
      (n.className = `dp-nav ${t}`),
      n.setAttribute(
        "aria-label",
        t === "prev" ? "Önceki" : "Sonraki",
      ),
      (n.innerHTML = `
      <span class="arrow-white"></span>
      <span class="arrow-hover-layer">
        <span class="arrow-grey"></span>
      </span>
    `),
      t0 && (t === "prev" ? (n.style.left = "-9px") : (n.style.right = "-9px")),
      n.addEventListener("mouseleave", () => {
        const i = n.querySelector(".arrow-white");
        if (!i) return;
        const o = t === "prev" ? "40px" : "-40px";
        ((i.style.transition = "none"),
          (i.style.transform = `translateX(${o})`),
          (i.style.opacity = "0"),
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              ((i.style.transition = ""),
                (i.style.transform = ""),
                (i.style.opacity = ""));
            }),
          ));
      }),
      document.body.appendChild(n),
      this.arrowShown.set(n, !1),
      n
    );
  }
  animateArrow(t, n) {
    (t.classList.remove("dp-nav-in", "dp-nav-out"),
      t.offsetWidth,
      t.classList.add(n ? "dp-nav-in" : "dp-nav-out"));
  }
  show(t, n, i) {
    (this.setContent(t),
      (this.labelInner.style.transition = "none"),
      (this.labelInner.style.transform = "translateY(0)"),
      this.clearTimers(),
      this._visible
        ? (this.label.classList.remove("dp-label-show"),
          (this.labelTimer = setTimeout(
            () => this.label.classList.add("dp-label-show"),
            80,
          )))
        : ((this.labelTimer = setTimeout(
            () => this.label.classList.add("dp-label-show"),
            300,
          )),
          (this.closeTimer = setTimeout(
            () => this.closeBtn.classList.add("dp-close-show"),
            1100,
          ))),
      (this._visible = !0),
      (this.closeBtn.onclick = () => {
        (this.hide(), n());
      }),
      this.setArrow(this.prevBtn, i == null ? void 0 : i.onPrev),
      this.setArrow(this.nextBtn, i == null ? void 0 : i.onNext));
  }
  navigate(t, n) {
    const i = this.labelInner;
    ((i.style.transition = "transform 0.25s cubic-bezier(0.4, 0, 1, 1)"),
      (i.style.transform = "translateY(-115%)"),
      this.navTimer !== null &&
        (clearTimeout(this.navTimer), (this.navTimer = null)),
      (this.navTimer = setTimeout(() => {
        (this.setContent(t),
          (i.style.transition = "none"),
          (i.style.transform = "translateY(115%)"),
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              ((i.style.transition =
                "transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)"),
                (i.style.transform = "translateY(0)"));
            }),
          ));
      }, 260)),
      this.setArrow(this.prevBtn, n == null ? void 0 : n.onPrev),
      this.setArrow(this.nextBtn, n == null ? void 0 : n.onNext));
  }
  hide() {
    (this.clearTimers(),
      this.label.classList.remove("dp-label-show"),
      this.closeBtn.classList.remove("dp-close-show"),
      this.setArrow(this.prevBtn, void 0),
      this.setArrow(this.nextBtn, void 0),
      (this._visible = !1));
  }
  isVisible() {
    return this._visible;
  }
  clearTimers() {
    (this.labelTimer !== null &&
      (clearTimeout(this.labelTimer), (this.labelTimer = null)),
      this.closeTimer !== null &&
        (clearTimeout(this.closeTimer), (this.closeTimer = null)),
      this.navTimer !== null &&
        (clearTimeout(this.navTimer), (this.navTimer = null)));
  }
  setArrow(t, n) {
    const i = this.arrowShown.get(t) ?? !1;
    !!n
      ? ((t.onclick = n),
        i ||
          (t.classList.add("dp-nav-show"),
          this.arrowShown.set(t, !0),
          this.animateArrow(t, !0)))
      : ((t.onclick = null),
        i &&
          (t.classList.remove("dp-nav-show"),
          this.arrowShown.set(t, !1),
          this.animateArrow(t, !1)));
  }
}
const hi = 1500;
function i0(e) {
  const t = e.getChannelData(0),
    n = e.sampleRate,
    i = t.length,
    o = Math.min(Math.floor(n * 0.5), i >> 1);
  let a = 0;
  for (let s = 1; s < o; s++)
    if (t[s - 1] <= 0 && t[s] > 0) {
      a = s;
      break;
    }
  let r = i - 1;
  for (let s = i - 1; s > i - o; s--)
    if (t[s - 1] <= 0 && t[s] > 0) {
      r = s;
      break;
    }
  return { loopStart: a / n, loopEnd: r / n };
}
class o0 {
  constructor() {
    f(this, "ctx", null);
    f(this, "gainNode", null);
    f(this, "source", null);
    f(this, "isPlaying", !1);
    f(this, "btn");
    f(this, "src", "./audio/Gallery Air.mp3");
    f(this, "_onReadyCb", null);
    (this.injectStyles(),
      (this.btn = document.createElement("button")),
      (this.btn.id = "audio-toggle"),
      this.btn.setAttribute("aria-label", "Toggle sound"));
    const t = document.createElement("span");
    t.className = "eq-bars";
    for (let i = 0; i < 4; i++) {
      const o = document.createElement("span");
      ((o.className = "eq-bar"), t.appendChild(o));
    }
    (this.btn.appendChild(t),
      this.btn.addEventListener("click", () => this.toggle()),
      document.body.appendChild(this.btn),
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      ) && ((this.btn.style.right = "10px"), (this.btn.style.bottom = "10px")),
      this.syncState());
  }
  showButton() {
    ((this.btn.style.transition = "opacity 0.8s ease, transform 0.15s"),
      (this.btn.style.opacity = "0.75"));
  }
  startNow() {
    ((this.isPlaying = !0),
      this.syncState(),
      this._initCtxSync(),
      this.ctx &&
        this.ctx.state === "suspended" &&
        this.ctx
          .resume()
          .then(() => {
            this.isPlaying && this.source && this.fadeIn();
          })
          .catch(() => {}),
      document.addEventListener(
        "touchend",
        () => {
          var t;
          ((t = this.ctx) == null ? void 0 : t.state) === "suspended" &&
            this.ctx.resume().then(() => {
              this.isPlaying && this.fadeIn();
            });
        },
        { once: !0, passive: !0 },
      ));
  }
  injectStyles() {
    const t = document.createElement("style");
    ((t.textContent = `
      #audio-toggle {
        position: fixed;
        bottom: 5px; right: 20px;    /* desktop: bars bottom (~5+15=20px) aligns with copyright */
        width: 44px; height: 44px;
        display: flex; align-items: center; justify-content: center;
        background: none;
        border: none;
        cursor: pointer;
        z-index: 200;
        padding: 0;
        transition: opacity 0.2s, transform 0.15s;
        opacity: 0;
      }
      #audio-toggle:hover { opacity: 1; }
      #audio-toggle:active { transform: scale(0.92); }

      /* Equalizer bars container */
      .eq-bars {
        display: flex;
        align-items: flex-end;
        gap: 2.5px;
        height: 14px;
        padding-bottom: 1px;
      }

      /* Individual bar */
      .eq-bar {
        width: 2.5px;
        border-radius: 0;
        background: rgba(255, 255, 255, 0.6);
        height: 3px;      /* resting height when off */
        transition: background 0.35s, height 0.35s ease;
      }

      /* ── Playing state ─────────────────────────────────────── */
      #audio-toggle.eq-on .eq-bar { background: rgba(255, 255, 255, 0.95); }

      #audio-toggle.eq-on .eq-bar:nth-child(1) {
        animation: eq1 1.6s ease-in-out infinite alternate;
      }
      #audio-toggle.eq-on .eq-bar:nth-child(2) {
        animation: eq2 2.1s ease-in-out 0.3s infinite alternate;
      }
      #audio-toggle.eq-on .eq-bar:nth-child(3) {
        animation: eq3 1.9s ease-in-out 0.1s infinite alternate;
      }
      #audio-toggle.eq-on .eq-bar:nth-child(4) {
        animation: eq4 2.4s ease-in-out 0.5s infinite alternate;
      }

      @keyframes eq1 {
        0%  { height: 3px; }
        50% { height: 8px; }
        100%{ height: 5px; }
      }
      @keyframes eq2 {
        0%  { height: 6px; }
        40% { height: 3px; }
        100%{ height: 9px; }
      }
      @keyframes eq3 {
        0%  { height: 4px; }
        60% { height: 10px; }
        100%{ height: 3px; }
      }
      @keyframes eq4 {
        0%  { height: 8px; }
        45% { height: 3px; }
        100%{ height: 7px; }
      }

      /* ── Off state: bars settle flat with smooth transition ── */
      #audio-toggle:not(.eq-on) .eq-bar { animation: none !important; height: 3px; }
    `),
      document.head.appendChild(t));
  }
  syncState() {
    (this.btn.classList.toggle("eq-on", this.isPlaying),
      this.btn.setAttribute("aria-label", this.isPlaying ? "Mute" : "Unmute"));
  }
  onReady(t) {
    this.ctx && this.gainNode
      ? t(this.ctx, this.gainNode)
      : (this._onReadyCb = t);
  }
  _initCtxSync() {
    this.ctx ||
      ((this.ctx = new AudioContext()),
      (this.gainNode = this.ctx.createGain()),
      (this.gainNode.gain.value = 0),
      this.gainNode.connect(this.ctx.destination),
      this._onReadyCb &&
        (this._onReadyCb(this.ctx, this.gainNode), (this._onReadyCb = null)),
      this.ctx.addEventListener("statechange", () => {
        var t;
        ((t = this.ctx) == null ? void 0 : t.state) === "running" &&
          this.isPlaying &&
          this.source &&
          this.fadeIn();
      }),
      this._loadSource().catch(() => {}));
  }
  async _loadSource() {
    if (!(!this.ctx || !this.gainNode))
      try {
        const n = await (await fetch(this.src)).arrayBuffer(),
          i = await this.ctx.decodeAudioData(n),
          { loopStart: o, loopEnd: a } = i0(i);
        ((this.source = this.ctx.createBufferSource()),
          (this.source.buffer = i),
          (this.source.loop = !0),
          (this.source.loopStart = o),
          (this.source.loopEnd = a),
          this.source.connect(this.gainNode),
          this.source.start(0),
          this.isPlaying && this.fadeIn());
      } catch {
        console.warn("[audio] audio file not found.");
      }
  }
  fadeIn() {
    if (!this.gainNode || !this.ctx) return;
    const t = this.ctx.currentTime;
    (this.gainNode.gain.cancelScheduledValues(t),
      this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, t),
      this.gainNode.gain.linearRampToValueAtTime(0.4, t + hi / 1e3));
  }
  fadeOut(t = 0) {
    if (!this.gainNode || !this.ctx) return;
    const n = this.ctx.currentTime;
    (this.gainNode.gain.cancelScheduledValues(n),
      this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, n),
      this.gainNode.gain.linearRampToValueAtTime(t, n + hi / 1e3));
  }
  toggle() {
    (this._initCtxSync(),
      this.ctx && this.ctx.state === "suspended" && this.ctx.resume(),
      (this.isPlaying = !this.isPlaying),
      this.syncState(),
      this.isPlaying ? this.fadeIn() : this.fadeOut(0));
  }
  duck() {
    this.isPlaying && this.fadeOut(0.105);
  }
  restore() {
    this.isPlaying && this.fadeIn();
  }
  isOn() {
    return this.isPlaying;
  }
}
function s0(e) {
  const t = e.getChannelData(0),
    n = e.sampleRate,
    i = t.length,
    o = Math.min(Math.floor(n * 0.5), i >> 1);
  let a = 0;
  for (let s = 1; s < o; s++)
    if (t[s - 1] <= 0 && t[s] > 0) {
      a = s;
      break;
    }
  let r = i - 1;
  for (let s = i - 1; s > i - o; s--)
    if (t[s - 1] <= 0 && t[s] > 0) {
      r = s;
      break;
    }
  return { loopStart: a / n, loopEnd: r / n };
}
class a0 {
  constructor(t) {
    f(this, "bassFilter", null);
    f(this, "galleryDuck", null);
    f(this, "oscGain", null);
    f(this, "pillarPanner", null);
    f(this, "windGain", null);
    f(this, "windPanner", null);
    f(this, "minimalGain", null);
    f(this, "minimalPanner", null);
    f(this, "_sBass", 0);
    f(this, "_sDuck", 1);
    f(this, "_sOsc", 0);
    f(this, "_sWind", 0);
    f(this, "_sMin", 0);
    f(this, "_sPan", 0);
    f(this, "_panTarget", 0);
    f(this, "paintings");
    f(this, "_isTopDown", !1);
    f(this, "_isFocused", !1);
    f(this, "_nearTick", 0);
    f(this, "_nearDist", 1 / 0);
    f(this, "NEAR_THRESHOLD", 14.4);
    this.paintings = t;
  }
  setTopDown(t) {
    this._isTopDown = t;
  }
  setMinimalPan(t) {
    this._panTarget = Math.max(-1, Math.min(1, t));
  }
  setFocused(t) {
    ((this._isFocused = t),
      t &&
        this.minimalGain &&
        ((this._sMin = 0), (this.minimalGain.gain.value = 0)));
  }
  install(t, n) {
    (n.disconnect(),
      (this.bassFilter = t.createBiquadFilter()),
      (this.bassFilter.type = "lowshelf"),
      (this.bassFilter.frequency.value = 200),
      (this.bassFilter.gain.value = 0),
      (this.galleryDuck = t.createGain()),
      (this.galleryDuck.gain.value = 1),
      n.connect(this.galleryDuck),
      this.galleryDuck.connect(this.bassFilter),
      this.bassFilter.connect(t.destination),
      (this.minimalGain = t.createGain()),
      (this.minimalGain.gain.value = 0),
      (this.minimalPanner = t.createStereoPanner()),
      (this.minimalPanner.pan.value = 0),
      this.minimalGain.connect(this.minimalPanner),
      this.minimalPanner.connect(n),
      this._loadMinimal(t).catch(() => {}));
    const i = t.createOscillator();
    ((i.type = "sine"), (i.frequency.value = 528));
    const o = t.createOscillator();
    ((o.type = "sine"),
      (o.frequency.value = 532),
      (this.oscGain = t.createGain()),
      (this.oscGain.gain.value = 0),
      (this.pillarPanner = t.createPanner()),
      (this.pillarPanner.panningModel = "HRTF"),
      (this.pillarPanner.distanceModel = "inverse"),
      (this.pillarPanner.refDistance = 1),
      (this.pillarPanner.rolloffFactor = 0),
      (this.pillarPanner.coneInnerAngle = 360),
      (this.pillarPanner.coneOuterAngle = 360),
      (this.pillarPanner.positionX.value = 0),
      (this.pillarPanner.positionY.value = K / 2),
      (this.pillarPanner.positionZ.value = 0),
      i.connect(this.oscGain),
      o.connect(this.oscGain),
      this.oscGain.connect(this.pillarPanner),
      this.pillarPanner.connect(n),
      i.start(),
      o.start());
    const a = t.sampleRate * 4,
      r = t.createBuffer(1, a, t.sampleRate),
      s = r.getChannelData(0);
    let d = 0,
      c = 0,
      l = 0,
      p = 0,
      u = 0,
      w = 0;
    for (let A = 0; A < a; A++) {
      const E = Math.random() * 2 - 1;
      ((d = 0.99886 * d + E * 0.0555179),
        (c = 0.99332 * c + E * 0.0750759),
        (l = 0.969 * l + E * 0.153852),
        (p = 0.8665 * p + E * 0.3104856),
        (u = 0.55 * u + E * 0.5329522),
        (w = -0.7616 * w - E * 0.016898),
        (s[A] = (d + c + l + p + u + w + E * 0.5362) / 9));
    }
    const m = t.createBufferSource();
    ((m.buffer = r), (m.loop = !0));
    const x = t.createBiquadFilter();
    ((x.type = "lowpass"), (x.frequency.value = 420), (x.Q.value = 0.8));
    const y = t.createBiquadFilter();
    ((y.type = "highpass"), (y.frequency.value = 90), (y.Q.value = 0.6));
    const g = t.createOscillator();
    ((g.type = "sine"), (g.frequency.value = 0.2));
    const b = t.createGain();
    ((b.gain.value = 90),
      g.connect(b),
      b.connect(x.frequency),
      g.start(),
      (this.windGain = t.createGain()),
      (this.windGain.gain.value = 0),
      (this.windPanner = t.createPanner()),
      (this.windPanner.panningModel = "HRTF"),
      (this.windPanner.distanceModel = "inverse"),
      (this.windPanner.refDistance = 1),
      (this.windPanner.rolloffFactor = 0),
      (this.windPanner.positionX.value = 0),
      (this.windPanner.positionY.value = 0),
      (this.windPanner.positionZ.value = -1),
      m.connect(x),
      x.connect(y),
      y.connect(this.windGain),
      this.windGain.connect(this.windPanner),
      this.windPanner.connect(n),
      m.start());
  }
  async _loadMinimal(t) {
    try {
      const o = await (await fetch("./" + "audio/minimal.mp3")).arrayBuffer(),
        a = await t.decodeAudioData(o),
        { loopStart: r, loopEnd: s } = s0(a),
        d = t.createBufferSource();
      ((d.buffer = a),
        (d.loop = !0),
        (d.loopStart = r),
        (d.loopEnd = s),
        d.connect(this.minimalGain),
        d.start(0));
    } catch {
      console.warn("[spatial] minimal.mp3 not found");
    }
  }
  update(t, n = 0, i = 0, o = 0, a = 1 / 60) {
    if (
      !this.bassFilter ||
      !this.galleryDuck ||
      !this.oscGain ||
      !this.windGain ||
      !this.minimalGain ||
      !this.minimalPanner
    )
      return;
    const r = Math.min(a, 0.1),
      s = 1 - Math.exp(-r / 0.41),
      d = 1 - Math.exp(-r / 0.33),
      c = 1 - Math.exp(-r / 0.47),
      l = 1 - Math.exp(-r / 0.66),
      p = 1 - Math.exp(-r / 0.2),
      u = t.x,
      w = t.y,
      m = t.z;
    if (this._nearTick++ % 3 === 0) {
      let k = 1 / 0;
      for (const M of this.paintings) {
        const S = u - M.focusTarget.x,
          B = w - M.focusTarget.y,
          $ = m - M.focusTarget.z,
          F = S * S + B * B + $ * $;
        F < k && (k = F);
      }
      this._nearDist = Math.sqrt(k);
    }
    const x = this._nearDist,
      y = Math.sqrt(u * u + m * m),
      g = this._isFocused ? 0 : Math.max(0, 1 - x / this.NEAR_THRESHOLD),
      b = g * 1.3;
    ((this._sMin += (b - this._sMin) * s),
      (this.minimalGain.gain.value = this._sMin));
    const A = 1 - g * 0.25;
    ((this._sDuck += (A - this._sDuck) * s),
      (this.galleryDuck.gain.value = this._sDuck),
      (this._sPan += (this._panTarget - this._sPan) * d),
      (this.minimalPanner.pan.value = this._sPan * 0.85));
    let E = 0;
    if (x > 1 && x < 8) {
      const k = (x - 1) / 7;
      E = Math.sin(k * Math.PI) * 7;
    }
    ((this._sBass += (E - this._sBass) * c),
      (this.bassFilter.gain.value = this._sBass));
    const L = this._isTopDown ? 0 : Math.max(0, 1 - y / 20),
      v = L * L * 0.12;
    ((this._sOsc += (v - this._sOsc) * l),
      (this.oscGain.gain.value = this._sOsc));
    const P = Math.min(1, Math.max(0, (n - 0.2) / 2.8)),
      V = P * P * 0.317;
    if (
      ((this._sWind += (V - this._sWind) * p),
      (this.windGain.gain.value = this._sWind),
      this.windPanner)
    ) {
      const k = Math.sqrt(i * i + o * o);
      k > 0.01 &&
        ((this.windPanner.positionX.value = i / k),
        (this.windPanner.positionZ.value = -o / k));
    }
  }
}
const Y = 40,
  r0 = 34,
  It = (Y + r0) * 2,
  R = It / 2,
  l0 = 72,
  pi = Y / l0,
  Lt = 24,
  Be = 10,
  ui = 2 * Math.PI * Y,
  fi = [
    { text: "Oca", x: R, y: R - Y - 14 },
    { text: "Nis", x: R + Y + 19, y: R },
    { text: "Tem", x: R, y: R + Y + 14 },
    { text: "Eki", x: R - Y - 19, y: R },
  ];
class c0 {
  constructor() {
    f(this, "dotGroup");
    f(this, "dirSvg");
    f(this, "circleEl");
    f(this, "tickEls");
    f(this, "labelEls");
    f(this, "wrapper");
    f(this, "hoverEl", null);
    f(this, "hoverBgEl", null);
    f(this, "isTopDown", !1);
    f(this, "topDownClickFn", null);
    f(this, "focusedClickFn", null);
    f(this, "_hintTimer", null);
    f(this, "pillarDot");
    if (!document.getElementById("minimap-style")) {
      const s = document.createElement("style");
      ((s.id = "minimap-style"),
        (s.textContent = `
        @keyframes minimap-ripple {
          0%   { width: 7px; height: 7px; opacity: 0.75; }
          100% { width: 32px; height: 32px; opacity: 0; }
        }
        @keyframes minimap-hint-ripple {
          0%   { transform: scale(1);   opacity: 0.45; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `),
        document.head.appendChild(s));
    }
    if (!document.getElementById("minimap-font")) {
      const s = document.createElement("link");
      ((s.id = "minimap-font"),
        (s.rel = "stylesheet"),
        (s.href = "https://fonts.cdnfonts.com/css/helvetica-neue-5"),
        document.head.appendChild(s));
    }
    const t =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ),
      n = document.createElement("div");
    n.style.cssText = `
      position: fixed;
      top: ${t ? "0px" : "10px"}; right: ${t ? "10px" : "20px"};
      z-index: 100;
      width: ${It}px;
      height: ${It}px;
      pointer-events: none;
      transform: scale(${t ? 0.75 : 0.7});
      transform-origin: top right;
      opacity: 0;
      transition: opacity 0.6s ease;
    `;
    const i = "http://www.w3.org/2000/svg",
      o = document.createElementNS(i, "svg");
    (o.setAttribute("width", `${It}`),
      o.setAttribute("height", `${It}`),
      o.setAttribute("viewBox", `0 0 ${It} ${It}`),
      (o.style.cssText = `
      position: absolute; top: 0; left: 0;
      width: ${It}px; height: ${It}px;
      overflow: visible;
    `),
      (this.circleEl = document.createElementNS(i, "circle")),
      this.circleEl.setAttribute("cx", String(R)),
      this.circleEl.setAttribute("cy", String(R)),
      this.circleEl.setAttribute("r", String(Y)),
      this.circleEl.setAttribute("fill", "none"),
      this.circleEl.setAttribute("stroke", "rgba(255,255,255,0.85)"),
      this.circleEl.setAttribute("stroke-width", "1"),
      this.circleEl.setAttribute("stroke-dasharray", String(ui)),
      this.circleEl.setAttribute("stroke-dashoffset", String(ui)),
      (this.circleEl.style.transformOrigin = `${R}px ${R}px`),
      (this.circleEl.style.transform = "rotate(-90deg)"),
      o.appendChild(this.circleEl));
    const a = [
      [R, R - Y, R, R - Y - 7],
      [R, R + Y, R, R + Y + 7],
      [R - Y, R, R - Y - 7, R],
      [R + Y, R, R + Y + 7, R],
    ];
    ((this.tickEls = a.map(([s, d, c, l]) => {
      const p = document.createElementNS(i, "line");
      return (
        p.setAttribute("x1", String(s)),
        p.setAttribute("y1", String(d)),
        p.setAttribute("x2", String(c)),
        p.setAttribute("y2", String(l)),
        p.setAttribute("stroke", "rgba(255,255,255,0.85)"),
        p.setAttribute("stroke-width", "1"),
        p.setAttribute("stroke-linecap", "round"),
        p.setAttribute("stroke-dasharray", "7"),
        p.setAttribute("stroke-dashoffset", "7"),
        o.appendChild(p),
        p
      );
    })),
      n.appendChild(o),
      (this.labelEls = fi.map((s) => {
        const d = document.createElement("div");
        return (
          (d.textContent = s.text),
          (d.style.cssText = `
        position: absolute;
        left: ${s.x}px; top: ${s.y}px;
        transform: translate(-50%, -50%);
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: rgba(255,255,255,0.85);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        white-space: nowrap;
        user-select: none;
      `),
          n.appendChild(d),
          d
        );
      })),
      (this.dotGroup = document.createElement("div")),
      (this.dotGroup.style.cssText = `
      position: absolute;
      left: ${R}px; top: ${R}px;
      width: 0; height: 0;
      opacity: 0;
      transition: opacity 0.8s ease;
    `),
      (this.dirSvg = this.buildDirectionSvg()),
      this.dotGroup.appendChild(this.dirSvg));
    for (let s = 0; s < 2; s++) {
      const d = document.createElement("div");
      ((d.style.cssText = `
        position: absolute; border-radius: 50%;
        border: 1px solid rgba(255, 0, 51, 0.6);
        transform: translate(-50%, -50%);
        animation: minimap-ripple 3.5s ease-out ${s * 1.75}s infinite;
      `),
        this.dotGroup.appendChild(d));
    }
    const r = document.createElement("div");
    ((r.style.cssText = `
      position: absolute; width: 7px; height: 7px;
      border-radius: 50%; background: #ff0033;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 4px rgba(255, 0, 51, 0.5);
    `),
      this.dotGroup.appendChild(r),
      n.appendChild(this.dotGroup),
      (this.pillarDot = document.createElement("div")),
      (this.pillarDot.style.cssText = `
      position: absolute;
      left: ${R}px; top: ${R}px;
      width: 7px; height: 7px;
      border-radius: 50%; background: #ffffff;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 6px 2px rgba(255,255,255,0.7), 0 0 12px 4px rgba(255,255,255,0.35);
      opacity: 0;
      transition: opacity 0.8s ease;
    `),
      n.appendChild(this.pillarDot),
      (this.wrapper = n),
      document.body.appendChild(n));
  }
  triggerEntrance() {
    this.animateEntrance(this.wrapper);
  }
  animateEntrance(t) {
    const d = 2100 + fi.length * 200 + 300;
    ((t.style.opacity = "1"),
      requestAnimationFrame(() => {
        ((this.circleEl.style.transition =
          "stroke-dashoffset 1400ms cubic-bezier(0.33, 1, 0.68, 1)"),
          this.circleEl.setAttribute("stroke-dashoffset", "0"));
      }),
      setTimeout(() => {
        this.tickEls.forEach((c) => {
          ((c.style.transition =
            "stroke-dashoffset 500ms cubic-bezier(0.33, 1, 0.68, 1)"),
            c.setAttribute("stroke-dashoffset", "0"));
        });
      }, 1500),
      this.labelEls.forEach((c, l) => {
        setTimeout(
          () => {
            c.style.opacity = "1";
          },
          2100 + l * 200,
        );
      }),
      setTimeout(() => {
        ((this.dotGroup.style.opacity = "1"),
          (this.pillarDot.style.opacity = "1"));
      }, d));
  }
  buildDirectionSvg() {
    const t = "http://www.w3.org/2000/svg",
      n = document.createElementNS(t, "svg"),
      i = Be / 2;
    (n.setAttribute("width", `${Be}`),
      n.setAttribute("height", `${Lt}`),
      n.setAttribute("viewBox", `0 0 ${Be} ${Lt}`),
      (n.style.cssText = `
      position: absolute;
      left: ${-i}px; top: ${-Lt}px;
      transform-origin: ${i}px ${Lt}px;
      overflow: visible;
      transition: opacity 0.3s ease;
    `));
    const o = document.createElementNS(t, "defs"),
      a = document.createElementNS(t, "linearGradient");
    (a.setAttribute("id", "minimap-dir-grad"),
      a.setAttribute("gradientUnits", "objectBoundingBox"),
      a.setAttribute("x1", "0"),
      a.setAttribute("y1", "1"),
      a.setAttribute("x2", "0"),
      a.setAttribute("y2", "0"));
    const r = document.createElementNS(t, "stop");
    (r.setAttribute("offset", "0%"),
      r.setAttribute("stop-color", "#ff0033"),
      r.setAttribute("stop-opacity", "0.85"));
    const s = document.createElementNS(t, "stop");
    (s.setAttribute("offset", "100%"),
      s.setAttribute("stop-color", "#ff0033"),
      s.setAttribute("stop-opacity", "0"),
      a.appendChild(r),
      a.appendChild(s),
      o.appendChild(a),
      n.appendChild(o));
    const d = document.createElementNS(t, "path");
    return (
      d.setAttribute(
        "d",
        `M${i},${Lt} C${i - 2},${Lt * 0.75} 0,${Lt * 0.3} 0,0 L${Be},0 C${Be},${Lt * 0.3} ${i + 2},${Lt * 0.75} ${i},${Lt} Z`,
      ),
      d.setAttribute("fill", "url(#minimap-dir-grad)"),
      n.appendChild(d),
      n
    );
  }
  update(t, n) {
    this.dirSvg.style.opacity = this.isTopDown ? "0" : "1";
    const i = R - t.x * pi,
      o = R - t.z * pi,
      a = i - R,
      r = o - R,
      s = Math.sqrt(a * a + r * r),
      d = Y - 4;
    if (s > d) {
      const c = d / s;
      ((this.dotGroup.style.left = `${R + a * c}px`),
        (this.dotGroup.style.top = `${R + r * c}px`));
    } else
      ((this.dotGroup.style.left = `${i}px`),
        (this.dotGroup.style.top = `${o}px`));
    if (!this.isTopDown) {
      const c = Math.atan2(Math.sin(n), -Math.cos(n)) * (180 / Math.PI);
      this.dirSvg.style.transform = `rotate(${c}deg)`;
    }
  }
  enableTopDown(t) {
    const n = document.createElement("div");
    n.style.cssText = `
      position: absolute;
      left: ${R - Y}px; top: ${R - Y}px;
      width: ${Y * 2}px; height: ${Y * 2}px;
      border-radius: 50%;
      cursor: pointer;
      pointer-events: auto;
    `;
    const i = Y * 2,
      o = "http://www.w3.org/2000/svg",
      a = document.createElementNS(o, "svg");
    (a.setAttribute("width", String(i)),
      a.setAttribute("height", String(i)),
      a.setAttribute("viewBox", `0 0 ${i} ${i}`),
      (a.style.cssText = `
      position: absolute; inset: 0;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.5s ease;
    `));
    const r = document.createElementNS(o, "circle");
    (r.setAttribute("cx", String(Y)),
      r.setAttribute("cy", String(Y)),
      r.setAttribute("r", String(Y)),
      r.setAttribute("fill", "rgba(255,255,255,0.92)"),
      a.appendChild(r));
    const s = 11,
      d = s * 1.7,
      c = ["ÜST", "DEN", "BAKIŞ"],
      l = d * c.length,
      p = (i - l) / 2 + d * 0.78 - 1;
    (c.forEach((v, P) => {
      const V = document.createElementNS(o, "text");
      (V.setAttribute("x", String(Y)),
        V.setAttribute("y", String(p + P * d)),
        V.setAttribute("text-anchor", "middle"),
        V.setAttribute("fill", "rgba(150,150,150,0.9)"),
        V.setAttribute(
          "font-family",
          '"Helvetica Bold", Helvetica, Arial, sans-serif',
        ),
        V.setAttribute("font-size", String(s)),
        V.setAttribute("font-weight", "700"),
        V.setAttribute("letter-spacing", "1.5"),
        (V.textContent = v),
        a.appendChild(V));
    }),
      n.appendChild(a),
      (n.dataset.playHover = "true"));
    const u = 500,
      w = 350;
    let m = "hidden",
      x = null,
      y = !1;
    const g = () => {
        x !== null && (clearTimeout(x), (x = null));
      },
      b = (v) => {
        a.style.opacity = v ? "1" : "0";
      },
      A = () => {
        (g(),
          (m = "leaving"),
          b(!1),
          (x = setTimeout(() => {
            m = "hidden";
          }, u)));
      },
      E = () => {
        (g(), (m = "holding"), (x = setTimeout(A, w)));
      },
      L = () => {
        (g(),
          (m = "entering"),
          b(!0),
          (x = setTimeout(() => {
            ((m = "visible"), y || E());
          }, u)));
      };
    (n.addEventListener("mouseenter", () => {
      ((y = !0), (m === "hidden" || m === "leaving") && L());
    }),
      n.addEventListener("mouseleave", () => {
        ((y = !1), m === "visible" && E());
      }),
      n.addEventListener("click", () => {
        this.focusedClickFn
          ? this.focusedClickFn()
          : this.topDownClickFn && this.topDownClickFn();
      }),
      (this.topDownClickFn = t),
      this.wrapper.appendChild(n),
      (this.hoverEl = n),
      (this.hoverBgEl = a));
  }
  setFocusedClickMode(t) {
    ((this.focusedClickFn = t),
      this.hoverEl && t && (this.hoverEl.style.pointerEvents = "auto"));
  }
  setHoverEnabled(t) {
    this.hoverEl &&
      (t
        ? this.isTopDown || (this.hoverEl.style.pointerEvents = "auto")
        : (this.focusedClickFn || (this.hoverEl.style.pointerEvents = "none"),
          this.hoverBgEl && (this.hoverBgEl.style.opacity = "0")));
  }
  startHintPulse() {
    if (!this.hoverEl || !this.hoverBgEl) return;
    const t = this.hoverBgEl,
      n = this.wrapper;
    t.style.transition = "opacity 0.7s ease";
    let i = !1,
      o = 0;
    const a = () => {
        const s = document.createElement("div");
        ((s.style.cssText = `
        position: absolute;
        left: ${R - Y}px;
        top: ${R - Y}px;
        width: ${Y * 2}px;
        height: ${Y * 2}px;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,0.6);
        animation: minimap-hint-ripple 1.1s ease-out forwards;
        pointer-events: none;
      `),
          n.appendChild(s),
          setTimeout(() => s.remove(), 1200));
      },
      r = () => {
        ((i = !i),
          (t.style.opacity = i ? "1" : "0"),
          i && (o++, a()),
          !i &&
            o >= 3 &&
            (clearInterval(this._hintTimer),
            (this._hintTimer = null),
            (t.style.transition = "opacity 0.5s ease")));
      };
    setTimeout(() => {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          (r(), (this._hintTimer = window.setInterval(r, 1800)));
        }),
      );
    }, 600);
  }
  stopHintPulse() {
    (this._hintTimer !== null &&
      (clearInterval(this._hintTimer), (this._hintTimer = null)),
      this.hoverBgEl &&
        ((this.hoverBgEl.style.opacity = "0"),
        (this.hoverBgEl.style.transition = "opacity 0.5s ease")));
  }
  setTopDown(t) {
    ((this.isTopDown = t),
      this.hoverEl &&
        ((this.hoverEl.style.pointerEvents = t ? "none" : "auto"),
        this.hoverBgEl && (this.hoverBgEl.style.opacity = "0")),
      t || (this.dirSvg.style.opacity = "1"));
  }
}
const mi = [
    { text: "Lütfen her ürüne yakından bakın." },
    { text: "Her tasarımın kendi hikayesi vardır.", gap: !0 },
  ],
  yi = [{ text: "MİNA LİDYA" }],
  wi = [
    { text: "Bu alandaki 289 tasarım, bir yıllık bir serüvenin izleridir." },
    { text: "Aynı zamanda izleyicinin kendi zamanını keşfetmesi için birer davettir." },
    { text: "Merkezi ışık sütunundan başlayarak,", gap: !0 },
    { text: "mekan bir yılın akışını sessizce takip eder." },
    { text: "Burada karşınıza çıkanlar sadece tasarımlar değil,", gap: !0 },
    { text: "belki de sizin kendi hatıralarınızdır." },
  ],
  Yi =
    '<svg width="150" height="45" viewBox="0 0 150 45" xmlns="http://www.w3.org/2000/svg"><text x="0" y="20" fill="white" font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="bold" letter-spacing="1">365gün</text><text x="0" y="38" fill="rgba(255,255,255,0.7)" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" letter-spacing="2">MİNA LİDYA</text></svg>',
  q = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
function d0() {
  if (document.getElementById("intro-styles")) return;
  const e = document.createElement("link");
  ((e.id = "intro-noto"),
    (e.rel = "stylesheet"),
    (e.href =
      "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400&display=swap"),
    document.head.appendChild(e));
  const t = document.createElement("style");
  ((t.id = "intro-styles"),
    (t.textContent = `
    .intro-jp {
      font-family: 'Noto Sans JP', 'Hiragino Sans', sans-serif;
      font-weight: 300;
      font-size: ${q ? "12px" : "13px"};
      letter-spacing: 0.22em;
      line-height: 2.0;
      color: #fff;
      text-align: center;
      margin: 0;
    }
    .intro-en {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-weight: 400;
      font-size: 12px;
      letter-spacing: 0.06em;
      line-height: 1.85;
      color: #fff;
      text-align: center;
      margin: 0;
    }
    .intro-btn-label { transition: color 0.3s ease; }
    @media (hover: hover) and (pointer: fine) {
      .intro-circle-btn:hover .intro-btn-label { opacity: 1; }
    }
    #intro-overlay::-webkit-scrollbar { width: 3px; }
    #intro-overlay::-webkit-scrollbar-track { background: transparent; }
    #intro-overlay::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.25);
      border-radius: 2px;
    }
    #intro-overlay { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.25) transparent; }
  `),
    document.head.appendChild(t));
}
function h0(e) {
  d0();
  const t = document.createElement("div");
  ((t.id = "intro-overlay"),
    (t.style.cssText = `
    position: fixed; inset: 0; z-index: 9000;
    background: #000; overflow-y: auto;
  `),
    document.body.appendChild(t));
  const n = 366,
    i = q ? 280 : 500,
    o = document.createElement("canvas");
  ((o.width = i * 2),
    (o.height = i * 2),
    (o.style.cssText = `
    position: fixed; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: ${i}px; height: ${i}px;
    z-index: 9001; opacity: 0;
    transition: opacity 0.4s ease;
  `),
    document.body.appendChild(o));
  const a = o.getContext("2d"),
    r = i,
    s = i,
    d = i * 0.88,
    c = i * 0.003,
    l = document.createElement("div");
  ((l.style.cssText = `
    position: fixed; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Helvetica Bold", Helvetica, Arial, sans-serif;
    font-size: ${q ? "48px" : "52px"};
    font-weight: 700;
    letter-spacing: 0.0em;
    color: rgba(255,255,255,0.9);
    z-index: 9002;
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    user-select: none;
  `),
    (l.textContent = "000"),
    document.body.appendChild(l));
  function p(W) {
    a.clearRect(0, 0, o.width, o.height);
    for (let _ = 0; _ < n; _++) {
      const Z = (_ / n) * Math.PI * 2 - Math.PI / 2,
        I = r + Math.cos(Z) * d,
        H = s + Math.sin(Z) * d;
      (a.beginPath(),
        a.arc(I, H, c, 0, Math.PI * 2),
        _ < W
          ? (a.fillStyle = "rgba(255, 255, 255, 0.90)")
          : (a.fillStyle = "rgba(255, 255, 255, 0.12)"),
        a.fill());
    }
  }
  (p(0),
    requestAnimationFrame(() => {
      ((o.style.opacity = "1"), (l.style.opacity = "1"));
    }));
  const u = 1300,
    w = performance.now();
  let m = null;
  function x() {
    const W = performance.now() - w,
      _ = Math.min(W / u, 1),
      Z = _ < 0.5 ? 2 * _ * _ : -1 + (4 - 2 * _) * _,
      I = Math.floor(Z * n),
      H = Math.min(Math.floor(Z * n), 365);
    (p(I),
      (l.textContent = String(H).padStart(3, "0")),
      _ < 1
        ? requestAnimationFrame(x)
        : ((l.textContent = "365"),
          (m = document.createElement("div")),
          (m.style.cssText = `
        position: fixed;
        top: calc(50% - ${q ? 32 : 40}px);
        left: calc(50% + ${q ? 37 : 44}px);
        font-family: "Helvetica Bold", Helvetica, Arial, sans-serif;
        font-size: ${q ? "14px" : "18px"};
        font-weight: 900;
        letter-spacing: -0.02em;
        color: rgba(255,255,255,0.75);
        z-index: 9002;
        opacity: 1;
        pointer-events: none;
        user-select: none;
      `),
          (m.textContent = "+1"),
          document.body.appendChild(m)));
  }
  requestAnimationFrame(x);
  const y = {
      onLogoReady: null,
      remove() {
        if (
          ((l.style.transition = "opacity 1.0s ease"),
          (l.style.opacity = "0"),
          m)
        ) {
          const lt = m;
          ((m = null),
            (lt.style.transition = "opacity 1.0s ease"),
            (lt.style.opacity = "0"),
            setTimeout(() => lt.remove(), 1e3));
        }
        setTimeout(() => l.remove(), 1100);
        const W = window.innerWidth,
          _ = window.innerHeight;
        ((o.width = W * 2),
          (o.height = _ * 2),
          (o.style.width = `${W}px`),
          (o.style.height = `${_}px`),
          (o.style.top = "0"),
          (o.style.left = "0"),
          (o.style.transform = "none"));
        const Z = W,
          I = _,
          H = Math.sqrt(W * W + _ * _) * 1.15,
          ht = p0(q ? 1e3 : 2e3, A(), E(), b),
          ft = Array.from({ length: n }, (lt, mt) => {
            const J = (mt / n) * Math.PI * 2 - Math.PI / 2,
              wt = 1.5 + Math.random() * 1.5;
            return { vx: Math.cos(J) * wt, vy: Math.sin(J) * wt };
          }),
          Ct = 1800,
          Zt = new Float32Array(n),
          Me = new Float32Array(n),
          Re = performance.now(),
          oe = () => {
            const lt = Math.min((performance.now() - Re) / Ct, 1),
              mt = 1 - Math.pow(1 - lt, 3);
            a.clearRect(0, 0, o.width, o.height);
            for (let J = 0; J < n; J++) {
              const wt = (J / n) * Math.PI * 2 - Math.PI / 2,
                se = mt * H,
                Oe = Z + Math.cos(wt) * se + ft[J].vx * mt * 30,
                it = I + Math.sin(wt) * se + ft[J].vy * mt * 30;
              ((Zt[J] = Oe), (Me[J] = it));
              const zt = lt < 0.75 ? 0.9 : 0.9 * (1 - (lt - 0.75) / 0.25);
              (a.beginPath(),
                a.arc(Oe, it, c * (1 + mt), 0, Math.PI * 2),
                (a.fillStyle = `rgba(255,255,255,${zt})`),
                a.fill());
            }
            lt < 1
              ? requestAnimationFrame(oe)
              : (a.clearRect(0, 0, o.width, o.height),
                ht.then((J) => {
                  J.length > 0 ? setTimeout(() => bn(J), 80) : en();
                }));
          };
        requestAnimationFrame(oe);
        const Cn = 5e3,
          bn = (lt) => {
            const mt = lt.length,
              J = new Float32Array(mt),
              wt = new Float32Array(mt);
            for (let it = 0; it < mt; it++)
              if (it < n) ((J[it] = Zt[it]), (wt[it] = Me[it]));
              else {
                const zt = Math.random() * Math.PI * 2,
                  kt = H * (1 + Math.random() * 0.4);
                ((J[it] = Z + Math.cos(zt) * kt),
                  (wt[it] = I + Math.sin(zt) * kt));
              }
            setTimeout(() => {
              var it;
              return (it = y.onLogoReady) == null ? void 0 : it.call(y);
            }, 2300);
            const se = performance.now(),
              Oe = () => {
                const it = Math.min((performance.now() - se) / Cn, 1),
                  zt = 1 - Math.pow(1 - it, 3);
                a.clearRect(0, 0, o.width, o.height);
                for (let kt = 0; kt < mt; kt++) {
                  const To = J[kt] + (lt[kt].x - J[kt]) * zt,
                    Eo = wt[kt] + (lt[kt].y - wt[kt]) * zt;
                  (a.beginPath(),
                    a.arc(To, Eo, c * (1.5 - zt * 0.9), 0, Math.PI * 2),
                    (a.fillStyle = `rgba(255,255,255,${0.15 + zt * 0.8})`),
                    a.fill());
                }
                it < 1 ? requestAnimationFrame(Oe) : setTimeout(en, 80);
              };
            requestAnimationFrame(Oe);
          },
          en = () => {
            (C.to(g, { opacity: 0.85, duration: 0.5, ease: "power1.out" }),
              C.to(o, {
                opacity: 0,
                duration: 1.1,
                ease: "power2.inOut",
                delay: 0.1,
                onComplete: () => o.remove(),
              }));
          };
      },
    },
    g = document.createElement("div");
  ((g.style.cssText = `
    position: fixed; z-index: 9002;
    pointer-events: none; opacity: 0;
    width: 130px;
  `),
    (g.innerHTML = Yi),
    document.body.appendChild(g));
  const b = q ? 1.2 : 1.47,
    A = () => Math.round(window.innerWidth / 2 - 65 * b),
    E = () => Math.round((q ? 90 : 110) - 26.7 * b);
  C.set(g, { left: A(), top: E(), scale: b, transformOrigin: "0% 0%" });
  let L = !0;
  const v = () => {
    L && C.set(g, { left: A() });
  };
  window.addEventListener("resize", v);
  const P = document.createElement("div");
  ((P.style.cssText = `
    min-height: 100%; z-index: 9001;
    display: flex; flex-direction: column; align-items: center;
    padding-top: ${q ? "160px" : "200px"};
    padding-bottom: ${q ? "48px" : "64px"};
    padding-left: ${q ? "20px" : "40px"};
    padding-right: ${q ? "20px" : "40px"};
    box-sizing: border-box;
    pointer-events: none;
  `),
    t.appendChild(P));
  const V = q ? 155 : 185,
    k = document.createElement("div");
  ((k.style.cssText = `
    position: sticky; top: 0; left: 0;
    width: 100%; height: ${V}px;
    background: linear-gradient(to bottom, #000 70%, transparent);
    z-index: 100;
    pointer-events: none;
    flex-shrink: 0;
    margin-bottom: -${V}px;
  `),
    t.insertBefore(k, P));
  const M = gi(wi, P, "intro-en", q ? 10 : 14),
    S = document.createElement("div");
  ((S.style.height = q ? "32px" : "48px"), P.appendChild(S));
  const $ = gi(q ? yi : mi, P, "intro-jp", q ? 12 : 20),
    F = document.createElement("div");
  ((F.className = "intro-circle-btn"),
    (F.style.cssText = `
    display: flex; flex-direction: column; align-items: center; gap: 10px; width: fit-content;
    margin-top: ${q ? "24px" : "44px"};
    flex-shrink: 0; cursor: pointer;
    opacity: 0; transition: opacity 0.5s ease;
    pointer-events: none;
  `));
  const z = document.createElement("div");
  ((z.className = "intro-btn-label"),
    (z.style.cssText = `
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: ${q ? "11px" : "12px"};
    font-weight: 400;
    letter-spacing: 0.35em;
    color: rgba(255,255,255,0.9);
    text-transform: uppercase;
    user-select: none;
    padding-right: 0.35em;
    margin-right: -0.62em;
  `),
    (z.textContent = "Başlat"));
  const N = document.createElement("div");
  N.style.cssText = `
    position: relative;
    width: 100%; height: 1px;
    background: rgba(255,255,255,0.2);
    overflow: hidden;
  `;
  const ut = document.createElement("div");
  ((ut.style.cssText = `
    position: absolute; top: 0; left: 0;
    width: 0%; height: 100%;
    background: rgba(255,255,255,0.9);
    transition: width 0.4s ease;
  `),
    N.appendChild(ut),
    F.appendChild(z),
    F.appendChild(N),
    P.appendChild(F),
    F.addEventListener("mouseenter", () => {
      ut.style.width = "100%";
    }),
    F.addEventListener("mouseleave", () => {
      ut.style.width = "0%";
    }));
  const dt = document.createElement("div");
  ((dt.style.cssText = `
    width: ${q ? "280px" : "auto"};
    max-width: ${q ? "calc(100vw - 32px)" : "560px"};
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 9px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.45);
    letter-spacing: 0.04em;
    line-height: 1.9;
    text-align: center;
    margin-top: ${q ? "20px" : "28px"};
    opacity: 0;
    transition: opacity 0.8s ease;
    pointer-events: none;
    white-space: ${q ? "normal" : "nowrap"};
  `),
    (dt.innerHTML = q
      ? "En iyi deneyim için kulaklık kullanmanız önerilir.<br>※ Başlat'a tıkladığınızda müzik çalmaya başlayacaktır.<br>Müziği sağ alttaki ekolayzır simgesine tıklayarak durdurabilirsiniz."
      : "En iyi deneyim için kulaklık kullanmanız önerilir.<br>※ Başlat'a tıkladığınızda müzik çalmaya başlayacaktır.<br>Müziği sağ alttaki ekolayzır simgesine tıklayarak durdurabilirsiniz."),
    P.appendChild(dt),
    setTimeout(() => {
      y.remove();
    }, 1700),
    (y.onLogoReady = () => {
      let W = 300;
      (M.forEach((I, H) => {
        (wi[H].gap && (W += 480), setTimeout(() => xi(I), W), (W += 310));
      }),
        (W += 700));
      const _ = q ? yi : mi;
      $.forEach((I, H) => {
        (_[H].gap && (W += 380), setTimeout(() => xi(I), W), (W += 310));
      });
      const Z = W + 600;
      setTimeout(() => {
        ((F.style.opacity = "1"),
          (F.style.pointerEvents = "auto"),
          (dt.style.opacity = "1"));
        let I = !1;
        const H = (U) => {
          I ||
            ((I = !0),
            (L = !1),
            window.removeEventListener("resize", v),
            (dt.style.transition = "opacity 0.4s ease"),
            (dt.style.opacity = "0"),
            u0(g, t, P, $, M, F, e));
        };
        (F.addEventListener("touchend", H, { once: !0, passive: !1 }),
          F.addEventListener("click", H, { once: !0 }));
      }, Z + 1e3);
    }));
}
async function p0(e, t, n, i) {
  try {
    const o = Math.round(130 * i * 2),
      a = Math.round((o * 80) / 195),
      r = document.createElement("canvas");
    ((r.width = o), (r.height = a));
    const s = r.getContext("2d"),
      d = new Image(),
      c = new Blob([Yi], { type: "image/svg+xml;charset=utf-8" }),
      l = URL.createObjectURL(c);
    (await new Promise((g, b) => {
      ((d.onload = () => g()), (d.onerror = b), (d.src = l));
    }),
      URL.revokeObjectURL(l),
      s.drawImage(d, 0, 0, o, a));
    const { data: p, width: u, height: w } = s.getImageData(0, 0, o, a),
      m = [];
    for (let g = 0; g < w; g++)
      for (let b = 0; b < u; b++)
        p[(g * u + b) * 4 + 3] > 50 && m.push({ x: t * 2 + b, y: n * 2 + g });
    if (m.length === 0) return [];
    const x = m.length / e,
      y = Array.from(
        { length: e },
        (g, b) => m[Math.min(Math.floor(b * x), m.length - 1)],
      );
    for (let g = y.length - 1; g > 0; g--) {
      const b = Math.floor(Math.random() * (g + 1));
      [y[g], y[b]] = [y[b], y[g]];
    }
    return y;
  } catch {
    return [];
  }
}
function gi(e, t, n, i, o) {
  const a = [];
  return (
    e.forEach((r) => {
      if (r.gap) {
        const d = document.createElement("div");
        ((d.style.height = `${i}px`), t.appendChild(d));
      }
      const s = document.createElement("p");
      ((s.className = n),
        (s.textContent = r.text),
        (s.style.cssText =
          "opacity:0; transform:translateX(10px); transition: opacity 2.0s ease, transform 2.0s ease;"),
        t.appendChild(s),
        a.push(s));
    }),
    a
  );
}
function xi(e) {
  ((e.style.opacity = "1"), (e.style.transform = "translateX(0)"));
}
function u0(e, t, n, i, o, a, r) {
  (!q &&
    document.fullscreenEnabled &&
    document.documentElement.requestFullscreen().catch(() => {}),
    r.startAudio());
  const s =
    "opacity:0; transform:translateX(-20px); transition: opacity 0.45s ease, transform 0.5s ease;";
  ([...i, ...o].forEach((d) => (d.style.cssText += s)),
    (a.style.cssText += s),
    (n.style.pointerEvents = "none"),
    setTimeout(() => {
      C.to(e, {
        left: 20,
        top: 20,
        scale: 1,
        duration: 1.8,
        ease: "power3.inOut",
        onComplete() {
          ((e.style.pointerEvents = "auto"),
            (e.style.cursor = "pointer"),
            (e.style.transition = "opacity 0.2s ease"),
            e.addEventListener("mouseenter", () => {
              e.style.opacity = "1";
            }),
            e.addEventListener("mouseleave", () => {
              e.style.opacity = "0.85";
            }),
            e.addEventListener("click", () => window.location.reload()));
        },
      });
    }, 350),
    setTimeout(() => {
      t.style.zIndex = "99";
    }, 500),
    setTimeout(() => r.triggerMinimap(), 650),
    setTimeout(() => {
      var d;
      return (d = r.showCopyright) == null ? void 0 : d.call(r);
    }, 3850),
    setTimeout(() => {
      r.showAudio();
    }, 950),
    setTimeout(() => {
      ((t.style.transition = "opacity 1.5s ease"), (t.style.opacity = "0"));
    }, 5e3),
    setTimeout(() => {
      (t.remove(), r.onStart());
    }, 6700));
}
const f0 = `<svg width="473" height="35" viewBox="0 0 473 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 35H0V19H16V35ZM35 35H19V19H35V35ZM54 35H38V19H54V35ZM1 34H15V20H1V34ZM20 34H34V20H20V34ZM39 34H53V20H39V34ZM46.0625 24C46.6833 24 47.2146 24.1285 47.6562 24.3848C48.0978 24.6389 48.4365 25.0044 48.6719 25.4814C48.9072 25.9564 49.0254 26.5251 49.0254 27.1875C49.0254 27.8541 48.9064 28.428 48.6689 28.9092C48.4314 29.3883 48.085 29.7573 47.6309 30.0156C47.1767 30.2718 46.6245 30.4004 45.9746 30.4004H44V24H46.0625ZM27.0566 23.5127C27.469 23.5127 27.8355 23.5866 28.1562 23.7344C28.4769 23.8801 28.7315 24.08 28.9189 24.334C29.1085 24.5882 29.2083 24.8773 29.2188 25.2002H28.4688C28.4313 24.8835 28.2793 24.6379 28.0127 24.4629C27.746 24.2879 27.4188 24.2002 27.0312 24.2002C26.7481 24.2002 26.5005 24.2463 26.2881 24.3379C26.0777 24.4296 25.9127 24.5554 25.7939 24.7158C25.6774 24.8762 25.6191 25.0586 25.6191 25.2627C25.6192 25.4335 25.66 25.5803 25.7412 25.7031C25.8245 25.8238 25.9306 25.9247 26.0596 26.0059C26.1887 26.085 26.3242 26.1511 26.4658 26.2031C26.6074 26.2531 26.7377 26.294 26.8564 26.3252L27.5068 26.5C27.6734 26.5437 27.8585 26.6046 28.0625 26.6816C28.2687 26.7587 28.4658 26.8638 28.6533 26.9971C28.8428 27.1283 28.9992 27.2968 29.1221 27.5029C29.245 27.7092 29.3066 27.9627 29.3066 28.2627C29.3066 28.6084 29.2164 28.9211 29.0352 29.2002C28.856 29.4794 28.5929 29.7007 28.2471 29.8652C27.9033 30.0298 27.4858 30.1123 26.9941 30.1123C26.5359 30.1123 26.1391 30.0385 25.8037 29.8906C25.4704 29.7427 25.2073 29.5361 25.0156 29.2715C24.8262 29.007 24.7193 28.6994 24.6943 28.3496H25.4941C25.515 28.5913 25.5966 28.7919 25.7383 28.9502C25.8819 29.1062 26.0628 29.2228 26.2812 29.2998C26.5021 29.3748 26.74 29.4121 26.9941 29.4121C27.29 29.4121 27.5556 29.3644 27.791 29.2686C28.0264 29.1706 28.2131 29.0352 28.3506 28.8623C28.488 28.6874 28.5566 28.4832 28.5566 28.25C28.5566 28.0377 28.4975 27.8647 28.3789 27.7314C28.2602 27.5982 28.1038 27.4896 27.9102 27.4062C27.7164 27.3229 27.5063 27.25 27.2812 27.1875L26.4941 26.9629C25.9941 26.8191 25.5983 26.6133 25.3066 26.3467C25.015 26.08 24.8691 25.731 24.8691 25.2998C24.8692 24.9416 24.9664 24.6289 25.1602 24.3623C25.356 24.0937 25.6182 23.8852 25.9473 23.7373C26.2785 23.5873 26.6483 23.5127 27.0566 23.5127ZM10.752 30H9.93945L9.2959 28.1875H6.70801L6.06445 30H5.25195L7.60156 23.5996H8.40137L10.752 30ZM44.7754 29.7129H45.9248C46.4538 29.7129 46.8924 29.6103 47.2402 29.4062C47.5882 29.2021 47.8477 28.9113 48.0186 28.5342C48.1894 28.1571 48.2754 27.7083 48.2754 27.1875C48.2754 26.6709 48.1902 26.2264 48.0215 25.8535C47.8527 25.4785 47.601 25.1902 47.2656 24.9902C46.9303 24.7882 46.5125 24.6875 46.0127 24.6875H44.7754V29.7129ZM6.95215 27.5H9.05176L8.02637 24.6123H7.97656L6.95215 27.5ZM35 16H19V0H35V16ZM20 15H34V1H20V15ZM25.125 10.2129H25.1875L26.5498 5H27.4248L28.7871 10.2129H28.8496L30.1875 5H30.9746L29.2246 11.4004H28.4248L27.0127 6.2998H26.9629L25.5498 11.4004H24.75L23 5H23.7871L25.125 10.2129Z" fill="white"/>
<path d="M67.8121 18V11.6H69.9746C70.4746 11.6 70.885 11.6854 71.2059 11.8562C71.5267 12.025 71.7642 12.2573 71.9184 12.5531C72.0725 12.8489 72.1496 13.1854 72.1496 13.5625C72.1496 13.9396 72.0725 14.2739 71.9184 14.5656C71.7642 14.8573 71.5277 15.0864 71.209 15.2531C70.8902 15.4177 70.4829 15.5 69.9871 15.5H68.2371V14.8H69.9621C70.3038 14.8 70.5788 14.75 70.7871 14.65C70.9975 14.55 71.1496 14.4083 71.2434 14.225C71.3392 14.0396 71.3871 13.8187 71.3871 13.5625C71.3871 13.3062 71.3392 13.0823 71.2434 12.8906C71.1475 12.6989 70.9944 12.551 70.784 12.4469C70.5736 12.3406 70.2954 12.2875 69.9496 12.2875H68.5871V18H67.8121ZM70.8246 15.125L72.3996 18H71.4996L69.9496 15.125H70.8246Z" fill="white"/>
<path d="M66.509 14.8C66.509 15.475 66.3871 16.0583 66.1434 16.55C65.8996 17.0417 65.5652 17.4208 65.1402 17.6875C64.7152 17.9542 64.2298 18.0875 63.684 18.0875C63.1381 18.0875 62.6527 17.9542 62.2277 17.6875C61.8027 17.4208 61.4684 17.0417 61.2246 16.55C60.9809 16.0583 60.859 15.475 60.859 14.8C60.859 14.125 60.9809 13.5417 61.2246 13.05C61.4684 12.5583 61.8027 12.1792 62.2277 11.9125C62.6527 11.6458 63.1381 11.5125 63.684 11.5125C64.2298 11.5125 64.7152 11.6458 65.1402 11.9125C65.5652 12.1792 65.8996 12.5583 66.1434 13.05C66.3871 13.5417 66.509 14.125 66.509 14.8ZM65.759 14.8C65.759 14.2458 65.6663 13.7781 65.4809 13.3969C65.2975 13.0156 65.0486 12.7271 64.734 12.5313C64.4215 12.3354 64.0715 12.2375 63.684 12.2375C63.2965 12.2375 62.9454 12.3354 62.6309 12.5313C62.3184 12.7271 62.0694 13.0156 61.884 13.3969C61.7006 13.7781 61.609 14.2458 61.609 14.8C61.609 15.3542 61.7006 15.8219 61.884 16.2031C62.0694 16.5844 62.3184 16.8729 62.6309 17.0688C62.9454 17.2646 63.2965 17.3625 63.684 17.3625C64.0715 17.3625 64.4215 17.2646 64.734 17.0688C65.0486 16.8729 65.2975 16.5844 65.4809 16.2031C65.6663 15.8219 65.759 15.3542 65.759 14.8Z" fill="white"/>
<path d="M178.222 5.20001H179.72L182.715 10.2414H182.842L185.837 5.20001H187.335L183.433 11.5492V16H182.125V11.5492L178.222 5.20001Z" fill="white"/>
<path d="M171.305 16V5.20001H172.613V14.8399H177.633V16H171.305Z" fill="white"/>
<path d="M162.589 16V5.20001H169.065V6.36017H163.897V10.0094H168.58V11.1695H163.897V16H162.589Z" fill="white"/>
<path d="M175.126 29.303H179.264V29.8293H175.126V29.303ZM174.881 24.9288H179.419V25.4643H174.881V24.9288ZM176.85 24.1121H177.477V30.7822H176.85V24.1121ZM174.881 30.8004C175.25 30.7641 175.674 30.7247 176.152 30.6824C176.636 30.64 177.147 30.5916 177.685 30.5372C178.23 30.4827 178.768 30.4253 179.301 30.3648L179.31 30.9002C178.796 30.9607 178.278 31.0212 177.758 31.0817C177.238 31.1482 176.739 31.2057 176.261 31.2541C175.789 31.3086 175.359 31.357 174.972 31.3993L174.881 30.8004ZM175.716 27.615V28.2775H178.665V27.615H175.716ZM175.716 26.5079V27.1613H178.665V26.5079H175.716ZM175.153 26.036H179.246V28.7494H175.153V26.036ZM178.92 23.4678L179.255 23.9941C178.898 24.0667 178.487 24.1333 178.021 24.1938C177.555 24.2543 177.071 24.3057 176.569 24.348C176.073 24.3843 175.598 24.4085 175.144 24.4206C175.132 24.348 175.108 24.2633 175.072 24.1665C175.041 24.0697 175.011 23.985 174.981 23.9124C175.32 23.8943 175.668 23.8731 176.025 23.8489C176.388 23.8187 176.745 23.7854 177.095 23.7491C177.452 23.7128 177.785 23.6704 178.094 23.622C178.408 23.5736 178.684 23.5222 178.92 23.4678ZM179.346 25.5006H182.622V26.1267H179.346V25.5006ZM182.359 25.5006H183.012C183.012 25.5006 183.012 25.5248 183.012 25.5732C183.012 25.6155 183.012 25.6639 183.012 25.7184C183.012 25.7668 183.012 25.8061 183.012 25.8363C182.988 26.7983 182.961 27.609 182.931 28.2684C182.906 28.9218 182.876 29.4573 182.84 29.8747C182.804 30.2922 182.758 30.6158 182.704 30.8457C182.655 31.0696 182.592 31.2299 182.513 31.3267C182.435 31.4477 182.347 31.5324 182.25 31.5808C182.153 31.6292 182.038 31.6595 181.905 31.6716C181.778 31.6897 181.615 31.6958 181.415 31.6897C181.216 31.6897 181.007 31.6867 180.789 31.6806C180.783 31.5838 180.762 31.4719 180.725 31.3449C180.689 31.2239 180.644 31.118 180.589 31.0272C180.813 31.0454 181.019 31.0545 181.206 31.0545C181.394 31.0605 181.53 31.0635 181.615 31.0635C181.687 31.0635 181.748 31.0545 181.796 31.0363C181.845 31.0182 181.89 30.9819 181.932 30.9274C181.993 30.8548 182.044 30.7126 182.087 30.5009C182.129 30.2831 182.165 29.9715 182.196 29.5662C182.226 29.1608 182.253 28.6375 182.277 27.9962C182.308 27.3549 182.335 26.5744 182.359 25.6548V25.5006ZM180.444 23.495H181.107C181.101 24.2149 181.088 24.9107 181.07 25.5822C181.058 26.2538 181.019 26.8921 180.952 27.4971C180.886 28.1021 180.774 28.6677 180.617 29.1941C180.465 29.7204 180.251 30.2014 179.972 30.637C179.7 31.0666 179.346 31.4447 178.91 31.7714C178.88 31.7169 178.835 31.6595 178.774 31.599C178.714 31.5385 178.65 31.478 178.584 31.4175C178.523 31.363 178.466 31.3176 178.411 31.2813C178.823 30.9849 179.159 30.637 179.419 30.2377C179.679 29.8324 179.878 29.3847 180.018 28.8946C180.163 28.3985 180.263 27.8661 180.317 27.2974C180.378 26.7227 180.414 26.1177 180.426 25.4824C180.438 24.8411 180.444 24.1786 180.444 23.495Z" fill="white"/>
<path d="M171.251 23.377L171.932 23.5041C171.672 23.9457 171.333 24.3753 170.915 24.7927C170.498 25.2102 169.984 25.5883 169.373 25.9271C169.342 25.8726 169.3 25.8182 169.246 25.7637C169.197 25.7032 169.146 25.6458 169.091 25.5913C169.037 25.5308 168.985 25.4854 168.937 25.4552C169.5 25.1708 169.975 24.8411 170.362 24.466C170.755 24.0909 171.052 23.7279 171.251 23.377ZM171.042 24.1665H173.239V24.7383H170.634L171.042 24.1665ZM173.003 24.1665H173.13L173.257 24.1393L173.683 24.348C173.508 24.8199 173.272 25.2465 172.975 25.6276C172.685 26.0027 172.352 26.3324 171.977 26.6168C171.608 26.9011 171.209 27.1462 170.779 27.3519C170.35 27.5576 169.905 27.7239 169.445 27.851C169.415 27.7663 169.364 27.6695 169.291 27.5606C169.224 27.4517 169.158 27.367 169.091 27.3065C169.515 27.2036 169.926 27.0615 170.326 26.88C170.731 26.6985 171.109 26.4837 171.46 26.2356C171.811 25.9815 172.119 25.6911 172.386 25.3644C172.652 25.0377 172.857 24.6778 173.003 24.2845V24.1665ZM170.09 25.3826L170.525 25.0287C170.695 25.1255 170.867 25.2374 171.042 25.3644C171.218 25.4915 171.381 25.6185 171.532 25.7456C171.69 25.8726 171.817 25.9936 171.914 26.1086L171.46 26.4988C171.369 26.3839 171.245 26.2598 171.088 26.1267C170.937 25.9936 170.773 25.8605 170.598 25.7274C170.428 25.5943 170.259 25.4794 170.09 25.3826ZM171.741 26.7983L172.422 26.9163C172.137 27.4063 171.753 27.8843 171.269 28.3501C170.791 28.816 170.195 29.2304 169.482 29.5934C169.457 29.545 169.418 29.4905 169.364 29.43C169.315 29.3695 169.264 29.3121 169.209 29.2576C169.155 29.1971 169.103 29.1517 169.055 29.1215C169.497 28.9097 169.89 28.6768 170.235 28.4227C170.586 28.1626 170.888 27.8933 171.142 27.615C171.396 27.3307 171.596 27.0584 171.741 26.7983ZM171.487 27.6513H173.656V28.2321H171.079L171.487 27.6513ZM173.456 27.6513H173.593L173.72 27.6241L174.155 27.8147C173.962 28.3955 173.701 28.9037 173.375 29.3393C173.048 29.7688 172.667 30.1409 172.231 30.4555C171.802 30.7641 171.333 31.0212 170.825 31.2269C170.322 31.4386 169.796 31.605 169.246 31.726C169.215 31.6474 169.167 31.5475 169.1 31.4265C169.034 31.3116 168.967 31.2178 168.901 31.1452C169.415 31.0484 169.908 30.9093 170.38 30.7278C170.858 30.5463 171.297 30.3164 171.696 30.0381C172.101 29.7598 172.455 29.4331 172.758 29.058C173.06 28.6829 173.293 28.2533 173.456 27.7693V27.6513ZM170.289 29.0217L170.761 28.6314C170.949 28.7403 171.145 28.8644 171.351 29.0035C171.557 29.1427 171.747 29.2848 171.923 29.43C172.098 29.5752 172.24 29.7083 172.349 29.8293L171.859 30.2559C171.756 30.1288 171.617 29.9927 171.442 29.8475C171.272 29.7023 171.088 29.5571 170.888 29.4119C170.689 29.2606 170.489 29.1306 170.289 29.0217ZM167.349 24.1302H168.02V31.7079H167.349V24.1302ZM165.87 25.9362H169.155V26.5714H165.87V25.9362ZM167.385 26.1812L167.812 26.3627C167.721 26.6833 167.609 27.0161 167.476 27.3609C167.343 27.6997 167.198 28.0385 167.04 28.3773C166.889 28.7101 166.726 29.0247 166.55 29.3211C166.381 29.6115 166.208 29.8596 166.033 30.0653C165.997 29.9745 165.942 29.8687 165.87 29.7477C165.803 29.6267 165.74 29.5238 165.679 29.4391C165.849 29.2576 166.015 29.0398 166.178 28.7857C166.342 28.5316 166.499 28.2563 166.65 27.9599C166.807 27.6634 166.95 27.364 167.077 27.0615C167.204 26.7529 167.307 26.4595 167.385 26.1812ZM168.701 23.5041L169.173 24.0304C168.895 24.1393 168.577 24.2422 168.22 24.339C167.863 24.4358 167.494 24.5205 167.113 24.5931C166.738 24.6596 166.372 24.7171 166.015 24.7655C166.003 24.6929 165.976 24.6082 165.933 24.5114C165.891 24.4085 165.852 24.3208 165.815 24.2482C166.154 24.1877 166.502 24.1212 166.859 24.0486C167.222 23.976 167.564 23.8943 167.884 23.8035C168.205 23.7067 168.477 23.6069 168.701 23.5041ZM167.984 27.0978C168.045 27.1522 168.132 27.2399 168.247 27.3609C168.368 27.4759 168.498 27.6029 168.638 27.7421C168.777 27.8752 168.901 28.0022 169.01 28.1232C169.125 28.2442 169.206 28.332 169.255 28.3864L168.846 28.9218C168.792 28.8311 168.713 28.7161 168.61 28.577C168.514 28.4378 168.405 28.2896 168.284 28.1323C168.163 27.975 168.048 27.8298 167.939 27.6967C167.83 27.5636 167.739 27.4577 167.667 27.3791L167.984 27.0978Z" fill="white"/>
<path d="M348.242 16V5.20001H349.55V10.5578H349.676L354.528 5.20001H356.237L351.701 10.0727L356.237 16H354.654L350.9 10.9797L349.55 12.4984V16H348.242Z" fill="white"/>
<path d="M346.043 10.6C346.043 11.7391 345.837 12.7235 345.426 13.5531C345.015 14.3828 344.45 15.0227 343.733 15.4727C343.016 15.9227 342.197 16.1477 341.276 16.1477C340.355 16.1477 339.536 15.9227 338.818 15.4727C338.101 15.0227 337.537 14.3828 337.126 13.5531C336.714 12.7235 336.509 11.7391 336.509 10.6C336.509 9.46096 336.714 8.47659 337.126 7.6469C337.537 6.81721 338.101 6.17737 338.818 5.72737C339.536 5.27737 340.355 5.05237 341.276 5.05237C342.197 5.05237 343.016 5.27737 343.733 5.72737C344.45 6.17737 345.015 6.81721 345.426 7.6469C345.837 8.47659 346.043 9.46096 346.043 10.6ZM344.777 10.6C344.777 9.66487 344.621 8.87561 344.308 8.23225C343.999 7.58889 343.578 7.10198 343.048 6.77151C342.52 6.44104 341.93 6.27581 341.276 6.27581C340.622 6.27581 340.029 6.44104 339.499 6.77151C338.971 7.10198 338.551 7.58889 338.238 8.23225C337.929 8.87561 337.774 9.66487 337.774 10.6C337.774 11.5352 337.929 12.3244 338.238 12.9678C338.551 13.6112 338.971 14.0981 339.499 14.4285C340.029 14.759 340.622 14.9242 341.276 14.9242C341.93 14.9242 342.52 14.759 343.048 14.4285C343.578 14.0981 343.999 13.6112 344.308 12.9678C344.621 12.3244 344.777 11.5352 344.777 10.6Z" fill="white"/>
<path d="M334.731 10.6C334.731 11.7391 334.526 12.7235 334.114 13.5531C333.703 14.3828 333.139 15.0227 332.422 15.4727C331.704 15.9227 330.885 16.1477 329.964 16.1477C329.043 16.1477 328.224 15.9227 327.507 15.4727C326.79 15.0227 326.225 14.3828 325.814 13.5531C325.403 12.7235 325.197 11.7391 325.197 10.6C325.197 9.46096 325.403 8.47659 325.814 7.6469C326.225 6.81721 326.79 6.17737 327.507 5.72737C328.224 5.27737 329.043 5.05237 329.964 5.05237C330.885 5.05237 331.704 5.27737 332.422 5.72737C333.139 6.17737 333.703 6.81721 334.114 7.6469C334.526 8.47659 334.731 9.46096 334.731 10.6ZM333.466 10.6C333.466 9.66487 333.309 8.87561 332.996 8.23225C332.687 7.58889 332.267 7.10198 331.736 6.77151C331.209 6.44104 330.618 6.27581 329.964 6.27581C329.31 6.27581 328.718 6.44104 328.187 6.77151C327.66 7.10198 327.24 7.58889 326.927 8.23225C326.617 8.87561 326.463 9.66487 326.463 10.6C326.463 11.5352 326.617 12.3244 326.927 12.9678C327.24 13.6112 327.66 14.0981 328.187 14.4285C328.718 14.759 329.31 14.9242 329.964 14.9242C330.618 14.9242 331.209 14.759 331.736 14.4285C332.267 14.0981 332.687 13.6112 332.996 12.9678C333.309 12.3244 333.466 11.5352 333.466 10.6Z" fill="white"/>
<path d="M317.686 16V5.20001H318.994V14.8399H324.014V16H317.686Z" fill="white"/>
<path d="M462.142 16L459.189 5.20001H460.518L462.775 13.9961H462.88L465.179 5.20001H466.656L468.955 13.9961H469.061L471.318 5.20001H472.647L469.693 16H468.343L465.96 7.39376H465.875L463.492 16H462.142Z" fill="white"/>
<path d="M451.305 16V5.20001H457.823V6.36017H452.613V10.0094H457.485V11.1695H452.613V14.8399H457.907V16H451.305Z" fill="white"/>
<path d="M448.683 5.20001V16H447.375V5.20001H448.683Z" fill="white"/>
<path d="M437.783 5.20001L440.989 14.2914H441.115L444.322 5.20001H445.693L441.727 16H440.377L436.411 5.20001H437.783Z" fill="white"/>
<path d="M340.629 23.377H341.31V26.4716H340.629V23.377ZM338.651 26.7801V28.4046H343.397V26.7801H338.651ZM338.006 26.1358H344.078V29.0398H338.006V26.1358ZM340.947 24.339H344.758V24.9833H340.947V24.339ZM339.586 29.8384L340.23 29.784C340.278 29.9715 340.318 30.1772 340.348 30.4011C340.384 30.6189 340.411 30.8276 340.429 31.0272C340.454 31.2329 340.466 31.4084 340.466 31.5536L339.776 31.6443C339.776 31.4931 339.767 31.3146 339.749 31.1089C339.737 30.9032 339.716 30.6884 339.685 30.4646C339.655 30.2407 339.622 30.032 339.586 29.8384ZM341.464 29.8475L342.081 29.7114C342.178 29.8929 342.269 30.0925 342.353 30.3103C342.444 30.5221 342.526 30.7278 342.598 30.9274C342.677 31.1271 342.732 31.3025 342.762 31.4538L342.099 31.6262C342.069 31.4749 342.021 31.2965 341.954 31.0908C341.888 30.8851 341.812 30.6733 341.727 30.4555C341.643 30.2377 341.555 30.035 341.464 29.8475ZM343.315 29.7749L343.923 29.5389C344.081 29.7325 344.235 29.9382 344.386 30.156C344.543 30.3738 344.689 30.5916 344.822 30.8094C344.955 31.0212 345.058 31.2118 345.13 31.3812L344.486 31.6534C344.419 31.484 344.323 31.2904 344.196 31.0726C344.069 30.8548 343.926 30.634 343.769 30.4101C343.618 30.1802 343.467 29.9685 343.315 29.7749ZM338.106 29.5934L338.751 29.7658C338.605 30.1167 338.421 30.4706 338.197 30.8276C337.979 31.1845 337.746 31.481 337.498 31.7169L336.881 31.4175C337.123 31.2118 337.353 30.9425 337.571 30.6098C337.789 30.271 337.967 29.9322 338.106 29.5934Z" fill="white"/>
<path d="M333.823 28.7585H334.449V30.8276C334.449 30.9365 334.464 31.0061 334.494 31.0363C334.525 31.0666 334.591 31.0817 334.694 31.0817C334.73 31.0817 334.794 31.0817 334.885 31.0817C334.981 31.0817 335.078 31.0817 335.175 31.0817C335.272 31.0817 335.341 31.0817 335.384 31.0817C335.456 31.0817 335.508 31.0575 335.538 31.0091C335.574 30.9607 335.599 30.8578 335.611 30.7005C335.629 30.5432 335.641 30.3073 335.647 29.9927C335.689 30.0229 335.744 30.0562 335.81 30.0925C335.877 30.1228 335.946 30.15 336.019 30.1742C336.092 30.1984 336.155 30.2196 336.21 30.2377C336.191 30.6189 336.155 30.9123 336.101 31.118C336.052 31.3237 335.977 31.4659 335.874 31.5445C335.771 31.6232 335.632 31.6625 335.456 31.6625C335.426 31.6625 335.369 31.6625 335.284 31.6625C335.205 31.6625 335.121 31.6625 335.03 31.6625C334.939 31.6625 334.854 31.6625 334.776 31.6625C334.697 31.6625 334.643 31.6625 334.612 31.6625C334.401 31.6625 334.237 31.6353 334.122 31.5808C334.007 31.5324 333.929 31.4477 333.886 31.3267C333.844 31.2057 333.823 31.0393 333.823 30.8276V28.7585ZM332.344 25.8908V26.8527H334.876V25.8908H332.344ZM332.344 27.3972V28.3592H334.876V27.3972H332.344ZM332.344 24.4025V25.3554H334.876V24.4025H332.344ZM331.708 23.8398H335.529V28.9218H331.708V23.8398ZM332.462 28.7313H333.115C333.067 29.2032 332.976 29.6297 332.843 30.0108C332.71 30.392 332.501 30.7247 332.217 31.0091C331.938 31.2995 331.545 31.5385 331.037 31.726C331.013 31.6776 330.976 31.6201 330.928 31.5536C330.886 31.487 330.837 31.4205 330.783 31.3539C330.734 31.2934 330.686 31.245 330.638 31.2087C331.091 31.0514 331.442 30.8548 331.69 30.6189C331.938 30.3829 332.117 30.1076 332.226 29.793C332.341 29.4724 332.419 29.1185 332.462 28.7313ZM327.933 25.0831H330.765V25.7002H327.933V25.0831ZM329.258 27.7875L329.921 26.9979V31.726H329.258V27.7875ZM329.258 23.377H329.921V25.3917H329.258V23.377ZM329.921 27.0887C329.993 27.1431 330.099 27.2339 330.238 27.3609C330.383 27.488 330.535 27.6302 330.692 27.7875C330.855 27.9387 331.004 28.0779 331.137 28.2049C331.276 28.332 331.376 28.4257 331.436 28.4862L331.019 29.0489C330.94 28.946 330.834 28.822 330.701 28.6768C330.574 28.5316 330.435 28.3804 330.284 28.2231C330.132 28.0658 329.987 27.9206 329.848 27.7875C329.715 27.6483 329.603 27.5364 329.512 27.4517L329.921 27.0887ZM330.529 25.0831H330.665L330.792 25.0559L331.173 25.3009C330.955 25.8515 330.674 26.3808 330.329 26.889C329.984 27.3972 329.603 27.8601 329.186 28.2775C328.774 28.6889 328.363 29.0368 327.951 29.3211C327.927 29.2546 327.894 29.182 327.852 29.1033C327.809 29.0247 327.767 28.9491 327.724 28.8765C327.682 28.8039 327.64 28.7464 327.597 28.704C327.991 28.462 328.378 28.1565 328.759 27.7875C329.146 27.4184 329.494 27.0131 329.803 26.5714C330.111 26.1298 330.353 25.679 330.529 25.2192V25.0831Z" fill="white"/>
<path d="M458.675 23.377H459.364V24.7564H458.675V23.377ZM455.299 24.4116H462.867V25.9997H462.205V24.9107H455.943V25.9997H455.299V24.4116ZM457.331 25.8273V26.4534H460.843V25.8273H457.331ZM456.696 25.3917H461.515V26.889H456.696V25.3917ZM456.179 23.6311L456.778 23.4405C456.923 23.5676 457.062 23.7128 457.195 23.8761C457.334 24.0395 457.44 24.1877 457.513 24.3208L456.887 24.5568C456.826 24.4297 456.726 24.2785 456.587 24.103C456.448 23.9215 456.312 23.7642 456.179 23.6311ZM461.361 23.3952L462.041 23.5948C461.902 23.7763 461.754 23.9518 461.597 24.1212C461.439 24.2906 461.297 24.4358 461.17 24.5568L460.626 24.3662C460.747 24.2331 460.877 24.0728 461.016 23.8852C461.161 23.6977 461.276 23.5343 461.361 23.3952ZM456.841 28.6496V29.1487H461.379V28.6496H456.841ZM456.841 29.5571V30.0653H461.379V29.5571H456.841ZM456.841 27.7421V28.2412H461.379V27.7421H456.841ZM456.188 27.3246H462.05V30.4918H456.188V27.3246ZM457.676 30.5644L458.321 30.8185C458.097 30.9516 457.828 31.0787 457.513 31.1997C457.198 31.3207 456.869 31.4265 456.524 31.5173C456.185 31.6141 455.864 31.6988 455.562 31.7714C455.525 31.723 455.474 31.6655 455.408 31.599C455.347 31.5324 455.287 31.4659 455.226 31.3993C455.166 31.3388 455.108 31.2874 455.054 31.245C455.368 31.1966 455.689 31.1392 456.016 31.0726C456.348 31.0121 456.66 30.9395 456.95 30.8548C457.241 30.7641 457.483 30.6673 457.676 30.5644ZM459.764 30.9274L460.272 30.5372C460.604 30.6158 460.94 30.7036 461.279 30.8004C461.624 30.8911 461.948 30.9819 462.25 31.0726C462.559 31.1694 462.822 31.2602 463.04 31.3449L462.35 31.7442C462.162 31.6595 461.929 31.5717 461.651 31.481C461.373 31.3902 461.07 31.2965 460.744 31.1997C460.423 31.1029 460.096 31.0121 459.764 30.9274Z" fill="white"/>
<path d="M452.077 27.0615H454.064V27.6513H452.077V27.0615ZM449.218 27.2883H451.796V27.8147H449.218V27.2883ZM450.407 23.8943H450.906V25.1013H450.407V23.8943ZM450.407 26.2901H450.906V27.5515H450.407V26.2901ZM448.719 30.9093H454.201V31.4991H448.719V30.9093ZM449.218 23.6493H451.705V24.1756H449.745V27.6241H449.218V23.6493ZM449.518 24.8835H451.641V26.5805H449.527V26.1086H451.169V25.3554H449.518V24.8835ZM452.413 23.4315L453.021 23.5313C452.942 24.0758 452.83 24.6082 452.685 25.1285C452.54 25.6427 452.37 26.0783 452.177 26.4353C452.141 26.405 452.089 26.3687 452.023 26.3264C451.956 26.284 451.889 26.2447 451.823 26.2084C451.756 26.1721 451.696 26.1419 451.641 26.1177C451.841 25.7849 452.004 25.3796 452.131 24.9016C452.258 24.4176 452.352 23.9276 452.413 23.4315ZM445.788 30.8276C446.193 30.755 446.683 30.6642 447.258 30.5553C447.833 30.4464 448.417 30.3315 449.01 30.2105L449.064 30.8004C448.52 30.9153 447.969 31.0303 447.412 31.1452C446.862 31.2602 446.372 31.363 445.942 31.4538L445.788 30.8276ZM446.314 25.6367H448.728V26.2175H446.314V25.6367ZM445.897 27.1613H448.892V27.7602H445.897V27.1613ZM446.06 28.3592L446.523 28.2594C446.608 28.5316 446.68 28.8281 446.741 29.1487C446.801 29.4694 446.838 29.7446 446.85 29.9745L446.36 30.0925C446.354 29.8566 446.323 29.5783 446.269 29.2576C446.215 28.937 446.145 28.6375 446.06 28.3592ZM448.402 28.1686L448.919 28.2957C448.846 28.574 448.774 28.8613 448.701 29.1578C448.628 29.4542 448.559 29.7114 448.492 29.9292L448.048 29.8021C448.09 29.6569 448.132 29.4875 448.175 29.2939C448.223 29.0943 448.269 28.8946 448.311 28.695C448.353 28.4953 448.383 28.3199 448.402 28.1686ZM447.204 25.8817H447.775V30.7187L447.204 30.8004V25.8817ZM452.413 24.7292H454.146V25.3372H452.249L452.413 24.7292ZM449.418 28.3864H453.756V31.1634H453.166V28.9491H452.404V31.1634H451.941V28.9491H451.197V31.1634H450.725V28.9491H449.981V31.1634H449.418V28.3864ZM447.213 23.377H447.567V23.5222H447.766V23.7037C447.651 23.9336 447.512 24.1907 447.349 24.4751C447.192 24.7534 447.001 25.0377 446.777 25.3281C446.553 25.6185 446.296 25.8968 446.006 26.163C445.976 26.1207 445.933 26.0723 445.879 26.0178C445.83 25.9573 445.779 25.9029 445.724 25.8545C445.676 25.8 445.628 25.7607 445.579 25.7365C445.845 25.5006 446.081 25.2465 446.287 24.9742C446.499 24.702 446.68 24.4297 446.832 24.1575C446.989 23.8792 447.116 23.619 447.213 23.377ZM447.313 23.377H447.821C447.996 23.5464 448.172 23.7309 448.347 23.9306C448.529 24.1302 448.698 24.3299 448.855 24.5295C449.013 24.7231 449.14 24.8986 449.237 25.0559L448.746 25.555C448.656 25.3977 448.538 25.2162 448.393 25.0105C448.247 24.8048 448.09 24.5991 447.921 24.3934C447.757 24.1877 447.594 24.0062 447.431 23.8489H447.313V23.377Z" fill="white"/>
<path d="M399.566 0.0146484C405.378 0.309445 410 5.11484 410 11V24C410 29.8852 405.378 34.6906 399.566 34.9854L399 35H398C392.115 35 387.309 30.3783 387.015 24.5664L387 24V11C387 4.92487 391.925 6.44258e-08 398 0H399L399.566 0.0146484ZM388 24C388 29.5228 392.477 34 398 34H399C404.523 34 409 29.5228 409 24V12H388V24ZM399 11H409C409 5.47715 404.523 1 399 1V11ZM398 1C392.477 1 388 5.47715 388 11H398V1Z" fill="white"/>
<path d="M95 35H79V19H95V35ZM114 35H98V19H114V35ZM133 35H117V19H133V35ZM80 34H94V20H80V34ZM99 34H113V20H99V34ZM118 34H132V20H118V34ZM88.3535 24.3535L85.707 27L88.3535 29.6465L87.6465 30.3535L84.293 27L87.6465 23.6465L88.3535 24.3535ZM127.707 27L124.354 30.3535L123.646 29.6465L126.293 27L123.646 24.3535L124.354 23.6465L127.707 27ZM109.354 26.3535L106 29.707L102.646 26.3535L103.354 25.6465L106 28.293L108.646 25.6465L109.354 26.3535ZM114 16H98V0H114V16ZM99 15H113V1H99V15ZM109.354 8.64648L108.646 9.35352L106 6.70703L103.354 9.35352L102.646 8.64648L106 5.29297L109.354 8.64648Z" fill="white"/>
<path d="M152 16.5L145.25 20.3971L145.25 12.6029L152 16.5Z" fill="white"/>
<path d="M428 16.5L421.25 20.3971L421.25 12.6029L428 16.5Z" fill="white"/>
<path d="M307 16.5L300.25 20.3971L300.25 12.6029L307 16.5Z" fill="white"/>
<path d="M220.329 13.376L216.759 16.5L220.329 19.624L219.671 20.376L215.671 16.876L215.24 16.5L215.671 16.124L219.671 12.624L220.329 13.376Z" fill="white"/>
<path d="M226.5 16V17H216V16H226.5Z" fill="white"/>
<path d="M283.171 19.624L286.741 16.5L283.171 13.376L283.829 12.624L287.829 16.124L288.26 16.5L287.829 16.876L283.829 20.376L283.171 19.624Z" fill="white"/>
<path d="M277 17L277 16L287.5 16L287.5 17L277 17Z" fill="white"/>
</svg>
`,
  m0 = `<svg width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5664 0.0146484C18.3783 0.309445 23 5.11484 23 11V24C23 29.8852 18.3783 34.6906 12.5664 34.9854L12 35H11C5.11484 35 0.309445 30.3783 0.0146484 24.5664L0 24V11C0 4.92487 4.92487 6.44258e-08 11 0H12L12.5664 0.0146484ZM1 24C1 29.5228 5.47715 34 11 34H12C17.5228 34 22 29.5228 22 24V12H1V24ZM12 11H22C22 5.47715 17.5228 1 12 1V11ZM11 1C5.47715 1 1 5.47715 1 11H11V1Z" fill="white"/>
</svg>
`;
let vi = !1;
function y0() {
  if (vi) return;
  vi = !0;
  const e = document.createElement("style");
  ((e.id = "controls-guide-keyframes"),
    (e.textContent = `
    @keyframes guideMouseSlide {
      0%, 20%   { transform: translateX(0) }
      36%       { transform: translateX(-35%) }
      52%       { transform: translateX(35%) }
      68%, 100% { transform: translateX(0) }
    }
    @keyframes guideDotLook {
      0%, 6%    { opacity: 0 }
      14%, 72%  { opacity: 1 }
      82%, 100% { opacity: 0 }
    }
    @keyframes guideRippleLook {
      0%, 11%  { transform: scale(1); opacity: 0 }
      15%      { transform: scale(1); opacity: 0.9 }
      32%      { transform: scale(5); opacity: 0 }
      100%     { transform: scale(1); opacity: 0 }
    }
    @keyframes guideDotView {
      0%, 8%    { opacity: 0 }
      18%, 55%  { opacity: 1 }
      68%, 100% { opacity: 0 }
    }
    @keyframes guideRippleView {
      0%, 15%  { transform: scale(1); opacity: 0 }
      20%      { transform: scale(1); opacity: 0.9 }
      40%      { transform: scale(5); opacity: 0 }
      100%     { transform: scale(1); opacity: 0 }
    }
  `),
    document.head.appendChild(e));
}
function Ci(e) {
  return e.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>[\s\S]*$/, "");
}
function w0() {
  y0();
  const e = document.createElement("div");
  e.style.cssText = `
    position: fixed;
    bottom: 110px; left: 0; right: 0;
    display: flex; justify-content: center;
    z-index: 200;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1);
    transform: translateY(4px);
  `;
  const t = Math.min(600, window.innerWidth - 40),
    n = t / 473,
    i = Math.round(35 * n),
    o = document.createElement("div");
  ((o.style.cssText = `position:relative; width:${t}px; height:${i}px; flex-shrink:0;`),
    e.appendChild(o));
  const a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  (a.setAttribute("viewBox", "0 0 473 35"),
    a.setAttribute("width", String(t)),
    a.setAttribute("height", String(i)),
    a.setAttribute("fill", "none"),
    (a.style.cssText =
      "display:block; position:absolute; top:0; left:0; opacity:0.85;"),
    (a.innerHTML = `<g transform="translate(0, 10)">
      <text x="0" y="15" fill="white" font-family="Arial" font-size="12" style="letter-spacing:1px">YÖN TUŞLARI: HAREKET</text>
      <text x="280" y="15" fill="white" font-family="Arial" font-size="12" style="letter-spacing:1px">MOUSE: BAKIŞ</text>
      <text x="400" y="15" fill="white" font-family="Arial" font-size="12" style="letter-spacing:1px">TIKLA: DETAY</text>
    </g>`),
    o.appendChild(a));
  const r = 240.25 * n,
    s = 23 * n,
    d = document.createElement("div");
  d.style.cssText = `
    position:absolute; top:0; left:${r.toFixed(1)}px;
    width:${s.toFixed(1)}px; height:${i}px;
    animation: guideMouseSlide 4.5s ease-in-out infinite;
  `;
  const c = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  (c.setAttribute("viewBox", "0 0 23 35"),
    c.setAttribute("width", "100%"),
    c.setAttribute("height", "100%"),
    c.setAttribute("fill", "none"),
    (c.style.cssText = "display:block; opacity:0.85;"),
    (c.innerHTML = Ci(m0)),
    d.appendChild(c),
    o.appendChild(d));
  const l = Math.max(3, Math.round(4 * n));
  {
    const p = 0.2608695652173913 * s - l / 2 + 1,
      u = (6 / 35) * i - l / 2 + 1,
      w = `position:absolute; left:${p.toFixed(1)}px; top:${u.toFixed(1)}px;
      width:${l}px; height:${l}px; border-radius:50%;`,
      m = document.createElement("div");
    m.style.cssText = `${w} background:#f03; opacity:0;
      animation: guideDotLook 4.5s ease-in-out 0s infinite;`;
    const x = document.createElement("div");
    ((x.style.cssText = `${w} background:transparent;
      border:1px solid rgba(255,30,30,0.85); opacity:0;
      animation: guideRippleLook 4.5s ease-in-out 0s infinite;`),
      d.appendChild(m),
      d.appendChild(x));
  }
  {
    const p = 393 * n - l / 2 - 1,
      u = (6 / 35) * i - l / 2 + 1,
      w = `position:absolute; left:${p.toFixed(1)}px; top:${u.toFixed(1)}px;
      width:${l}px; height:${l}px; border-radius:50%;`,
      m = document.createElement("div");
    m.style.cssText = `${w} background:#f03; opacity:0;
      animation: guideDotView 4.5s ease-in-out 2s infinite;`;
    const x = document.createElement("div");
    ((x.style.cssText = `${w} background:transparent;
      border:1px solid rgba(255,30,30,0.85); opacity:0;
      animation: guideRippleView 4.5s ease-in-out 2s infinite;`),
      o.appendChild(m),
      o.appendChild(x));
  }
  return e;
}
const g0 = `<svg width="95" height="8" viewBox="0 0 95 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.75928 0.376282L0.759277 3.87628L4.75928 7.37628" stroke="white"/>
<path d="M0.759277 3.87628H11.2593" stroke="white"/>
<path d="M89.2593 7.37628L93.2593 3.87628L89.2593 0.376282" stroke="white"/>
<path d="M93.2593 3.87628L82.7593 3.87628" stroke="white"/>
</svg>
`,
  x0 = `<svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2982 12.7302V8.32374M10.2982 8.32374V1.84892C10.2051 1.39928 9.70214 0.5 8.4354 0.5C7.16867 0.5 6.6657 1.39928 6.57256 1.84892V15.9676L3.59201 13.1799C3.18839 12.8501 2.12036 12.4424 1.07717 13.4496C0.0339724 14.4568 0.704603 15.6079 0.797739 15.6978L10.0188 24.3309C10.9999 25 12.7199 25.5 15.1416 25.5C20.5066 25.5 22.2825 21.0036 22.4999 18.7554V10.1223C22.4999 10.1223 21.941 8.86331 20.5439 8.86331C19.1468 8.86331 18.4999 10.2302 18.4999 10.5M10.2982 8.32374C10.5466 7.81415 11.1365 6.79496 12.3474 6.79496C13.6514 6.79496 14.2102 7.81415 14.4896 8.32374M14.4896 8.32374V12.7302M14.4896 8.32374C14.707 7.81415 15.1416 6.79496 16.4456 6.79496C17.7496 6.79496 18.4948 7.78417 18.4948 8.32374L18.4999 10.5M18.4948 12.7302L18.4999 10.5" stroke="white"/>
</svg>
`;
let qi = !1;
function Xi() {
  return !qi;
}
function bi(e) {
  return e.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>[\s\S]*$/, "");
}
function Ni() {
  qi = !0;
  const e = 6e3;
  return new Promise((t) => {
    const i = document.createElement("style");
    ((i.textContent = `
      @keyframes _shFade {
        0%        { opacity: 0 }
        8%        { opacity: 0.85 }
        82%       { opacity: 0.85 }
        100%      { opacity: 0 }
      }
      @keyframes _shFinger {
        0%, 18%   { transform: translateX(-50%) }
        37%       { transform: translateX(calc(-50% - 22px)) }
        55%       { transform: translateX(-50%) }
        73%       { transform: translateX(calc(-50% + 22px)) }
        88%, 100% { transform: translateX(-50%) }
      }
      @keyframes _shDot {
        0%, 4%    { opacity: 0; transform: scale(0.4) }
        14%, 80%  { opacity: 1; transform: scale(1) }
        100%      { opacity: 0; transform: scale(0.4) }
      }
      @keyframes _shRipple {
        0%, 6%   { transform: scale(1); opacity: 0 }
        10%      { transform: scale(1); opacity: 0.7 }
        32%      { transform: scale(4); opacity: 0 }
        100%     { transform: scale(1); opacity: 0 }
      }
    `),
      document.head.appendChild(i));
    const o = `${e}ms`,
      a = 95,
      r = 8,
      s = 23,
      d = 26,
      c = 8,
      l = d + c + 14,
      p = document.createElement("div");
    p.style.cssText = `
      position: fixed; inset: 0;
      display: flex; align-items: center; justify-content: center;
      z-index: 300; pointer-events: none;
    `;
    const u = document.createElement("div");
    u.style.cssText = `
      position: relative;
      width: ${a}px;
      height: ${l}px;
      animation: _shFade ${o} ease forwards;
    `;
    const w = Math.round(d / 2 - r / 2),
      m = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    (m.setAttribute("viewBox", "0 0 95 8"),
      m.setAttribute("width", String(a)),
      m.setAttribute("height", String(r)),
      m.setAttribute("fill", "none"),
      (m.style.cssText = `display:block; position:absolute; bottom:${w}px; left:0;`),
      (m.innerHTML = bi(g0)));
    const x = document.createElement("div");
    x.style.cssText = `
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      animation: _shFinger ${o} ease forwards;
    `;
    const y = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    (y.setAttribute("viewBox", "0 0 23 26"),
      y.setAttribute("width", String(s)),
      y.setAttribute("height", String(d)),
      y.setAttribute("fill", "none"),
      (y.style.cssText = "display:block;"),
      (y.innerHTML = bi(x0)));
    const g = Math.round(s * (10.3 / 23) - c / 2) - 2,
      b = d + 5,
      A = `position:absolute; left:${g}px; bottom:${b}px;
      width:${c}px; height:${c}px; border-radius:50%;`,
      E = document.createElement("div");
    E.style.cssText = `${A} background:#f03;
      animation: _shDot ${o} ease forwards;`;
    const L = document.createElement("div");
    ((L.style.cssText = `${A} background:transparent;
      border:1px solid rgba(255,30,30,0.8);
      animation: _shRipple ${o} ease forwards;`),
      x.appendChild(E),
      x.appendChild(L),
      x.appendChild(y),
      u.appendChild(m),
      u.appendChild(x),
      p.appendChild(u),
      document.body.appendChild(p),
      setTimeout(() => {
        (p.remove(), i.remove(), t());
      }, e));
  });
}
const v0 = "5.9.0",
  C0 = 30,
  b0 = 0,
  M0 = 50,
  k0 = 45,
  T0 = 45,
  E0 = "hand",
  A0 = 0,
  S0 = [],
  H0 = JSON.parse(
    '[{"ddd":0,"ind":1,"ty":4,"nm":"arrow2アウトライン","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":32.032,"s":[100]},{"t":50.049609179492,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[15.861,14.306,0],"to":[0,0,0],"ti":[0,0,0]},{"t":32.032031054492,"s":[17.361,9.556,0]}],"ix":2,"l":2},"a":{"a":0,"k":[4.212,4.993,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-3.212,0.355],[0.833,-2.023],[3.212,2.023]],"c":false},"ix":2},"nm":"パス 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[4.211,3.022],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"グループ 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[1.059,-4.083],[-1.059,4.083]],"c":false},"ix":2},"nm":"パス 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[3.83,5.403],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"グループ 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50.05005005005,"st":-8.00800800800801,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"arrow1アウトライン","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":32.032,"s":[100]},{"t":50.049609179492,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[12.059,26.424,0],"to":[0,0,0],"ti":[0,0,0]},{"t":32.032031054492,"s":[10.809,32.424,0]}],"ix":2,"l":2},"a":{"a":0,"k":[4.212,4.993,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[3.212,-0.355],[-0.833,2.023],[-3.212,-2.023]],"c":false},"ix":2},"nm":"パス 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[4.211,6.964],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"グループ 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-1.059,4.083],[1.059,-4.083]],"c":false},"ix":2},"nm":"パス 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[4.593,4.583],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"グループ 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50.05005005005,"st":-8.00800800800801,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"hand7アウトライン","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29.422,28.531,0],"ix":2,"l":2},"a":{"a":0,"k":[12.06,11.086,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[6.402,-3.232],[6.167,-5.45]],"c":false},"ix":2},"nm":"パス 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-1.297,0.141],[-0.058,-0.536],[0,0]],"o":[[0.161,-0.53],[1.296,-0.14],[0,0],[0,0]],"v":[[1.945,-7.181],[3.725,-8.912],[5.927,-7.613],[6.167,-5.45]],"c":false},"ix":2},"nm":"パス 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[1.945,-7.181],[2.42,-2.8]],"c":false},"ix":2},"nm":"パス 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[-1.204,0.131],[-0.333,-0.476]],"o":[[0.192,-0.533],[1.297,-0.14],[0,0]],"v":[[-2.222,-6.729],[-0.35,-8.47],[1.945,-7.181]],"c":false},"ix":2},"nm":"パス 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0.075,-0.561],[-0.43,0.086],[0,0],[0,0],[0,0],[0,0],[0.818,-0.204],[-0.293,-0.704],[0,0],[0,0],[-2.408,0.261],[0.026,2.259],[0,0],[1.389,-0.151],[-0.03,-0.268]],"o":[[0,0],[0,0],[-1.377,-0.129],[-0.387,2.882],[0,0],[0,0],[0,0],[0,0],[-0.387,-0.596],[-1.549,0.387],[0,0],[0,0],[1.047,0.56],[5.333,-0.579],[0,0],[0,0],[-1.389,0.15],[0,0]],"v":[[-2.222,-6.729],[-3.97,-10.086],[-8.444,-9.613],[-10.638,-8.193],[-6.379,-5.956],[-5.605,-3.504],[-5.102,1.272],[-6.938,-1.655],[-7.369,-3.16],[-9.39,-4.236],[-10.767,-1.913],[-9.261,3.637],[-0.773,9.215],[4.446,9.825],[11.034,2.326],[10.102,-6.257],[8.022,-7.297],[6.167,-5.45]],"c":false},"ix":2},"nm":"パス 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-1.747,-2.348],[-2.222,-6.729]],"c":false},"ix":2},"nm":"パス 6","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"パスを結合 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[12.06,11.086],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"グループ 1","np":8,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":44.044044044044,"op":50.05005005005,"st":38.038038038038,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"hand6アウトライン","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29.458,26.981,0],"ix":2,"l":2},"a":{"a":0,"k":[11.804,12.72,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[6.438,-1.38],[6.307,-3.605]],"c":false},"ix":2},"nm":"パス 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-1.301,0.08],[-0.033,-0.539],[0,0]],"o":[[0.186,-0.522],[1.302,-0.08],[0,0],[0,0]],"v":[[2.171,-5.533],[4.03,-7.178],[6.169,-5.777],[6.307,-3.605]],"c":false},"ix":2},"nm":"パス 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[2.171,-5.533],[2.44,-1.135]],"c":false},"ix":2},"nm":"パス 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[-1.209,0.074],[-0.31,-0.491]],"o":[[0.216,-0.523],[1.301,-0.079],[0,0]],"v":[[-2.012,-5.277],[-0.06,-6.928],[2.171,-5.533]],"c":false},"ix":2},"nm":"パス 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0.774,-0.818],[-0.473,-0.43],[0,0],[0,0],[0,0],[0,0],[0.783,-0.314],[-0.259,-0.717],[0,0],[0,0],[-2.417,0.148],[-0.08,2.258],[0,0],[1.395,-0.085],[-0.017,-0.27]],"o":[[0,0],[0,0],[-0.817,-0.516],[-1.094,1.154],[0,0],[0,0],[0,0],[0,0],[-0.359,-0.613],[-0.861,0.344],[0,0],[0,0],[1.02,0.608],[5.355,-0.328],[0,0],[0,0],[-1.394,0.086],[0,0]],"v":[[-2.012,-5.277],[-2.825,-8.783],[-6.071,-10.643],[-9.125,-10.902],[-8.652,-8.105],[-6.013,-6.648],[-5.264,2.579],[-7.103,0.671],[-7.361,-1.309],[-9.254,-2.083],[-10.545,0.154],[-9.872,3.633],[-1.314,10.717],[3.871,11.572],[10.804,4.389],[10.276,-4.227],[8.247,-5.365],[6.307,-3.605]],"c":false},"ix":2},"nm":"パス 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-1.743,-0.878],[-2.012,-5.277]],"c":false},"ix":2},"nm":"パス 6","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"パスを結合 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[11.804,12.72],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"グループ 1","np":8,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":38.038038038038,"op":44.044044044044,"st":34.034034034034,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"hand5アウトライン","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29.13,26.076,0],"ix":2,"l":2},"a":{"a":0,"k":[11.798,13.707,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[6.793,-0.063],[6.798,-2.293]],"c":false},"ix":2},"nm":"パス 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-1.304,0],[0,-0.54],[0,0]],"o":[[0.217,-0.51],[1.304,0],[0,0],[0,0]],"v":[[2.788,-4.469],[4.744,-5.998],[6.793,-4.469],[6.798,-2.293]],"c":false},"ix":2},"nm":"パス 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[2.788,-4.469],[2.788,-0.063]],"c":false},"ix":2},"nm":"パス 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[-1.211,0],[-0.28,-0.51]],"o":[[0.249,-0.51],[1.304,0],[0,0]],"v":[[-1.404,-4.469],[0.646,-5.998],[2.788,-4.469]],"c":false},"ix":2},"nm":"パス 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[1.505,-0.43],[-0.086,-0.344],[0,0],[0,0],[0,0],[0,0],[0.667,-0.516],[-0.215,-0.731],[0,0],[0,0],[-2.422,0],[-0.217,2.248],[0,0],[1.397,0],[0,-0.27]],"o":[[0,0],[0,0],[-0.301,-0.473],[-1.361,0.389],[0,0],[0,0],[0,0],[0,0],[-0.321,-0.634],[-0.823,0.637],[0,0],[0,0],[0.981,0.669],[5.365,0],[0,0],[0,0],[-1.397,0],[0,0]],"v":[[-1.404,-4.469],[-2,-8.018],[-3.549,-10.728],[-6.087,-12.277],[-7.292,-10.513],[-5.313,-6.082],[-5.129,3.174],[-7.163,1.272],[-7.616,-0.544],[-9.959,-0.877],[-10.583,1.425],[-9.793,3.945],[-1.683,11.538],[3.44,12.707],[10.798,5.962],[10.798,-2.671],[8.842,-3.93],[6.798,-2.293]],"c":false},"ix":2},"nm":"パス 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-1.404,-0.063],[-1.404,-4.469]],"c":false},"ix":2},"nm":"パス 6","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"パスを結合 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[11.798,13.707],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"グループ 1","np":8,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":32.032032032032,"op":38.038038038038,"st":30.03003003003,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"hand4アウトライン","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29.422,28.531,0],"ix":2,"l":2},"a":{"a":0,"k":[12.06,11.086,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[6.402,-3.232],[6.167,-5.45]],"c":false},"ix":2},"nm":"パス 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-1.297,0.141],[-0.058,-0.536],[0,0]],"o":[[0.161,-0.53],[1.296,-0.14],[0,0],[0,0]],"v":[[1.945,-7.181],[3.725,-8.912],[5.927,-7.613],[6.167,-5.45]],"c":false},"ix":2},"nm":"パス 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[1.945,-7.181],[2.42,-2.8]],"c":false},"ix":2},"nm":"パス 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[-1.204,0.131],[-0.333,-0.476]],"o":[[0.192,-0.533],[1.297,-0.14],[0,0]],"v":[[-2.222,-6.729],[-0.35,-8.47],[1.945,-7.181]],"c":false},"ix":2},"nm":"パス 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0.075,-0.561],[-0.43,0.086],[0,0],[0,0],[0,0],[0,0],[0.818,-0.204],[-0.293,-0.704],[0,0],[0,0],[-2.408,0.261],[0.026,2.259],[0,0],[1.389,-0.151],[-0.03,-0.268]],"o":[[0,0],[0,0],[-1.377,-0.129],[-0.387,2.882],[0,0],[0,0],[0,0],[0,0],[-0.387,-0.596],[-1.549,0.387],[0,0],[0,0],[1.047,0.56],[5.333,-0.579],[0,0],[0,0],[-1.389,0.15],[0,0]],"v":[[-2.222,-6.729],[-3.97,-10.086],[-8.444,-9.613],[-10.638,-8.193],[-6.379,-5.956],[-5.605,-3.504],[-5.102,1.272],[-6.938,-1.655],[-7.369,-3.16],[-9.39,-4.236],[-10.767,-1.913],[-9.261,3.637],[-0.773,9.215],[4.446,9.825],[11.034,2.326],[10.102,-6.257],[8.022,-7.297],[6.167,-5.45]],"c":false},"ix":2},"nm":"パス 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-1.747,-2.348],[-2.222,-6.729]],"c":false},"ix":2},"nm":"パス 6","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"パスを結合 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[12.06,11.086],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"グループ 1","np":8,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":6.00600600600601,"st":-6.00600600600601,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"hand3アウトライン","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29.458,26.981,0],"ix":2,"l":2},"a":{"a":0,"k":[11.804,12.72,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[6.438,-1.38],[6.307,-3.605]],"c":false},"ix":2},"nm":"パス 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-1.301,0.08],[-0.033,-0.539],[0,0]],"o":[[0.186,-0.522],[1.302,-0.08],[0,0],[0,0]],"v":[[2.171,-5.533],[4.03,-7.178],[6.169,-5.777],[6.307,-3.605]],"c":false},"ix":2},"nm":"パス 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[2.171,-5.533],[2.44,-1.135]],"c":false},"ix":2},"nm":"パス 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[-1.209,0.074],[-0.31,-0.491]],"o":[[0.216,-0.523],[1.301,-0.079],[0,0]],"v":[[-2.012,-5.277],[-0.06,-6.928],[2.171,-5.533]],"c":false},"ix":2},"nm":"パス 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0.774,-0.818],[-0.473,-0.43],[0,0],[0,0],[0,0],[0,0],[0.783,-0.314],[-0.259,-0.717],[0,0],[0,0],[-2.417,0.148],[-0.08,2.258],[0,0],[1.395,-0.085],[-0.017,-0.27]],"o":[[0,0],[0,0],[-0.817,-0.516],[-1.094,1.154],[0,0],[0,0],[0,0],[0,0],[-0.359,-0.613],[-0.861,0.344],[0,0],[0,0],[1.02,0.608],[5.355,-0.328],[0,0],[0,0],[-1.394,0.086],[0,0]],"v":[[-2.012,-5.277],[-2.825,-8.783],[-6.071,-10.643],[-9.125,-10.902],[-8.652,-8.105],[-6.013,-6.648],[-5.264,2.579],[-7.103,0.671],[-7.361,-1.309],[-9.254,-2.083],[-10.545,0.154],[-9.872,3.633],[-1.314,10.717],[3.871,11.572],[10.804,4.389],[10.276,-4.227],[8.247,-5.365],[6.307,-3.605]],"c":false},"ix":2},"nm":"パス 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-1.743,-0.878],[-2.012,-5.277]],"c":false},"ix":2},"nm":"パス 6","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"パスを結合 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[11.804,12.72],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"グループ 1","np":8,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":6.00600600600601,"op":12.012012012012,"st":2.002002002002,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"hand2アウトライン","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29.13,26.076,0],"ix":2,"l":2},"a":{"a":0,"k":[11.798,13.707,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[6.793,-0.063],[6.798,-2.293]],"c":false},"ix":2},"nm":"パス 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-1.304,0],[0,-0.54],[0,0]],"o":[[0.217,-0.51],[1.304,0],[0,0],[0,0]],"v":[[2.788,-4.469],[4.744,-5.998],[6.793,-4.469],[6.798,-2.293]],"c":false},"ix":2},"nm":"パス 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[2.788,-4.469],[2.788,-0.063]],"c":false},"ix":2},"nm":"パス 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[-1.211,0],[-0.28,-0.51]],"o":[[0.249,-0.51],[1.304,0],[0,0]],"v":[[-1.404,-4.469],[0.646,-5.998],[2.788,-4.469]],"c":false},"ix":2},"nm":"パス 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[1.505,-0.43],[-0.086,-0.344],[0,0],[0,0],[0,0],[0,0],[0.667,-0.516],[-0.215,-0.731],[0,0],[0,0],[-2.422,0],[-0.217,2.248],[0,0],[1.397,0],[0,-0.27]],"o":[[0,0],[0,0],[-0.301,-0.473],[-1.361,0.389],[0,0],[0,0],[0,0],[0,0],[-0.321,-0.634],[-0.823,0.637],[0,0],[0,0],[0.981,0.669],[5.365,0],[0,0],[0,0],[-1.397,0],[0,0]],"v":[[-1.404,-4.469],[-2,-8.018],[-3.549,-10.728],[-6.087,-12.277],[-7.292,-10.513],[-5.313,-6.082],[-5.129,3.174],[-7.163,1.272],[-7.616,-0.544],[-9.959,-0.877],[-10.583,1.425],[-9.793,3.945],[-1.683,11.538],[3.44,12.707],[10.798,5.962],[10.798,-2.671],[8.842,-3.93],[6.798,-2.293]],"c":false},"ix":2},"nm":"パス 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-1.404,-0.063],[-1.404,-4.469]],"c":false},"ix":2},"nm":"パス 6","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"パスを結合 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[11.798,13.707],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"グループ 1","np":8,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":12.012012012012,"op":18.018018018018,"st":10.01001001001,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"hand1アウトライン","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[28.695,26.283,0],"ix":2,"l":2},"a":{"a":0,"k":[12.233,13.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[7.228,-0.27],[7.233,-2.5]],"c":false},"ix":2},"nm":"パス 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-1.304,0],[0,-0.54],[0,0]],"o":[[0.217,-0.51],[1.304,0],[0,0],[0,0]],"v":[[3.223,-4.676],[5.179,-6.205],[7.228,-4.676],[7.233,-2.5]],"c":false},"ix":2},"nm":"パス 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.223,-4.676],[3.223,-0.27]],"c":false},"ix":2},"nm":"パス 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[-1.211,0],[-0.28,-0.51]],"o":[[0.249,-0.51],[1.304,0],[0,0]],"v":[[-0.969,-4.676],[1.081,-6.205],[3.223,-4.676]],"c":false},"ix":2},"nm":"パス 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[1.266,0],[0.093,-0.45],[0,0],[0,0],[1.044,-1.007],[-0.093,-0.09],[0,0],[-2.422,0],[-0.217,2.248],[0,0],[1.397,0],[0,-0.27]],"o":[[0,0],[-0.093,-0.45],[-1.267,0],[0,0],[0,0],[-0.403,-0.33],[-1.043,1.008],[0,0],[0.981,0.669],[5.365,0],[0,0],[0,0],[-1.397,0],[0,0]],"v":[[-0.969,-4.676],[-0.969,-11.151],[-2.831,-12.5],[-4.694,-11.151],[-4.694,2.967],[-7.675,0.18],[-10.19,0.449],[-10.469,2.698],[-1.248,11.331],[3.875,12.5],[11.233,5.755],[11.233,-2.878],[9.277,-4.137],[7.233,-2.5]],"c":false},"ix":2},"nm":"パス 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-0.969,-0.27],[-0.969,-4.676]],"c":false},"ix":2},"nm":"パス 6","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"パスを結合 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[12.233,13.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"グループ 1","np":8,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":18.018018018018,"op":32.032032032032,"st":18.018018018018,"bm":0}]',
  ),
  L0 = [],
  V0 = {
    v: v0,
    fr: C0,
    ip: b0,
    op: M0,
    w: k0,
    h: T0,
    nm: E0,
    ddd: A0,
    assets: S0,
    layers: H0,
    markers: L0,
  };
let Wi = !1;
function P0() {
  return !Wi;
}
function _0() {
  Wi = !0;
  const e = 4500,
    t = document.createElement("style");
  ((t.textContent = `
    @keyframes _phFade {
      0%       { opacity: 0 }
      8%       { opacity: 0.85 }
      82%      { opacity: 0.85 }
      100%     { opacity: 0 }
    }
  `),
    document.head.appendChild(t));
  const n = document.createElement("div");
  ((n.style.cssText = `
    position: fixed;
    left: 50%; top: 50%;
    transform: translate(-50%, calc(-50% + 100px));
    width: 45px; height: 45px;
    pointer-events: none;
    z-index: 300;
    animation: _phFade ${e}ms ease forwards;
  `),
    document.body.appendChild(n));
  const i = Uo.loadAnimation({
    container: n,
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    animationData: V0,
  });
  setTimeout(() => {
    (i.destroy(), n.remove(), t.remove());
  }, e);
}
const an = /Mobi|Android|iPad/i.test(navigator.userAgent);
function D0() {
  if (document.getElementById("outro-styles")) return;
  const e = document.createElement("style");
  ((e.id = "outro-styles"),
    (e.textContent = `
    .outro-close-btn.dp-close-btn {
      z-index: 9001;
      transition: opacity 0.5s ease, transform 0.45s cubic-bezier(0.34, 1.3, 0.64, 1);
    }
    .outro-close-btn.dp-close-btn::before,
    .outro-close-btn.dp-close-btn::after {
      background-color: rgba(85, 85, 85, 0.75);
    }
    @media (hover: hover) and (pointer: fine) {
      .outro-close-btn.dp-close-btn:hover {
        transform: scale(1.2);
      }
      .outro-close-btn.dp-close-btn:hover::before,
      .outro-close-btn.dp-close-btn:hover::after {
        width: 62px;
        background-color: rgba(85, 85, 85, 1);
      }
    }
  `),
    document.head.appendChild(e));
}
function F0({ camera: e, visitedDots: t }) {
  if ((D0(), !document.getElementById("outro-noto"))) {
    const l = document.createElement("link");
    ((l.id = "outro-noto"),
      (l.rel = "stylesheet"),
      (l.href =
        "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap"),
      document.head.appendChild(l));
  }
  (C.killTweensOf(e.position), e.up.set(0, 0, 1));
  const n = new Ri();
  (n.up.set(0, 0, 1), n.position.set(0, 170, 0), n.lookAt(0, 0, 0));
  const i = n.quaternion.clone(),
    o = e.quaternion.clone(),
    a = { t: 0 },
    r = window.innerWidth / window.innerHeight;
  if (r < 1) {
    const l = Math.atan(72 / (170 * r)) * 1.08;
    e.fov = Math.min(100, (l * 2 * 180) / Math.PI);
  } else e.fov = 50;
  e.updateProjectionMatrix();
  const s = 8;
  (C.to(e.position, { x: 0, y: 170, z: 0, duration: s, ease: "power2.inOut" }),
    C.to(a, {
      t: 1,
      duration: s,
      ease: "power2.inOut",
      onUpdate() {
        e.quaternion.slerpQuaternions(o, i, a.t);
      },
      onComplete() {
        t.startOutro(
          () => {},
          () => d(),
        );
      },
    }));
  function d() {
    ((e.fov = 50),
      e.updateProjectionMatrix(),
      C.to(e.position, {
        y: 3,
        duration: 5,
        ease: "power3.inOut",
        onComplete() {
          c();
        },
      }));
  }
  function c() {
    const l = document.createElement("div");
    ((l.style.cssText = `
      position: fixed; inset: 0;
      background: transparent;
      z-index: 9000;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      pointer-events: none;
    `),
      document.body.appendChild(l));
    const p = document.createElement("div");
    ((p.style.cssText = `
      display: flex; flex-direction: column;
      align-items: center;
      padding: ${an ? "32px 28px" : "48px 40px"};
    `),
      l.appendChild(p));
    const u = [
        "Tüm 365 günü gezdiniz.",
        "Bize eşlik ettiğiniz için teşekkür ederiz.",
      ],
      w = [
        "Mina Lidya Koleksiyonu",
        "Zarafetin ve el emeğinin eşsiz yolculuğu.",
      ],
      m = [];
    u.forEach((b) => {
      const A = document.createElement("p");
      ((A.textContent = b),
        (A.style.cssText = `
        color: #555;
        margin: 0; padding: 2px 0;
        text-align: center;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: ${an ? "13px" : "15px"};
        font-weight: 400;
        letter-spacing: 0.06em;
        line-height: 1.9;
        opacity: 0;
        transform: translateY(8px);
        transition: opacity 1.8s ease, transform 1.8s ease;
      `),
        p.appendChild(A),
        m.push(A));
    });
    const x = document.createElement("div");
    ((x.style.height = an ? "28px" : "40px"),
      p.appendChild(x),
      w.forEach((b) => {
        const A = document.createElement("p");
        ((A.textContent = b),
          (A.style.cssText = `
        color: #555;
        margin: 0; padding: 2px 0;
        text-align: center;
        font-family: 'Noto Sans JP', 'Hiragino Sans', sans-serif;
        font-size: ${an ? "13px" : "14px"};
        font-weight: 300;
        letter-spacing: 0.22em;
        line-height: 2.2;
        opacity: 0;
        transform: translateY(8px);
        transition: opacity 1.8s ease, transform 1.8s ease;
      `),
          p.appendChild(A),
          m.push(A));
      }));
    const y = document.createElement("a");
    ((y.href = "https://www.kamimae.com"),
      (y.className = "dp-close-btn outro-close-btn"),
      y.setAttribute("aria-label", "Visit kamimae.com"),
      document.body.appendChild(y));
    let g = 800;
    (m.forEach((b) => {
      (setTimeout(() => {
        ((b.style.opacity = "1"), (b.style.transform = "translateY(0)"));
      }, g),
        (g += 1e3));
    }),
      setTimeout(() => {
        ((l.style.pointerEvents = "auto"), y.classList.add("dp-close-show"));
      }, g + 800));
  }
}
const Ce = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  En = navigator.userAgent,
  X =
    /Mobi|Android/i.test(En) ||
    /iPad/i.test(En) ||
    (navigator.maxTouchPoints > 1 && /Macintosh/i.test(En)),
  R0 = document.getElementById("app"),
  O = jo(R0),
  h = Qo();
h.position.y = 5.5;
const G = Jo();
Ko(h, O);
O.domElement.addEventListener(
  "webglcontextlost",
  (e) => {
    (e.preventDefault(), setTimeout(() => location.reload(), 300));
  },
  !1,
);
const { ceiling: Q } = is(G),
  Dn = G.fog;
Ss(G);
const Pe = Ns(G),
  O0 = (e) => Pe.update(e),
  B0 = new Xo(),
  T = xs(G, O, B0, X ? 85 : 95, 0, X ? 200 : 0),
  ct = Rs(G, T),
  Fn = _s(G, T[0]),
  tn = Fs(G, T[365]),
  Rt = Ds(G, T),
  D = new Ks(h, O.domElement);
D.setEnabled(!1);
const Xt = new n0(),
  Ot = new o0(),
  tt = new c0(),
  Bt = new a0(T);
let gt = null,
  Jt = null,
  Yt = null,
  pn = null;
Ot.onReady((e, t) => {
  if ((Bt.install(e, t), (Yt = e), X)) {
    const n = (i) =>
      fetch("./" + i)
        .then((o) => o.arrayBuffer())
        .then((o) => e.decodeAudioData(o));
    (gn ||
      n("audio/onClick.mp3")
        .then((i) => {
          (($e = e), (gn = i));
        })
        .catch(() => {}),
      pn ||
        n("audio/attention.mp3")
          .then((i) => {
            ((Yt = e), (pn = i));
          })
          .catch(() => {}));
    return;
  }
  try {
    const n = e.createMediaElementSource(we),
      i = e.createGain();
    ((i.gain.value = 0.4),
      (gt = e.createPanner()),
      (gt.panningModel = "HRTF"),
      (gt.distanceModel = "inverse"),
      (gt.refDistance = 1),
      (gt.rolloffFactor = 0),
      (gt.coneInnerAngle = 360),
      (gt.coneOuterAngle = 360),
      (Jt = e.createBiquadFilter()),
      (Jt.type = "lowpass"),
      (Jt.frequency.value = 1800),
      (Jt.Q.value = 0.8),
      n.connect(i),
      i.connect(Jt),
      Jt.connect(gt),
      gt.connect(e.destination),
      (we.volume = 1));
  } catch {}
});
var Fi;
(Fi = T.preloadNear) == null || Fi.call(T, T[0].focusPosition);
const Ee = T[0],
  Z0 = h.quaternion.clone(),
  jn = h.clone();
jn.position.copy(Ee.focusPosition);
jn.lookAt(Ee.focusTarget);
const Mi = jn.quaternion.clone(),
  ki = { t: 0 };
function z0() {
  if (((Qt = !1), Ce)) {
    h.position.copy(Ee.focusPosition);
    const t = new vt().setFromQuaternion(Mi, "YXZ");
    (D.setYaw(t.y),
      D.setPitch(t.x),
      D.setEnabled(!0),
      Fn.show(),
      Ai(),
      tt.enableTopDown(Yn),
      tt.startHintPulse());
    return;
  }
  Le = !0;
  const e = X ? 1.6 : 1.65;
  (C.to(h.position, { y: e, duration: 4, ease: "power2.inOut" }),
    setTimeout(() => {
      (C.to(h.position, {
        x: Ee.focusPosition.x,
        y: Ee.focusPosition.y,
        z: Ee.focusPosition.z,
        duration: 4,
        ease: "power1.inOut",
      }),
        C.to(ki, {
          t: 1,
          duration: 4,
          ease: "power1.inOut",
          onUpdate() {
            h.quaternion.slerpQuaternions(Z0, Mi, ki.t);
          },
          onComplete() {
            ((cn = !0), (Je = performance.now() + 3e3), (Le = !1));
            const t = new vt().setFromQuaternion(h.quaternion, "YXZ");
            (D.setYaw(t.y),
              D.setPitch(t.x),
              D.setEnabled(!0),
              Fn.show(),
              Ai(),
              tt.enableTopDown(Yn),
              tt.startHintPulse());
          },
        }));
    }, 6e3));
}
h0({
  startAudio: () => Ot.startNow(),
  triggerMinimap: () => tt.triggerEntrance(),
  showControls: () => {},
  showAudio: () => Ot.showButton(),
  showCopyright: () => {
    ((De.style.opacity = "0.85"), (ie.style.opacity = "0.85"));
  },
  onStart: z0,
});
let de = null,
  he = null,
  j = !1,
  ce = new st(),
  Pt = null,
  pe = 0,
  ue = 0;
const I0 = 0.035,
  $0 = 0.018,
  Ti = 0.035;
let Ui = 0,
  ji = 0,
  fe = 0,
  me = 0,
  qt = !1;
const Qi = new Ke();
let at = !1;
const Ae = new st();
let Ye = 0,
  qe = 0,
  St = null;
const Ji = 12,
  Ki = 170;
let be = !1,
  to = 0,
  eo = 0,
  no = 0,
  io = 0,
  Rn = 0,
  On = 0;
const ze = [];
let ln = 0,
  ee = null;
const Bn = [];
let Nt = 0,
  Wt = 0,
  Ut = 0,
  Zn = 0,
  zn = 0,
  In = 0,
  ne = !1,
  xe = null,
  $n = 0,
  Gn = 0,
  ve = !1;
const At = 366;
let ot = -1;
const pt = { t: 0 };
function oo(e) {
  return e.focusPosition;
}
function so(e, t, n = "power2.inOut", i) {
  const o = oo(e);
  if (Ce) {
    ((h.position.x = o.x),
      (h.position.z = o.z),
      h.lookAt(e.focusTarget),
      i == null || i());
    return;
  }
  (C.killTweensOf(h.position),
    C.killTweensOf(pt),
    C.to(h.position, { x: o.x, z: o.z, duration: t, ease: n }));
  const a = h.quaternion.clone(),
    r = new Ke(),
    s = h.clone();
  if ((s.position.copy(o), s.lookAt(e.focusTarget), X)) {
    const d = new vt().setFromQuaternion(s.quaternion, "YXZ");
    r.setFromEuler(new vt(0, d.y, 0, "YXZ"));
  } else r.copy(s.quaternion);
  ((pt.t = 0),
    C.to(pt, {
      t: 1,
      duration: t,
      ease: n,
      onUpdate() {
        h.quaternion.slerpQuaternions(a, r, pt.t);
      },
      onComplete() {
        (Qi.copy(h.quaternion), (qt = !0), i == null || i());
      },
    }));
}
function Xe() {
  return X ? {} : { onPrev: () => je(-1), onNext: () => je(1) };
}
function je(e) {
  var a, r;
  Fe();
  let t = ot + e;
  (t < 0 ? (t = At - 1) : t >= At && (t = 0), (ot = t));
  const n = T[ot],
    i = (ot + e + At) % At;
  for (const s of [ot, i])
    ((a = T.isFullyLoaded) != null && a.call(T, s)) ||
      (r = T.forceReloadTexture) == null ||
      r.call(T, s);
  (C.killTweensOf(h.position), C.killTweensOf(pt));
  const o = oo(n);
  if (!X && !Ce && qt)
    ((qt = !1),
      C.to(h.position, {
        x: o.x,
        z: o.z,
        duration: 0.9,
        ease: "power2.inOut",
        onComplete() {
          const s = n.focusTarget,
            d = s.x - h.position.x,
            c = s.y - h.position.y,
            l = s.z - h.position.z,
            p = Math.sqrt(d * d + l * l),
            u = Math.atan2(-d, -l),
            w = Math.atan2(c, p),
            m = new vt().setFromQuaternion(h.quaternion, "YXZ");
          let x = m.y - u,
            y = m.x - w;
          (x > Math.PI && (x -= 2 * Math.PI),
            x < -Math.PI && (x += 2 * Math.PI),
            y > Math.PI && (y -= 2 * Math.PI),
            y < -Math.PI && (y += 2 * Math.PI),
            (fe = x),
            (me = y),
            (qt = !0));
        },
      }));
  else {
    ((qt = !1),
      (fe = me = 0),
      C.to(h.position, {
        x: o.x,
        z: o.z,
        duration: 0.9,
        ease: "power2.inOut",
      }));
    const s = h.quaternion.clone(),
      d = new Ke(),
      c = h.clone();
    if ((c.position.copy(o), c.lookAt(n.focusTarget), X)) {
      const l = new vt().setFromQuaternion(c.quaternion, "YXZ");
      d.setFromEuler(new vt(0, l.y, 0, "YXZ"));
    } else d.copy(c.quaternion);
    ((pt.t = 0),
      C.to(pt, {
        t: 1,
        duration: 0.9,
        ease: "power2.inOut",
        onUpdate() {
          h.quaternion.slerpQuaternions(s, d, pt.t);
        },
        onComplete() {
          (Qi.copy(h.quaternion), (qt = !0));
        },
      }));
  }
  (Pt !== null
    ? (clearTimeout(Pt), (Pt = null), Xt.show(n.work, _e, Xe()))
    : Xt.isVisible()
      ? Xt.navigate(n.work, Xe())
      : Xt.show(n.work, _e, Xe()),
    Rt.show(ot),
    Kn(ot),
    ot === 365 && tn.show());
}
function ao(e) {
  var t, n;
  if (!j) {
    ((j = !0),
      (O.domElement.style.cursor = ""),
      de == null || de(),
      D.setEnabled(!1),
      D.hideMobileControls(),
      Ot.duck(),
      Bt.setFocused(!0),
      (qt = !1),
      (fe = me = 0),
      ce.copy(h.position),
      (pe = D.getYaw()),
      (ue = D.getPitch()),
      (ot = T.indexOf(e)),
      Rt.show(ot),
      Kn(ot));
    for (let i = -2; i <= 2; i++) {
      const o = (ot + i + At) % At;
      ((t = T.isFullyLoaded) != null && t.call(T, o)) ||
        (n = T.forceReloadTexture) == null ||
        n.call(T, o);
    }
    (tt.setFocusedClickMode(() => _e(() => Yn())),
      tt.setHoverEnabled(!1),
      X && Xi()
        ? Ni().then(() => {
            j && ct.setFocused(e);
          })
        : ct.setFocused(e),
      ot === 365 && tn.show(),
      (Pt = setTimeout(() => {
        ((Pt = null), Xt.show(e.work, _e, Xe()));
      }, 600)),
      so(e, 2, "power4.out"));
  }
}
function un(e = 1500) {
  Je = performance.now() + e;
}
function _e(e) {
  if (j)
    if (
      ((j = !1),
      (qt = !1),
      (fe = me = 0),
      he == null || he(),
      (Je = performance.now() + 2500),
      Pt !== null && (clearTimeout(Pt), (Pt = null)),
      Xt.hide(),
      tt.setFocusedClickMode(null),
      tt.setHoverEnabled(!0),
      Ot.restore(),
      Bt.setFocused(!1),
      D.showMobileControls(),
      ct.setFocused(null),
      Ce)
    )
      (h.position.copy(ce),
        D.setYaw(pe),
        D.setPitch(ue),
        D.setEnabled(!0),
        un(),
        e == null || e());
    else {
      C.to(h.position, {
        x: ce.x,
        y: ce.y,
        z: ce.z,
        duration: 2.2,
        ease: "power4.out",
      });
      const t = h.quaternion.clone(),
        n = new Ke();
      (n.setFromEuler(new vt(ue, pe, 0, "YXZ")),
        (pt.t = 0),
        C.killTweensOf(pt),
        C.to(pt, {
          t: 1,
          duration: 2.2,
          ease: "power4.out",
          onUpdate() {
            h.quaternion.slerpQuaternions(t, n, pt.t);
          },
          onComplete() {
            (D.setYaw(pe),
              D.setPitch(ue),
              D.setRoll(0),
              D.setEnabled(!0),
              un(),
              e == null || e());
          },
        }));
    }
}
function G0() {
  if (!X) return;
  (ln++, (Bn.length = 0));
  const e = ln,
    t = "./",
    n = new Bi(),
    i = 6;
  let o = 0;
  const a = [];
  T.forEach((s, d) => {
    const c = s.mesh.material,
      l = c.map ?? null;
    ((ze[d] = l),
      l && (l.dispose(), (c.map = null), (c.needsUpdate = !0)),
      a.push(d));
  });
  const r = () => {
    for (; o < i && a.length > 0; ) {
      const s = a.shift();
      o++;
      const d = T[s].mesh.material,
        c = String(s + 1).padStart(4, "0");
      n.load(
        `${t}images/thumbs/${c}.jpg`,
        (l) => {
          if ((o--, ln !== e)) {
            (l.dispose(), r());
            return;
          }
          ((l.colorSpace = Te),
            (l.generateMipmaps = !1),
            (l.minFilter = Pn),
            (d.map = l),
            (d.needsUpdate = !0),
            r());
        },
        void 0,
        () => {
          (o--, r());
        },
      );
    }
  };
  r();
}
function ro(e) {
  if (!X || ze.length === 0) return;
  (ln++, (Nt = Wt = Ut = 0));
  const t = e !== void 0,
    n = t && (ze[e] ?? null) == null;
  (T.forEach((i, o) => {
    (ze[o] ?? null) != null &&
      (T.resetLoaded(o),
      t &&
        Math.min(Math.abs(o - e), At - Math.abs(o - e)) <= 3 &&
        T.forceReloadTexture(o));
  }),
    (ze.length = 0),
    t && n && T.forceReloadTexture(e));
}
let Gt = null;
function Y0() {
  if (!X || Gt) return;
  const e = Math.min(24, Math.max(16, window.innerWidth * 0.05)),
    t = `400 ${e}px "Helvetica Neue", Helvetica, Arial, sans-serif`,
    n = co("Görmek istediğiniz günü seçin.", t),
    i = Math.round(e * 1.3) + 4,
    o = Math.round((i + 4) / 2),
    a = Math.round(window.innerHeight / 2) + o,
    r = document.createElement("div");
  r.style.cssText = `
    position: fixed;
    left: calc(50% - ${n / 2}px); top: ${a}px;
    pointer-events: none; z-index: 200;
    opacity: 0;
  `;
  const s = document.createElement("div");
  s.style.cssText = `
    position: absolute; left: 0; top: -${i + 4}px;
    height: ${i}px; width: ${n}px; overflow: hidden;
    display: flex; align-items: flex-end;
  `;
  for (const c of "Görmek istediğiniz günü seçin.") {
    const l = document.createElement("span");
    ((l.className = "mb-td-char"),
      (l.style.cssText = `
      display: inline-block;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: ${e}px; font-weight: 400; letter-spacing: 0.04em;
      color: rgba(255,255,255,0.6); white-space: pre;
      line-height: 1.3; transform: translateY(110%); opacity: 0;
    `),
      (l.textContent = c),
      s.appendChild(l));
  }
  r.appendChild(s);
  const d = document.createElement("div");
  ((d.className = "mb-td-bar"),
    (d.style.cssText = `
    width: ${n}px; height: 1px;
    background: rgba(255,255,255,0.85);
    transform: scaleX(0); transform-origin: left center;
    position: relative;
  `),
    r.appendChild(d),
    document.body.appendChild(r),
    (Gt = r),
    document.fonts.ready.then(() => {
      if (!Gt) return;
      const c = s.scrollWidth;
      (c > 0 &&
        c !== n &&
        ((r.style.left = `calc(50% - ${c / 2}px)`),
        (d.style.width = `${c}px`),
        (s.style.width = `${c}px`)),
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            Gt &&
              ((r.style.transition = "opacity 0.4s ease"),
              (r.style.opacity = "1"),
              (d.style.transition =
                "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)"),
              (d.style.transform = "scaleX(1)"),
              setTimeout(() => {
                Gt &&
                  ((r.style.transition =
                    "top 1.0s cubic-bezier(0.25, 0.46, 0.45, 0.94)"),
                  (r.style.top = `${Math.round(window.innerHeight * 0.42) + o}px`),
                  setTimeout(() => {
                    if (!Gt) return;
                    (s.querySelectorAll(".mb-td-char").forEach((p, u) => {
                      setTimeout(() => {
                        Gt &&
                          ((p.style.transition =
                            "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease"),
                          (p.style.transform = "translateY(0)"),
                          (p.style.opacity = "1"));
                      }, u * 22);
                    }),
                      setTimeout(() => {
                        St && St.classList.add("dp-close-show");
                      }, 1550));
                  }, 200));
              }, 700));
          }),
        ));
    }));
}
function lo() {
  const e = Gt;
  ((Gt = null),
    e &&
      ((e.style.transition = "opacity 0.3s ease"),
      (e.style.opacity = "0"),
      setTimeout(() => e.remove(), 400)));
}
let xt = null,
  Ne = [],
  fn = !1,
  le = 0,
  $t = 0,
  _t = null;
function co(e, t) {
  const n = document.createElement("span");
  ((n.style.cssText = `position:fixed;visibility:hidden;white-space:nowrap;font:${t};`),
    (n.textContent = e),
    document.body.appendChild(n));
  const i = Math.ceil(n.getBoundingClientRect().width);
  return (n.remove(), i);
}
function q0() {
  const t = co(
      "Görmek istediğiniz günü seçin.",
      '100 45px "Helvetica Neue", Helvetica, Arial, sans-serif',
    ),
    n = document.createElement("div");
  ((n.dataset.lineW = `${t}`),
    (n.dataset.finalTop = "35vh"),
    (n.style.cssText = `
    position: fixed;
    left: calc(50% - ${t / 2}px);
    top: 50vh;
    pointer-events: none; z-index: 200;
  `));
  const i = document.createElement("div");
  ((i.className = "tdl-bar"),
    (i.style.cssText = `
    width: ${t}px; height: 1px;
    background: rgba(255,255,255,0.85);
    transform: scaleX(0); transform-origin: left center;
    position: relative;
  `),
    n.appendChild(i));
  const o = document.createElement("span");
  ((o.className = "tdl-pct"),
    (o.style.cssText = `
    position: absolute; left: 0; top: -14px;
    transform: translateX(10px);
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 30px; font-weight: 100; letter-spacing: 0.04em;
    color: rgba(255,255,255,0.8); white-space: nowrap; line-height: 1;
  `),
    (o.textContent = "0%"),
    n.appendChild(o));
  const a = document.createElement("div");
  ((a.className = "tdl-text-wrap"),
    (a.style.cssText = `
    position: absolute; top: -70px; left: 0;
    height: 62px; overflow: hidden;
    display: flex; align-items: flex-end;
  `));
  for (const r of "Görmek istediğiniz günü seçin.") {
    const s = document.createElement("span");
    ((s.className = "tdl-char"),
      (s.style.cssText = `
      display: inline-block;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 45px; font-weight: 100; letter-spacing: 0.04em;
      color: rgba(255,255,255,0.6); white-space: pre;
      line-height: 1.3; transform: translateY(110%); opacity: 0;
    `),
      (s.textContent = r),
      a.appendChild(s));
  }
  return (
    n.appendChild(a),
    document.body.appendChild(n),
    document.fonts.ready.then(() => {
      if (!xt) return;
      const r = a.scrollWidth;
      r > 0 &&
        r !== t &&
        ((n.dataset.lineW = `${r}`),
        (n.style.left = `calc(50% - ${r / 2}px)`),
        (i.style.width = `${r}px`));
    }),
    n
  );
}
function ho() {
  if (((_t = null), !xt)) return;
  const e = parseFloat(xt.dataset.lineW ?? "200"),
    t = xt.querySelector(".tdl-bar"),
    n = xt.querySelector(".tdl-pct");
  (($t += (le - $t) * 0.12), Math.abs(le - $t) < 0.1 && ($t = le));
  const i = $t / 100;
  ((t.style.transform = `scaleX(${i})`),
    (n.style.transform = `translateX(${i * e + 10}px)`),
    (n.textContent = `${Math.round($t)}%`),
    $t < le - 0.05
      ? (_t = requestAnimationFrame(ho))
      : le >= 100 && $t >= 100 && N0());
}
function X0(e, t) {
  xt &&
    ((le = Math.min((e / t) * 100, 100)),
    _t === null && (_t = requestAnimationFrame(ho)));
}
function N0() {
  if (!xt || fn) return;
  ((fn = !0), _t !== null && (cancelAnimationFrame(_t), (_t = null)));
  const e = xt,
    t = parseFloat(e.dataset.lineW ?? "200"),
    n = e.querySelector(".tdl-bar"),
    i = e.querySelector(".tdl-pct");
  ((n.style.transform = "scaleX(1)"),
    (i.style.transition = "opacity 0.2s ease, transform 0.2s ease"),
    (i.style.transform = `translateX(${t + 10}px) translateY(-5px)`),
    (i.style.opacity = "0"),
    (e.style.transition = "top 1.0s cubic-bezier(0.25, 0.46, 0.45, 0.94)"),
    (e.style.top = "42vh"),
    Ne.push(
      setTimeout(() => {
        if (!xt) return;
        e.querySelectorAll(".tdl-char").forEach((a, r) => {
          Ne.push(
            setTimeout(() => {
              xt &&
                ((a.style.transition =
                  "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease"),
                (a.style.transform = "translateY(0)"),
                (a.style.opacity = "1"));
            }, r * 22),
          );
        });
      }, 200),
    ),
    Ne.push(
      setTimeout(() => {
        St && St.classList.add("dp-close-show");
      }, 1750),
    ));
}
function po(e = !1) {
  (_t !== null && (cancelAnimationFrame(_t), (_t = null)),
    ($t = 0),
    (le = 0),
    Ne.forEach((o) => clearTimeout(o)),
    (Ne = []));
  const t = xt;
  if (((xt = null), !t)) return;
  if (e) {
    t.remove();
    return;
  }
  const n = t.querySelectorAll(".tdl-char"),
    i = t.querySelector(".tdl-bar");
  (n.forEach((o) => {
    ((o.style.transition = "transform 0.2s ease-in, opacity 0.2s ease-in"),
      (o.style.transform = "translateY(100%)"),
      (o.style.opacity = "0"));
  }),
    setTimeout(() => {
      i &&
        ((i.style.transition = "transform 0.3s ease-in"),
        (i.style.transform = "scaleX(0)"));
    }, 230),
    setTimeout(() => t.remove(), 570));
}
function Ei() {
  var e;
  for (const t of T)
    t.mesh.parent.rotation.set(-Math.PI / 2, Math.PI + t.angle, 0, "YXZ");
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  ) {
    (O.setPixelRatio(1),
      G0(),
      Y0(),
      (ee = setTimeout(() => {
        ((ee = null), P0() && _0());
      }, 1e3)));
    return;
  }
  ((fn = !1),
    (xt = q0()),
    (e = T.loadAll) == null || e.call(T, (t, n) => X0(t, n)));
}
function uo() {
  for (const e of T) e.mesh.parent.rotation.set(0, Math.PI + e.angle, 0);
}
function fo(e) {
  if (j) return;
  if (
    (ye(!0),
    po(),
    ee !== null && (clearTimeout(ee), (ee = null)),
    lo(),
    (be = !1),
    (ne = !1),
    (ve = !1),
    (xe = null),
    ro(T.indexOf(e)),
    (at = !1),
    de == null || de(),
    (yt = !0),
    Bt.setTopDown(!1),
    Rt.setTopDown(!1),
    (h.fov = 50),
    h.updateProjectionMatrix(),
    St)
  ) {
    const i = St;
    ((St = null),
      i.classList.remove("dp-close-show"),
      setTimeout(() => i.remove(), 500));
  }
  (uo(),
    C.killTweensOf(Q.position),
    (Q.position.y = K + 30),
    (Q.visible = !1),
    (G.background = new Dt(16119024)),
    tt.setTopDown(!1),
    h.up.set(0, 1, 0));
  const t = document.createElement("div");
  ((t.style.cssText = `
    position: fixed; inset: 0; background: #0d0d0d;
    z-index: 15; pointer-events: none; transition: opacity 2.5s ease;
  `),
    document.body.appendChild(t),
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        t.style.opacity = "0";
      }),
    ),
    setTimeout(() => t.remove(), 3100),
    (j = !0),
    D.setEnabled(!1),
    D.hideMobileControls(),
    Ot.duck(),
    Bt.setFocused(!0),
    ce.copy(Ae),
    (pe = Ye),
    (ue = qe),
    (ot = T.indexOf(e)),
    Rt.show(ot),
    Kn(ot),
    tt.setFocusedClickMode(null),
    tt.setHoverEnabled(!1),
    ct.setFocused(e),
    ot === 365 && tn.show(),
    C.killTweensOf(h.position));
  const n = e;
  (C.to(Q.position, {
    y: K,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.8,
    onStart() {
      Q.visible = !0;
    },
    onComplete() {
      const o = Dn,
        a = o.near,
        r = o.far;
      ((o.near = 200),
        (o.far = 300),
        (G.fog = o),
        C.to(o, { near: a, far: r, duration: 2, ease: "power2.out" }),
        ct.setBeamsVisible(!0, { duration: 2 }),
        Pe.setVisible(!0, { duration: 2 }));
    },
  }),
    C.to(h.position, {
      x: 0,
      y: X ? 1.6 : 1.65,
      z: 0,
      duration: 1.6,
      ease: "power3.in",
      onComplete() {
        ((yt = !1),
          so(n, 2.2, "power4.out", () => {
            X && Xi() && Ni();
          }),
          (Pt = setTimeout(() => {
            ((Pt = null), Xt.show(e.work, _e, Xe()));
          }, 600)));
      },
    }));
}
let yt = !1;
function W0() {
  const e = G.fog,
    t = G.background,
    n = h.position.clone(),
    i = h.quaternion.clone(),
    o = h.fov,
    a = h.up.clone();
  ((G.fog = null),
    (G.background = new Dt(855309)),
    (Q.visible = !1),
    h.up.set(0, 0, 1),
    h.position.set(0, 170, 0),
    h.lookAt(0, 0, 0),
    (h.fov = 50),
    h.updateProjectionMatrix());
  const r = new qo(1, 1);
  (O.setRenderTarget(r), O.render(G, h), ct.setBeamsVisible(!1));
  for (const c of T)
    c.mesh.parent.rotation.set(-Math.PI / 2, Math.PI + c.angle, 0, "YXZ");
  O.render(G, h);
  const s = T[0].mesh.material,
    d = s.map;
  ((s.map = null),
    (s.needsUpdate = !0),
    O.render(G, h),
    (s.map = d),
    (s.needsUpdate = !0),
    O.setRenderTarget(null),
    r.dispose());
  for (const c of T) c.mesh.parent.rotation.set(0, Math.PI + c.angle, 0);
  (ct.setBeamsVisible(!0),
    (Q.visible = !0),
    (h.fov = o),
    h.up.copy(a),
    h.position.copy(n),
    h.quaternion.copy(i),
    h.updateProjectionMatrix(),
    (G.fog = e),
    (G.background = t));
}
function U0() {
  const e = window.innerWidth / window.innerHeight;
  if (e >= 1) return 50;
  const t = Math.atan(nt / (170 * e)) * 1.08;
  return Math.min(100, (t * 2 * 180) / Math.PI);
}
function mo(e) {
  const t = window.innerWidth / window.innerHeight;
  if (t >= 1) {
    const i = Math.atan(nt / (e * t)) * 1.08;
    return Math.max(50, Math.min(90, i * 2 * (180 / Math.PI)));
  }
  const n = Math.atan(nt / (e * t)) * 1.08;
  return Math.max(50, Math.min(110, n * 2 * (180 / Math.PI)));
}
function Yn() {
  if (at || j) return;
  ((at = !0),
    (yt = !0),
    Bt.setTopDown(!0),
    Pe.setVisible(!1),
    D.setEnabled(!1),
    D.hideMobileControls(),
    C.isTweening(h.position)
      ? (C.killTweensOf(h.position),
        C.killTweensOf(pt),
        h.position.copy(ce),
        D.setYaw(pe),
        D.setPitch(ue),
        h.quaternion.setFromEuler(new vt(ue, pe, 0, "YXZ")))
      : (C.killTweensOf(h.position), C.killTweensOf(pt)),
    Ae.copy(h.position),
    (Ye = D.getYaw()),
    (qe = D.getPitch()),
    tt.setTopDown(!0),
    Rt.setTopDown(!0),
    (h.fov = U0()),
    h.updateProjectionMatrix());
  const e = h.clone();
  (e.up.set(0, 0, 1), e.position.set(0, 170, 0), e.lookAt(0, 0, 0));
  const t = e.quaternion.clone(),
    n = h.quaternion.clone(),
    i = { t: 0 };
  if ((h.up.set(0, 0, 1), Ce))
    (h.position.set(0, 170, 0),
      h.quaternion.copy(t),
      C.killTweensOf(Q.position),
      (Q.position.y = K),
      (Q.visible = !1),
      (G.background = new Dt(855309)),
      (G.fog = null),
      ct.setBeamsVisible(!1),
      Ei(),
      (yt = !1));
  else {
    C.killTweensOf(h.position);
    let a = !1;
    (C.to(h.position, {
      x: 0,
      y: 170,
      z: 0,
      duration: 2.8,
      ease: "power4.out",
      onUpdate() {
        !a &&
          h.position.y > 15 &&
          ((a = !0),
          C.killTweensOf(Q.position),
          (Q.position.y = K),
          (Q.visible = !1),
          (G.background = new Dt(855309)),
          (G.fog = null));
      },
    }),
      C.to(i, {
        t: 1,
        duration: 2.8,
        ease: "power4.out",
        onUpdate() {
          h.quaternion.slerpQuaternions(n, t, i.t);
        },
        onComplete() {
          (ct.setBeamsVisible(!1), Ei(), (yt = !1));
        },
      }));
  }
  const o = document.createElement("button");
  ((o.className = "dp-close-btn topdown-close-btn"),
    (o.style.top = X ? "88%" : "73%"),
    o.setAttribute("aria-label", "Close top-down view"),
    o.addEventListener("click", Qn),
    document.body.appendChild(o),
    (St = o));
}
function Qn() {
  if (!at) return;
  if (
    ((at = !1),
    (yt = !0),
    Bt.setTopDown(!1),
    ye(!0),
    po(),
    ee !== null && (clearTimeout(ee), (ee = null)),
    lo(),
    (be = !1),
    (ne = !1),
    (ve = !1),
    (xe = null),
    ro(),
    (h.fov = 50),
    X && O.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)),
    h.updateProjectionMatrix(),
    uo(),
    St)
  ) {
    const o = St;
    ((St = null),
      o.classList.remove("dp-close-show"),
      setTimeout(() => o.remove(), 500));
  }
  (C.killTweensOf(Q.position),
    (Q.position.y = K + 30),
    (Q.visible = !1),
    (G.background = new Dt(16119024)),
    tt.setTopDown(!1),
    Rt.setTopDown(!1),
    h.up.set(0, 1, 0),
    C.killTweensOf(O),
    (O.toneMappingExposure = 0),
    C.to(O, {
      toneMappingExposure: 1.25,
      duration: 4,
      ease: "power3.out",
      delay: 0.5,
    }));
  const e = document.createElement("div");
  ((e.style.cssText = `
    position: fixed; inset: 0;
    background: #0d0d0d;
    z-index: 15; pointer-events: none;
    transition: opacity 2.0s ease;
  `),
    document.body.appendChild(e),
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        e.style.opacity = "0";
      }),
    ),
    setTimeout(() => e.remove(), 2100));
  const t = h.quaternion.clone(),
    n = new Ke().setFromEuler(new vt(qe, Ye, 0, "YXZ")),
    i = { t: 0 };
  Ce
    ? (h.position.copy(Ae),
      h.quaternion.copy(n),
      D.setYaw(Ye),
      D.setPitch(qe),
      D.setEnabled(!0),
      D.showMobileControls(),
      (G.fog = Dn),
      ct.setBeamsVisible(!0),
      Pe.setVisible(!0),
      (yt = !1),
      (Q.position.y = K),
      (Q.visible = !0),
      un())
    : (C.killTweensOf(h.position),
      C.to(Q.position, {
        y: K,
        duration: 1.5,
        ease: "power2.out",
        delay: 1.5,
        onStart() {
          Q.visible = !0;
        },
        onComplete() {
          const a = Dn,
            r = a.near,
            s = a.far;
          ((a.near = 200),
            (a.far = 300),
            (G.fog = a),
            C.to(a, { near: r, far: s, duration: 2.5, ease: "power2.out" }),
            ct.setBeamsVisible(!0, { duration: 2.5 }),
            Pe.setVisible(!0, { duration: 2.5 }));
        },
      }),
      C.to(h.position, {
        x: Ae.x,
        y: Ae.y,
        z: Ae.z,
        duration: 3,
        ease: "power4.out",
      }),
      C.to(i, {
        t: 1,
        duration: 3,
        ease: "power4.out",
        onUpdate() {
          h.quaternion.slerpQuaternions(t, n, i.t);
        },
        onComplete() {
          (D.setYaw(Ye),
            D.setPitch(qe),
            D.setRoll(0),
            D.setEnabled(!0),
            D.showMobileControls(),
            (yt = !1),
            un());
        },
      }));
}
window.addEventListener("keydown", (e) => {
  if (e.code === "Digit0" && !e.repeat && !yn && !Qt && j) {
    for (let t = 0; t < At; t++) (Ie.add(t), Rt.show(t));
    (tn.show(),
      (bt.style.transition = "none"),
      (bt.style.transform = "translateY(0)"),
      (bt.textContent = String(At)),
      setTimeout(vo, 3e3));
    return;
  }
  if (at) {
    e.code === "Escape" && Qn();
    return;
  }
  !j ||
    e.repeat ||
    ((e.code === "ArrowRight" || e.code === "KeyD") && je(1),
    (e.code === "ArrowLeft" || e.code === "KeyA") && je(-1),
    (e.code === "ArrowDown" || e.code === "KeyS") && _e());
});
const Kt = new Yo(),
  jt = new Zi(),
  mn = T.map((e) => e.mesh);
let qn = { x: 0, y: 0 };
O.domElement.addEventListener("mousedown", (e) => {
  qn = { x: e.clientX, y: e.clientY };
});
O.domElement.addEventListener("click", (e) => {
  const t = e.clientX - qn.x,
    n = e.clientY - qn.y;
  if (Math.sqrt(t * t + n * n) > 5 || j) return;
  ((jt.x = (e.clientX / window.innerWidth) * 2 - 1),
    (jt.y = -(e.clientY / window.innerHeight) * 2 + 1),
    Kt.setFromCamera(jt, h));
  const i = Kt.intersectObjects(mn);
  if (i.length > 0) {
    const o = i[0].object.userData.workId,
      a = T.find((r) => r.work.id === o);
    a && (at ? (Fe(), fo(a)) : (Fe(), ao(a)));
  }
});
O.domElement.addEventListener(
  "touchend",
  (e) => {
    if (j) return;
    if (at && ve) {
      ve = !1;
      return;
    }
    if (e.changedTouches.length !== 1) return;
    const t = e.changedTouches[0];
    ((jt.x = (t.clientX / window.innerWidth) * 2 - 1),
      (jt.y = -(t.clientY / window.innerHeight) * 2 + 1),
      Kt.setFromCamera(jt, h));
    const n = Kt.intersectObjects(mn);
    if (n.length > 0) {
      const i = n[0].object.userData.workId,
        o = T.find((a) => a.work.id === i);
      o && (at ? (Fe(), fo(o)) : (Fe(), ao(o)));
    }
  },
  { passive: !0 },
);
let We = null,
  yo = 0,
  wo = 0;
O.domElement.addEventListener(
  "touchstart",
  (e) => {
    j &&
      e.touches.length === 1 &&
      ((We = e.touches[0].identifier),
      (yo = e.touches[0].clientX),
      (wo = e.touches[0].clientY));
  },
  { passive: !0 },
);
O.domElement.addEventListener(
  "touchend",
  (e) => {
    if (!j || We === null) return;
    let t = null;
    for (let o = 0; o < e.changedTouches.length; o++)
      if (e.changedTouches[o].identifier === We) {
        t = e.changedTouches[o];
        break;
      }
    if (!t) return;
    We = null;
    const n = t.clientX - yo,
      i = t.clientY - wo;
    Math.abs(n) > 50 && Math.abs(n) > Math.abs(i) * 1.5 && je(n < 0 ? 1 : -1);
  },
  { passive: !0 },
);
O.domElement.addEventListener(
  "touchcancel",
  () => {
    We = null;
  },
  { passive: !0 },
);
O.domElement.addEventListener(
  "touchstart",
  (e) => {
    if (!at || yt || e.touches.length < 2) return;
    e.preventDefault();
    const t = e.touches[0],
      n = e.touches[1];
    ((be = !0),
      (to = Math.hypot(n.clientX - t.clientX, n.clientY - t.clientY)),
      (eo = h.position.y),
      (Ut = 0),
      (zn = e.timeStamp),
      (In = h.position.y));
    const i = (t.clientX + n.clientX) / 2,
      o = (t.clientY + n.clientY) / 2;
    ((Rn = (i / window.innerWidth) * 2 - 1),
      (On = -((o / window.innerHeight) * 2 - 1)));
    const a = (h.fov * Math.PI) / 180,
      r = Math.tan(a / 2),
      s = r * (window.innerWidth / window.innerHeight);
    ((no = h.position.x - Rn * s * h.position.y),
      (io = h.position.z + On * r * h.position.y));
  },
  { passive: !1 },
);
O.domElement.addEventListener(
  "touchmove",
  (e) => {
    if (!be || !at || e.touches.length < 2) return;
    e.preventDefault();
    const t = e.touches[0],
      n = e.touches[1],
      o = Math.hypot(n.clientX - t.clientX, n.clientY - t.clientY) / to,
      a = Math.max(Ji, Math.min(Ki, eo / o)),
      r = e.timeStamp,
      s = r - zn;
    (s > 2 &&
      ((Ut = ((a - In) / s) * 0.6 + Ut * 0.4),
      (Ut = Math.max(-0.08, Math.min(0.08, Ut)))),
      (In = a),
      (zn = r),
      (h.position.y = a),
      (h.fov = mo(a)),
      h.updateProjectionMatrix());
    const d = (h.fov * Math.PI) / 180,
      c = Math.tan(d / 2),
      l = c * (window.innerWidth / window.innerHeight),
      p = no + Rn * l * a,
      u = io - On * c * a,
      w = nt * 1.5;
    ((h.position.x = Math.max(-w, Math.min(w, p))),
      (h.position.z = Math.max(-w, Math.min(w, u))));
  },
  { passive: !1 },
);
O.domElement.addEventListener(
  "touchend",
  (e) => {
    e.touches.length < 2 && (be = !1);
  },
  { passive: !0 },
);
O.domElement.addEventListener(
  "touchcancel",
  () => {
    be = !1;
  },
  { passive: !0 },
);
O.domElement.addEventListener(
  "touchstart",
  (e) => {
    !at ||
      yt ||
      e.touches.length !== 1 ||
      (e.preventDefault(),
      (ne = !0),
      (ve = !1),
      (xe = e.touches[0].identifier),
      ($n = e.touches[0].clientX),
      (Gn = e.touches[0].clientY),
      (Nt = Wt = 0),
      (Zn = e.timeStamp));
  },
  { passive: !1 },
);
O.domElement.addEventListener(
  "touchmove",
  (e) => {
    if (!ne || !at) return;
    if (e.touches.length > 1) {
      ne = !1;
      return;
    }
    let t = null;
    for (let m = 0; m < e.touches.length; m++)
      if (e.touches[m].identifier === xe) {
        t = e.touches[m];
        break;
      }
    if (!t) return;
    e.preventDefault();
    const n = t.clientX - $n,
      i = t.clientY - Gn;
    (($n = t.clientX), (Gn = t.clientY));
    const o = e.timeStamp,
      a = o - Zn;
    (a > 2 &&
      ((Nt = (n / a) * 0.6 + Nt * 0.4),
      (Wt = (i / a) * 0.6 + Wt * 0.4),
      (Nt = Math.max(-2, Math.min(2, Nt))),
      (Wt = Math.max(-2, Math.min(2, Wt)))),
      (Zn = o),
      !ve && Math.hypot(n, i) > 8 && (ve = !0));
    const r = (h.fov * Math.PI) / 180,
      s = Math.tan(r / 2),
      c =
        (2 * (s * (window.innerWidth / window.innerHeight)) * h.position.y) /
        window.innerWidth,
      l = (2 * s * h.position.y) / window.innerHeight,
      p = h.position.x + n * c,
      u = h.position.z + i * l,
      w = nt * 1.5;
    ((h.position.x = Math.max(-w, Math.min(w, p))),
      (h.position.z = Math.max(-w, Math.min(w, u))));
  },
  { passive: !1 },
);
O.domElement.addEventListener(
  "touchend",
  (e) => {
    for (let t = 0; t < e.changedTouches.length; t++)
      if (e.changedTouches[t].identifier === xe) {
        ((ne = !1), (xe = null));
        break;
      }
  },
  { passive: !0 },
);
O.domElement.addEventListener(
  "touchcancel",
  () => {
    ((ne = !1), (xe = null));
  },
  { passive: !0 },
);
X && O.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
function Ai() {
  if (X) {
    D.showMobileControls();
    const i = document.createElement("div");
    ((i.style.cssText = `
      position: fixed;
      bottom: 176px; left: 50%;
      transform: translateX(-50%) translateY(4px);
      padding: 9px 22px;
      font-family: -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 11px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.65);
      text-align: center;
      line-height: 2;
      white-space: nowrap;
      z-index: 200;
      pointer-events: none;
      opacity: 0;
      background: rgba(0,0,0,0.2);
      transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1);
    `),
      (i.innerHTML =
        '<span style="letter-spacing:0.08em;text-transform:uppercase">Sol kol: hareket  ·  Sağ kol: bakış  ·  Görmek için dokun</span>'),
      document.body.appendChild(i),
      requestAnimationFrame(() => {
        ((i.style.opacity = "1"),
          (i.style.transform = "translateX(-50%) translateY(0)"));
      }));
    let o = !1;
    const a = () => {
      o ||
        ((o = !0),
        (i.style.opacity = "0"),
        (i.style.transform = "translateX(-50%) translateY(-4px)"),
        tt.stopHintPulse(),
        setTimeout(() => {
          i.remove();
        }, 1e3));
    };
    (window.addEventListener("pointerdown", a, { once: !0 }),
      window.addEventListener("wheel", a, { once: !0 }));
    return;
  }
  const e = w0();
  (document.body.appendChild(e),
    requestAnimationFrame(() => {
      ((e.style.opacity = "1"), (e.style.transform = "translateY(0)"));
    }));
  let t = !1;
  const n = () => {
    t ||
      ((t = !0),
      (e.style.opacity = "0"),
      (e.style.transform = "translateY(-4px)"),
      tt.stopHintPulse(),
      setTimeout(() => {
        e.remove();
      }, 1e3),
      window.removeEventListener("keydown", n),
      window.removeEventListener("pointerdown", n),
      window.removeEventListener("wheel", n));
  };
  (window.addEventListener("keydown", n, { once: !0 }),
    window.addEventListener("pointerdown", n, { once: !0 }),
    window.addEventListener("wheel", n, { once: !0 }));
}
const De = document.createElement("div");
De.style.cssText = `
  position: fixed;
  bottom: 21px; left: 50%;
  transform: translateX(-50%);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 10px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.06em;
  white-space: nowrap;
  z-index: 150;
  pointer-events: none;
  opacity: 0;
  transition: opacity 1.0s ease;
`;
De.textContent = "© 2026 Mina Lidya. Tüm Hakları Saklıdır.";
document.body.appendChild(De);
const ie = document.createElement("div");
ie.style.cssText = `
  position: fixed;
  bottom: 20px; left: 20px;
  display: flex;
  align-items: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: ${X ? "11px" : "15px"};
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.06em;
  z-index: 150;
  pointer-events: none;
  opacity: 0;
  transition: opacity 1.0s ease;
`;
const Jn = document.createElement("div");
Jn.style.cssText = "overflow: hidden; padding: 0.12em 0;";
const bt = document.createElement("div");
bt.textContent = "1";
Jn.appendChild(bt);
ie.appendChild(Jn);
const go = document.createElement("span");
go.style.cssText = `
  display: inline-block;
  width: 1px; height: 1em;
  background: currentColor;
  transform: rotate(45deg);
  margin: 0 0.45em;
  flex-shrink: 0;
`;
ie.appendChild(go);
const xo = document.createElement("span");
xo.textContent = "289";
ie.appendChild(xo);
document.body.appendChild(ie);
const Ie = new Set([0]);
let An = null;
function Kn(e) {
  if (Ie.has(e)) return;
  Ie.add(e);
  const t = String(Ie.size);
  ((bt.style.transition = "transform 0.25s cubic-bezier(0.4, 0, 1, 1)"),
    (bt.style.transform = "translateY(-115%)"),
    An !== null && clearTimeout(An),
    (An = setTimeout(() => {
      ((bt.textContent = t),
        (bt.style.transition = "none"),
        (bt.style.transform = "translateY(115%)"),
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            ((bt.style.transition =
              "transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)"),
              (bt.style.transform = "translateY(0)"));
          }),
        ));
    }, 260)),
    Ie.size === At && !yn && setTimeout(vo, 3e3));
}
let yn = !1;
function vo() {
  if (!(yn || Qt)) {
    if (((yn = !0), j)) {
      ((j = !1),
        he == null || he(),
        Xt.hide(),
        tt.setFocusedClickMode(null),
        tt.setHoverEnabled(!0),
        Ot.restore(),
        Bt.setFocused(!1),
        ct.setFocused(null),
        D.setEnabled(!1),
        C.killTweensOf(h.position),
        C.killTweensOf(pt),
        C.to(h.position, {
          x: 0,
          z: 0,
          duration: 2.5,
          ease: "power2.inOut",
          onComplete() {
            Sn();
          },
        }));
      return;
    }
    if (at) {
      (Qn(), setTimeout(Sn, 4200));
      return;
    }
    setTimeout(Sn, 500);
  }
}
function Sn() {
  (D.setEnabled(!1),
    D.hideMobileControls(),
    Xt.hide(),
    (ie.style.transition = "opacity 1.0s ease"),
    (ie.style.opacity = "0"),
    (De.style.transition = "opacity 1.0s ease"),
    (De.style.opacity = "0"),
    tt.setTopDown(!1));
  const e = 3;
  ((Q.visible = !0),
    C.to(Q.position, { y: 220, duration: e * 1.2, ease: "power2.in" }));
  const t = new Dt(G.background),
    n = new Dt(855309);
  if (
    ((G.background = t),
    C.to(t, { r: n.r, g: n.g, b: n.b, duration: e, ease: "power2.inOut" }),
    G.fog instanceof Oi)
  ) {
    const i = G.fog;
    C.to(i, {
      near: 120,
      far: 240,
      duration: e,
      ease: "power2.inOut",
      onComplete() {
        G.fog = null;
      },
    });
  } else G.fog = null;
  (ct.setBeamsVisible(!1, { duration: e }),
    Pe.setVisible(!0),
    Rt.setTopDown(!0, 8),
    F0({ camera: h, visitedDots: Rt }));
}
const rn = new vt(),
  Hn = new Zi();
let Tt = null,
  Ue = null,
  Mt = [],
  Qe = !1,
  He = !1,
  Vt = null;
const j0 = 500,
  wn = new Audio("./audio/onClick.mp3");
wn.volume = 0.21;
let $e = null,
  gn = null;
function Fe() {
  if (Ot.isOn() && !(X && Qt)) {
    if (X) {
      if (!$e || !gn) return;
      const e = $e.createBufferSource(),
        t = $e.createGain();
      ((t.gain.value = 0.05),
        (e.buffer = gn),
        e.connect(t),
        t.connect($e.destination),
        e.start());
      return;
    }
    ((wn.currentTime = 0), wn.play().catch(() => {}));
  }
}
let Qt = !0,
  Le = !1;
document.addEventListener("pointerdown", (e) => {
  if (Qt) return;
  const t = e.target;
  t !== O.domElement &&
    (t.closest("#audio-toggle") ||
      t.closest(".dp-nav") ||
      t.closest("[data-joystick]") ||
      Fe());
});
const Xn = new Audio("./audio/dateHover.mp3");
Xn.volume = 0.5;
function Co() {
  Ot.isOn() && (X || Qt || ((Xn.currentTime = 0), Xn.play().catch(() => {})));
}
let xn = null;
document.addEventListener("mouseover", (e) => {
  const t = e.target.closest(".dp-close-btn, .dp-nav, [data-play-hover]");
  t && t !== xn && ((xn = t), Co());
});
document.addEventListener("mouseout", (e) => {
  const t = e.target.closest(".dp-close-btn, .dp-nav, [data-play-hover]");
  if (!t || t !== xn) return;
  const n = e.relatedTarget;
  (!n || !t.contains(n)) && (xn = null);
});
const Si = document.createElement("canvas").getContext("2d");
function Q0(e) {
  return (
    (Si.font = '400 11px "Helvetica Neue", Helvetica, Arial, sans-serif'),
    Math.ceil(Si.measureText(e).width)
  );
}
function J0(e) {
  const t = e.work.index,
    n = t + 1,
    i = n % 100,
    o = ". Gün",
    a = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    r = [
      "Oca",
      "Şub",
      "Mar",
      "Nis",
      "May",
      "Haz",
      "Tem",
      "Ağu",
      "Eyl",
      "Eki",
      "Kas",
      "Ara",
    ];
  let s, d = n, c = 0;
  for (; d > a[c]; ) ((d -= a[c]), c++);
  s = `${r[c]} ${d}`;
  if (n % 5 === 0) {
    const g = gapData[t] || { text: "Mina Lidya Özel İçerik" };
    return `${n}${o}  |  ${g.text}`;
  }
  const p = Math.floor(t / 5) * 4 + (t % 5) + 1;
  const firstWord = (productNames[p-1] || s).split(" ")[0];
  return `${n}${o}  |  ${firstWord}`;
}
function K0(e) {
  const t = e.work.index;
  return t >= 185 && t <= 346
    ? "ul"
    : t >= 347 && t <= 365
      ? "ll"
      : t === 0 || t <= 9
        ? "lr"
        : "ur";
}
function ta() {
  const e = document.createElement("div");
  e.style.cssText =
    "position:fixed;pointer-events:none;z-index:500;display:none;opacity:0.85;";
  const t = document.createElement("div");
  ((t.className = "td-dot"),
    (t.style.cssText =
      "position:absolute;left:-5px;top:-5px;width:10px;height:10px;border-radius:50%;background:#fff;transform:scale(0);"),
    e.appendChild(t));
  const n = "http://www.w3.org/2000/svg",
    i = document.createElementNS(n, "svg");
  (i.setAttribute("width", "1"),
    i.setAttribute("height", "1"),
    (i.style.cssText = "position:absolute;left:0;top:0;overflow:visible;"));
  const o = document.createElementNS(n, "line");
  (o.setAttribute("class", "td-diag"),
    o.setAttribute("x1", "0"),
    o.setAttribute("y1", "0"),
    o.setAttribute("x2", "35"),
    o.setAttribute("y2", "-35"),
    o.setAttribute("stroke", "white"),
    o.setAttribute("stroke-width", "1"),
    (o.style.cssText = "stroke-dasharray:50;stroke-dashoffset:50;"));
  const a = document.createElementNS(n, "line");
  (a.setAttribute("class", "td-horiz"),
    a.setAttribute("x1", "35"),
    a.setAttribute("y1", "-35"),
    a.setAttribute("x2", "35"),
    a.setAttribute("y2", "-35"),
    a.setAttribute("stroke", "white"),
    a.setAttribute("stroke-width", "1"),
    (a.style.cssText = "stroke-dasharray:0;stroke-dashoffset:0;"),
    i.appendChild(o),
    i.appendChild(a),
    e.appendChild(i));
  const r = document.createElement("div");
  ((r.className = "td-text-wrap"),
    (r.style.cssText =
      "position:absolute;left:38px;top:-59px;overflow:hidden;height:21px;display:flex;align-items:flex-end;"));
  const s = document.createElement("div");
  return (
    (s.className = "td-text"),
    (s.style.cssText =
      'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:11px;font-weight:400;letter-spacing:0.07em;line-height:1;color:#fff;white-space:nowrap;transform:translateY(100%);'),
    r.appendChild(s),
    e.appendChild(r),
    document.body.appendChild(e),
    e
  );
}
function bo(e, t, n, i, o) {
  ((e.style.transition = "none"),
    (e.style.transform = "scale(0)"),
    (t.style.transition = "none"),
    (t.style.strokeDashoffset = "50"),
    (n.style.transition = "none"),
    (n.style.strokeDashoffset = `${o}`),
    (i.style.transition = "none"),
    (i.style.transform = "translateY(100%)"));
}
function ea(e) {
  Ue || (Ue = ta());
  const t = Ue,
    n = t.querySelector(".td-dot"),
    i = t.querySelector(".td-diag"),
    o = t.querySelector(".td-horiz"),
    a = t.querySelector(".td-text-wrap"),
    r = t.querySelector(".td-text"),
    s = new st();
  e.mesh.getWorldPosition(s);
  const d = s.clone().project(h),
    c = ((d.x + 1) / 2) * window.innerWidth,
    l = (-(d.y - 1) / 2) * window.innerHeight;
  if (
    ((t.style.left = `${c}px`),
    (t.style.top = `${l}px`),
    (t.style.display = "block"),
    Tt === e)
  ) {
    ((He = !0), Vt !== null && (clearTimeout(Vt), (Vt = null)));
    return;
  }
  (Mt.forEach((A) => clearTimeout(A)),
    (Mt = []),
    Vt !== null && (clearTimeout(Vt), (Vt = null)),
    (Tt = e),
    (He = !0),
    (Qe = !0),
    Co());
  const p = K0(e),
    u = p === "ul" || p === "ll",
    w = u ? -35 : 35,
    m = p === "ul" || p === "ur" ? -35 : 35;
  (i.setAttribute("x2", `${w}`),
    i.setAttribute("y2", `${m}`),
    o.setAttribute("x1", `${w}`),
    o.setAttribute("y1", `${m}`));
  const x = J0(e),
    y = Q0(x) + 10;
  r.textContent = x;
  const g = u ? y + 3 : y,
    b = u ? w - g : w + g;
  (o.setAttribute("x2", `${b}`),
    o.setAttribute("y2", `${m}`),
    o.setAttribute("data-line-len", `${g}`),
    (o.style.strokeDasharray = `${g}`),
    (o.style.strokeDashoffset = `${g}`),
    (a.style.width = `${y}px`),
    (a.style.left = `${u ? w - y - 3 : w + 3}px`),
    (a.style.top = `${m - 21 - 3}px`),
    bo(n, i, o, r, g),
    requestAnimationFrame(() => {
      ((n.style.transition = "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)"),
        (n.style.transform = "scale(1)"),
        Mt.push(
          setTimeout(() => {
            Tt === e &&
              ((i.style.transition =
                "stroke-dashoffset 0.32s cubic-bezier(0.4,0,1,1)"),
              (i.style.strokeDashoffset = "0"));
          }, 250),
        ),
        Mt.push(
          setTimeout(() => {
            Tt === e &&
              ((o.style.transition =
                "stroke-dashoffset 0.32s cubic-bezier(0.4,0,1,1)"),
              (o.style.strokeDashoffset = "0"));
          }, 590),
        ),
        Mt.push(
          setTimeout(() => {
            Tt === e &&
              ((r.style.transition =
                "transform 0.35s cubic-bezier(0.16,1,0.3,1)"),
              (r.style.transform = "translateY(0)"),
              Mt.push(
                setTimeout(() => {
                  Tt === e &&
                    ((Qe = !1), He || (Vt = setTimeout(() => ye(), j0)));
                }, 350),
              ));
          }, 930),
        ));
    }));
}
function ye(e = !1) {
  if (!Ue) return;
  (Mt.forEach((u) => clearTimeout(u)),
    (Mt = []),
    Vt !== null && (clearTimeout(Vt), (Vt = null)),
    (Tt = null),
    (Qe = !1),
    (He = !1));
  const t = Ue,
    n = t.querySelector(".td-dot"),
    i = t.querySelector(".td-diag"),
    o = t.querySelector(".td-horiz"),
    a = t.querySelector(".td-text");
  if (!n) return;
  const r = parseFloat(o.getAttribute("data-line-len") ?? "0");
  if (e) {
    (bo(n, i, o, a, r), (t.style.display = "none"));
    return;
  }
  const s = { text: 200, horiz: 320, diag: 320, dot: 200 },
    c = 0 + s.text + 20,
    l = c + s.horiz + 20,
    p = l + s.diag + 20;
  ((a.style.transition = `transform ${s.text}ms cubic-bezier(0.4,0,1,1)`),
    (a.style.transform = "translateY(100%)"),
    Mt.push(
      setTimeout(() => {
        ((o.style.transition = `stroke-dashoffset ${s.horiz}ms cubic-bezier(0.4,0,1,1)`),
          (o.style.strokeDashoffset = `${r}`));
      }, c),
    ),
    Mt.push(
      setTimeout(() => {
        ((i.style.transition = `stroke-dashoffset ${s.diag}ms cubic-bezier(0.4,0,1,1)`),
          (i.style.strokeDashoffset = "50"));
      }, l),
    ),
    Mt.push(
      setTimeout(() => {
        ((n.style.transition = `transform ${s.dot}ms cubic-bezier(0.4,0,0.6,1)`),
          (n.style.transform = "scale(0)"));
      }, p),
    ),
    Mt.push(
      setTimeout(
        () => {
          t.style.display = "none";
        },
        p + s.dot + 20,
      ),
    ));
}
O.domElement.addEventListener("mousemove", (e) => {
  if (!at) {
    (Tt && ye(!0),
      !j &&
        !Qt &&
        ((jt.x = (e.clientX / window.innerWidth) * 2 - 1),
        (jt.y = -(e.clientY / window.innerHeight) * 2 + 1),
        Kt.setFromCamera(jt, h),
        (O.domElement.style.cursor =
          Kt.intersectObjects(mn).length > 0 ? "pointer" : "")));
    return;
  }
  if (!fn || yt) {
    Tt && ye(!0);
    return;
  }
  ((Hn.x = (e.clientX / window.innerWidth) * 2 - 1),
    (Hn.y = -(e.clientY / window.innerHeight) * 2 + 1),
    Kt.setFromCamera(Hn, h));
  const t = Kt.intersectObjects(mn);
  if (t.length > 0) {
    const n = t[0].object.userData.workId,
      i = T.find((o) => o.work.id === n);
    if (i) {
      ((O.domElement.style.cursor = "pointer"), ea(i));
      return;
    }
  }
  ((O.domElement.style.cursor = ""), (He = !1), !Qe && Tt && ye());
});
O.domElement.addEventListener("mouseleave", () => {
  ((He = !1), (O.domElement.style.cursor = ""), !Qe && Tt && ye());
});
const we = new Audio("./audio/attention.mp3");
we.volume = 0.4;
const Mo = () => {
  const e = (t) => {
    const n = t.volume;
    ((t.volume = 0),
      t
        .play()
        .then(() => {
          (t.pause(), (t.currentTime = 0), (t.volume = n));
        })
        .catch(() => {}));
  };
  X || (e(we), e(wn));
};
document.addEventListener("touchend", Mo, { once: !0, passive: !0 });
document.addEventListener("click", Mo, { once: !0 });
let Je = 0;
const na = 49,
  ia = Math.cos(Math.PI / 9);
let cn = !1;
function oa() {
  const t = Math.round(364.47457627118644),
    n = document.createElement("canvas");
  ((n.width = 256), (n.height = t));
  const i = n.getContext("2d");
  i.clearRect(0, 0, 256, t);
  const o = 256 * 0.25,
    a = t * 0.25,
    r = "rgba(255, 210, 100, 0.9)",
    s = "rgba(255, 210, 100, 0)",
    d = i.createLinearGradient(0, 0, 0, a);
  (d.addColorStop(0, r),
    d.addColorStop(1, s),
    (i.fillStyle = d),
    i.fillRect(0, 0, 256, a));
  const c = i.createLinearGradient(0, t, 0, t - a);
  (c.addColorStop(0, r),
    c.addColorStop(1, s),
    (i.fillStyle = c),
    i.fillRect(0, t - a, 256, a));
  const l = i.createLinearGradient(0, 0, o, 0);
  (l.addColorStop(0, r),
    l.addColorStop(1, s),
    (i.fillStyle = l),
    i.fillRect(0, 0, o, t));
  const p = i.createLinearGradient(256, 0, 256 - o, 0);
  return (
    p.addColorStop(0, r),
    p.addColorStop(1, s),
    (i.fillStyle = p),
    i.fillRect(256 - o, 0, o, t),
    new Ve(n)
  );
}
const sa = oa(),
  Ln = new Map(),
  Hi = new Map(),
  ti = new Map(),
  dn = new Set(),
  Se = 1.5,
  aa = `
  uniform float uTime;
  uniform float uStart;
  varying float vRipple;
  void main() {
    vec3 pos = position;
    vRipple = 0.0;
    if (uStart >= 0.0) {
      float t = uTime - uStart;
      if (t >= 0.0 && t < ${Se.toFixed(1)}) {
        float r = length(pos.xy);
        float wavefront = (t / ${Se.toFixed(1)}) * 1.05;
        float ww = 0.13;
        float dist = abs(r - wavefront);
        float env = exp(-dist * dist / (ww * ww));
        float decay = (1.0 - t / ${Se.toFixed(1)}) * sin(t / ${Se.toFixed(1)} * 3.14159);
        pos.z += 0.06 * env * decay;
        vRipple = env * decay;
      }
    }
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,
  ra = `
  varying float vRipple;
  void main() {
    float alpha = vRipple * 0.22;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(1.0, 0.97, 0.88, alpha);
  }
`;
function la(e) {
  const t = e.work.index;
  if (Ln.has(t)) return { mat: Ln.get(t), glowMat: Hi.get(t) };
  const n = e.mesh.parent,
    o = n.children[1].material.clone();
  (o.emissive.setHex(0), (o.emissiveIntensity = 0));
  for (let u = 1; u <= 4; u++) n.children[u].material = o;
  const a = new ge({
      map: sa,
      transparent: !0,
      opacity: 0,
      blending: Ft,
      depthWrite: !1,
    }),
    r = new et(new te(1.18, 1.68), a);
  ((r.position.z = 0.02 + 0.005),
    (r.renderOrder = 5),
    n.add(r),
    Ln.set(t, o),
    Hi.set(t, a));
  const s = { uTime: { value: 0 }, uStart: { value: -1 } },
    d = new vn({
      vertexShader: aa,
      fragmentShader: ra,
      uniforms: s,
      transparent: !0,
      depthWrite: !1,
      blending: Ft,
      side: No,
    }),
    c = new et(new te(1.1, 1.6, 48, 64), d);
  ((c.position.z = 0.022), (c.renderOrder = 6), n.add(c), ti.set(t, s));
  const l = n.children[0];
  (l.geometry.dispose(), (l.geometry = new te(1.1, 1.6, 48, 64)));
  const p = l.material;
  return (
    (p.onBeforeCompile = (u) => {
      ((u.uniforms.uTime = s.uTime),
        (u.uniforms.uStart = s.uStart),
        (u.vertexShader =
          `
      uniform float uTime;
      uniform float uStart;
    ` +
          u.vertexShader.replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
      if (uStart >= 0.0) {
        float t = uTime - uStart;
        float dur = ${Se.toFixed(1)};
        if (t >= 0.0 && t < dur) {
          float r = length(position.xy);
          float wavefront = (t / dur) * 1.05;
          float ww = 0.13;
          float d = abs(r - wavefront);
          float env = exp(-d * d / (ww * ww));
          float decay = (1.0 - t / dur) * sin(t / dur * 3.14159);
          transformed.z += 0.05 * env * decay;
        }
      }`,
          )));
    }),
    (p.needsUpdate = !0),
    { mat: o, glowMat: a }
  );
}
function ca(e) {
  const { mat: t, glowMat: n } = la(e);
  (C.killTweensOf(t),
    C.killTweensOf(n),
    t.emissive.setHex(16765056),
    (t.emissiveIntensity = 2.5),
    C.to(t, { emissiveIntensity: 0, duration: 1, ease: "power3.out" }),
    (n.opacity = 0),
    C.to(n, { opacity: 0.85, duration: 0.08, ease: "none" }),
    C.to(n, { opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.08 }));
  const i = ti.get(e.work.index);
  i && ((i.uStart.value = re), dn.add(e.work.index));
}
function da(e) {
  const o =
    (Math.sin((((e === 0 ? 366 : e) - 355) * 2 * Math.PI) / 366) + 1) / 2;
  return { rate: 0.85 + o * 0.3, filterFreq: 600 + o * 2400 };
}
let ha = 0;
function pa() {
  if (ha++ % 6 !== 0 || j || at || yt || Le) return;
  const e = h.position.x,
    t = h.position.z,
    n = new st(0, 0, -1).applyQuaternion(h.quaternion);
  ((n.y = 0), n.normalize());
  let i = !1,
    o = null,
    a = ia;
  for (const r of T) {
    const s = r.focusTarget.x - e,
      d = r.focusTarget.z - t,
      c = s * s + d * d;
    if (c >= na || ((i = !0), cn)) continue;
    const l = Math.sqrt(c),
      p = (s * n.x + d * n.z) / l;
    p > a && ((a = p), (o = r));
  }
  if (!i) {
    cn = !1;
    return;
  }
  if (o !== null && performance.now() >= Je) {
    if (((cn = !0), (Je = performance.now() + 1500), Ot.isOn())) {
      const r = da(o.work.index);
      if (gt) {
        const s = o.focusTarget;
        ((gt.positionX.value = s.x),
          (gt.positionY.value = s.y),
          (gt.positionZ.value = s.z));
      }
      if ((Jt && (Jt.frequency.value = r.filterFreq), X && Yt && pn)) {
        const s = Yt.createBufferSource(),
          d = Yt.createGain(),
          c = Yt.createBiquadFilter();
        ((c.type = "lowpass"),
          (c.frequency.value = r.filterFreq),
          (c.Q.value = 0.8),
          (d.gain.value = 0.4),
          (s.buffer = pn),
          (s.playbackRate.value = r.rate),
          s.connect(d),
          d.connect(c),
          c.connect(Yt.destination),
          s.start());
      } else
        ((we.playbackRate = r.rate),
          (we.currentTime = 0),
          we.play().catch(() => {}));
    }
    ca(o);
  }
}
let Li = 0,
  Vi = 0;
const ua = X ? 30 : 60,
  fa = 1e3 / ua;
let re = 0;
const Pi = h.position.clone();
let _i = 0,
  Di = 0;
const ma = 0.003,
  ya = 10;
function ko(e) {
  var a, r, s, d, c;
  requestAnimationFrame(ko);
  const t = e - Vi;
  if (t < fa - 1) return;
  ((Vi = e), (re += Math.min(t, 100) / 1e3), D.update());
  const n = h.position.distanceTo(Pi),
    i = n > ma,
    o = t > 0 && t < 200 ? n / (t * 0.001) : 0;
  if (
    (Pi.copy(h.position),
    i
      ? ((Di = 0), ++_i === 2 && ct.setMoving(!0))
      : ((_i = 0), ++Di === ya && ct.setMoving(!1)),
    O0(t),
    Fn.update(re),
    tn.update(re),
    dn.size > 0)
  )
    for (const l of dn) {
      const p = ti.get(l);
      p &&
        ((p.uTime.value = re),
        re - p.uStart.value >= Se && ((p.uStart.value = -1), dn.delete(l)));
    }
  if (
    (Rt.update(re),
    yt ||
      (ct.update(h.position),
      Bt.setMinimalPan(D.strafeDir),
      Bt.update(
        h.position,
        o,
        D.strafeDir,
        D.forwardDir,
        Math.min(t, 100) * 0.001,
      )),
    Yt)
  ) {
    const l = Yt.listener,
      p = h.position,
      u = new st(0, 0, -1).applyQuaternion(h.quaternion),
      w = new st(0, 1, 0).applyQuaternion(h.quaternion);
    l.positionX
      ? ((l.positionX.value = p.x),
        (l.positionY.value = p.y),
        (l.positionZ.value = p.z),
        (l.forwardX.value = u.x),
        (l.forwardY.value = u.y),
        (l.forwardZ.value = u.z),
        (l.upX.value = w.x),
        (l.upY.value = w.y),
        (l.upZ.value = w.z))
      : (l.setPosition(p.x, p.y, p.z),
        l.setOrientation(u.x, u.y, u.z, w.x, w.y, w.z));
  }
  if (!Le && !at)
    for (let l = 0; l < 4; l++) {
      const p = T[Li % At].mesh.material;
      (p.map && O.initTexture(p.map), Li++);
    }
  if (
    (pa(),
    !Qt && !Le && ((a = T.lazyUpdate) == null || a.call(T, h.position)),
    (r = T.updateFades) == null || r.call(T, t * 0.001),
    (s = T.drainUpload) == null || s.call(T, O),
    (Qt || Le || j) &&
      ((d = T.drainUpload) == null || d.call(T, O),
      (c = T.drainUpload) == null || c.call(T, O)),
    Bn.length > 0)
  ) {
    const l = Bn.shift();
    ((l.mat.map = l.tex), (l.mat.needsUpdate = !0));
  }
  if (at && !yt && !be && !ne) {
    const l = Math.min(t, 100);
    if (Math.abs(Nt) > 5e-4 || Math.abs(Wt) > 5e-4) {
      const p = (h.fov * Math.PI) / 180,
        u = Math.tan(p / 2),
        m =
          (2 * (u * (window.innerWidth / window.innerHeight)) * h.position.y) /
          window.innerWidth,
        x = (2 * u * h.position.y) / window.innerHeight,
        y = nt * 1.5;
      ((h.position.x = Math.max(-y, Math.min(y, h.position.x + Nt * m * l))),
        (h.position.z = Math.max(-y, Math.min(y, h.position.z + Wt * x * l))));
      const g = Math.exp(-0.0075 * l);
      ((Nt *= g), (Wt *= g));
    }
    if (Math.abs(Ut) > 5e-5) {
      const p = Math.max(Ji, Math.min(Ki, h.position.y + Ut * l));
      ((h.position.y = p),
        (h.fov = mo(p)),
        h.updateProjectionMatrix(),
        (Ut *= Math.exp(-0.005 * l)));
    }
  }
  if (
    (rn.setFromQuaternion(h.quaternion, "YXZ"),
    tt.update(h.position, rn.y),
    j && qt && !X && !Ce)
  ) {
    const l = T[ot].focusTarget,
      p = l.x - h.position.x,
      u = l.y - h.position.y,
      w = l.z - h.position.z,
      m = Math.sqrt(p * p + w * w),
      x = Math.atan2(-p, -w),
      y = Math.atan2(u, m);
    ((fe += (Ui * I0 - fe) * Ti),
      (me += (-ji * $0 - me) * Ti),
      rn.set(y + me, x + fe, 0, "YXZ"),
      h.quaternion.setFromEuler(rn));
  }
  O.render(G, h);
}
setTimeout(() => W0(), 500);
if (!X) {
  let e = function (E) {
    requestAnimationFrame(e);
    const L = l ? Math.min(E - l, 50) : 16.67;
    if (((l = E), !m)) {
      const z = 1 - Math.pow(p ? 0.95 : 0.9, L / 16.67),
        N = p ? u + (d - u) * 0.18 : d,
        ut = p ? w + (c - w) * 0.18 : c;
      ((s.x += (N - s.x) * z), (s.y += (ut - s.y) * z));
    }
    const v = L > 0 ? ((s.x - x) / L) * 16.67 : 0,
      P = L > 0 ? ((s.y - y) / L) * 16.67 : 0;
    ((x = s.x), (y = s.y), (g += (v - g) * 0.3), (b += (P - b) * 0.3));
    const V = Math.hypot(g, b),
      k = (Math.atan2(b, g) * 180) / Math.PI,
      M = Math.min(V * 0.04, 0.4),
      S = r.scale * (1 + M),
      B = r.scale / (1 + M);
    a.style.transform = `translate(${s.x - i}px, ${s.y - i}px) rotate(${k}deg) scaleX(${S}) scaleY(${B})`;
  };
  const n = 0.1111111111111111,
    i = 90 / 2,
    o = document.createElement("style");
  ((o.textContent = `
    .dp-close-btn.cur-on svg path      { stroke: #bdbbb9 !important; }
    .dp-nav.cur-on     svg .arrow-main { stroke: #bdbbb9 !important; }
  `),
    document.head.appendChild(o));
  const a = document.createElement("div");
  ((a.style.cssText = `
    position: fixed; top: 0; left: 0;
    width: 90px; height: 90px;
    border-radius: 50%;
    background: rgba(255,255,255,0.92);
    pointer-events: none;
    z-index: 108;
    will-change: transform;
    opacity: 0;
    transition: opacity 0.35s ease;
  `),
    document.body.appendChild(a));
  const r = { scale: n },
    s = { x: 0, y: 0 };
  let d = 0,
    c = 0,
    l = 0,
    p = null,
    u = 0,
    w = 0,
    m = !1,
    x = 0,
    y = 0,
    g = 0,
    b = 0;
  (window.addEventListener("mousemove", (E) => {
    ((d = E.clientX), (c = E.clientY));
  }),
    (de = () => {
      ((s.x = d),
        (s.y = c),
        (x = s.x),
        (y = s.y),
        (g = 0),
        (b = 0),
        (a.style.opacity = "1"));
    }),
    (he = () => {
      ((a.style.opacity = "0"),
        p && (p.classList.remove("cur-on"), (p = null)),
        C.killTweensOf(r),
        C.killTweensOf(s),
        (r.scale = n),
        (m = !1),
        (g = 0),
        (b = 0));
    }),
    document.documentElement.addEventListener("mouseleave", () => {
      j && (a.style.opacity = "0");
    }),
    document.documentElement.addEventListener("mouseenter", () => {
      j && (a.style.opacity = "1");
    }));
  const A = ".dp-close-btn, .dp-nav";
  (document.addEventListener("mouseover", (E) => {
    var P, V;
    if (!j) return;
    const L = (V = (P = E.target).closest) == null ? void 0 : V.call(P, A);
    if (!L || L === p) return;
    ((p = L), L.classList.add("cur-on"));
    const v = L.getBoundingClientRect();
    ((u = v.left + v.width / 2),
      (w = v.top + v.height / 2),
      (m = !0),
      C.killTweensOf(s),
      C.to(s, {
        x: u,
        y: w,
        duration: 0.28,
        ease: "power3.out",
        onComplete: () => {
          m = !1;
        },
      }),
      C.killTweensOf(r),
      C.to(r, { scale: 1, duration: 0.65, ease: "elastic.out(0.7, 0.45)" }));
  }),
    document.addEventListener("mouseout", (E) => {
      var P, V;
      if (!j) return;
      const L = (V = (P = E.target).closest) == null ? void 0 : V.call(P, A);
      if (!L || L !== p) return;
      const v = E.relatedTarget;
      (v && L.contains(v)) ||
        ((p = null),
        L.classList.remove("cur-on"),
        (m = !1),
        C.killTweensOf(s),
        C.killTweensOf(r),
        C.to(r, { scale: n, duration: 0.55, ease: "elastic.out(0.7, 0.4)" }));
    }),
    requestAnimationFrame(e));
}
window.addEventListener("mousemove", (e) => {
  ((Ui = (e.clientX / window.innerWidth) * 2 - 1),
    (ji = (e.clientY / window.innerHeight) * 2 - 1));
});
requestAnimationFrame(ko);
