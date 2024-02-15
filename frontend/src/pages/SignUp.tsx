import { useForm } from "react-hook-form";

export type SignUpData = {
    firstName : string;
    lastName : string;
    email: string;
    country : string;
    age : number;
    password : string;
    confirmPassword: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpData>();

  const style1 = {
    border : "1px solid black",
    width : "100%",
    
  }

  const style2 = {
    border : "1px solid gray"
  }
  const onSubmit = handleSubmit(()=>{

  })

  return (
    <div className="container shadow-md ring-light-gray-500">


    <form className="flex flex-col gap-5 px-4 py-4 mt-20 rounded-2xl mx-4 bg-white" style={style1} onSubmit={onSubmit}>
    <h2 className="text-6xl font-semibold text-purple-600">Register yourself here</h2>
    <h2 className="text-3xl font-normal text-gray-700">Create your account in less than a minute</h2>
    <hr></hr>

    <div className="flex flex-col md:flex-row gap-5">
        <label  className="text-gray-700 text-sm font-bold flex-1">
            First Name
            <input className="rounded w-full border py-1 px-2 font-normal" style={style2} {...register("firstName",{required:"First Name is required"})}></input>
            {errors.firstName && (
                <span className="text-red-500">{errors.firstName.message}</span>
            )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
            Last Name :
            <input className="rounded w-full border py-1 px-2 font-normal" style={style2} {...register("lastName",{required:"Last Name is required"})}></input>
            {errors.lastName && (
                <span className="text-red-500">{errors.lastName.message}</span>
            )}
        </label>
    </div>

    <div className="flex flex-col md:flex-row gap-5">

    <label className="text-gray-700 text-sm font-bold flex-1">
            Email :
            <input className="rounded w-full border py-1 px-2 font-normal"  style={style2}{...register("email",{
                required:true,
                validate:{
                    matchPattern : (value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Invalid Email"
                }
            })}></input>
            {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
            )}
        </label>
    <label className="text-gray-700 text-sm font-bold flex-1">
            Country :
            <input className="rounded w-full border py-1 px-2 font-normal" style={style2} {...register("country",{required:"Country Name is required"})}></input>
            {errors.country && (
                <span className="text-red-500">{errors.country.message}</span>
            )}
        </label>
    </div>

    <div className="flex flex-col md:flex-row gap-5">

    <label className="text-gray-700 text-sm font-bold flex-1">
            Age :
            <input type="number" className="rounded w-full border py-1 px-2 font-normal" style={style2} min={0} max={100} {...register("age",{
                minLength:{
                    value:0,
                    message:"Age cannot be less than 0",
                },
                maxLength:{
                    value:100,
                    message:"Age must be less than 100",
                },
                required:"Age is required",
            })}></input>
            {errors.age && (
                <span className="text-red-500">{errors.age.message}</span>
            )}
        </label>

    <label className="text-gray-700 text-sm font-bold flex-1">
            Password :
            <input type="password" className="rounded w-full border py-1 px-2 font-normal" style={style2}
             {...register("password",{required:"Password is required",
             minLength:{
                value:8,
                message:"Password must contain atleast 8 characters"
             }})}>

             </input>
            {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
            )}
        </label>
    <label className="text-gray-700 text-sm font-bold flex-1">
            Confirm Password :
            <input type="password" className="rounded w-full border py-1 px-2 font-normal" style={style2} {...register("confirmPassword",
            {required:"Confirm Password does not match!!",
            validate:(val)=>{
                if(!val){
                    return "This field is required"
                }else if(watch("password") !== val){
                    return "Passwords does not match!!"
                }
            }})}></input>
            {errors.confirmPassword && (
                <span className="text-red-500">{errors.confirmPassword.message}</span>
            )}
        </label>
    </div>


        
        <button type="submit" className="bg-white text-gray-700 font-bold w-fit py-1 px-2 hover:rounded-lg hover:bg-purple-500 hover:text-white">
            Create my Account
        </button>

</form>
</div>
  );
};

export default SignUp;
