import Dock from '@components/Dock';
import Home from '@components/Home';
import Navbar from '@components/Navbar';
import Welcome from '@components/Welcome';
import Contact from '@components/windows/Contact';
import Finder from '@components/windows/Finder';
import Image from '@components/windows/Image';
import Resume from '@components/windows/Resume';
import Safari from '@components/windows/Safari';
import Terminal from '@components/windows/Terminal';
import Text from '@components/windows/Text';
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
      <Text />
      <Image />
      <Contact />
      <Home />
    </main>
  );
}

export default App;
