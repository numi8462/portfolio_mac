import Dock from '@components/Dock';
import Navbar from '@components/Navbar';
import Welcome from '@components/Welcome';
import Safari from '@components/windows/Safari';
import Terminal from '@components/windows/Terminal';
import gsap from 'gsap';

import { Draggable } from 'gsap/all';
gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
    </main>
  );
}

export default App;
