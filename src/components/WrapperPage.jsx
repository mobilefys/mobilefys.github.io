import React, { ReactElement } from 'react';
import { motion } from "framer-motion"



function WrapperPage(props)
{
    let elem = props.element;

    return (
        <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
        >
            {elem}
        </motion.div>
    )

}


export default WrapperPage;