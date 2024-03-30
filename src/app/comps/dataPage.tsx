"use client"
import { useState } from 'react';
import InternshalaData from '../api/getInternshalaData';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function DataPage(){
    const [data, setData] = useState<string[]>();

    const handleClick = async () => {
        try {
            const response = await InternshalaData(); // Correct API endpoint URL
            if (response) {
                console.log(response)
                setData(response);
            } else {
                // console.error('Failed to fetch data:', response.statusText);
                console.log(response)
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div>
            <button onClick={handleClick}>Fetch</button>
            {data && (
                <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              
            )}
        </div>
    );
}
