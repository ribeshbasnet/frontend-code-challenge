import React, { FC } from 'react';
import styled from '@emotion/styled';

import { useContentHeaderContext } from '../../../hooks';

import ContentHeader from '../../../components/content/header';
import ContentBody from '../../../components/content/body';
import PackageList from '../../../components/content/body/package-list';
import Referral from '../../../components/content/body/referral';

const SectionContent = styled.div`
    margin-top: 40px;

    @media ${(props) => props.theme.sizeConfig.phone} {
        margin-top: 0px;
    }

    @media ${(props) => props.theme.sizeConfig.tablet} {
        width: 100%;
    }
`;

const Content: FC = () => {
    // get the context data from provider
    const { context } = useContentHeaderContext();

    return (
        <SectionContent className="section-content section-packages container section-pad-r">
            <div className="section-pacakges-wrapper section-pad-l">
                <ContentHeader />
                {/* Conditionally render based on context */}
                <ContentBody>
                    {context === 'packages' ? (
                        <PackageList />
                    ) : context === 'referral' ? (
                        <Referral />
                    ) : (
                        <strong>No content found</strong>
                    )}
                </ContentBody>
            </div>
        </SectionContent>
    );
};

export default Content;
