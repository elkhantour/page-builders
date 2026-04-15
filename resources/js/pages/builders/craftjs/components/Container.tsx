import { useNode } from "@craftjs/core";
import type { ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
  padding?: number;
  background?: string;
};

export function Container({
  children,
  padding = 24,
  background = "#ffffff",
}: ContainerProps) {
  const {
    connectors: { connect, drag },
    selected,
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <div
      ref={(ref) => {
        if (ref) connect(drag(ref));
      }}
      style={{ padding: `${padding}px`, background }}
      className={`min-h-[300px] rounded-xl border-2 border-dashed transition ${
        selected ? "border-blue-500" : "border-slate-300"
      }`}
    >
      <div className="space-y-4">{children}</div>
    </div>
  );
}

Container.craft = {
  displayName: "Container",
  props: {
    padding: 24,
    background: "#ffffff",
  },
  related: {
    settings: ContainerSettings,
  },
};

function ContainerSettings() {
  const {
    actions: { setProp },
    padding,
    background,
  } = useNode((node) => ({
    padding: node.data.props.padding,
    background: node.data.props.background,
  }));

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium">Padding</label>
        <input
          type="number"
          value={padding}
          onChange={(e) =>
            setProp((props: ContainerProps) => {
              props.padding = Number(e.target.value);
            })
          }
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Background</label>
        <input
          type="color"
          value={background}
          onChange={(e) =>
            setProp((props: ContainerProps) => {
              props.background = e.target.value;
            })
          }
          className="h-10 w-full rounded-lg border border-slate-300"
        />
      </div>
    </div>
  );
}
