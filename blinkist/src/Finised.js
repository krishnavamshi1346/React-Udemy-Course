import React from 'react'
import { useSelector } from 'react-redux'
import BookCard from "./BookCard";
import MediaCard from "./Component/Molecules/MediaCard"

function Finished(props) {
    const state=useSelector((state)=>(state.books))
    return (
        <div>
           { state.finished.map(item=><MediaCard book={item}/>)}
        </div>
    )
}

export default Finished
