import { useRef } from 'react'

export default () => {
    const renders = useRef(0);
    console.log(`rendering ${++renders.current}th time`)
}