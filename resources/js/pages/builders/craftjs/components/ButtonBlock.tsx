import { useNode } from "@craftjs/core";

type ButtonBlockProps = {
  text: string;
};

export function ButtonBlock({ text }: ButtonBlockProps) {
  const {
    connectors: { connect, drag },
    selected,
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <button
      ref={(ref) => {
        if (ref) connect(drag(ref));
      }}
      className={`inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition ${
        selected ? "ring-2 ring-blue-500 ring-offset-2" : ""
      }`}
      type="button"
    >
      {text}
    </button>
  );
}

ButtonBlock.craft = {
  displayName: "Button",
  props: {
    text: "Button",
  },
  related: {
    settings: ButtonBlockSettings,
  },
};

function ButtonBlockSettings() {
  const {
    actions: { setProp },
    text,
  } = useNode((node) => ({
    text: node.data.props.text,
  }));

  return (
    <div>
      <label className="mb-1 block text-sm font-medium">Label</label>
      <input
        type="text"
        value={text}
        onChange={(e) =>
          setProp((props: ButtonBlockProps) => {
            props.text = e.target.value;
          })
        }
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
      />
    </div>
  );
}
