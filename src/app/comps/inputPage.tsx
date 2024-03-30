"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const arr = [
  "Android App Development Internship",
  "Angular.js Development Internship",
  "Backend Development Internship",
  "Bank Internship",
  "Big Data Internship",
  "Biotech Internship",
  "Biotechnology Internship",
  "Blockchain Development Internship",
  "Blogging Internship",
  "CAD Design Internship",
  "CS Articleship Internship",
  "Campus Ambassador Internship",
  "Client Servicing Internship",
  "Cloud Computing Internship",
  "Computer Science Internship",
  "Computer Vision Internship",
  "Cyber Security Internship",
  "Data Entry Internship",
  "Data Science Internship",
  "Database Building Internship",
  "Defence Internship",
  "Design Internship",
  "Embedded Systems Internship",
  "Energy Science And Engineering Internship",
  "Engineering Internship",
  "Flutter Development Internship",
  "Front End Development Internship",
  "Full Stack Development Internship",
  "Game Design Internship",
  "Game Development Internship",
  "Gaming Internship",
  "IT Internship",
  "Information Technology Internship",
  "Internet Of Things (IoT) Internship",
  "Java Internship",
  "Javascript Development Internship",
  "Machine Learning Internship",
  "Mobile App Development Internship",
  "Network Engineering Internship",
  "Networking Internship",
  "Node.js Development Internship",
  "PHP Development Internship",
  "Programming Internship",
  "Software Development Internship",
  "UI/UX Internship",
  "Web Development Internship",
  "Wordpress Development Internship",
  "IOS App Development Internship",
];

type Status = {
  value: string;
  label: string;
};

const statuses: Status[] = arr.map((value) => ({ value, label: value }));

export default function InputPage() {
  const [open, setOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null
  );
  const [selectedSkill, setSelectedSkill] = useState("select skill");

  const handleSelect = (status: Status) => {
    setSelectedStatus(status);
    setSelectedSkill(status.label);
    console.log("clicked, onselect");
    setOpen(false);
  };

  return (
    <Card>
      {/* <Button onClick={() => console.log(statuses)}>click</Button> */}
      <CardHeader>
        <CardTitle>Enter Job/Internship requirement</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-muted-foreground">Skills:</p>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[150px] justify-start">
                {selectedStatus ? (
                  <>{selectedStatus.label}</>
                ) : (
                  <>{selectedSkill}</>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" side="right" align="start">
              <Command>
                <CommandList>
                  {/* <CommandEmpty>No results found.</CommandEmpty> */}
                  <CommandGroup>
                    {statuses.map((status) => (
                      <div
                        className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground clickable"
                        id=":rbs:"
                        cmdk-item=""
                        role="option"
                        aria-disabled="false"
                        aria-selected="true"
                        data-disabled="false"
                        data-selected="true"
                        data-value={status.value}
                        onClick={() => handleSelect(status)} // Pass a reference to the function
                      >
                        {status.label}
                      </div>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  );
}
