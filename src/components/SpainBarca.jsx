import React from 'react';
import '../styles/program.scss';

import SpainBarcaGallery from './SpainBarcaGallery';

const Spain = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Hiszpania</h1>
                    <h2>Costa Brava i Rumba de Barcelona</h2>
                    <h4>Jedno serce, jedna ona, katalońska Barcelona. Jedno serce, jedno bicie, Barcelona ponad życie.<span>przyśpiewka kibiców FC Barcelony</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <SpainBarcaGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Wyjazd z Polski. Przejazd w kierunku Włoch. </p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>W godzinach porannych przyjazd w okolice Como.
                             <br />Como jest bajecznie położoną miejscowością na granicy ze Szwajcarią i nad jeziorem o tej samej nazwie. Jezioro znajduje się w Alpach i  jest trzecim co do wielkości we Włoszech. Jest najgłębszym jeziorem Alp i jednym z najgłębszych w Europie. Spacer po mieście z przewodnikiem- zwiedzanie Starówki, następnie czas wolny. Dla chętnych wyjazd kolejką na Brunate - punkt widokowy, z którego roztacza się piękny widok na jezioro i Alpy, rejs statkiem. Po południu wyjazd w kierunku Awinion.  Po drodze nocleg tranzytowy i obiadokolacja na terenie Włoch. </p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Śniadanie. Wykwaterowanie. Przejazd do Awinionu.
                            <br />Miasto papieży, położone na brzegu Rodanu, perła  Prowansji, gdzie na każdym kroku czuć zapach lawendy i ziół. Spacer po miasteczku, podczas którego zobaczymy: słynny most awinioński – Most św. Benezeta, Pałac Papieski, katedrę Notre Dame de Domes, a całe średniowieczne miasteczko zamknięte jest w świetnie zachowanych murach obronnych- les Remparts. Czas wolny. Przejazd na obiadokolację w restauracji flunch. Przejazd do hotelu. Zakwaterowanie. Nocleg.
                            </p>
                        </div>

                        <div className="fourth-day">
                            <h5>Dzień IV</h5>
                            <p>Śniadanie. Wykwaterowanie. Przejazd do leżącego w sercu Pirenejów – Księstwa Andory.
                            <br />Andora jest w czołówce najmniejszych państw na świecie, słynie z bajecznych widoków oraz z tego, że jest  jednym z rajów podatkowych, do których należą m.in.: Monako, Bermudy, Kajmany, Bahamy, Emiraty Arabskie itd. Ze względu na korzystne przepisy finansowe Andora to doskonałe miejsce na zakupy. W okazjonalnych cenach nabyć można takie produkty jak: alkohol, artkuły spożywcze, kosmetyki (w szczególności perfumy), sprzęt fotograficzny, elektroniczny. Czas wolny na zakupy. Następnie przejazd w kierunku Hiszpanii. Zakwaterowanie w hotelu na wybrzeżu. Obiadokolacja. Nocleg.
                            </p>
                        </div>
                        <div className="fifth-day">
                            <h5>Dzień V - X</h5>
                            <p>Pobyt na Costa Brava.
                            <br />Odpoczynek, plażowanie, kąpiele morskie, możliwość skorzystania z wycieczek fakultatywnych i licznych atrakcji, jakie oferuje Costa Brava. W wybranym przez pilota dniu odbędzie się wycieczka do Barcelony podczas której zobaczymy: kościół Sagrada Familia; słynne kamienice Gaudiego Casa Mila i Casa Batllo; Stadion Camp Nou (dla chętnych wejście), wzgórze Montjuïc na którym oglądać będziemy obiekty związane z Wystawą Światową z 1929 r., oraz z Olimpiadą z 1992 r.;  Pomnik Krzysztofa Kolumba; słynna La Rambla; Barri Gotic (Dzielnica Gotycka). Czas wolny. Powrót do hotelu, obiadokolacja. Nocleg. </p>
                        </div>

                        <div className="sixth-day">
                            <h5>Dzień XI</h5>
                            <p>Śniadanie. Wykwaterowanie. Wyjazd w kierunku Polski. </p>
                        </div>

                        <div className="seventh-day">
                            <h5>Dzień XII</h5>
                            <p>Przyjazd do Polski. Godziny uzależnione od miejsca zbiórki</p>
                        </div>

                        <div className="propose-trip">
                            <h5>Proponowane wycieczki fakultatywne</h5>
                            <div>
                                <h6>Montserrat</h6>
                                <p>Niezwykły masyw górski, w którym znajduje się klasztor benedyktyński oraz bazylika Najświętszej Marii Panny, w której najważniejszym miejscem jest komnata Czarnej Madonny – patronki Katalonii, zwanej pieszczotliwie przez Katalończyków „Czarnulką”. Ponadto góry oferują takie atrakcje jak kolejki, szlaki górskie, punkty widokowe, z których roztaczają się cudowne widoki. Wspaniałą pamiątką z Montserrat są wyrabiane wg benedyktyńskich receptur – likiery, sery, miody, zioła itd.</p>
                            </div>
                            <div>
                                <h6>Figueres i Girona</h6>
                                <p>W Figueres znajduje się Muzeum Salvadora Dalí- obok madryckiego Prado, najczęściej odwiedzane muzeum w Hiszpanii. W Gironie natomiast zobaczymy doskonale zachowane stare miasto nad którym góruje monumentalna katedra. Ponadto zobaczymy łaźnie arabskie, mury miejskie, kościół św. Feliksa.</p>
                            </div>
                            <div>
                                <h6>Tossa de Mar i wizyta w winiarni</h6>
                                <p>Najpiękniejsze i najbardziej romantyczne miasteczko na wybrzeżu Costa Brava</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Spain;