import MainNavBar from "../../components/layout/MainNavBar";

const index = () => {
    return (
        <>
        <MainNavBar />
        <div className="flex justify-center items-center h-screen ">
            <div>
                <h3 className="text-xl">Login</h3>
                <form action="" className="flex flex-col py-4 shadow-md p-10 rounded-md">
                    <label for="email">Enter email</label>
                    <input type="email" id="email" className="border-2" required/>

                    <label for="password">Enter password </label>
                    <input type="password" id="password" className="border-2" required/>

                    <button type="submit" className="bg-green-500 my-4 p-2 px-10 rounded-lg">Login</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default index;