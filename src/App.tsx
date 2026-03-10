import Dock from '@components/Dock';
import Navbar from '@components/Navbar';
import Welcome from '@components/Welcome';
import Finder from '@components/windows/Finder';
import Resume from '@components/windows/Resume';
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
      <Resume />
      <Finder />
    </main>
  );
}

export default App;
