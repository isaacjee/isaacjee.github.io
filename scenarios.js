const scenarios = [
    {
      id: "fisheries",
      title: "Local Fisheries",
      description: "Local fisheries want to be able to hunt and kill whales because they argue that whales eat the fish that they catch.",
      choices: [
        {
          text: "Give them special permits to kill whales around the fisheries",
          outcome: "Local whale populations plummet",
          type: "harmful"
        },
        {
          text: "Reject their argument",
          outcome: "Whale population improves, but the people working at the fisheries are unhappy.",
          type: "good"
        }
      ]
    },
    {
      id: "shipping",
      title: "New Shipping Lanes",
      description: "Arctic ice is melting, opening up shipping lanes. Allowing ships to use them would decrease costs for their operations and therefore decreased costs all around.",
      choices: [
        {
          text: "Allow ships to sail through the new shipping lanes",
          outcome: "More ships sailing through the new lanes has increased ship striking incidents and noise pollution.",
          type: "harmful"
        },
        {
          text: "Keep the new shipping lanes closed.",
          outcome: "The whales aren't disturbed further, but the shipping companies are protesting the decision.",
          type: "good"
        }
      ]
    },
    // Add more scenarios here...
  ];
  