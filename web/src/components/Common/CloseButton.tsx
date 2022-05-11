import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

interface CloseButtonProps {
  title: string;
}

export function CloseButton(props: CloseButtonProps) {
  return (
    <Popover.Button
      className="top-5 right-5 absolute text-light-text-secondary hover:text-light-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary outline-purple"
      title={props.title}
    >
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
}
