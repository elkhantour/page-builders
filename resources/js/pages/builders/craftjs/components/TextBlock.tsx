import { useNode } from "@craftjs/core";

type TextBlockProps = {
  text: string;
  fontSize?: number;
};

export function TextBlock({ text, fontSize = 16 }: TextBlockProps) {
  const {
    connectors: { connect, drag },
    selected,
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <p
      ref={(ref) => {
        if (ref) connect(drag(ref));
      }}
      style={{ fontSize: `${fontSize}px` }}
      className={`rounded-md p-1 transition ${
        selected ? "outline outline-2 outline-blue-500" : ""
      }`}
    >
      {text}
    </p>
  );
}

TextBlock.craft = {
  displayName: "Text",
  props: {
    text: "Editable text",
    fontSize: 16,
  },
  related: {
    settings: TextBlockSettings,
  },
};

function TextBlockSettings() {
  const {
    actions: { setProp },
    text,
    fontSize,
  } = useNode((node) => ({
    text: node.data.props.text,
    fontSize: node.data.props.fontSize,
  }));

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium">Text</label>
        <textarea
          value={text}
          onChange={(e) =>
            setProp((props: TextBlockProps) => {
              props.text = e.target.value;
            })
          }
          className="min-h-[100px] w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Font size</label>
        <input
          type="number"
          value={fontSize}
          onChange={(e) =>
            setProp((props: TextBlockProps) => {
              props.fontSize = Number(e.target.value);
            })
          }
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
      </div>
    </div>
  );
}
