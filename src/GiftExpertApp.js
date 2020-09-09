import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';


export const GiftExpertApp = () => {

    //const  categories = ['Dragon Ball', 'Shark Thank', 'One Punch Man'];
    const [categories, setCategories] = useState(['Dragon Ball']);

    

    return (
        <>
            <h2>GIFT EXPERT APP</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map( category => (
                      <GifGrid 
                      key = {category}
                        category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
