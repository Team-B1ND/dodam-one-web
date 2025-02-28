import React from "react"
import * as S from "./style";
import Banner from "src/components/Home/Banner";
import Schedule from "src/components/Home/Schedule";
import TodayWakeupSong from "src/components/Home/TodayWakeupSong";
import Meal from "src/components/Home/Meal";
import Apply from "src/components/Home/Apply";

const HomePage = ()=>{
    return(
        <S.Main>
            <S.MainDataVeiw>
                <Banner/>
                <S.MainDataGridBox>
                    <Schedule/>
                    <TodayWakeupSong/>
                    <Meal/>
                    <Apply/>
                </S.MainDataGridBox>
            </S.MainDataVeiw>
            <S.SideProfile>
                
            </S.SideProfile>    
            
        </S.Main>
    )
}

export default HomePage