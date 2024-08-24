import { useState } from 'react';
import './App.css';
import Head from './components/Head';
import Main from './components/Main';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<string>('all');
  return (
    <section
      className={`flex justify-center items-center flex-col w-[800px] h-screen `}
    >
      <Head
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setFilter={setFilter}
      />
      <Main searchTerm={searchTerm} filter={filter} />
    </section>
  );
}

export default App;
