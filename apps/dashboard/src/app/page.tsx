import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function Page() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        {[25, 50, 75].map((value, idx) => (
          <Card key={idx} className="p-4">
            <div className="mb-2 text-sm text-muted-foreground">Metric {idx + 1}</div>
            <div className="text-2xl font-semibold">{value}%</div>
            <div className="mt-2">
              <Progress value={value} />
            </div>
          </Card>
        ))}
      </div>
      <Card className="p-0">
        <div className="p-4 border-b font-medium">Recent Activity</div>
        <div className="p-4 text-sm text-muted-foreground">Table placeholder</div>
      </Card>
    </div>
  );
}
