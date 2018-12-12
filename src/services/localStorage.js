export function saveBookmarkedPlayers(players) {
  localStorage.setItem(
    'board-games-app--bookmarkedPlayers',
    JSON.stringify(players)
  )
}

export function loadBookmarkedPlayers() {
  try {
    return (
      JSON.parse(localStorage.getItem('board-games-app--bookmarkedPlayers')) ||
      []
    )
  } catch (err) {
    return []
  }
}

export function saveBookmarkedGames(games) {
  localStorage.setItem(
    'board-games-app--bookmarkedGames',
    JSON.stringify(games)
  )
}

export function loadBookmarkedGames() {
  try {
    return (
      JSON.parse(localStorage.getItem('board-games-app--bookmarkedGames')) || []
    )
  } catch (err) {
    return []
  }
}
