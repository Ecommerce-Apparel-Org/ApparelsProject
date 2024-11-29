import React from 'react';
import FAQ from './components/FAQ'; // Adjust the path to point to the FAQ.jsx file

function App() {
    return (
        <div>
            <h1>Welcome to HireTee</h1>
            {/* Call the FAQ component */}
            <FAQ />
        </div>
    );
}

export default App;
