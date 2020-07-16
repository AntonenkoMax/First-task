import React from 'react';
import './styles/main.scss';
import Nav from './components/Nav';
import Header from './components/Header';
import Work from './components/Work';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Nav />
			<Header />
			<Work />
			<Services />
			<Portfolio />
			<About />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
