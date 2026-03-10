import WindowControls from '@components/common/WindowControls';
import WindowWrapper from '@components/common/WindowWrapper';
import { useWindowStore } from '@store/window';

interface TextItem {
  name: string;
  icon: string;
  kind: 'file';
  fileType: 'txt';
  subtitle?: string;
  description?: string[];
  image?: string;
}

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data as TextItem | null;

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

        {data?.description && (
          <div className="space-y-2">
            {data.description.map((line, index) => (
              <p key={index} className="text-sm text-gray-700 whitespace-pre-wrap">
                {line}
              </p>
            ))}
          </div>
        )}

        {!data?.description && <p className="text-sm text-gray-500">No content available.</p>}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, 'txtfile', { initialPosition: { left: 150, top: 100 } });

export default TextWindow;
