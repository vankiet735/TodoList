import { useRouter } from 'next/router'

const Category = ()  => {
    const router = useRouter();
    return (
            <>
                Category- Query: 
                {JSON.stringify(router?.query)}
            </>
    )
}

export default Category;