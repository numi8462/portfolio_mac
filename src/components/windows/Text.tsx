import WindowControls from '@components/common/WindowControls';
import WindowWrapper from '@components/common/WindowWrapper';
import { useWindowStore } from '@store/window';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface TextItem {
  name: string;
  icon: string;
  kind: 'file';
  fileType: 'txt';
  subtitle?: string;
  description?: string[];
  image?: string;
  mdFile?: string;
}

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data as TextItem | null;
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    // Clear markdown when switching to a file without mdFile
    if (!data?.mdFile) {
      setMarkdown('');
      return;
    }

    if (data?.mdFile) {
      setMarkdown(''); // Clear previous content before fetching new
      fetch(data.mdFile)
        .then((res) => res.text())
        .then((text) => setMarkdown(text))
        .catch(() => setMarkdown('Failed to load markdown file.'));
    }
  }, [data]);

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data?.name || 'Text File'}</h2>
      </div>

      <div className="bg-white p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 120px)' }}>
        {data?.image && (
          <img
            src={data.image}
            alt={data.name}
            className="w-32 h-32 object-cover rounded-lg mb-4"
          />
        )}

        {data?.subtitle && <h3 className="text-lg font-semibold mb-2">{data.subtitle}</h3>}

        {markdown ? (
          <div className="prose prose-sm max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ ...props }) => (
                  <h1 className="text-left font-bold text-lg mb-2" {...props} />
                ),
                h2: ({ ...props }) => (
                  <h2 className="text-left font-semibold text-base mb-2 mt-4" {...props} />
                ),
                h3: ({ ...props }) => (
                  <h3 className="text-left font-medium text-sm mb-1 mt-3" {...props} />
                ),
                p: ({ ...props }) => (
                  <p className="text-left text-sm text-gray-700 mb-2" {...props} />
                ),
                ul: ({ ...props }) => <ul className="text-left list-disc pl-5 mb-2" {...props} />,
                ol: ({ ...props }) => (
                  <ol className="text-left list-decimal pl-5 mb-2" {...props} />
                ),
                li: ({ ...props }) => <li className="text-sm text-gray-700 mb-1" {...props} />,
                code: ({ ...props }) => (
                  <code className="text-xs bg-gray-100 px-1 py-0.5 rounded text-black" {...props} />
                ),
                pre: ({ ...props }) => (
                  <pre
                    className="text-left bg-gray-100 p-3 rounded-lg overflow-x-auto mb-3"
                    {...props}
                  />
                ),
              }}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        ) : data?.description ? (
          <div className="space-y-2">
            {data.description.map((line, index) => (
              <p key={index} className="text-sm text-gray-700 whitespace-pre-wrap">
                {line}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No content available.</p>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, 'txtfile', { initialPosition: { left: 200, top: 50 } });

export default TextWindow;
