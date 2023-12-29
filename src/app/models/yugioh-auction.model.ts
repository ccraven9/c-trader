export interface YuGiOhCardListing {
    listingTitle: string,
    setPrefix: string,
    totalBids: number,
    timeRemaining: number,
    imageArt: string,
    currentPrice: number,
    previewDescription: string
    condition: string,
    listingSeller: string
}

export interface YuGiOhCard {
    cardName: string,
    setPrefix: string,
    condition: string
}

