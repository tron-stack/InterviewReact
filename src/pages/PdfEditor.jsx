import Navbar from "../components/Navbar";
import PdfViewComponent from "../components/PdfViewer";

function PdfEditor() {
  return (
    <>
      <Navbar props={true} />
      <div>
        <PdfViewComponent document={"document.pdf"} />
      </div>
    </>
  );
}

export default PdfEditor;
