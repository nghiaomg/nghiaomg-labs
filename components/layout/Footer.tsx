export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-8 max-w-screen-2xl">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by <span className="font-semibold text-foreground">NghiaOMG</span>.
                        The source code is available on{" "}
                        <a
                            href="https://github.com/nghiaomg/nghiaomg-labs"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </div>

                <p className="text-sm font-medium italic text-muted-foreground/80">
                    &quot;Clean systems scale. Hacks collapse.&quot;
                </p>
            </div>
        </footer>
    )
}
