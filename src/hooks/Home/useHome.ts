import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { STORAGE_KEY } from "src/constants/Home/home.constants";
import { useEffect, useState } from "react";

export const useHome = () =>{
    const [items, setItems] = useState<number[]>(() => {
        // 로컬스토리지에서 기존 순서 불러오기, 없으면 기본값 사용
        const savedOrder = localStorage.getItem(STORAGE_KEY);
        return savedOrder ? JSON.parse(savedOrder) : [1, 2, 3, 4];
      });
        
      useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      }, [items]);
    
      const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;
    
        const oldIndex = items.indexOf(Number(active.id));
        const newIndex = items.indexOf(Number(over.id));
    
        const newItems = arrayMove(items, oldIndex, newIndex);
        setItems(newItems);
      };
      return{
        handleDragEnd,
        items,

      }
}