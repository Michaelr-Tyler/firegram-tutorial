import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({selectedImage, setSelectedImage}) => {

  const handleClick = (e) => {
    if(e.target.classList.contains('backdrop')){
      setSelectedImage(null)
    }
  }
  return(
    <motion.div className="backdrop"
    initial={{opacity: 0}}
    animate={{opacity: 1}}

    onClick={handleClick}>
      <motion.img src={ selectedImage } alt={'enlarged pic'} 
      initial={{y: "-100vh"}}
      animate={{y: 0}} 
      transition={{delay:0}} />
    </motion.div>
  )
}

export default Modal;