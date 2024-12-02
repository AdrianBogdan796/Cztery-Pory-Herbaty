import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const FromPage = () => (
  <Container>
    <Header title="Pochodzenie Herbaty czyli Camellia sinensis" />
    <Section
      body={
        <>
          <p>
            Wszystkie rodzaje "prawdziwej" herbaty pochodzą tak naprawdę z tej
            samej rośliny. Botaniczna nazwa rośliny herbacianej to Camellia
            sinensis. Roślina ta pochodzi z południowych Chin i została
            uprawiana oraz konsumowana od tysięcy lat. Camellia sinensis ma dwie
            główne odmiany: Camellia sinensis var. sinensis, która rośnie
            głównie w Chinach i innych krajach Azji Wschodniej i charakteryzuje
            się łagodniejszym, delikatniejszym smakiem, oraz Camellia sinensis
            var. assamica, która rośnie głównie w Indiach i jest zazwyczaj
            intensywna i wyrazista w smaku.
          </p>
          <p>
            Herbata czarna, zielona, biała, oolong, pu-erh i fioletowa to
            wszystkie herbaty produkowane z rośliny Camellia sinensis. Każda z
            tych herbat rozwija swoje unikalne cechy dzięki różnym metodom
            zbioru i przetwarzania opracowywanych przez setki lat. Dziś wyróżnia
            się sześć głównych kategorii herbat.
          </p>
        </>
      }
    />
  </Container>
);

export default FromPage;
