import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";



const Resister = () => {
    const { register, handleSubmit,
        formState: { errors },
    } = useForm();
    const handleResister = async (data) => {
      console.log(data);
    }
    return (
        <div className="container mx-auto">
            <div className="card-body p-0 lg:p-8 border w-full md:w-1/2 lg:w-[40%] mx-auto">
                <form onSubmit={handleSubmit(handleResister)} className="p-5 space-y-3">
                    <h1 className="text-3xl font-bold mb-12 text-center">Please Login</h1>
                    <div className="space-y-3">
                        <label className="text-xl">Username </label>
                        <input type="text"  {...register("name", { required: true })} name="name" className="p-3 bg-[#F3F3F3] w-full border-blue-500 dark:text-black" id="" placeholder="Enter your name" />
                        {errors.name && <span className="text-red-500">name is required</span>}
                    </div>
                    <div className="space-y-3">
                        <label className="text-xl ">Email Address</label>
                        <input type="email"  {...register("email", { required: true })} name="email" className="p-3 bg-[#F3F3F3] w-full border-blue-500 dark:text-black" id="" placeholder="Enter your username or address" />
                        {errors.email && <span className="text-red-500">email is required</span>}
                    </div>
                    <div className="space-y-3">
                        <label className="text-xl">Password</label>
                        <input type="password"  {...register("password", {
                            required: true, minLength: 6,
                            pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                        })} name="password" className="p-3 bg-[#F3F3F3] w-full border-blue-500 dark:text-black" id="" placeholder="Enter your password" />
                        {errors.password?.type === "minLength" && <span className="text-red-600">password length must be 6 characters or longer</span>}
                        {errors.password?.type === 'pattern' && <span className="text-red-600">password must have one uppercase one lowercase one number and one special character</span>}
                        {errors.password?.type === "required" && (
                            <p className="text-red-600">password is required</p>
                        )}
                    </div>
                    <p className="text-base font-medium my-8">not haven't account yet! Please register <Link to='/login' className="text-blue-500 underline">SIGN Up</Link></p>
                    <button className="p-2 rounded bg-[#26689a] text-white text-[18px] font-medium hover:text-blue-500 w-full">Sign in</button>
                </form>
                <div className=" w-[80%] mx-auto">
                    <div className="divider divide-x-2 divide-black text-2xl text-center">Or</div>
                    <div className="space-y-3 mt-6 px-3">
                        <h1 className="flex items-center justify-center py-2 border rounded-full text-3xl ease-in gap-5 bg-white cursor-pointer transition hover:text-blue-600"><FcGoogle></FcGoogle> <span className="text-base font-medium">Sign in With Google</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resister;