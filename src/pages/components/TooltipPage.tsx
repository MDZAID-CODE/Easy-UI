import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const basicUsageCode = `
import { Tooltip } from "@/components/Tooltip/Tooltip"
import { Button } from "@/components/Button/Button"

{/* Hover - all sides */}
<Tooltip content="Top tooltip" side="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Bottom tooltip" side="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Left tooltip" side="left">
  <Button>Left</Button>
</Tooltip>

<Tooltip content="Right tooltip" side="right">
  <Button>Right</Button>
</Tooltip>

{/* Click trigger */}
<Tooltip content="Clicked!" side="top" trigger="click">
  <Button variant="secondary">Click me</Button>
</Tooltip>
`;

  const propsData = [
    
    {
      prop: "side",
      type: `"top" | "bottom" | "left" | "right"`,
      default: `"top"`,
      description: "The preferred side to render the tooltip",
    },
    {
      prop: "delay",
      type: "number",
      default: "200",
      description: "Delay in milliseconds before showing the tooltip (hover only)",
    },
    {
      prop: "trigger",
      type: `"hover" | "click"`,
      default: `"hover"`,
      description: "How the tooltip is triggered — on hover or on click",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Tooltip
        </p>
        <p className="text-lg text-gray-600">
          A popup that displays information related to an element on hover or
          click.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={basicUsageCode}>
          <div className="flex flex-wrap items-center justify-center gap-6 py-8">
            <Tooltip content="Top tooltip" side="top">
              <Button>Top</Button>
            </Tooltip>

            <Tooltip content="Bottom tooltip" side="bottom">
              <Button variant="secondary">Bottom</Button>
            </Tooltip>

            <Tooltip content="Left tooltip" side="left">
              <Button variant="outline">Left</Button>
            </Tooltip>

            <Tooltip content="Right tooltip" side="right">
              <Button variant="dark">Right</Button>
            </Tooltip>

            <Tooltip content="You clicked me!" side="top" trigger="click">
              <Button variant="ok">Click me</Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;