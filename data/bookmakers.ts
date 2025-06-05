export interface Bookmaker {
  id: number
  name: string
  url: string
  bonus: string
  rating: number
  calls: number
  logo: string
  isTopPick?: boolean
}

export const bookmakers: Bookmaker[] = [
  {
    id: 1,
    name: "BoyleSports",
    url: "https://www.boylesports.com/",
    bonus: "Bet €10 Get €30 + €10 Casino Bonus",
    rating: 4.9,
    calls: 325012,
    logo: "/boylesport.png",
    isTopPick: true,
  },
  {
    id: 2,
    name: "Midnite",
    url: "https://www.midnite.com/",
    bonus: "Bet €10 Get €20 + 50 Free Spins",
    rating: 4.9,
    calls: 289423,
    logo: "/mid.svg",
    isTopPick: true,
  },
  {
    id: 3,
    name: "BetFred",
    url: "https://www.betfred.com/",
    bonus: "Bet €10 Get €50",
    rating: 4.9,
    calls: 265457,
    logo: "/betfred.png",
    isTopPick: true,
  },
  {
    id: 4,
    name: "Spreadex Sports",
    url: "https://www.spreadex.com/sports/en-GB/spread-betting",
    bonus: "Join & get £60 in Free Bets",
    rating: 4.8,
    calls: 215845,
    logo: "/spread.png",
  },
  {
    id: 5,
    name: "Mr.Play",
    url: "https://ie.mrplay.com/sport/",
    bonus: "Bet €5 get €10",
    rating: 4.7,
    calls: 185120,
    logo: "/mrplay.png",
  },
]

export const topBookmakers = bookmakers.filter((b) => b.isTopPick)
