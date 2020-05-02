import React from 'react';
import '../../styles/program.scss';
import FairGallery from './FairGallery';

const Fair = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Jarmarki Bożonarodzeniowe</h1>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <FairGallery />
                    <div className="description">
                        <div className="dresden">
                            <h3>Jarmark „Striezelmarkt” w Dreźnie</h3>
                            <h4>Program:</h4>
                            <p>Zbiórka o umówionej godzinie. Przejazd w kierunku Niemiec. Przyjazd do DREZNA w godzinach porannych. Panoramiczny spacer po mieście podczas którego zobaczymy najważniejsze zabytki Drezna: gmach Galerii Nowych Mistrzów, Akademię Sztuk Pięknych, symbol Drezna -kościół Najświętszej Marii Panny, Zamek Królewski, Orszak Książąt, drezdeńską katedrę, operę Sempera, kompleks muzealny Zwinger (dla chętnych wejście) w którym znajduje się między innymi Galeria Starych Mistrzów. Przejście na Nowy Rynek. Czas wolny na jarmarkach świątecznych.
                                <br />
                                <br />
                                <span>Jarmark w Dreźnie:</span>
                                <br />
                            Najstarszy jarmark bożonarodzeniowy w całych Niemczech, drezdeński Jarmark Struclowy „Striezelmarkt” będzie obchodził swoje 584. urodziny. Nazwa "Jarmark Struclowy" powstała w średniowieczu i wywodzi się od serwowanej wówczas strucli, bez której po dziś dzień nie mogą odbyć się święta Bożego Narodzenia w Dreźnie.
                            Oprócz słynnego drezdeńskiego strucla, należy spróbować Glühwein -  popularne grzane wino, które jest tu serwowane na każdym kroku oraz ciasta z bakaliami.  Będziemy podziwiać największą świąteczną piramidę- symbol drezdeńskiego jarmarku, oraz chłonąć magię świąt wśród licznych straganów oferujących niezliczone ozdoby choinkowe, drewniane i porcelanowe aniołki, biżuteria czy bombki na choinkę, pierniki, lizaki i inne słodycze. Powietrze nasycone jest zapachem grzanego wina, korzennych przypraw i lokalnych, świątecznych przysmaków a dookoła przygrywa wspaniała muzyka.
                            <br />
                            Zbiórka w godzinach wieczornych i powrót do kraju. Przyjazd do Polski w godzinach porannych dnia kolejnego.
                            </p>
                        </div>

                        <div className="berlin-market">
                            <h3>Bożonarodzeniowe Jarmarki w Berlinie</h3>
                            <h4>Program:</h4>
                            <p>Zbiórka i wyjazd w kierunku Berlina. Przyjazd w godzinach porannych. Zwiedzanie stolicy Niemiec spacer z przewodnikiem: zachodnia część Berlina – słynna dzielnica Ku’damm i kościół Pamięci Cesarza Wilhelma. Następnie zobaczymy Potsdamerplatz i Sony Center, dzielnicę rządową przy której mieszczą się: Reichstag, Urząd Kanclerski, biura posłów i urzędników parlamentarnych oraz dodatkowe sale konferencyjne. Zobaczymy Bramę Brandenburską, słynną aleję Unter den Linden. Następnie udając się w kierunku Alexanderplatz zobaczymy Wyspę Muzeów, na której znajduje się Muzeum Pergamońskie, katedrę Berliner Dom, Nikolaiviertel - dzielnica św. Mikołaja z kościołem pod tym wezwaniem, Marienkirche - kościół Mariacki ,wieża TV.
                                <br />
                                <span>Czas wolny na jarmarku.</span>
                                <br />
                                Niemieckie jarmarki są najstarsze, największe i najbardziej popularne wśród odwiedzających. W samym Berlinie odbywa się 60 tradycyjnych jarmarków, na których znajdują się stoiska z rękodziełem, drewnianymi zabawkami i wyrafinowanymi, wymyślnymi ozdobami, bombkami i girlandami, biżuterią i niezliczoną ilością najróżniejszych ozdób, ozdóbek i świątecznych pamiątek. Oprócz tego na berlińskich straganach można spróbować takich specjałów jak: pieczone kasztany, pieczone jabłka maczane w czekoladzie bądź w lukrze, owoce kandyzowane, prażone orzechy i migdały, korzenne pierniki, aromatyczne ciasta. Do lokalnych specjałów należą pieczone kartofle i currywurst, czyli grillowana lub pieczona kiełbaska wieprzowa posypana przyprawą curry. Hitem jarmarków jest oczywiście Glühwein- grzane wino, które można kupić niemal na każdym kroku. Magiczny świąteczny klimat tworzy wspaniała muzyka, unoszący się zapach grzanego wina, goździków, cynamonu, choinek oraz widok masywnych, kilkumetrowych szopek.
                            <br />
                            W godzinach wieczornych zbiórka i powrót do Polski.
                            </p>
                        </div>

                        <div className="vienna-market">
                            <h3>Bożonarodzeniowe Jarmarki we Wiedniu </h3>
                            <h4>Program:</h4>
                            <p>Zbiórka i przejazd w kierunku Wiednia. Przyjazd w godzinach porannych. Zwiedzanie Wiednia: spacer z przewodnikiem podczas którego zobaczymy m.in. Katedra, Hofburg, Ratusz, najbardziej reprezentacyjna aleja Ringstrasse, przy którym ulokowane są najważniejsze zabytki. Przejedziemy również w stronę słynnego Prateru i zobaczymy najstarsze w Europie wesołe miasteczko wraz z Diabelskim Młynem (wszystkie obiekty zwiedzane z zewnątrz).
                                <br />
                                Po zakończeniu zwiedzania czas wolny, który możemy spędzić Jarmarkach Bożonarodzeniowych.                                <br />
                                Najciekawsze Jarmarki w Wiedniu to m.in Altwiener Christkindlmarkt w którym znajdziemy teatrzyk kukiełkowy, Jarmarki na Rathausplatz, Karlsplatz i na dziedzińcu pałacu Schonbrunn. Miejsca te przed świętami Bożego Narodzenia przeistaczają się w krainę migoczących świateł, drewnianych chatek, zimowych zabaw, karuzeli, wspaniałej muzyki. Powietrze nasycone jest zapachem grzanego wina, korzennych przypraw i lokalnych, świątecznych przysmaków: jabłka w karmelu, różne owoce w czekoladzie, apfelstrudel a także sery i wędliny. Kupić można lokalne rękodzieło: haftowane obrusy, dziergane narzuty, czapki, szaliki ozdoby choinkowe tj. bombki, aniołki itd.
                            </p>
                        </div>

                        <div className="prague-market">
                            <h3>Bożonarodzeniowe Jarmarki w Pradze</h3>
                            <h4>Program:</h4>
                            <p>Zbiórka i wyjazd w kierunku Pragi. Przyjazd w godzinach porannych. Zwiedzanie Pragi: spacer z przewodnikiem podczas którego zobaczymy: klasztor na Strahovie, Hradczany z Zamkiem Królewskim i katedrą św. Wita, św. Wacława i św. Wojciecha, słynną Loretą (kompleks barokowych budynków sakralnych); Mala Strana - romantyczna dzielnica położona na lewym brzegu Wełtawy, u stóp praskiego zamku. Obfituje w piękne kamienice, uliczki i kościoły. Następnie zobaczymy Most Karola. Następnie najbardziej reprezentacyjny plac miasta- Rynek Staromiejski na którym zlokalizowane są: ratusz, słynny zegar „Orloj”, pomnik Jana Husa, Uniwersytet Karola z XIV wieku. Zobaczymy również Plac Wacława.
                                <br />
                            Czas wolny na Rynku Staromiejskim, gdzie znajduje się centralna część jarmarków. Liczne kolorowe stragany oferują: charakterystyczne czeskie ozdoby choinkowe, rękodzieło, zimowa odzież (często ręcznie wykonana), szklane świedzidełka, biżuteria, lokalne potrawy i przysmaki: rdelnik, medovina (miód pitny), wino z miodem, ziemniaki pod różnymi postaciami: z boczkiem i kapustą, smażone zakręcane spiralki, chipsy, pieczona szynka. Powrót do autokaru w godzinach wieczornych. Nocny przejazd do Tarnowa. Przyjazd w nocy/ nad ranem dnia.
                            </p>
                        </div>

                        <div className="budapest-market">
                            <h3>Bożonarodzeniowe Jarmarki w Budapeszcie</h3>
                            <h4>Program:</h4>
                            <p>Wyjazd z miejsca zbiórki. Przejazd w kierunku Budapesztu. Przyjazd w godzinach porannych. Zwiedzanie stolicy Węgier: spacer z przewodnikiem podczas którego zobaczymy: zwiedzanie miasta: Wzgórze Zamkowe z Basztą Rybacką, gotycki kościół św. Macieja, Zamek Królewski (z zewnątrz), Najstarszy most w Budapeszcie- Most  Łańcuchowy oraz inne ciekawe konstrukcje tego typu: Most Małgorzaty Most Elżbiety, Most Wolności, gmach Opery, Bazylika św. Stefana, gmach Parlamentu.
                            <br />
                            Czas wolny na jarmarku. Na budapesztańskich jarmarkach można kupić unikatowe wyroby sztuki ludowej i rzemiosła artystycznego. Wszystkie wykonane ręcznie, z naturalnych materiałów doskonale nadają się na świąteczne upominki. Magiczną atmosferę tworzą unoszące się nad placem zapachy pierników, cynamonu, grzanego wina oraz choinek. Można będzie spróbować lokalnych przysmaków: Lángos, Kürtöskalács, Krampampuli i inne grzane wina, kiełbasy i wyroby mięsne, langosze, czyli smażone w głębokim tłuszczu płaskie placki z mąki pszennej, ziemniaków i mleka. Na jarmarku bożonarodzeniowym w Budapeszcie popularna jest również kapusta. Na jarmarku nie może zabraknąć słodyczy. Najpopularniejsze to: marcepan oraz czekolada, kurtoszkołacze (kürtőskalács), czyli słodkie drożdżowe ciasto nawijane na walce i pieczone nad ogniem.
                            <br />
                            W godzinach wieczornych zbiórka i wyjazd w kierunku Polski.
                            </p>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
}

export default Fair;