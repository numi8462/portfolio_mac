import { techStack } from '@constants/index';
import WindowWrapper from '@hoc/WindowWrapper';
import { Check, Flag } from 'lucide-react';

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <p>명령 프롬프트</p>
        <h2>기술 스택</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@youngho %</span>
          show tech stack
        </p>

        <div className="label">
          <p className="w-32">카테고리</p>
          <p>스킬</p>
        </div>

        <ul className="content">
          {techStack.map((tech) => (
            <li key={tech.category} className="flex items-center">
              <Check className="check" size={20} />
              <h3>{tech.category}</h3>
              <ul>
                {tech.items.map((item, i) => (
                  <li key={i}>
                    {item} {i < tech.items.length - 1 ? ',' : ''}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p>
            <Check size={20} />4 of 4 stacks loaded successfully (100%)
          </p>

          <p className="text-black">
            <Flag size={15} fill="black" />
            Render time: 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;
