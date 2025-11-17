import React from "react";
import { DndContext, closestCorners, UniqueIdentifier } from "@dnd-kit/core";
import {  SortableContext, useSortable } from "@dnd-kit/sortable";
import Masonry from "react-masonry-css";
import * as S from "./style";
import Banner from "components/Home/Banner";
import Schedule from "components/Home/Schedule";
import TodayWakeupSong from "components/Home/TodayWakeupSong";
import Meal from "components/Home/Meal";
import Apply from "components/Home/Apply";
import MyInfo from "components/Home/Myinfo";
import { useBannerWidth } from "utils/Screen/useScreenWidth";
import { useHome } from "hooks/Home/useHome";


const componentsMap: Record<number, JSX.Element> = {
  1: <Schedule />,
  2: <TodayWakeupSong />,
  3: <Meal />,
  4: <Apply />,
};

const HomePage = () => {
  const {...home} = useHome();

  const { bannerBoxRef, bannerWidth } = useBannerWidth();

  


  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={home.handleDragEnd}>
      <S.Main>
        <S.MainDataView>
          <S.BannerBox ref={bannerBoxRef}>
            <Banner bannerWidth={bannerWidth} />
          </S.BannerBox>
          <SortableContext items={home.items}>
            <S.MasonryContainer>
              <Masonry
                breakpointCols={home.breakpointColumns}
                className="masonry-grid"
                columnClassName="masonry-grid-column"
              >
                {home.items.map((id) => (
                  <SortableItem key={id} id={id}>
                    {componentsMap[id]}
                  </SortableItem>
                ))}
              </Masonry>
            </S.MasonryContainer>
          </SortableContext>
        </S.MainDataView>
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

const SortableItem = ({ id, children }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  return (
    <S.DraggableBox
      ref={setNodeRef}
      style={{
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transition,
      }}
    >
      <S.DragHandle {...attributes} {...listeners}></S.DragHandle>
      {children}
    </S.DraggableBox>
  );
};

export default HomePage;
