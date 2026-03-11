import * as React from "react"

export function useScrollSpy(selector: string, rootMargin: string = "-20% 0% -60% 0%") {
    const [activeIdx, setActiveIdx] = React.useState<number>(0)

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = Number(entry.target.getAttribute("data-index"))
                        setActiveIdx(idx)
                    }
                })
            },
            {
                rootMargin,
            }
        )

        const sections = document.querySelectorAll(selector)
        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [selector, rootMargin])

    return activeIdx
}
