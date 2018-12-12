import { createAction } from 'redux-starter-kit'

export const toggleExpandGamesCard = createAction('toggleExpandGamesCard')
export const toggleExpandPlayerCard = createAction('toggleExpandPlayerCard')
export const toggleBookmark = createAction('toggleBookmark')
export const toggleBookmarkGame = createAction('toggleBookmarkGame')
export const addWinnerToGame = createAction('addWinnerToGame')
export const setSearchQuery = createAction('setSearchQuery')
