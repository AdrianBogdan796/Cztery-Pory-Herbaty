import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const TeaPage = () => (
  <Container>
    <Header title="Rodzaje Herbat" />
    <Section
      title="Biała Herbata"
      body={
        <>
          <p>
            <strong>Proces Suszenia:</strong> Suszenie
            <strong>Zawartość Kofeiny:</strong> 5–55 mg
            <strong>Charakterystyka:</strong> Charakteryzuje się lekkim smakiem
            i łagodnym aromatem, a także jest orzeźwiająca, delikatna i
            subtelnie słodka, często z kwiatowymi nutami.Herbata biała zazwyczaj
            zawiera bardzo mało kofeiny, choć niektóre odmiany, takie jak{" "}
            <strong>Silver Tip</strong>,mogą mieć jej nieco więcej.
            <strong>Przykłady:</strong> mogą mieć jej nieco więcej.
          </p>
        </>
      }
    />
    <Section
      title="Pochodzenie herbaty białej"
      body={
        <>
          <p>
            Herbata biała pochodzi przede wszystkim z <strong>Chin</strong>, a
            jej korzenie są głęboko zakorzenione w{" "}
            <strong>prowincji Fujian</strong>, znanej z bogatej tradycji
            wytwarzania herbaty. Ponadto, niektóre specjalne rodzaje białej
            herbaty są produkowane w innych regionach, takich jak{" "}
            <strong>Nepal, Tajwan i Sri Lanka.</strong>
          </p>
        </>
      }
    />
    <Section
      title="Herbata Czarna"
      body={
        <>
          <p>
            <strong>Proces produkcji:</strong> Więdnięcie, obtłukiwanie,
            utlenianie, utrwalanie, rolowanie, suszenie.
            <strong>Zawartość kofeiny:</strong> 45-70mg
            <strong>Charakterystyka:</strong> Herbata czarna zawiera stosunkowo
            dużo kofeiny co odpowiada połowy ilości zawartej w filiżance kawy.
            Po zaparzeniu ma ciemną, miedzianą barwę i zazwyczaj silniejszy,
            bardziej wyrazisty smak często z nutami słodowymi, ziemistymi niż
            inne rodzaje herbat.
            <strong>Przykłady:</strong> Assam, Darjeeling, Ceylon, Golden Monkey
          </p>
        </>
      }
    />
    <Section
      title="Pochodzenie herbaty czarnej"
      body={
        <>
          <p>
            Herbata czarna jest głównie produkowana w{" "}
            <strong>Chinach i Indiach.</strong> Do rozwijających się krajów
            eksportujących herbatę czarną należą również
            <strong>Sri Lanka, Nepal, Wietnam i Kenia</strong>.
            <strong>• Herbaty indyjskie</strong> indyjskie mają zazwyczaj
            silniejszy i bardziej wyrazisty smak. Często stosuje się je w
            esencjonalnych mieszankach śniadaniowych, które dobrze komponują się
            z mlekiem i słodzidłem. Wiele indyjskich herbat czarnych jest
            klasyfikowanych za pomocą specjalnego systemu oceny jakości herbaty.
            <strong>• Herbaty chińskie </strong> są lżejsze i bardziej łagodne,
            zazwyczaj spożywane bez dodatków, takich jak mleko czy cukier.
            Zawierają również nieco mniej kofeiny niż ich indyjskie
            odpowiedniki. Popularne chińskie herbaty czarne to{" "}
            <strong>China Keemun i Golden Yunnan.</strong>
          </p>
        </>
      }
    />
    <Section
      title="Herbata Zielona"
      body={
        <>
          <p>
            <strong>Proces produkcji:</strong> Utrwalanie, rolowanie, suszenie
            <strong>Zawartość kofeiny:</strong> 30-50 mg
            <strong>Charakterystyka:</strong> Herbata zielona ma zazwyczaj
            delikatny, trawiasty smak z nutami roślinnymi i jest bardziej
            łagodna niż czarna. Kolor naparu jest jasny, zielony lub żółty.
            Zawiera około połowę kofeiny mniej, niż herbata czarna (około jednej
            czwartej kofeiny zawartej w filiżance kawy).
            <strong>Przykłady:</strong> Matcha, Gunpowder, Sencha, Genmaicha
          </p>
        </>
      }
    />
    <Section
      title="Pochodzenie herbaty zielonej"
      body={
        <>
          <p>
            Herbata zielona pochodzi głównie z Chin i Japonii. W Japonii po
            zbiorach herbatę paruje się, aby zatrzymać proces utleniania. Te
            herbaty mają lekko wytrawny, oceaniczny charakter i jasny,
            szmaragdowy kolor naparu. Niektóre japońskie herbaty są również
            cieniowane przez kilka tygodni przed zbiorami, co zwiększa poziom
            chlorofilu, kofeiny i L-teaniny. Popularne japońskie herbaty to
            Sencha, Kukicha i Gyokuro. W Chinach herbata zielona zwykle jest
            smażona na patelni po zbiorach, aby zatrzymać utlenianie. Te herbaty
            są łagodniejsze niż japońskie i mają miękki, złocisty kolor oraz
            łagodny smak. Do popularnych chińskich herbat zielonych należą
            Dragon Well, Gunpowder i Chun Mee.
          </p>
        </>
      }
    />
    <Section
      title="Herbata Oolong"
      body={
        <>
          <p>
            <strong>Proces produkcji: </strong>Herbata oolong jest częściowo
            utleniana, co daje jej unikalny charakter pomiędzy herbatą zieloną a
            czarną. Liście herbaty przechodzą przez kilka etapów: więdnięcie,
            zgniecenie, częściową oksydację, utrwalenie (parzenie lub smażenie),
            rolowanie i suszenie.
            <strong>Zawartość kofeiny: </strong>30-60 mg
            <strong>Charakterystyka: </strong>Herbata oolong oferuje szeroki
            wachlarz smaków – od kwiatowych i owocowych, po prażone i orzechowe,
            z gładką i kremową teksturą. Herbaty oolong mogą mieć różny poziom
            oksydacji, od około 10% do 80%, co wpływa na ich smak oraz kolor
            naparu. Mogą one parzyć się od jasnożółtego do bogatego
            bursztynowego koloru. Wiele herbat oolong można parzyć kilkakrotnie,
            z każdym kolejnym zaparzeniem pojawiają się subtelne różnice i
            niuanse smaku. W porównaniu z innymi herbatami jest ona średnio
            kofeinowa.
            <strong>Przykłady: </strong>Tieguanyin, Da Hong Pao, Dong Ding
          </p>
        </>
      }
    />
    <Section
      title="Pochodzenie herbaty oolong"
      body={
        <>
          <p>
            Herbaty oolong są głównie produkowane w Chinach i na Tajwanie. W
            Chinach regiony produkujące oolong obejmują Góry Wuyi i Anxi, obie w
            prowincji Fujian, oraz prowincję Guangdong. Tajwan, mała wyspa u
            wybrzeży Chin, słynie ze specjalistycznych herbat oolong, w tym
            bardzo poszukiwanego Milk Oolong.
          </p>
        </>
      }
    />
  </Container>
);

export default TeaPage;
