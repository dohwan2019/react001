import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contacts from './Contacts';
import Counter from './Counter';
import Header from './Header';
import IndexList from './IndexList';
import TimeInterval from './TimeInterval';

const RouteContainer = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<IndexList />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/timeInterval" element={<TimeInterval />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteContainer;