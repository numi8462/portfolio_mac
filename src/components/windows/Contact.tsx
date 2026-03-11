import WindowControls from '@components/common/WindowControls';
import WindowWrapper from '@components/common/WindowWrapper';
import { Github, Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = {
    github: 'https://github.com/numi8462/',
    email: 'yhk8462@naver.com',
    phone: '+82 10-3450-8462',
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>연락하기</h2>
      </div>

      <div
        className="bg-white p-6 flex flex-col items-center"
        style={{ width: '400px', minHeight: '400px' }}
      >
        {/* 프로필 이미지 */}
        <div className="mb-6">
          <img
            src="/images/me.jpg"
            alt="김영호"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-lg"
          />
        </div>

        {/* 작은 문구 */}
        <p className="text-gray-600 text-center mb-8 text-sm">
          언제든지 연락 주세요! 😊
          <br />
          새로운 기회와 도전을 기다리고 있습니다.
        </p>

        {/* 연락 버튼들 */}
        <div className="w-full space-y-3">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg group"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">GitHub</span>
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">이메일</span>
          </a>

          <a
            href={`tel:${contactInfo.phone.replace(/-/g, '')}`}
            className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all duration-200 shadow-md hover:shadow-lg group"
          >
            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">전화하기</span>
          </a>
        </div>

        {/* 추가 메시지 */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
            <Send className="w-3 h-3" />
            빠른 시일 내에 답변 드리겠습니다!
          </p>
        </div>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, 'contact', {
  initialPosition: { left: 300, top: 100 },
});

export default ContactWindow;
