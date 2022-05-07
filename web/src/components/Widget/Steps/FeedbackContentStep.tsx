import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "../../Common/CloseButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackReset: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackReset,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackReset}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            className="w-6 h-6"
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton title="Fechar formulário de feedback" />
      </header>

      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
}
