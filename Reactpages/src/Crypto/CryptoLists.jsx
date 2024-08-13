import React from 'react'
import styled from 'styled-components'

import CryptoCard from './CryptoCard'

function CryptoLists({ coinsData }) {
    return (
        <Div>
            <div className='products'>
                {coinsData.map((item, index) => {
                    return (
                        <CryptoCard key={index}
                            image={item.image}
                            name={item.name}
                            price={item.current_price}
                        />
                    )
                })}
            </div>
        </Div>
    )
}

export default CryptoLists


const Div = styled.div`
.products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
    grid-row: 450px;
    border: 1px solid red;
    padding: 2rem;
    width: fit-content;
}
    
`