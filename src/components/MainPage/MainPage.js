import Header from './Header/Header';
import IntroSection from './IntroSection/IntroSection';
import CurrencySection from './CurrencySection/CurrencySection';
import AdvantagesSection from './AdvantagesSection/AdvantagesSection';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import EventGallerySection from './EventGallerySection/EventGallerySection';
import ValuesSection from './ValuesSection/ValuesSection';
import EventSection from './EventSection/EventSection';
import Footer from './Footer/Footer';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { DUMMY_CAROUSEL_ITEMS } from '../../dummy-data/carousel';

const MainPage = () => {
    const [currencyRates, setCurrencyRates] = useState([]);
    const [carouselItems, setCarouselItems] = useState(DUMMY_CAROUSEL_ITEMS);

    useEffect(() => {
        fetch("https://api.coinlore.net/api/tickers/")
            .then(res => res.json())
            .then(json => { console.log(json); setCurrencyRates(json.data)})
            .catch(e => {});
    }, []);

    return (
        <div className=" intro_container-background-image px-0">
            <Header />
            <IntroSection />
            <CurrencySection currencyRates={currencyRates ? currencyRates.slice(0, 5) : []}/>
            <AdvantagesSection />
            <EventSection />
            <RegistrationForm />
            <EventGallerySection items={DUMMY_CAROUSEL_ITEMS} />
            <ValuesSection />
            <Footer />
        </div>);
}

export default MainPage;