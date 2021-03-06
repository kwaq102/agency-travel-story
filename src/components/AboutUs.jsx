import React, { Component } from 'react';
import '../styles/AboutUs.scss';
import aboutPhoto from '../img/about.jpg';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const AboutUs = () => {
    return (
        <>
            <section className="aboutUs" id="aboutUs">
                <Pulse><h1>Kilka słów o nas</h1></Pulse>
                <div>
                    <Fade left cascade> <p>Opowiem Państwu o podróżach. O tych, które odbyłam, które planuję, o których marzę. Podróż to część mojego życia i moja pasja. Opowiem o miejscach, w które chciałabym Was zabrać i podzielić się tym wszystkim, czego sama doświadczyłam. Pragnę pokazać Wam najpiękniejsze miejsca Europy, wspólnie wydobyć ich esencję, obejrzeć najważniejsze zabytki, nawiedzić wzniosłe sanktuaria, zaproponować najciekawsze atrakcje, ale również zejść z utartych szlaków, zapuścić się w tajemne zaułki i wtopić w klimat odwiedzanych miejsc.  Chcę Wam opowiedzieć o historii, ludziach, zwyczajach, kulturze, sztuce, ciekawostkach i o tym wszystkim, czego zechcecie słuchać.  W wolnej chwili posłuchamy piosenki, obejrzymy film – to też jest opowieść.  Naszą podróż urozmaicimy dobrym lunchem z lampką wina, wyśmienitą kawą i lodami. Usiądziemy w kawiarni, gdzie rozkoszując się lokalnymi specjałami, oddamy się wnikliwej obserwacji i poczujemy jak nas pochłania atmosfera tego miejsca.
                    Gdziekolwiek właśnie będziemy.
                    W niniejszym folderze przedstawiam kilka przykładowych propozycji wycieczek i pielgrzymek, na które chciałabym Państwa zaprosić. Niniejszy folder, to krótka opowieść o tym, co warto zobaczyć.
                    <span>Zapraszam serdecznie</span>
                        <span>Anna Gajewska</span>
                    </p></Fade>
                    <Zoom> <img src={aboutPhoto} alt="" />
                        <div className="shadow"></div>
                    </Zoom>
                </div>
            </section>
        </>
    );


}


export default AboutUs;