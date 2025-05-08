const scenarios = [
    {
      id: "-",
      title: "-",
      description: "-"
    },
    {
      id: "1",
      title: "Local Fisheries",
      description: "Local fisheries are pressuring the government for special permits to hunt whales. They argue that whale populations are competing with them for fish, claiming \
      that whales eat significant amounts of the fish they rely on for their livelihoods.",
      image: "images/fishery.jpg",
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
      id: "2",
      title: "New Shipping Lanes",
      description: "As Arctic sea ice melts due to climate change, new shipping lanes are opening up in previously inaccessible waters. Shipping \
      companies are eager to use these routes — they’re shorter, faster, and would reduce fuel costs and delivery times, benefiting global trade.",
      image: "images/shipping.jpg",
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
      id: "3",
      title: "Whale Watching",
      description: "People want to go see whales! A coastal town is eager to expand its whale watching operations to attract more visitors and boost \
      the local economy. More tours mean more boats on the water, which also mean more people get the chance to see whales up close.",
      image: "images/watching.jpg",
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
      id: "4",
      title: "Net Entanglements",
      description: "Reports are increasing of whales becoming entangled in commercial fishing gear, often leading to injury or death. Fishing companies argue that it is \
      just something that happens and is unavoidable.",
      image: "images/net.jpg",
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
      id: "5",
      title: "Krill Competition",
      description: "As ocean temperatures rise due to climate change, krill populations — a critical food source for many whale \
      species — are declining. At the same time, krill fisheries are expanding to meet global demand for krill oil and feed.",
      image: "images/krill.jpg",
      choices: [
        {
          text: "Impose strict catch limits on krill fisheries",
          outcome: "Krill populations begin to stabilize, giving whales a better chance to survive. The fishing industry expresses concern \
          for the livelihoods of those who work at the krill fisheries.",
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
      id: "6",
      title: "Increased Sightings",
      description: "Researchers and scientists have been telling you that the local whale populations have not been increasing despite the heavy \
      restrictions on whaling. But the local indigenous people and hunters have reported increased sightings of the whales. Researchers have been \
      advocating for a long-term ban of hunting, while the local people and hunters are advocating for increased catch limits.",
      image: "images/sightings.jpg",
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
      id: "7",
      title: "Warming Waters",
      description: "As climate change warms the oceans, whale migratory patterns are shifting — driving many species closer to the poles in search of cooler \
      waters and food. These new routes put whales at greater risk of collisions with ships and exposure to oil drilling operations.",
      image: "images/rig.jpg",
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
    {
      id: "8",
      title: "Interventionist Activism",
      description: "A radical conservation group has taken aggressive action against illegal whaling vessels, including ramming ships, boarding them without \
      permission, and using lasers to disorient crews. While their methods have slowed some illegal activity, they have also drawn international \
      condemnation. The country operating the whaling ships is demanding that you intervene and prosecute the activists.",
      image: "images/shepherd.jpg",
      choices: [
        {
          text: "Do nothing and let the activists continue their campaign",
          outcome: "Whaling ships face constant disruption, but international trust and the rule-of-law is undermined.",
          type: "good"
        },
        {
          text: "Condemn the group's actions and pursue legal channels",
          outcome: "International law is respected, but the activists lose momentum and illegal whaling continues unchecked.",
          type: "harmful"
        }
      ]
    },
    {
      id: "end",
      title: "Reality",
      description: "Although this may have been a fun game, these scenarios are real and the actual decisions rergarding them have lasting \
      impacts on whales, people, and the ocean ecosystems as a whole. Compared to the pre-whaling era, the current great whale populations have decreased \
      anywhere from 70-90%. Whale populations have been increasing due to the international moratorium on whaling put into place in 1986 and conservation efforts.\
      But there are still some species, like the Blue Whale, that are endangered and their population growth has been extremely slow. Whales still face threats \
      from things such as climate change, illegal whaling, ship strikes, etc, as you've seen in the scenarios. Whales play a vital role in the marine ecosystem through \
      moving nutrients from the deep ocean to the surface, their role in the food chain as consumers and prey, and whale falls. We must continue to protect and conserve \
      the whales.",
      text: "Results"
    },
    {
      id: "results",
      title: "Results",
      description: "",
    },
  ];
  