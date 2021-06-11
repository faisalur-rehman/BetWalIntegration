const Name_here = [
    {
      id: 1,
      match: "Arsenal vs Barcelona",
      bet_placed_on_team : "Arsenal",
      status: "Lost",
      amount: 3,
    },
    {
        id: 2,
        match: "PSG vs Barcelona",
        bet_placed_on_team : "PSG",
        status: "Win",
        amount: 4,
      },
  ];
  
  const Special = [
    {
        id: 1,
        match: "Arsenal vs Barcelona",
        bet_placed_on_team : "Arsenal",
        odds: "Lost",
        amount: 3,
      },
      {
          id: 2,
          match: "PSG vs Barcelona",
          bet_placed_on_team : "PSG",
          odds: "Win",
          amount: 4,
        },
  ];
  
  const Accumulators = [
    {
        id: 1,
        Name: "PSG",
        Total_odds : 1,
        No_of_bets: 0,
        status: "cancelled",
        amount: 3,
      },
      {
        id: 2,
        Name: "Barca",
        Total_odds : 2,
        No_of_bets: 2,
        status: "cancelled",
        amount: 4,
      },
  ];
  
  export { Name_here, Special, Accumulators };
  