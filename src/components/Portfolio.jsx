import React from 'react'
import HTMLFlipBook from 'react-pageflip';
import Cover from './pages/Cover/Cover';
import CoverImg from '../assets/cover2.jpg'
import Page from './Page';
import FirstPage from './pages/Hero/FirstPage';

function Portfolio(props) {
    return (
        <HTMLFlipBook width={300} height={500} showCover={true} size="fixed" maxShadowOpacity={0.5} minWidth={100} minHeight={100} maxWidth={800} maxHeight={800}>
            <Page className="demoPage   text-orange-500 ">
                <Cover CoverImg={CoverImg} title="My Portfolio" />
            </Page>
            <Page number={1} className="demoPage bg-white text-orange-500 ">
            <FirstPage />
            </Page>
            <Page number={2} className="demoPage bg-white text-orange-500 ">
            <div className="demoPage text-orange-500 ">Page 2</div>
            </Page>           
            <Page number={3} className="demoPage bg-white text-orange-500 ">
            <div className="demoPage text-orange-500 ">Page 3</div>
            </Page>           
            <Page number={4} className="demoPage bg-white text-orange-500 ">
            <div className="demoPage text-orange-500 ">Page 4</div>
            </Page>
            <Page number={1} className="demoPage bg-white text-orange-500 ">
            <div className="demoPage text-orange-500 ">Page 5</div>
            </Page>
            <Page number={1} className="demoPage bg-white text-orange-500 ">
            <div className="demoPage text-orange-500 ">Page 6</div>
            </Page>
            <Page number={1} className="demoPage bg-white text-orange-500 ">
            <div className="demoPage text-orange-500 ">Page 7</div>
            </Page>

        </HTMLFlipBook>
    );
}

export default Portfolio
