import "./AddPeoples.module.css"

import { Formik, Field } from 'formik';
import * as yup from 'yup';

const signUpValidationSchema = yup.object().shape({
    name: yup.string().required('User name is Required'),
    roll: yup.string().required('User name is Required'),
    dept: yup.string().required('User name is Required'),
    contactNo: yup.number().min(11).required('User name is Required'),
    email: yup
        .string()
        .matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/,
            'Please enter valid email',
        )
        .email('Please enter valid email')
        .required('Email Address is Required'),
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords do not match')
        .required('Confirm password is required'),
});


const AddPeoples = () => {
    return (
        <div className="flex justify-center justify-items-center h-screen">
            <div>
                <div className="relative overflow-hidden mx-auto bg-red-400 h-40 w-40 rounded-full">
                    <input type="file" accept="image/*" className="absolute bottom-0 right-5 w-full box-border py-4 px-28 cursor-pointer transition duration-500  imageField" />
                </div>
                <form>
                    <div className="flex justify-items-center gap-4 smMxW:grid ">

                        <div className=" grid gap-3 my-4 smMxW:mb-0">
                            <div className="border-2 p-4 rounded-md">
                                <label for="name" className=""> Name: </label>
                                <input type="text" id="name" name="name" className="p-2" required />
                            </div>
                            <div className="border-2 p-4 rounded-md">
                                <label for="email" className=""> Email: </label>
                                <input type="email" id="email" name="email" className="p-2" required />
                            </div>
                            <div className="border-2 p-4 rounded-md">
                                <label for="phone" className=""> Mobile: </label>
                                <input type="number" id="phone" name="mobile" pattern="[+]{1}[0-9]{11,14}" className="p-4" required />
                            </div>
                            <div className="border-2 p-4 rounded-md">
                                <label for="designation" className=""> Designation: </label>
                                <input type="text" id="designation" name="designation" className="p-2" required />
                            </div>
                        </div>
                        <div className="grid gap-3 my-4 smMxW:mt-0">
                            <div className="border-2 p-4 rounded-md">
                                <label for="dept" className=""> Dept.: </label>
                                <input list="dept" name="dept" className="p-2" required />
                                <datalist id="dept">
                                    <option value="EEE" />
                                    <option value="CSE" />
                                    <option value="ETE" />
                                    <option value="ECE" />
                                    <option value="ME" />
                                    <option value="MSE" />
                                    <option value="GCE" />
                                    <option value="IPE" />
                                    <option value="CFPE" />
                                    <option value="MTE" />
                                    <option value="CE" />
                                    <option value="BECM" />
                                    <option value="URP" />
                                    <option value="ARCH" />
                                </datalist>
                            </div>
                            <div className="border-2 p-4 rounded-md">
                                <label for="series" className=""> Series: </label>
                                <input type="number" id="series" name="series" className="p-2 mx-6" required />
                            </div>
                            <div className="border-2 p-4 rounded-md">
                                <label for="section" className=""> Section: </label>
                                <input list="section" name="section" className="p-2" required />
                                <datalist id="section">
                                    <option value="A" />
                                    <option value="B" />
                                    <option value="C" />
                                </datalist>
                            </div>
                            <div className="border-2 p-4 rounded-md">
                                <label for="rolls" className=""> Roll: </label>
                                <input type="number" id="roll" name="roll" className="p-2" required />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center justify-items-center py-4">
                        <button type="submit" className=" bg-green-600 p-4 px-40 smMxW:px-32 rounded-xl text-white focus:bg-pink-700" > ADD</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddPeoples;