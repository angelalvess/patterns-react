import { Check, Rocket, X } from "lucide-react";
import { Notification } from "./Notification";

function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">
      <div className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
        <span className="font-bold text-white">Notificaçõs</span>
        <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
          MARCAR TODAS COMO VISITAS
        </button>
      </div>

      <div>
        <div className="bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400">
          Recentes
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Context text="Você recebeu um convite para fazer parte da empresa da rocketseat." />
          </Notification.Root>
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Context text="Você recebeu um convite para fazer parte da empresa da rocketseat." />
            <Notification.Actions>
              <Notification.Action icon={Check} />
              <Notification.Action
                icon={X}
                className="bg-violet-500 hover:bg-violet-600"
              />
              {/* ja esta setado para receber onclick  */}
            </Notification.Actions>
          </Notification.Root>
        </div>
      </div>

      <div>
        <div className="bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400">
          Antigas
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Context text="Você recebeu um convite para fazer parte da empresa da rocketseat." />
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Context text="Você recebeu um convite para fazer parte da empresa da rocketseat." />
            <Notification.Actions>
              <Notification.Action icon={Check} />
              <Notification.Action
                icon={X}
                className="bg-violet-500 hover:bg-violet-600"
              />
            </Notification.Actions>
          </Notification.Root>
        </div>
      </div>
    </div>
  );
}

export default Widget;
