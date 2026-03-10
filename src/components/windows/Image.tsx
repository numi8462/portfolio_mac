import WindowControls from '@components/common/WindowControls';
import WindowWrapper from '@components/common/WindowWrapper';
import { useWindowStore } from '@store/window';

interface ImageItem {
  name: string;
  icon: string;
  kind: 'file';
  fileType: 'img';
  imageUrl: string;
}

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data as ImageItem | null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{data?.name || 'Image File'}</h2>
      </div>

      <div
        className="bg-white p-4 flex items-center justify-center overflow-auto"
        style={{ maxHeight: 'calc(100vh - 120px)' }}
      >
        {data?.imageUrl ? (
          <img
            src={data.imageUrl}
            alt={data.name}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        ) : (
          <p className="text-sm text-gray-500">No image available.</p>
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, 'imgfile', { initialPosition: { left: 200, top: 150 } });

export default ImageWindow;
