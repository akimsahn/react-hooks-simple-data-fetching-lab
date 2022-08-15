import React, { useState, useEffect } from 'react'

function App() {
    const [image,setImage] = useState({})
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => setImage(data))
    },[])

    if (image.status!=="success") return <p>Loading...</p>

    return (
        <div>
            <img src={image.message} alt="A Random Dog" />
        </div>
    )
}

export default App