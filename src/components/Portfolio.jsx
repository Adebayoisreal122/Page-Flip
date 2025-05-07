import React from 'react'
import HTMLFlipBook from 'react-pageflip';
import Cover from './pages/Cover/Cover';
import CoverImg from '../assets/cover2.jpg'
import Page from './Page';
import FirstPage from './pages/Hero/FirstPage';
import Skills from './pages/Skills/Skills';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';


function Portfolio(props) {
    return (
        <HTMLFlipBook width={400} height={550} showCover={true} size="fixed" maxShadowOpacity={0.5} minWidth={100} minHeight={100} maxWidth={800} maxHeight={800}>
            <Page className="demoPage   text-orange-500 ">
                <Cover CoverImg={CoverImg} title="My Portfolio" />
            </Page>
            <Page number={1} className="demoPage bg-white text-orange-500 ">
            <FirstPage />
            </Page>
                <Page number={2} className="demoPage bg-white text-orange-500 ">
               <Skills />
            </Page>           
            <Page number={3} className="demoPage bg-white text-orange-500 ">
            <Services />
            </Page>           
            <Page number={4} className="demoPage bg-white text-orange-500 ">
            <About/>
            </Page>
            <Page number={1} className="demoPage bg-white text-orange-500 ">
            <Projects />
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
