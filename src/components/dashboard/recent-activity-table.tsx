import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ActivityItem = {
  date: string | Date;
  type: string;
  reference: string;
  quantity: number;
  remarks?: string;
};

type Props = {
  data: ActivityItem[];
};

export function RecentActivityTable({ data }: Props) {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Recent Activity
        </h3>
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Reference</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Remarks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {format(new Date(item.date), "dd MMM yyyy")}
                  </TableCell>
                  <TableCell className="capitalize">{item.type}</TableCell>
                  <TableCell className="font-medium">
                    {item.reference}
                  </TableCell>
                  <TableCell className="text-blue-600 font-semibold">
                    {item.quantity}
                  </TableCell>
                  <TableCell>{item.remarks || "-"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
