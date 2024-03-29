import { cn } from "@/lib/utils";
import { Column, Text, Row, Section } from "@react-email/components";

export default function Base({
  nodes = [<Text>Column 1</Text>, <Text>Column 2</Text>],
}: {
  nodes: React.ReactNode[];
}) {
  return (
    <Section className="p-2 bg-stone-100 mb-4 rounded">
      <Row>
        {nodes?.map((node, i) => (
          <Column
            className={cn(
              "text-center",
              nodes.length >= 2 && `w-1/${nodes.length}`,
              i >= 1 &&
                "border-l border-l-stone-200 border-solid border-r-0 border-t-0 border-b-0",
            )}
          >
            {node}
          </Column>
        ))}
      </Row>
    </Section>
  );
}
