import { useRouter } from 'next/router'

const Products = ()  => {
    const router = useRouter();
    return (
            <>
                Query: 
                {JSON.stringify(router?.query)}
            </>
    )
}

export default Products;