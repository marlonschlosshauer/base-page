import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<div className="content">
				<Content />
			</div>
			<Footer />
		</div>
	);
}

export default App;
