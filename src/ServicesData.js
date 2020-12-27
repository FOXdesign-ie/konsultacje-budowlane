//Import Images
import imgBuild from "./assets/budownictwo.jpg";
import imgBuild2 from "./assets/budownictwo2.jpg";
import imgRenow from "./assets/remonty.jpg";
import imgRenow2 from "./assets/remonty2.jpg";
import imgFinish from "./assets/wykonczenia.jpg";
import imgFinish2 from "./assets/wykonczenia2.jpg";
import imgConsult from "./assets/konsultacje.jpg";
import imgConsult2 from "./assets/konsultacje2.jpg";

export const ServicesData = () => {
  return [
    {
      title: "Usługi budowlane",
      mainImg: imgBuild,
      secondaryImg: imgBuild2,
      url: "/uslugi/budownictwo",
      descriptions: [
        {
          title: "Projekty domów",
          description:
            "Proponujemy rozwiązania, współpracujemy z biurami projektowymi.",
        },
        {
          title: "Ekologiczne budynki",
          description:
            "Podpowiadamy rozwiązania wpływające na środowisko naturalne.",
        },
        {
          title: "Domki jednorodzinne, domy wielkopowierzchniowe",
          description:
            "Wysoki standard budowy domow, zdbalość o szczegóły. Wieloletnie doświadczenie. ",
        },
      ],
    },
    {
      title: "Remonty",
      mainImg: imgRenow,
      url: "/uslugi/remonty",
      secondaryImg: imgRenow2,
      descriptions: [
        {
          title: "Wysoki poziom wykonania",
          description:
            "Wysoka staranność usług, dbamy o to, aby pozostawić po sobie porządek.",
        },
        {
          title: "Remont łazienki, kuchni.",
          description:
            "Remontujemy i wykańczamy łazienki, kuchnie, zajmujemy się instalacjami hydraulicznymi.",
        },
        {
          title: "Zabudowa płytami gipsowo-kartonowymi.",
          description:
            "Doświadczenie w stawianiu ścian działowych oraz wszelkiej zabudowy z karton gipsu.",
        },
      ],
    },
    {
      title: "Wykończenia",
      mainImg: imgFinish,
      url: "/uslugi/wykonczenia",
      secondaryImg: imgFinish2,
      descriptions: [
        {
          title: "Precyzja, dbałość o detale.",
          description:
            "Wykonujemy wykończenia precyzyjnie, z dokładnością co do detalu.",
        },
        {
          title: "Renowacje budynków",
          description:
            "Jesteśmy specjalistami w modernizacji i renowacji budynków.",
        },
        {
          title: "Wykończenia pod klucz",
          description:
            "Malowanie ścian, gruntowanie powierzchni, montowanie wykładzin, paneli podłogowych, nowoczesne rozwiazania LED.",
        },
      ],
    },
    {
        title: "Konsultacje budowlane",
        mainImg: imgConsult,
        url: "/uslugi/konsultacje",
        secondaryImg: imgConsult2,
        descriptions: [
          {
            title: "Konsultacje ogólne",
            description:
              "Podpowiadamy rozwiązania, proponujemy technologię wykonania.",
          },
          {
            title: "Zarządzanie projektami",
            description:
              "Kompleksowe zarządzanie i prowadzenie projektów.",
          },
          {
            title: "Hurtownie budowalane",
            description:
              "Pomagamy w wyborze najlepszych rozwiazań dla Ciebie.",
          },
        ],
      },
  ];
};
