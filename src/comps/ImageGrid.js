import React from 'react';
import useFirestore from '../hooks/useFirestore';



const ImageGrid = ({ setSelectedImage }) => {
const { docs } = useFirestore('images')

  return(
    <div className="img-grid">
      {docs && docs.map((d)=> {
        return (
          <div className="img-wrap" key={d.id}
          onClick={()=> setSelectedImage(d.url)}>
            <img src={d.url} alt={'uploaded image'} />
          </div>
        )
      })}
    </div>
  )
}

export default ImageGrid;