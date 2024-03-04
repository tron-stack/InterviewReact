import { useEffect, useRef } from "react";
import documentService from "../api/documentService";
import { useSelector } from "react-redux";
//import axiosClient from "../api/axios";

function PdfViewComponent(props) {
  const containerRef = useRef(null);
  const userState = useSelector((state)=>state.user.user)

  useEffect(() => {
    // This `useRef` instance will render the PDF.
    const container = containerRef.current;
    // eslint-disable-next-line
    let PSPDFKit, instance;

    (async function () {
      PSPDFKit = await import("pspdfkit");

      // Ensure that there's only one PSPDFKit instance.
      PSPDFKit.unload(container);

      const item = {
        type: "custom",
        id: "save-button",
        title: "Save Progress",
        onPress: (event) => {
          alert("Saving to Database!");
          documentService.uploadDocument(instance, userState)
        }}

      instance = await PSPDFKit.load({
        container,
        document: props.document,
        baseUrl: `${window.location.protocol}//${window.location.host}//${process.env.PUBLIC_URL}`,
        toolbarItems: [...PSPDFKit.defaultToolbarItems, item]
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
