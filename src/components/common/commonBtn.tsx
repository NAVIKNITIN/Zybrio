import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly title: string;
  readonly width?: string;
  readonly height?: string;
  readonly textColor?: string;
  readonly bgColor?: string;
  readonly px?: string;
  readonly py?: string;
  readonly radius?: string;
}

const CommonButton = ({
  title,
  width = "auto",
  height = "auto",
  textColor = "#FFFFFF",
  bgColor = "#0B3D0B",
  px = "px-6",
  py = "py-2",
  radius = "rounded-md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      style={{
        width,
        height,
        color: textColor,
        backgroundColor: bgColor,
        ...props.style,
      }}
      className={`flex items-center font-medium transition hover:opacity-90 ${px} ${py} ${radius} ${className}`}
    >
      {title}
    </button>
  );
};

export default CommonButton;
