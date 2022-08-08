import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

export interface AboutDetailProps {
    about: any
}
export default function AboutusDetail(aboutId: AboutDetailProps) {

    return (
        <div>
            Detail Aboutus { aboutId.about }
        </div>
    )
}


export const getStaticPaths:GetStaticPaths = async () => {

    console.log('\n GET STATIC PATH');
    return {
        paths: [
            {params: {aboutId: 'red'}},
            {params: {aboutId: 'blue'}},
            {params: {aboutId: 'yellow'}},
            {params: {aboutId: 'gold'}},
            {params: {aboutId: 'silver'}},
            {params: {aboutId: 'crystal'}},
            {params: {aboutId: 'ruby'}},
            {params: {aboutId: 'sapphire'}},
        ],
        fallback: false,
    }
};

export const getStaticProps:GetStaticProps<AboutDetailProps> = async(context: GetStaticPropsContext) => {
    console.log('\n GET STATIC PROPS', context.params?.aboutId)

    const aboutId = context.params?.aboutId;
    if(!aboutId) return {notFound: true}

    return {
        props: {
            about: aboutId
        }
    }
}