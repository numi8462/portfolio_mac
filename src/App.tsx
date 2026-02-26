import Dock from '@components/Dock';
import Navbar from '@components/Navbar';
import Welcome from '@components/Welcome';

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
    </main>
  );
}

export default App;
