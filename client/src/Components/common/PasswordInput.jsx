import React from "react";
import { useController } from "react-hook-form";
import { Password } from "primereact/password";

const PasswordInput = ({ control, name, label, rules, placeholder, feedback=true, }) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({ name, control, rules });

  return (
    <div>
      <label className="block mb-3" htmlFor={name}>{label}</label>
      <Password
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        placeholder={placeholder}
        className={`${invalid ? "p-invalid" : ""} w-full`}
        feedback={feedback}
        toggleMask={true}
      />
      {invalid && <span className="text-red-600 mt-3">{error.message}</span>}
    </div>
  );
};

export default PasswordInput;