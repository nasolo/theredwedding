const appInitialState = {
  app: {
    isFetching: false,
    didValidate: false,
    lastUpdate: null
  },
  navigation: {
    links:[],
    social: [],
    brand: {},
    copyright: null,
    direction: 0
  },
    header: {
        isFetching: false,
        direction: 0,
        didValidate: false,
        lastUpdate: null,
        activeCardId: null,
        activeCardIndex: 0,
        cards:[]
    },
    gallery: {
        media: [],
        direction: 0,
        isFetching: false,
        didInValidate: false,
        lastUpdate: null,
        activeId: null,
        apiErrorMsg: null,
        filteredMedia: [],
        filterTags: [],
        userTags:[],
        activeIndex: 0,
        activeFilterBtnId: [],
        shareIcons: [],
        filterIcons:[]
    },
    videoPlayer: {
        url: null,
        pip: false,
        controls: false,
        light: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false,
        playing: false,
        seeking: false,
        id: null
    },
    packages: {
      isFetching: false,
      didInValidate: false,
      lastUpdate: null,
      activeId: null,
      apiErrorMsg: null,
      isPageOpen: false,
      activePageId: null,
      weddingPackages: []
    },
    aboutUs:{
      isFetching: false,
      didInValidate: false,
      isPageOpen: false,
      lastUpdate: null,
      activePageId: null,
      apiErrorMsg: null,
      pageContent: []
    },
    testimonials: {
      isFetching: false,
      didInValidate: false,
      isPageOpen: false,
      lastUpdate: null,
      activeQuoteId: null,
      apiErrorMsg: null,
      testimonies: [],
      bg: null,
      activeIndex: 0,
      direction: 0
    }

    
}

export default appInitialState