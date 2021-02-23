import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';



const ImageGrid = ({ setSelectedImage }) => {
const { docs } = useFirestore('images')

  return(
    <div className="img-grid">
      {docs && docs.map((d)=> {
        return (
          <motion.div className="img-wrap" key={d.id}
          layout
          whileHover={{ opacity:1 }}
          onClick={()=> setSelectedImage(d.url)}>
            <motion.img  src={d.url} alt={'uploaded image'} 
            initial={{opacity:0}} 
            animate={{opacity: 1}}
            transition={{delay:1}} />
          </motion.div>
        )
      })}
    </div>
  )
}

export default ImageGrid;