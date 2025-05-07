import React from 'react'
import HTMLFlipBook from 'react-pageflip';
import Cover from './pages/Cover/Cover';
import CoverImg from '../assets/cover2.jpg'
import EndImg from '../assets/cover.jpg'
import Page from './Page';
import FirstPage from './pages/Hero/FirstPage';
import Skills from './pages/Skills/Skills';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import PrjectImg1 from '../assets/projects/banking.webp'
import PrjectImg2 from '../assets/projects/e-commerce.jpg'
import PrjectImg3 from '../assets/projects/krowd.avif'
import PrjectImg4 from '../assets/projects/uiux.jpg'




const ProjectData1 = [
    {
        title: "Project 1",
        description: "This is the description for project 1",
        image: PrjectImg1,
        previewLink: "https://example.com/project1",
    },
    {
        title: "Project 2",
        description: "This is the description for project 2",
        image: PrjectImg2,
        previewLink: "https://example.com/project1",
    },
]

const ProjectData2 = [
    {
        title: "Project 3",
        description: "This is the description for project 1",
        image: PrjectImg3,
        previewLink: "https://example.com/project1",
    },
    {
        title: "Project 4",
        description: "This is the description for project 2",
        image: PrjectImg4,
        previewLink: "https://example.com/project1",
    },
]



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
            <Projects ProjectData={ProjectData1} />
            </Page>
            <Page number={1} className="demoPage bg-white text-orange-500 ">
            <Projects ProjectData={ProjectData2} />
            </Page>
            <Page number={1} className="demoPage bg-white text-orange-500 ">
            <Cover CoverImg={EndImg} title="Thank You" />
            </Page>

        </HTMLFlipBook>
    );
}

export default Portfolio
