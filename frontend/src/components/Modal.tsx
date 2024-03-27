import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, ReactNode } from "react";
import { cn } from "@/lib/classes";
import IconButton from "./IconButton";

type Props = {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

const Modal = ({
  isOpen = false,
  onClose,
  children,
  className = "",
}: Props) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="transform text-left align-middle shadow-xl transition-all">
                <IconButton
                  icon="close"
                  onClick={onClose}
                  className="button-background absolute right-1 top-1"
                />

                <div className={cn("rounded-xl bg-white", className)}>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

type HeadeProps = {
  children: ReactNode;
  className?: string;
};

const Header = ({ children, className = "" }: HeadeProps) => {
  return (
    <>
      <div className={cn("p-4 border-b", className)}>{children}</div>
    </>
  );
};

Modal.Header = Header;

type TitleProps = {
  children: ReactNode;
  className?: string;
};

const Title = ({ children, className = "" }: TitleProps) => {
  return <h3 className={cn("text-xl", className)}>{children}</h3>;
};

Modal.Title = Title;

type ContentProps = {
  children: ReactNode;
  className?: string;
};

const Content = ({ children, className = "" }: ContentProps) => {
  return <div className={cn("p-4", className)}>{children}</div>;
};

Modal.Content = Content;

type FooterProps = {
  children: ReactNode;
  className?: string;
};

const Footer = ({ children, className = "" }: FooterProps) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-end gap-4 px-4 pb-4 w-full",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

Modal.Footer = Footer;

export default Modal;
