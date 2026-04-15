import { useEditor } from "@craftjs/core";
import { Container } from "./Container";
import { TextBlock } from "./TextBlock";
import { ButtonBlock } from "./ButtonBlock";

export function Toolbox() {
  const { connectors } = useEditor();

  return (
    <aside className="w-64 border-r border-slate-200 bg-white p-4">
      <h2 className="mb-4 text-lg font-semibold">Toolbox</h2>

      <div className="space-y-3">
        <div
          ref={(ref) => {
            if (ref) connectors.create(ref, <Container canvas />);
          }}
          className="cursor-grab rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm shadow-sm hover:bg-slate-100"
        >
          Container
        </div>

        <div
          ref={(ref) => {
            if (ref) connectors.create(ref, <TextBlock text="New text" />);
          }}
          className="cursor-grab rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm shadow-sm hover:bg-slate-100"
        >
          Text
        </div>

        <div
          ref={(ref) => {
            if (ref) connectors.create(ref, <ButtonBlock text="New button" />);
          }}
          className="cursor-grab rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm shadow-sm hover:bg-slate-100"
        >
          Button
        </div>
      </div>
    </aside>
  );
}
