import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function HomeContent() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/home");
    };
    return (
        
        <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-20">


            <div className="md:w-1/2">
                <h1 className="text-7xl font-bold leading-tight">Personalized</h1>
                <h1 className="text-7xl font-bold leading-tight">feeds for your</h1>
                <p className="text-xl mt-4 text-gray-600">Discover top headlines and trending articles.</p>
                <Button variant="contained" sx={{
                    textTransform: "none",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    backgroundColor: "#d9964b",
                    borderColor: "#FFBF00",
                    marginTop: "2rem",
                    padding: "0.5rem 2rem"
                }} onClick={navigateToHome}>Explore Now</Button>
            </div>


            <div className="relative flex items-center justify-center w-[350px] h-[250px] md:w-[500px] md:h-[350px]">

                <div className="absolute bg-[#d9964b] w-full h-full -z-10 translate-x-5 -translate-y-5"></div>


                <img
                    src="src/assets/images/homeImg.png"
                    alt="News"
                    className="w-full h-full object-cover shadow-lg"
                />
            </div>

        </div>
    );
}
