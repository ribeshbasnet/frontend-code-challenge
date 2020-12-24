import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
 

const MobileHeader = styled.div`
    width: 100%;
    position: absolute;
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    box-sizing: border-box;

    .mobile-cta {
        button {
            width: 100%;
            height: auto;
            padding: 10px 20px;

            span {
                font-size: ${(props) => props.theme.font.size.xsmall};
            }
        }
    }
    @media ${(props) => props.theme.sizeConfig.phone} {
        display: flex;
    }
`;

const MobileMenu = styled.button`
    position: relative;
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: 0;
    z-index: 1;

    &.active-menu {
        svg {
            fill: ${(props) => props.theme.color.kWhiteColor};
        }
    }

    svg {
        fill: ${(props) => props.theme.color.kPrimaryLightColor};
    }
`;

const App:FC = () => {

    const [mblMenuActive, setmblMenuActive] = useState(false);

    return (
        <div className="app-container">
            <MobileHeader>
            <div className="mobile-menu-btn">
                
                </div>

            </MobileHeader>
        </div>
    );

};

export default App;