import { useEffect, useRef } from "react";

export const useOutClickDiv = (callback: { (): void; (): void }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function divOutClick(event: { target: unknown }) {
      const target = event.target as HTMLDivElement;
      const element = ref.current;

      if (!element) {
        return null;
      }
      if (!element.contains(target)) {
        callback();
      }
    }
    window.addEventListener("mousedown", divOutClick);

    return () => {
      window.removeEventListener("mousedown", divOutClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
};

export const useOutClickForm = (callback: { (): void; (): void }) => {
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    function formOutClick(event: { target: unknown }) {
      const target = event.target as HTMLFormElement;
      const element = ref.current;

      if (!element) {
        return null;
      }
      if (!element.contains(target)) {
        callback();
      }
    }
    window.addEventListener("mousedown", formOutClick);

    return () => {
      window.removeEventListener("mousedown", formOutClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
};
