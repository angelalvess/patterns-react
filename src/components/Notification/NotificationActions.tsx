import { ReactNode } from "react";

interface NotificationActionsProps {
  children: ReactNode;
}

function NotificationActions({ children }: NotificationActionsProps) {
  return <div className="flex  gap-2 self-center">{children}</div>;
}

export default NotificationActions;
