import { CloseButton } from "../Common/CloseButton";

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton title="Fechar formulário de feedback" />
      </header>

      <footer className="text-xs text-neutral-400">
        Desenvolvido por{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/raphael-ferreira"
        >
          Raphael Ferreira
        </a>
      </footer>
    </div>
  );
}
