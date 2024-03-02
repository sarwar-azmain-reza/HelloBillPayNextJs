"use client";

import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";

const Input = ({
	lable,
	placeholder,
	type,
	margin = "mt-3",
	required = true,
	errorMessage = null,
	name,
	onChange,
	values,
}) => {
	const [focused, setFocused] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div className={`${margin} select-none`}>
			<p>{lable}</p>
			<div
				className={`mt-1 rounded-md  w-full h-12 border ${
					errorMessage
						? "border-red-500"
						: focused
						? "border-success"
						: "border-gray-300"
				} flex justify-between items-center px-3`}
			>
				<input
					type={showPassword ? "text" : type}
					placeholder={placeholder}
					className=" focus:outline-none  w-full h-full"
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
					name={name}
					onChange={onChange}
					value={values}
					required={required}
				/>
				{errorMessage ? (
					<RiErrorWarningLine className="text-red-500 text-lg" />
				) : (
					type === "password" && (
						<div className="">
							{showPassword ? (
								<AiOutlineEyeInvisible
									onClick={() => setShowPassword(false)}
									className="cursor-pointer text-black"
								/>
							) : (
								<AiOutlineEye
									onClick={() => setShowPassword(true)}
									className="cursor-pointer"
								/>
							)}
						</div>
					)
				)}
			</div>

			{errorMessage && (
				<p className="text-sm text-red-500 mt-1">{errorMessage}</p>
			)}
		</div>
	);
};

export default Input;
