import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";


export default function TableBlock({data}:{data:string[]}){
    const columns = data[0].split("|").map(c=> c.trim()).filter(c=>c!=="")
    const getline = (line:string) => {
        return line.split("|").map(c=>c.trim()).filter(c=>c!=="")
    }

    return(
    <Table aria-label="data table" className="my-1">
        <TableHeader>
            {columns.map((c,i)=><TableColumn key={i}>{c}</TableColumn>)}
        </TableHeader>
        <TableBody>
            {
                data.slice(2).filter(l=>l!=="").map((l,i)=>(
                    <TableRow key={i}>
                        {getline(l).map((c,k)=><TableCell key={`${i}-${k}`}>{c}</TableCell>)}
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
  );
}