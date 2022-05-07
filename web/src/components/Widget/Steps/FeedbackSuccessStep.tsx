import { CloseButton } from "../../Common/CloseButton";

import checkImageUrl from "../../../assets/imgs/success.svg";

interface FeedbackSuccessStepProps {
  onFeedbackReset: () => void;
}
export function FeedbackSuccessStep({
  onFeedbackReset,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton title="Fechar formulário de feedback" />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={checkImageUrl} alt={"Imagem de sucesso"} />

        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          type="button"
          onClick={onFeedbackReset}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
