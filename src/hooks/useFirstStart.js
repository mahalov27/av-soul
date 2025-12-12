import { useLayoutEffect, useState } from "react"

export const useFirstStart = () => {
    const [isFirstStart, setIsFirstStart] = useState(!!localStorage.getItem("AV-soul-isFirstStart") || true)

    useLayoutEffect(() => {
        setTimeout(() => {setIsFirstStart(false)}, 7100)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {isFirstStart}
}