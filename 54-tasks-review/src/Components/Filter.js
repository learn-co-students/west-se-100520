import React from 'react'

export default function Filter({ categories, selectCategory, selectedCategory }) {

    const handleClick = (e) => {
        selectCategory(e.target.id)
    }
    return (
        <div className='categories'>
            <h5>Category filters</h5>
            {categories.map(cat =>
                <button 
                    className={selectedCategory === cat ? 'selected' : ''}
                    key={cat}
                    id={cat}
                    onClick={handleClick}>
                        {cat}</button>)}
        </div>
    )
}
