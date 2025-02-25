import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/home");
    };
    
    return (
        <div className=" h-20  flex justify-between items-center">
            <div >
                <img src="src/assets/images/logo.png" alt="logo" className="mt-5 ml-5 w-80 " />

            </div>
            <div className="mr-30 mt-5">
                <Button variant="contained" sx={{
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    backgroundColor: "#d9964b",
                    borderColor: "#FFBF00",
                    
                }} onClick={navigateToHome}>Explore Now</Button>
            </div>
        </div>
    );
}