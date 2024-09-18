"use client";

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { WatchlistItem } from '@/app/types';
import { BarChart2, Trash2, MoreHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button";

const DragDropContext = dynamic(() => import('react-beautiful-dnd').then(mod => mod.DragDropContext), { ssr: false });
const Droppable = dynamic(() => import('react-beautiful-dnd').then(mod => mod.Droppable), { ssr: false });
const Draggable = dynamic(() => import('react-beautiful-dnd').then(mod => mod.Draggable), { ssr: false });

interface WatchlistTableProps {
  initialData: WatchlistItem[];
}

// Strict mode fix for react-beautiful-dnd
const StrictModeDroppable = ({ children, ...props }: any) => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);
  if (!enabled) {
    return null;
  }
  return <Droppable {...props}>{children}</Droppable>;
};

export default function WatchlistTable({ initialData }: WatchlistTableProps) {
  const [data, setData] = useState<(WatchlistItem & { id: string })[]>([]);

  useEffect(() => {
    const dataWithIds = initialData.map((item) => ({
      ...item,
      id: item.symbol // Using symbol as a stable identifier
    }));
    setData(dataWithIds);
  }, [initialData]);

  const onDragEnd = useCallback((result: any) => {
    if (!result.destination) return;

    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setData(items);
  }, [data]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable droppableId="watchlist">
        {(provided: any) => (
          <Table>
            <TableBody {...provided.droppableProps} ref={provided.innerRef}>
              {data.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <TableRow
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`border-b border-zinc-700 group hover:bg-[#131415] transition-colors ${snapshot.isDragging ? 'bg-[#131415] shadow-lg' : ''}`}
                    >
                      <TableCell className={`text-xs py-2.5 pr-1 ${item.changePoints.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                        {item.symbol}
                      </TableCell>
                      <TableCell className="p-0 relative">
                        <div className="flex justify-end items-center py-2.5 pr-2">
                          <span className={`text-xs w-16 text-right ${item.changePoints.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                            {item.changePoints}
                          </span>
                          <span className={`text-xs w-14 text-right ${item.changePoints.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                            {item.changePercent}
                          </span>
                          <span className={`text-xs w-20 text-right ${item.changePoints.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                            {item.ltp}
                          </span>
                        </div>
                        <div className="absolute inset-y-0 right-2 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ActionButton icon={BarChart2} />
                          <ActionButton icon={Trash2} />
                          <ActionButton icon={MoreHorizontal} />
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </TableBody>
          </Table>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
}

interface ActionButtonProps {
  icon: React.ElementType;
}

function ActionButton({ icon: Icon }: ActionButtonProps) {
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="h-7 w-7 p-1.5 bg-[#131415] border border-zinc-600"
      onMouseDown={(e) => e.stopPropagation()} // Prevent drag start
      onClick={(e) => e.stopPropagation()} // Prevent any row click events
    >
      <Icon className="h-4 w-4" />
    </Button>
  )
}