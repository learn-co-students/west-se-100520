import React from 'react'
import HogTile from './HogTile'

export default function HogsMenu({ hogs, chooseHog, greaseFilter, sortType }) {
    // greaseFilter = all, greased, ungreased
    const greasedState = greaseFilter === 'greased'
    const filteredHogs = greaseFilter === 'all' ? hogs : hogs.filter(hog => hog.greased === greasedState)

    const sortHogs = () => {
        switch (sortType) {
            case 'weight':
                return [...filteredHogs].sort((a, b) => a.weight - b.weight)
            case 'name':
                return [...filteredHogs].sort((a, b) => {
                    if (a.name < b.name) {
                        return -1
                    }
                        return 1
                })
            default:
                return filteredHogs
        }
    }

    return (
        <div className="ui grid container">
           {sortHogs().map(hog => <HogTile hog={hog} chooseHog={chooseHog} />)}
        </div>
    )
}
