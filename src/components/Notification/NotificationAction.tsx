import React, { ButtonHTMLAttributes, ElementType } from "react";
import { twMerge } from "tailwind-merge";
interface NotificationActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

function NotificationAction({ icon: Icon, ...rest }: NotificationActionProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        "w-8 h-8 flex rounded  items-center justify-center bg-zinc-500 hover:bg-zinc-600",
        rest.className
      )}
    >
      <Icon className="w-3 h-3 text-zinc-50" />
    </button>
  );
}

export default NotificationAction;
