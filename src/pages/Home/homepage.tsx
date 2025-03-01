import React, { useState } from "react";
import { DndContext, DragEndEvent, closestCorners, UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import * as S from "./style";
import Banner from "src/components/Home/Banner";
import Schedule from "src/components/Home/Schedule";
import TodayWakeupSong from "src/components/Home/TodayWakeupSong";
import Meal from "src/components/Home/Meal";
import Apply from "src/components/Home/Apply";
import MyInfo from "src/components/Home/Myinfo";

const componentsMap: Record<string, JSX.Element> = {
  schedule: <Schedule />,
  todayWakeupSong: <TodayWakeupSong />,
  meal: <Meal />,
  apply: <Apply />,
};

const HomePage = () => {
  const [items, setItems] = useState<string[]>(["schedule", "todayWakeupSong", "meal", "apply"]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.indexOf(String(active.id));
    const newIndex = items.indexOf(String(over.id));

    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <S.Main>
        <S.MainDataVeiw>
          <Banner />
          <SortableContext items={items}>
            <S.MainDataGridBox>
              {items.map((id) => (
                <SortableItem key={id} id={id}>
                  {componentsMap[id]}
                </SortableItem>
              ))}
            </S.MainDataGridBox>
          </SortableContext>
        </S.MainDataVeiw>
        <S.SideProfile>
          <MyInfo />
        </S.SideProfile>
      </S.Main>
    </DndContext>
  );
};

interface SortableItemProps {
  id: UniqueIdentifier;
  children: React.ReactNode;
}

const SortableItem = ({ id, children }:SortableItemProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  
    return (
      <S.DraggableBox
        ref={setNodeRef}
        style={{
          transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
          transition,
        }}
      >
        {/* 드래그 핸들 */}
        <S.DragHandle {...attributes} {...listeners}></S.DragHandle>
  
        {/* 컨텐츠 */}
        <div data-dnd-kit-no-drag>{children}</div>
      </S.DraggableBox>
    );
  };
  

export default HomePage;
