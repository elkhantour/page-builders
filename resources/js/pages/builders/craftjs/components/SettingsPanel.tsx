import { useEditor } from "@craftjs/core";

export function SettingsPanel() {
  const { selected } = useEditor((state) => {
    const currentNodeId = state.events.selected;
    return {
      selected: currentNodeId ? state.nodes[currentNodeId] : null,
    };
  });

  const Settings = selected?.related?.settings;

  return (
    <aside className="w-80 border-l border-slate-200 bg-white p-4">
      <h2 className="mb-4 text-lg font-semibold">Settings</h2>

      {selected ? (
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-50 px-3 py-2 text-sm">
            Selected: {selected.data.displayName}
          </div>

          {Settings ? (
            <Settings />
          ) : (
            <p className="text-sm text-slate-500">No settings available.</p>
          )}
        </div>
      ) : (
        <p className="text-sm text-slate-500">Select a block to edit it.</p>
      )}
    </aside>
  );
}
