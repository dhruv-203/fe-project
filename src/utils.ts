export function scrollUp(isMobile: boolean, scrollBehavior: ScrollBehavior, mobileValue: number, desktopValue: number) {
    window.scrollTo({
        top: isMobile ? mobileValue : desktopValue,
        behavior: scrollBehavior
    })
}