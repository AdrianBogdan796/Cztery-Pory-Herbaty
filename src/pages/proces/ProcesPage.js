import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const ProcesPage = () => (
  <Container>
    <Header title="Proces przetwarzania herbat" />
    <Section
      title="Suszenie i wiązanie liści"
      body={
        <>
          <p>
            Głównym celem suszenia jest redukcja wilgotności liści herbaty, co
            umożliwia ich dalsze przetwarzanie i przechowywanie. Proces ten może
            być naturalny (trwający od 10 do 24 godzin) lub sztuczny
            (przyspieszony za pomocą suszarni). W trakcie suszenia liście tracą
            do 55% wilgoci, stają się bardziej elastyczne i mniej łamliwe, co
            ułatwia kolejne etapy, takie jak zwijanie i fermentacja.
          </p>
        </>
      }
    />
    <Section
      title="Przetwarzanie herbaty"
      body={
        <>
          <p>
            Przetwarzanie zależy od rodzaju herbaty, jaki chcemy uzyskać.
            Doświadczeni plantatorzy stosują metody przekazywane z pokolenia na
            pokolenie. Ważnym elementem jest wstępne utlenianie, które zmienia
            kolor liści z zielonego na brązowy i wpływa na smak, uwalniając
            katechiny i flawonoidy.
          </p>
        </>
      }
    />
    <Section
      title="CTC (Crush, Tear, Curl)"
      body={
        <>
          <p>
            Metoda ta jest stosowana do produkcji herbat masowych, w których
            liście są krojone, miażdżone i zwijane w granulki. Proces pozwala na
            szybkie przetwarzanie dużych ilości surowca i uzyskanie herbaty o
            intensywnym smaku i wysokiej zawartości kofeiny.
          </p>
        </>
      }
    />
    <Section
      title="Fermentacja"
      body={
        <>
          <p>
            Fermentacja to kluczowy etap przekształcania polifenoli w związki
            odpowiedzialne za kolor i aromat herbaty. Warunki fermentacji, takie
            jak temperatura i wilgotność, są precyzyjnie kontrolowane. Czas
            trwania procesu wynosi od 45 minut do kilku godzin. Proces
            zatrzymuje się poprzez suszenie w wysokiej temperaturze.
            <h1>Rodzaje fermentacji:</h1>
            <p>
              <strong>Pełna fermentacja:</strong> Stosowana w herbacie czarnej,
              nadająca liściom brązowy kolor i bogaty aromat.
            </p>
            <p>
              <strong>Częściowa fermentacja:</strong> Wykorzystywana w herbatach
              oolong, pozwala na uzyskanie delikatniejszych smaków.
            </p>
            <p>
              Fermentacja na taśmie produkcyjnej: Standaryzowany proces w
              masowej produkcji.
            </p>
            <p>
              <strong>Utrwalanie</strong> (Proces zatrzymywania fermentacji)
              odbywa się poprzez:
            </p>
            <p>Parowanie: Krótkie działanie pary wodnej. Ok. 1 minuty.</p>
            <p>
              Panoramirowanie (pan firing”): Podgrzewanie liści w wysokiej
              temperaturze (250–300°C) przez około 15 minut. W razie
              konieczności proces może być powtarzany.
            </p>
            <p>
              Opiekanie/Obżarzanie (Baking): Suszenie w piecach przy około 90°C,
              aby zapobiec pleśnieniu.
            </p>
          </p>
        </>
      }
    />
    <Section
      title="Kształtowanie liści"
      body={
        <>
          <p>
            Skręcanie liści wpływa na ich wygląd, łatwość przechowywania i
            jakość naparu. Wykorzystuje się metody ręczne lub maszynowe, a
            proces odbywa się w kontrolowanych warunkach temperatury i
            wilgotności.
          </p>
          <p>
            Herbaty aromatyzowane wytwarzane są na tym etapie przez spryskiwanie
            liści herbaty aromatami i smakami lub przez przechowywanie ich z
            dodatkami smakowymi, co pozwala na ich wchłonięcie.
          </p>
        </>
      }
    />
  </Container>
);

export default ProcesPage;
