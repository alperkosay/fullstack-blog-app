
import Hero from '../components/Sections/Hero';
import prisma from '../../../prisma/client';
import Blogs from '../components/Sections/Blogs';
import ParallaxContent from '../components/Sections/ParallaxContent';
import { SectionsContent } from '@prisma/client';



async function getSectionsData() {

    // const response = await fetch(process.env.API_URL + "/sectioncontent")
    // const SectionsData: SectionsContent[] = await response.json();

    // console.log('SectionsData', SectionsData)
    const SectionsData = await prisma.sectionsContent.findMany({
        where: {
            sectionName: {
                in: ["hero", "parallaxContent"]
            }
        },
    });
    const blogs = await prisma.blog.findMany({
        take: 6
    });

    return {
        Sections: SectionsData,
        blogs
    };
}

export default async function Home() {

    const SectionsData = await getSectionsData();
    const FindSectionData = (sectionName: string) => {
        return SectionsData.Sections.find((data) => data.sectionName === sectionName)
    }

    const hero = FindSectionData("hero");
    const parallaxContent = FindSectionData("parallaxContent");
    console.log('hero', hero)
    return (
        <main>
            <Hero
                SectionData={hero}
            />
            <Blogs
                blogData={SectionsData.blogs}
            />

            <ParallaxContent
                SectionData={parallaxContent}
            />
        </main>
    )
}


