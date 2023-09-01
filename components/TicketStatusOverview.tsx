import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card" // Asegúrate de reemplazar esto con la ruta real a tus componentes

interface TicketStatus {
  status: string;
  count: number;
  percentage: number;
}

interface TicketStatusOverviewProps {
  statusDistribution: TicketStatus[];
}

const TicketStatusOverview: React.FC<TicketStatusOverviewProps> = ({
  statusDistribution,
}) => {
  return (
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {statusDistribution.map(({ status, count, percentage }) => (
          <Card key={status}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {status}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{count}
              <span className="text-sm ml-2 text-muted-foreground">
                {percentage ? `${percentage.toFixed(2)}% of total` : ''}
              </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
  );
};

export default TicketStatusOverview;
