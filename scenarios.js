const scenarios = [
    {
      id: "fisheries",
      title: "Local Fisheries",
      description: "Local fisheries are pressuring the government for special permits to hunt whales. They argue that whale populations are competing with them for fish, claiming \
      that whales eat significant amounts of the fish they rely on for their livelihoods.",
      choices: [
        {
          text: "Grant them special permits to hunt whales around their fishing zones",
          outcome: "Whale populations in the region decline, upsetting the ecosystem balance. And the actual fish stock issues remain unresolved.",
          type: "harmful"
        },
        {
          text: "Reject the request and invest in research and sustainable fisheries management",
          outcome: "Whale populations remain stable, and improved fishing practices begin to rebuild fish stocks.",
          type: "good"
        }
      ]
    },
    {
      id: "shipping",
      title: "New Shipping Lanes",
      description: "As Arctic sea ice melts due to climate change, new shipping lanes are opening up in previously inaccessible waters. Shipping \
      companies are eager to use these routes — they’re shorter, faster, and would reduce fuel costs and delivery times, benefiting global trade.",
      choices: [
        {
          text: "Allow ships to sail through the new shipping lanes",
          outcome: "Global shipping costs decrease, but ship strikes and noise pollution increase dramatically. Whale populations suffer as their habitat is disrupted.",
          type: "harmful"
        },
        {
          text: "Keep the new shipping lanes closed",
          outcome: "Shipping companies express frustration, but whales remain undisturbed in their critical habitat.",
          type: "good"
        }
      ]
    },
    {
      id: "whale watching",
      title: "Whale Watching",
      description: "People want to go see whales! A coastal town is eager to expand its whale watching operations to attract more visitors and boost \
      the local economy. More tours mean more boats on the water, which also mean more people get the chance to see whales up close.",
      choices: [
        {
          text: "Allow unrestricted expansion of whale watching. Give the people what they want!",
          outcome: "The town sees an economic boom from tourism, but whales are increasingly disturbed and begin to leave the area. Researchers \
          note signs of stress in the local whale population.",
          type: "harmful"
        },
        {
          text: "Allow expansion with strict regulations, such as tour hour limits and distance limits",
          outcome: "Whale watching continues in a controlled, eco-friendly way. Tourists still enjoy sightings, and whales remain relatively undisturbed in their habitat.",
          type: "good"
        }
      ]
    },
    {
      id: "entanglement",
      title: "Net Entanglements",
      description: "Reports are increasing of whales becoming entangled in commercial fishing gear, often leading to injury or death. Fishing companies argue that it is \
      just something that happens and is unavoidable.",
      choices: [
        {
          text: "Enforce new regulations on fishing equipment",
          outcome: "Whale entanglements decline as safer gear is adopted, but some fishing companies complain about higher costs.",
          type: "good"
        },
        {
          text: "Allow fishing operations to continue without new restrictions",
          outcome: "Whale entanglements continue to rise, and the whale populations have decreased.",
          type: "harmful"
        }
      ]
    },
    {
      id: "Krill",
      title: "Krill Competition",
      description: "As ocean temperatures rise due to climate change, krill populations — a critical food source for many whale \
      species — are declining. At the same time, krill fisheries are expanding to meet global demand for krill oil and feed.",
      choices: [
        {
          text: "Impose strict catch limits on krill fisheries",
          outcome: "Krill populations begin to stabilize, giving whales a better chance to survive. The fishing industry expresses concern for those\
          who work at the krill fisheries.",
          type: "good"
        },
        {
          text: "Allow krill fishing to continue unchecked",
          outcome: "Krill stocks continue to decline. Whales face increased food shortages, and the ecosystem begins to show signs of strain.",
          type: "harmful"
        }
      ]
    },
    {
      id: "hunters",
      title: "Increased Sightings",
      description: "Researchers and scientists have been telling you that the local whale populations have not been increasing despite the heavy \
      restrictions on whaling. But the local indigenous people and hunters have reported increased sightings of the whales. Researchers have been \
      advocating for a long-term ban of hunting, while the local people and hunters are advocating for increased catch limits.",
      choices: [
        {
          text: "Support the local communities and increase catch limits",
          outcome: "Cultural practices are upheld, but whale numbers continue to decline, possibly leading to long-term ecological and cultural consequences.",
          type: "harmful"
        },
        {
          text: "Support the researchers and enforce a long-term hunting ban",
          outcome: "Whale populations are given time to recover, though some local groups feel their knowledge and traditions are being dismissed.",
          type: "good"
        }
      ]
    },
    {
      id: "climate change",
      title: "Warming Waters",
      description: "As climate change warms the oceans, whale migratory patterns are shifting — driving many species closer to the poles in search of cooler \
      waters and food. These new routes put whales at greater risk of collisions with ships and exposure to oil drilling operations.",
      choices: [
        {
          text: "Impose restrictions and expand whale sanctuary areas",
          outcome: "Whales gain safer migration routes and reduced risk of human interference. Shipping and drilling companies push back against the tighter regulations.",
          type: "good"
        },
        {
          text: "Take no action",
          outcome: "Whales face increasing threats from ship strikes and habitat disruption, with long-term impacts on their populations.",
          type: "harmful"
        }
      ]
    },
  ];
  