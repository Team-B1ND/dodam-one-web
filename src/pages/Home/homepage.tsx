import React from "react"
import * as S from "./style";
import Banner from "src/components/Home/Banner";
import TodaySchedule from "src/components/Home/TodaySchedule";
// import Apply from "src/components/Home/Apply";

const HomePage = ()=>{
    return(
        <S.Main>
            <S.MainDataVeiw>
                <Banner/>
                <S.MainDataGridBox>
        
                        <TodaySchedule/>
             
                    
                </S.MainDataGridBox>
            </S.MainDataVeiw>
            <S.SideProfile>
                
            </S.SideProfile>    
            
        </S.Main>
    )
}

export default HomePage