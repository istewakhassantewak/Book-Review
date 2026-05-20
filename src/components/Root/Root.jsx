import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <>
            <div className="md:container mx-auto p-4">
                <Header></Header>
                <Outlet></Outlet>
            </div>

        </>
    );
};

export default Root;