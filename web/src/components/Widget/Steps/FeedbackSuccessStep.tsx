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

      <div className="flex flex-col items-center pt-6 pb-10 w-[304px]">
        <img src={checkImageUrl} alt="Imagem de sucesso" />

        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          type="button"
          onClick={onFeedbackReset}
          className="py-2 px-6 mt-6 bg-light-surface-secondary dark:bg-dark-surface-secondary rounded-md border-transparent text-sm leading-6 hover:bg-light-surface-hover dark:hover:bg-dark-surface-hover transition-colors outline-purple"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
