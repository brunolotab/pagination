import React from 'react'
import styled from 'styled-components'

function CryptoCard({ image, name, price }) {
    return (
        <Div>
            <div className='card'>
                <div> <img src={image} alt='' /></div>
                <div>
                    <h2>{name}</h2>
                    {/* <h3>${price}</h3> */}
                    <h3>${price.toLocaleString()}</h3>
                </div>
            </div>
        </Div>
    )
}

export default CryptoCard

const Div = styled.div`
    .card {
        border: 1px solid blue;
        width: 8rem;
        text-align: center;
        padding: 10px;
    }
    .card:nth-child(even){
        border: 1px solid orange;
    }
`