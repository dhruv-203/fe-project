export function scrollUp(isMobile: boolean, scrollBehavior: ScrollBehavior, mobileValue: number, desktopValue: number) {
    window.scrollTo({
        top: isMobile ? mobileValue : desktopValue,
        behavior: scrollBehavior
    })
}

export enum SortOptions {
    Rating = "Rating",
    Name = "Name",
    LowestPrice = "Lowest Price",
    HighestPrice = "Highest Price"
}