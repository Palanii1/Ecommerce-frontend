import React from 'react';
import { ServiceContainer, ServiceWrap, ServiceTitle, ServiceGrid, ServiceItem, ServiceHeading, ServiceDescription } from './ServiceElements';

const ServiceSection = ({lightBg, lightText, darkText }) => {
  return (
    <>
        <ServiceContainer lightBg={lightBg}>
            <ServiceWrap>
                <ServiceTitle>What We Do</ServiceTitle>
                <ServiceGrid>
                    <ServiceItem>
                        <ServiceHeading lightText={lightText}>Copywriting</ServiceHeading>
                        <ServiceDescription darkText={darkText}>We write professional copy for customers to boost their businesses at affordable rates</ServiceDescription>
                    </ServiceItem>
                    <ServiceItem>
                        <ServiceHeading lightText={lightText}>Ghostwriting</ServiceHeading>
                        <ServiceDescription darkText={darkText}>Pay our rate and have us secretly write for you while you take all the credit.</ServiceDescription>
                    </ServiceItem>
                    <ServiceItem>
                        <ServiceHeading lightText={lightText}>Novels</ServiceHeading>
                        <ServiceDescription darkText={darkText}>We write novels to your taste either as the authors or as ghostwriters.</ServiceDescription>
                    </ServiceItem>
                    <ServiceItem>
                        <ServiceHeading lightText={lightText}>Articles</ServiceHeading>
                        <ServiceDescription darkText={darkText}>We write articles on several topics according to your demand.</ServiceDescription>
                    </ServiceItem>
                    <ServiceItem>
                        <ServiceHeading lightText={lightText}>Website Design</ServiceHeading>
                        <ServiceDescription darkText={darkText}>We design websites just like this one for blogs, Ecommerce etc.</ServiceDescription>
                    </ServiceItem>
                    <ServiceItem>
                        <ServiceHeading lightText={lightText}>Coaching and Mentorship</ServiceHeading>
                        <ServiceDescription darkText={darkText}>Connect and learn from writers like yourself.</ServiceDescription>
                    </ServiceItem>
                </ServiceGrid>
            </ServiceWrap>
        </ServiceContainer>

    </>
  );
};

export default ServiceSection;
