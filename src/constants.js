'use strict'

module.exports = {
  MESSAGING: {
    UH_OH: `Uh-oh! Looks like we broke something 😅`, // :sweat_smile: emoji
    WAIT_FOR_IT: `Wait for it...`,

    SPOTIFY: {
      getSONG_SUCCESSFULLY_ADDED: (trackName) => {
        return `*${trackName}* has been added to the playlist! 🙌` // :hooray: emoji
      }
    }
  },

  SLACK: {
    INTERACTIVE: {
      SONG_SEARCH: {
        CALLBACK_ID: 'song_search',
        ACTION: {
          ADD_SONG: {
            NAME: 'add_song',
            TEXT: 'Add to Playlist'
          },
          SKIP_SEARCH: {
            NAME: 'skip_search',
            TEXT: 'Skip',
            FALLBACK_TEXT: 'You were unable to skip.'
          }
        }
      }
    }
  },

  RESULT: {
    STATUS: {
      SUCCESS: 'success',
      FAILURE: 'failure'
    }
  },

  STORAGE_KEY: {
    SPOTIFY: {
      ACCESS_TOKEN: 'spotify:token:access',
      REFRESH_TOKEN: 'spotify:token:refresh'
    }
  }
}
