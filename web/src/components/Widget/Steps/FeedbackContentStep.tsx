import { FormEvent, useState } from "react";
import { ArrowLeft, Camera } from "phosphor-react";

import { CloseButton } from "../../Common/CloseButton";
import { ScreenshotButton } from "../../Common/ScreenshotButton";

import { FeedbackType, feedbackTypes } from "../WidgetForm";
import { api } from "../../../services/api";
import { LoadingIcon } from "../../Common/LoadingIcon";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackReset: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackReset,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [comment, setComment] = useState<string>("");
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event?.preventDefault();

    setIsSendingFeedback(true);

    await api.post("/feedbacks", {
      type: feedbackType,
      comment,
      screenshot,
    });

    setIsSendingFeedback(false);

    onFeedbackSent();
  }
  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-light-text-secondary hover:text-light-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary outline-purple"
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

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="comment-area"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
            className="submit-button"
          >
            {isSendingFeedback ? <LoadingIcon /> : "Enviar feedback"}
          </button>
        </footer>
      </form>
    </>
  );
}
