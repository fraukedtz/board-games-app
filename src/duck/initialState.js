import ImgCatan from '../images/games/catan.jpg'
import ImgUno from '../images/games/uno.jpg'
import ImgScrabble from '../images/games/scrabble.jpg'
import ImgQwirkle from '../images/games/qwirkle.jpg'
import ImgMonopoly from '../images/games/monopoly.jpg'

import ImgAlex from '../images/players/alex.jpeg'
import ImgChris from '../images/players/chris.jpeg'
import ImgFrauke from '../images/players/frauke.jpeg'
import ImgHans from '../images/players/hans.jpeg'
import ImgJan from '../images/players/jan.jpeg'
import ImgJerry from '../images/players/jerry.jpg'
import ImgKelly from '../images/players/kelly.jpeg'
import ImgLukas from '../images/players/lukas.jpeg'
import ImgMelanie from '../images/players/melanie.jpeg'

import {
  loadBookmarkedPlayers,
  loadBookmarkedGames
} from '../services/localStorage'

export default {
  searchQueryGames: '',
  searchQueryPlayers: '',
  gamesNight: {
    players: loadBookmarkedPlayers() || [],
    games: loadBookmarkedGames() || []
  },
  players: [
    {
      id: '1',
      name: 'Frauke',
      imgSrc: ImgFrauke,
      userName: '@frauks',
      isExpanded: false,
      likedGames: [
        {
          id: '1',
          title: 'The Settlers of Catan',
          isOwned: true
        },
        {
          id: '2',
          title: 'UNO',
          isOwned: false
        },
        {
          id: '4',
          title: 'Qwirkle',
          isOwned: true
        }
      ],
      ownedGames: [
        {
          id: '1',
          title: 'The Settlers of Catan'
        },
        {
          id: '4',
          title: 'Qwirkle'
        }
      ]
    },
    {
      id: '2',
      name: 'Alex',
      imgSrc: ImgAlex,
      userName: '@alexx',
      isExpanded: false,
      likedGames: [
        {
          id: '1',
          title: 'The Settlers of Catan',
          isOwned: false
        },
        {
          id: '2',
          title: 'UNO',
          isOwned: true
        },
        {
          id: '4',
          title: 'Qwirkle',
          isOwned: false
        },
        {
          id: '3',
          title: 'Monopoly',
          isOwned: false
        }
      ],
      ownedGames: [
        {
          id: '2',
          title: 'UNO'
        }
      ]
    },
    {
      id: '3',
      name: 'Jerry',
      imgSrc: ImgJerry,
      userName: '@badabam',
      isExpanded: false,
      likedGames: [
        {
          id: '1',
          title: 'The Settlers of Catan',
          isOwned: true
        },
        {
          id: '2',
          title: 'UNO',
          isOwned: false
        },
        {
          id: '4',
          title: 'Qwirkle',
          isOwned: true
        }
      ],
      ownedGames: [
        {
          id: '1',
          title: 'The Settlers of Catan'
        },
        {
          id: '4',
          title: 'Qwirkle'
        },
        {
          id: '5',
          title: 'Scrabble'
        }
      ]
    },
    {
      id: '4',
      name: 'Chris',
      imgSrc: ImgChris,
      userName: '@chriscar',
      isExpanded: false,
      likedGames: [
        {
          id: '1',
          title: 'The Settlers of Catan',
          isOwned: false
        },
        {
          id: '2',
          title: 'UNO',
          isOwned: false
        },
        {
          id: '3',
          title: 'Monopoly',
          isOwned: true
        },
        {
          id: '5',
          title: 'Scrabble',
          isOwned: true
        }
      ],
      ownedGames: [
        {
          id: '3',
          title: 'Monopoly'
        },
        {
          id: '5',
          title: 'Scrabble'
        }
      ]
    },
    {
      id: '5',
      name: 'Kelly',
      imgSrc: ImgKelly,
      userName: '@kellyk',
      isExpanded: false,
      likedGames: [
        {
          id: '2',
          title: 'UNO',
          isOwned: false
        },
        {
          id: '3',
          title: 'Monopoly',
          isOwned: false
        },
        {
          id: '5',
          title: 'Scrabble',
          isOwned: false
        }
      ],
      ownedGames: []
    },
    {
      id: '6',
      name: 'Hans',
      imgSrc: ImgHans,
      userName: '@hansjo',
      isExpanded: false,
      likedGames: [
        {
          id: '1',
          title: 'The Settlers of Catan',
          isOwned: false
        },
        {
          id: '2',
          title: 'UNO',
          isOwned: false
        },
        {
          id: '3',
          title: 'Monopoly',
          isOwned: true
        },
        {
          id: '5',
          title: 'Scrabble',
          isOwned: false
        }
      ],
      ownedGames: [
        {
          id: '3',
          title: 'Monopoly'
        }
      ]
    },
    {
      id: '7',
      name: 'Jan',
      imgSrc: ImgJan,
      userName: '@janno',
      isExpanded: false,
      likedGames: [
        {
          id: '1',
          title: 'The Settlers of Catan',
          isOwned: false
        },
        {
          id: '4',
          title: 'Qwirkle',
          isOwned: true
        },
        {
          id: '3',
          title: 'Monopoly',
          isOwned: false
        }
      ],
      ownedGames: [
        {
          id: '4',
          title: 'Qwirkle'
        }
      ]
    },
    {
      id: '8',
      name: 'Melanie',
      imgSrc: ImgMelanie,
      userName: '@mel',
      isExpanded: false,
      likedGames: [
        {
          id: '1',
          title: 'The Settlers of Catan',
          isOwned: false
        },
        {
          id: '2',
          title: 'UNO',
          isOwned: true
        },
        {
          id: '3',
          title: 'Monopoly',
          isOwned: false
        }
      ],
      ownedGames: [
        {
          id: '2',
          title: 'UNO'
        }
      ]
    },
    {
      id: '9',
      name: 'Lukas',
      imgSrc: ImgLukas,
      userName: '@luks',
      isExpanded: false,
      likedGames: [
        {
          id: '1',
          title: 'The Settlers of Catan',
          isOwned: false
        },
        {
          id: '2',
          title: 'UNO',
          isOwned: true
        }
      ],
      ownedGames: [
        {
          id: '2',
          title: 'UNO'
        }
      ]
    }
  ],
  games: [
    {
      id: '1',
      title: 'The Settlers of Catan',
      imgSrc: ImgCatan,
      numPlayers: '3-4',
      playingTime: '60-120',
      age: '10+',
      isExpanded: false,
      keenPlayers: [
        {
          id: '1',
          name: 'Frauke',
          ownsGame: true
        },
        {
          id: '2',
          name: 'Alex',
          ownsGame: false
        },
        {
          id: '3',
          name: 'Jerry',
          ownsGame: true
        },
        {
          id: '6',
          name: 'Hans',
          ownsGame: false
        },
        {
          id: '7',
          name: 'Jan',
          ownsGame: false
        },
        {
          id: '8',
          name: 'Melanie',
          ownsGame: false
        },
        {
          id: '9',
          name: 'Lukas',
          ownsGame: false
        }
      ],
      owners: [
        {
          id: '1',
          name: 'Frauke'
        },
        {
          id: '3',
          name: 'Jerry'
        }
      ]
    },
    {
      id: '2',
      title: 'UNO',
      imgSrc: ImgUno,
      numPlayers: '2-10',
      playingTime: '30',
      age: '6+',
      isExpanded: false,
      keenPlayers: [
        {
          id: '1',
          name: 'Frauke',
          ownsGame: false
        },
        {
          id: '2',
          name: 'Alex',
          ownsGame: true
        },
        {
          id: '3',
          name: 'Jerry',
          ownsGame: false
        },
        {
          id: '5',
          name: 'Kelly',
          ownsGame: false
        },
        {
          id: '6',
          name: 'Hans',
          ownsGame: false
        },
        {
          id: '8',
          name: 'Melanie',
          ownsGame: true
        },
        {
          id: '9',
          name: 'Lukas',
          ownsGame: true
        }
      ],
      owners: [
        {
          id: '2',
          name: 'Alex'
        },
        {
          id: '8',
          name: 'Melanie'
        },
        {
          id: '9',
          name: 'Lukas'
        }
      ]
    },
    {
      id: '3',
      title: 'Monopoly',
      imgSrc: ImgMonopoly,
      numPlayers: '2-8',
      playingTime: '60-180',
      age: '8+',
      isExpanded: false,
      keenPlayers: [
        {
          id: '2',
          name: 'Alex',
          ownsGame: false
        },
        {
          id: '4',
          name: 'Chris',
          ownsGame: true
        },
        {
          id: '5',
          name: 'Kelly',
          ownsGame: false
        },
        {
          id: '6',
          name: 'Hans',
          ownsGame: true
        },
        {
          id: '7',
          name: 'Jan',
          ownsGame: false
        },
        {
          id: '8',
          name: 'Melanie',
          ownsGame: false
        }
      ],
      owners: [
        {
          id: '4',
          name: 'Chris'
        },
        {
          id: '6',
          name: 'Hans'
        }
      ]
    },
    {
      id: '4',
      title: 'Qwirkle',
      imgSrc: ImgQwirkle,
      numPlayers: '2-4',
      playingTime: '45',
      age: '6+',
      isExpanded: false,
      keenPlayers: [
        {
          id: '1',
          name: 'Frauke',
          ownsGame: true
        },
        {
          id: '2',
          name: 'Alex',
          ownsGame: false
        },
        {
          id: '3',
          name: 'Jerry',
          ownsGame: true
        },
        {
          id: '7',
          name: 'Jan',
          ownsGame: false
        }
      ],
      owners: [
        {
          id: '1',
          name: 'Frauke'
        },
        {
          id: '3',
          name: 'Jerry'
        }
      ]
    },
    {
      id: '5',
      title: 'Scrabble',
      imgSrc: ImgScrabble,
      numPlayers: '2-4',
      playingTime: '45',
      age: '6+',
      isExpanded: false,
      keenPlayers: [
        {
          id: '4',
          name: 'Chris',
          ownsGame: true
        },
        {
          id: '5',
          name: 'Kelly',
          ownsGame: false
        },
        {
          id: '6',
          name: 'Hans',
          ownsGame: false
        }
      ],
      owners: [
        {
          id: '3',
          name: 'Jerry'
        },
        { id: '4', name: 'Chris' }
      ]
    }
  ]
}
