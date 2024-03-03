import { useEffect, useRef } from "react";
//import axiosClient from "../api/axios";

function PdfViewComponent(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    // This `useRef` instance will render the PDF.
    const container = containerRef.current;
    // eslint-disable-next-line
    let PSPDFKit, instance;

    (async function () {
      PSPDFKit = await import("pspdfkit");

      // Ensure that there's only one PSPDFKit instance.
      PSPDFKit.unload(container);

      instance = await PSPDFKit.load({
        container,
        document: props.document,
        baseUrl: `${window.location.protocol}//${window.location.host}//${process.env.PUBLIC_URL}`,
      });

    //   const arrayBuffer = await instance.exportPDF();
    //   const blob = new Blob([arrayBuffer], { type: "application/pdf" });
    //   const formData = new FormData();
    //   formData.append("file", blob);
    //   await axiosClient.post("/docs/", formData);
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
    // eslint-disable-next-line
  }, [props.document]);

  return <div className="pdf-viewer-component" ref={containerRef} style={{ width: "100%", height: "100vh", position: 'relative', display:'block', top: '115px' }} />;
}

export default PdfViewComponent;
