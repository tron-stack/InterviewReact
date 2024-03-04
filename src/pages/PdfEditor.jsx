import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import PdfViewComponent from "../components/PdfViewer";
import { authUserSF } from "../api/userSlice";
import { useEffect } from "react";

function PdfEditor() {
  const userState = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

//   useEffect(() => {

//     console.log(localStorage.getItem("Token"))
//     dispatch(
//       authUserSF({
//         user: { username: userState.username }
//       })
//     );

    //eslint-disable-next-line
//   }, []);

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
