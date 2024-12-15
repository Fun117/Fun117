import { cn } from "@/lib/utils";
import { Input, InputProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export function CustomFormLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex flex-col lg:!flex-row justify-between p-[3.90625vw] lg:!py-[30px] lg:!px-[20px] border-b border-[#dbe9f5]"
    >
      {children}
    </label>
  );
}

export function CustomFormDt({ children }: { children: ReactNode }) {
  return (
    <dt className="flex justify-between items-center font-bold text-[3.38542vw] lg:!text-xl text-justify text-[#2c3d4e] tracking-[.04em] leading-6 uppercase w-[27.34375vw] lg:!w-[283px] sm:!mb-[2vw] lg:!mb-0">
      {children}
    </dt>
  );
}

export interface CustomFormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomFormInput = React.forwardRef<
  HTMLInputElement,
  CustomFormInputProps & InputProps
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      className={cn(
        "text-[3.38542vw] lg:!text-base text-[#071828] w-full h-fit py-[1.5625vw] px-[2.34375vw] lg:!py-[18px] lg:!px-[15px] bg-white border lg:!border-2 border-[#dbe9f5] rounded-[1.30208vw] lg:!rounded-[10px]",
        className
      )}
      {...props}
    />
  );
});
CustomFormInput.displayName = "CustomFormInput";
export { CustomFormInput };

export function CustomFormErrorMessage({ children }: { children: ReactNode }) {
  return (
    <p className="text-[2.86458vw] lg:!text-sm text-[#dc3232] leading-[1.8] mt-[.35em]">
      {children}
    </p>
  );
}
