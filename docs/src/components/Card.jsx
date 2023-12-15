import { FaFileLines } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion"
const Card = () => {
    return (
        <>
            <motion.div drag className=" ml-7 mt-8 w-[12%] bg-slate-500 h-[35%] rounded-md">
                <FaFileLines />
                <text>
                    impedistinctio, possimus ad perferendis.
                </text>
                <footer className="">
                    <p>5.3MB</p>
                    <p><FaArrowDownLong /></p>
                </footer>
            </motion.div>
        </>
    )
}

export default Card