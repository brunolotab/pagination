import React from 'react'
import styled from 'styled-components';

function Pagination({ coinsData, postPerpage, setCurrentpage, currentpage }) {
    let pages = []  // so to fill the pages with numbers do this below

    const totalPost = coinsData.length
    // console.log(totalPost);
    // console.log(postPerpage);
    // console.log(pages);
    // const lastElement = pages.pop();
    // const lastElement1 = pages.slice(-1);
    // const lastElement2 = pages[pages.length-1];
    // const lastElement3 = pages[2];
    // console.log(lastElement2);
    // console.log(lastElement3);
    // pages.pop()
    // console.log(pages.pop());
    let lastpage = Math.ceil(totalPost / postPerpage) 
    console.log(lastpage);

    for (let n = 1; n < Math.ceil(totalPost / postPerpage) + 1; n++) {     // Math.ceil rounds up to the nearst intger
        pages.push(n)
    }
    console.log(pages);

    return (
        <Div>
            <button onClick={prevpage} className= {currentpage === 1 ? 'inactive': ''}>prev</button>
            <div className='pagination'>
                {pages.map((item, index) => {
                    return (
                        <button key={index} onClick={() => setCurrentpage(item)} className={item === currentpage ?  'active' : ''}>
                            {item}
                        </button>
                    )
                })}
            </div>
            <button onClick={nextpage} className= {currentpage === lastpage ? 'inactive': ''}>next</button>

        </Div>
    )
    function nextpage() {
        if (currentpage !== lastpage) {
            setCurrentpage(currentpage + 1)
        }
        
        
    }

    function prevpage() {
        if (currentpage !== 1) {
            setCurrentpage(currentpage - 1)
        }
    }
}

export default Pagination

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.8rem;
    button {
        width: 45px;
        height: 40px;
        font-family: inherit;
        font-weight: 600;
        font-size: 16px;
        border-radius: 8px;
        transition: all 0.3s ease;
        background: transparent;
        color: #444;
        border-color: #eeee;
        margin: 2px;
    }
    button.active {
        font-weight: 900;
        border-color: #101010;
        background: #ffe400;
        color: #101010;

    }
    .pagination {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        /* margin-top: 0.8rem; */
    }
    button.inactive {
        background-color: #eeee;
        color: #cccc;
    }
`
