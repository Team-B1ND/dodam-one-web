import React from "react"
import * as S from "./style";
import Banner from "src/components/Home/Banner";
// import Apply from "src/components/Home/Apply";

const HomePage = ()=>{
    return(
        <S.main>
            <S.mainDataVeiw>
                <Banner/>
                <S.mainDataGridBox>
                    
                </S.mainDataGridBox>
            </S.mainDataVeiw>
            <S.sideProfile>
                
            </S.sideProfile>    
            
        </S.main>
    )
}

export default HomePage