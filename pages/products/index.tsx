import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';


const Products = ()  => {
    const router = useRouter();
    const RedLink = styled.a` 
        color:red;
    `

    const pushNavigation =() => {
        router.push({
            pathname: 'abc',
            query: {
                productId: 'abc123'
            }
        })
    }
    return (
        <div>
            A href Products
            <Link href='/products/123' passHref>
                <RedLink> Go to About us</RedLink>
            </Link>
            <button onClick={pushNavigation}>
                Go to product page
            </button>

        </div>
    )
}

export default Products;

