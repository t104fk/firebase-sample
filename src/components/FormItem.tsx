import React from "react";
import clsx from "clsx";

interface Props {
  name: string;
  inline?: boolean;
  className?: string;
}

const FormItem: React.FC<Props> = ({ name, inline, className, children }) => {
  return (
    <div
      className={clsx("", className, {
        [""]: inline,
      })}
    >
      <p className="font-bold mt-md mb-sm">{name}</p>
      {children}
    </div>
  );
};

export default FormItem;
