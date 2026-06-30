import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface SummaryCardProps {
  title: string;
  value: string;
  change?: string;
  color?: string;
}

export default function SummaryCard({
  title,
  value,
  change,
  color = "text-white",
}: SummaryCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className="text-zinc-400 text-sm">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <h2 className={`text-3xl font-bold ${color}`}>
          {value}
        </h2>

        {change && (
          <p className="mt-2 text-green-400 text-sm">
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
}