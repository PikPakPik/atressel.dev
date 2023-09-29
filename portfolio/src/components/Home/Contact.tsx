import { useForm, SubmitHandler } from "react-hook-form"
type Inputs = {
    firstname: string
    lastname: string
    email: string
    message: string
}
const Contact: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <>
            <div id="contact" className="container mx-auto lg:px-32 mb-20">
                <div className="flex flex-row items-center justify-center md:justify-start">
                    <h2 className="text-3xl text-white"><span className="text-[#C778DD]">#</span>contact</h2>
                    <div className="w-[36%] h-[2px] bg-[#C778DD] ml-4 hidden md:block"></div>
                </div>
                <div className="my-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 items-center">
                        <label
                            htmlFor="firstname"
                            className={`block font-bold text-sm ${errors.firstname ? "text-red-400" : "text-purple-400"
                                }`}
                        >
                            Prénom
                        </label>
                        <input {...register("firstname", {
                            required: true
                        })} className={"block flex-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md w-1/2" + (errors.email ? " border-red-400 border-[2px]" : "")}
                        />
                        <label
                            htmlFor="lastname"
                            className={`block font-bold text-sm ${errors.lastname ? "text-red-400" : "text-purple-400"
                                }`}
                        >
                            Nom
                        </label>
                        <input {...register("lastname", {
                            required: true
                        })} className={"block flex-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md w-1/2" + (errors.email ? " border-red-400 border-[2px]" : "")}
                        />
                        <label
                            htmlFor="email"
                            className={`block font-bold text-sm ${errors.email ? "text-red-400" : "text-purple-400"
                                }`}
                        >
                            Email
                        </label>
                        <input {...register("email", {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            },
                        })} className={"block flex-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md w-1/2" + (errors.email ? " border-red-400 border-[2px]" : "")}
                        />
                        {errors.email && <span className="text-red-400">Email invalide</span>}
                        <label
                            htmlFor="message"
                            className={`block font-bold text-sm ${errors.message ? "text-red-400" : "text-purple-400"
                                }`}
                        >
                            Message
                        </label>
                        <textarea {...register("message", {
                            required: true
                        })} className={"block flex-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md w-1/2" + (errors.email ? " border-red-400 border-[2px]" : "")}
                        />
                        <input type="submit" className="w-1/2 py-2 mt-5 text-white bg-[#C778DD] rounded-md hover:bg-[#A65DB1]" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact