import React, { ElementType } from "react";

interface NotificationProps {
  icon: ElementType;
}

function NotificationIcon({ icon: Icon }: NotificationProps) {
  return <Icon className="w-6 h-6 text-violet-500 mt-3" />;
}

export default NotificationIcon;
