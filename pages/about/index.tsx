import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";

export interface AboutusProps {
    about: any[]
}
export default function Aboutus({about}: AboutusProps) {

    return (
        <div>About us
        <ul>
            {about.map((ab) => (
                <li key={ab.game_index}> 
                    <Link href={`/about/${ab.version?.name}`}>
                        {JSON.stringify(ab.version)}
                    </Link>
                </li>
            ))}
        </ul>
        </div>
    )
}

export const getStaticProps:GetStaticProps<AboutusProps> = async(context: GetStaticPropsContext) => {

    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await res.json();
    return {
        props: {
            about: data.game_indices
        }
    }
}