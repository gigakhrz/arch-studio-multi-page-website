"use client";

import Image from "next/image";
import arrowSvg from "../../../../public/assets/icons/Group 18.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import userSchema from "./contactModule";
interface emailMessage {
  name: string;
  email: string;
  message: string;
}

export default function ConnectWith() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<emailMessage>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data: object) => {
    console.log(data);
  };

  console.log(errors.email?.message);
  return (
    <div className="w-[375px] px-[32px] gap-[42px] flex flex-col md:w-[573px] md:p-0 lg:flex-row lg:w-[860px] xl:w-[1110px]">
      <h2
        className="text-[48px] text-[#1B1D23] w-[200px] font-bold leading-[52px] tracking-[-1.714px]  md:text-[72px]  
        md:leading-[64px] md:tracking-[-2px] md:w-[473px]"
      >
        Connect with us
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-[43px]"
      >
        <div className="nameDiv flex flex-col w-full gap-[21px] relative">
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className={`pl-[34px] text-[20px] text-[#1B1D23] font-bold leading-normal tracking-[ -0.312px] ${
              errors.name?.message !== undefined
                ? "placeholder-[#DF5656]"
                : "placeholder-[#C8CCD8]"
            } outline-none`}
          />
          <p
            className={`  absolute  top-[-15px]  right-0 text-[16px] text-[#DF5656] font-bold leading-normal tracking-[-0.281px] `}
          >
            {errors.name?.message}
          </p>
          <hr
            className={` ${
              errors.name?.message !== undefined ? "bg-[#DF5656]" : ""
            } h-[1px] border-none bg-[#1B1D23] nameDiv:focus:h-[2px]`}
          />
        </div>

        <div className="flex flex-col w-full gap-[21px] relative">
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className={`pl-[34px] text-[20px] text-[#1B1D23] font-bold leading-normal tracking-[ -0.312px] ${
              errors.email?.message !== undefined
                ? "placeholder-[#DF5656]"
                : "placeholder-[#C8CCD8]"
            } outline-none`}
          />
          <p className="absolute right-0 top-[-15px] text-[16px] text-[#DF5656] font-bold leading-normal tracking-[-0.281px]">
            {errors.email?.message}
          </p>
          <hr
            className={` ${
              errors.message?.message !== undefined ? "bg-[#DF5656]" : ""
            } h-[1px] border-none bg-[#1B1D23] nameDiv:focus:h-[2px]`}
          />
        </div>
        <div className="w-full flex flex-col items-end">
          <div className="flex flex-col w-full gap-[21px] relative">
            <input
              type="text"
              placeholder="Message"
              {...register("message")}
              className={`pl-[34px] text-[20px] text-[#1B1D23] font-bold leading-normal tracking-[ -0.312px] ${
                errors.message?.message !== undefined
                  ? "placeholder-[#DF5656]"
                  : "placeholder-[#C8CCD8]"
              } outline-none`}
            />
            <p className="absolute  top-[-15px] right-0 text-[16px] text-[#DF5656] font-bold leading-normal tracking-[-0.281px]">
              {errors.message?.message}
            </p>
            <hr
              className={` ${
                errors.message?.message !== undefined ? "bg-[#DF5656]" : ""
              } h-[1px] border-none bg-[#1B1D23] nameDiv:focus:h-[2px]`}
            />
          </div>
          <button
            type="submit"
            className="w-[80px] h-[80px] bg-[#1B1D23] flex justify-center items-center cursor-pointer"
          >
            <Image src={arrowSvg} alt="arrow" />
          </button>
        </div>
      </form>
    </div>
  );
}
