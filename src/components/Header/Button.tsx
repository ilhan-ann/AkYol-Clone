import type { ReactNode } from "react";

type ButtonType = {
  children?: ReactNode;
  title?: string;
  action?: () => void;
  active?: boolean;
}

function Button({ title }: ButtonType) {
  return (
    <div>
      <button className="hover:bg-custom-hover-blue p-4">
        <span>{title}</span>
      </button>
    </div>
  )
}

export default Button
