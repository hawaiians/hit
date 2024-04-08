import { cn } from "@/lib/utils";
import { Column, Text, Row, Section, Button } from "@react-email/components";

export function CTABlockButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      href={href}
      className="border-stone-200 tracking-wide border border-solid text-stone-600 px-2 py-1 rounded"
    >
      {children}
    </Button>
  );
}

CTABlock.Button = CTABlockButton;

export default function CTABlock({
  nodes = [<Text>Column 1</Text>, <Text>Column 2</Text>],
  className,
}: {
  className?: string;
  nodes: React.ReactNode[];
}) {
  return (
    <Section
      className={cn(
        "p-2 bg-stone-100 my-4 rounded text-xs text-stone-500",
        className,
      )}
    >
      <Row>
        {nodes?.map((node, i) => (
          <Column
            className={cn(
              "text-center",
              nodes.length >= 2 && `w-1/${nodes.length}`,
              i >= 1 &&
                "sm:border-l sm:border-l-stone-200 sm:border-solid sm:border-r-0 sm:border-t-0 sm:border-b-0",
            )}
            key={`cta-block-${i}`}
          >
            {node}
          </Column>
        ))}
      </Row>
    </Section>
  );
}
