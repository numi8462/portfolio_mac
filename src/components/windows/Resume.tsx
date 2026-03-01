import WindowControls from '@components/common/WindowControls';
import WindowWrapper from '@components/common/WindowWrapper';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>이력서.pdf</h2>

        <a href="files/resume.pdf" download className="cursor-pointer" title="이력서 다운로드">
          <Download className="icon" />
        </a>
      </div>

      <Document file="files/resume.pdf" onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
        <Page pageNumber={currentPage} renderTextLayer renderAnnotationLayer />
      </Document>

      {numPages > 0 && (
        <div className="flex items-center justify-center gap-3 py-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded disabled:opacity-40 cursor-pointer"
          >
            <ChevronLeft className="icon" />
          </button>

          <span className="text-sm">
            {currentPage} / {numPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, numPages))}
            disabled={currentPage === numPages}
            className="px-3 py-1 rounded disabled:opacity-40 cursor-pointer"
          >
            <ChevronRight className="icon" />
          </button>
        </div>
      )}
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, 'resume');

export default ResumeWindow;
