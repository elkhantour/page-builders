import { useEffect } from "react";
import { useEditor } from "@craftjs/core";

export function DeleteHotkey() {
  const { selectedId, isDeletable, actions } = useEditor((state, query) => {
    const [currentNodeId] = Array.from(state.events.selected || []);

    return {
      selectedId: currentNodeId ?? null,
      isDeletable: currentNodeId
        ? query.node(currentNodeId).isDeletable()
        : false,
    };
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName?.toLowerCase();

      const isTyping =
        tag === "input" ||
        tag === "textarea" ||
        !!target?.isContentEditable;

      if (isTyping) return;

      if ((e.key === "Delete" || e.key === "Backspace") && selectedId && isDeletable) {
        e.preventDefault();
        actions.delete(selectedId);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, isDeletable, actions]);

  return null;
}
