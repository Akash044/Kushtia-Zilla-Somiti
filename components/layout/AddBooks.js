

const AddBooks = () => {
    return (
        <div className="flex justify-center justify-items-center h-96 mx-40">
            <div>
                <form>
                    <div className="relative overflow-hidden mx-auto bg-red-400 h-40 w-40 rounded-full">
                        <input type="file" accept="image/*" className="border-none absolute bottom-0 outline-none bg-transparent w-full box-border py-4 px-28 cursor-pointer transition duration-500  imageField" />
                    </div>

                    <div className="flex justify-items-center gap-4 py-4 smMxW:grid">
                        <div className="border-2 p-4 rounded-md">
                            <label for="name" className=""> Book Name: </label>
                            <input type="text" id="name" name="name" className="p-2" required />
                        </div>
                        <div className="border-2 p-4 rounded-md">
                            <label for="email" className=""> Authors: </label>
                            <input type="text" id="email" name="email" className="p-2" required />
                        </div>
                        <div className="border-2 p-4 rounded-md">
                            <label for="phone" className=""> Edition: </label>
                            <input type="number" id="phone" name="mobile" className="p-4" required />
                        </div>
                    </div>
                    <div className="flex justify-center justify-items-center">
                        <button type="submit" className=" bg-green-600 p-4 px-40 rounded-xl text-white focus:bg-pink-700 hover:border-black" >ADD</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddBooks;