import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as F from './FooterStyles.jsx';
import RecordOff from '../../assets/RecordOff.svg';
import RecordOn from '../../assets/RecordOn.svg';
import HomeOff from '../../assets/HomeOff.svg';
import HomeOn from '../../assets/HomeOn.svg';
import InsightOff from '../../assets/InsightOff.svg';
import InsightOn from '../../assets/InsightOn.svg';
// import ReportOff from '../../assets/ReportOff.svg';
// import ReportOn from '../../assets/ReportOn.svg';

const Footer = () => {
    const location = useLocation();

    const navigate = useNavigate();

    const goToRecord = () => {
        navigate('/recorddate');
    };

    const goToHome = () => {
        navigate('/home');
    };

    const goToInsight = () => {
        navigate('/insight');
    };

    // const goToReport = () => {
    //     navigate('/report');
    // };

    return (
        <F.Container>
            <F.Record onClick={goToRecord}>
                <F.RecordImg>
                    <img
                        src={
                            location.pathname === '/recordcategory' || location.pathname === '/recorddate'
                                ? RecordOn
                                : RecordOff
                        }
                    />
                </F.RecordImg>
                <F.RecordText isActive={location.pathname === '/records'}>records</F.RecordText>
            </F.Record>
            <F.Home onClick={goToHome}>
                <F.HomeImg>
                    <img src={location.pathname === '/home' ? HomeOn : HomeOff} />
                </F.HomeImg>
                <F.HomeText isActive={location.pathname === '/home'}>home</F.HomeText>
            </F.Home>
            <F.Insight onClick={goToInsight}>
                <F.InsightImg>
                    <img
                        src={
                            location.pathname === '/insight' || location.pathname === '/insightchart'
                                ? InsightOn
                                : InsightOff
                        }
                    />
                </F.InsightImg>
                <F.InsightText isActive={location.pathname === '/insight'}>insight</F.InsightText>
            </F.Insight>
        </F.Container>
    );
};
export default Footer;
