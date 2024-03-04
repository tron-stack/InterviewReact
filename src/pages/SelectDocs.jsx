import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";
import { useEffect } from "react";


function SelectDocs(){

    const [allDocs, setAllDocs] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch();
    })


    return(<>
    <Navbar/>
    {/* <DataGrid/> */}
    </>)
}