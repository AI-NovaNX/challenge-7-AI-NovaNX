import React, { useEffect } from "react";
import Button from "../Button/Button";
import defaultIcon from "/Assets/Message.svg";

export interface FeedbackOverlayProps {
  open: boolean;
  title?: string;
  message?: string;
  iconSrc?: string;
  closeLabel?: string;
  className?: string;
  onClose?: () => void;
}

const FeedbackOverlay: React.FC<FeedbackOverlayProps> = ({
  open,
  title = "Message Received!",
  message = "Thanks for reaching out — we’ll get back to you as soon as\npossible.",
  iconSrc,
  closeLabel = "Back to Home",
  className,
  onClose,
}) => {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) onClose?.();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Mobile + md (hide on lg and up) */}
      <div className={`fixed inset-0 z-60 lg:hidden ${className ?? ""}`}>
        <div
          aria-hidden
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-100"
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-labelledby="form-overlay-title"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 scale-100 transition-all duration-300"
        >
          <div className="w-[353px] h-[374px] rounded-2xl border border-[#252B37] bg-[#000000]/80 text-[#FDFDFD]">
            <div className="flex flex-col items-center gap-3 h-full pb-10">
              <div className="w-full h-[160px] bg-[#0A0D12] flex items-center justify-center">
                <img
                  id="form-overlay-icon"
                  src={iconSrc || "/Assets/MobileMessage.svg"}
                  alt=""
                  className="w-[140px] h-[140px]"
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                />
              </div>
              <div className="w-full h-auto flex flex-col items-center justify-center">
                <h3
                  id="form-overlay-title"
                  className="font-['Quicksand'] font-bold text-center text-[18px]/[32px] text-[#FDFDFD]"
                >
                  {title}
                </h3>
                <p
                  id="form-overlay-message"
                  className="font-['Quicksand'] font-medium text-center text-[14px]/[28px] text-[#A4A7AE] whitespace-pre-line"
                >
                  {message}
                </p>
              </div>
              <Button
                type="button"
                variant="primary"
                size="md"
                className="w-[305px] mt-auto"
                onClick={() => {
                  try {
                    window.location.hash = "about";
                  } finally {
                    onClose?.();
                  }
                }}
              >
                {closeLabel}
              </Button>
            </div>
          </div>
        </aside>
      </div>

      {/* Desktop and larger (show on lg and up only) */}
      <div className={`fixed inset-0 z-60 hidden lg:block ${className ?? ""}`}>
        <div
          aria-hidden
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-100"
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-labelledby="form-overlay-title"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 scale-100 transition-all duration-300"
        >
          <div className="w-[518px] h-[479px] rounded-2xl border border-[#252B37] bg-[#000000]/80 text-[#FDFDFD]">
            <div className="flex flex-col items-center gap-3 h-full pb-10">
              <div className="w-full h-[228px] bg-[#0A0D12] flex items-center justify-center">
                <img
                  id="form-overlay-icon"
                  src={iconSrc || "/Assets/Message.svg"}
                  alt=""
                  className="w-[228px] h-[228px]"
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                />
              </div>
              <div className="w-full h-auto flex flex-col items-center justify-center">
                <h3
                  id="form-overlay-title"
                  className="font-['Quicksand'] font-bold text-center text-[20px]/[34px] text-[#FDFDFD]"
                >
                  {title}
                </h3>
                <p
                  id="form-overlay-message"
                  className="font-['Quicksand'] font-medium text-center text-[16px]/[30px] text-[#A4A7AE] whitespace-pre-line"
                >
                  {message}
                </p>
              </div>
              <Button
                type="button"
                variant="primary"
                size="lg"
                className="w-[361px] mt-auto"
                onClick={() => {
                  try {
                    window.location.hash = "about";
                  } finally {
                    onClose?.();
                  }
                }}
              >
                {closeLabel}
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default FeedbackOverlay;
