const prefixes = {
    container: "container",
    navbar: "navbar"
}

const useBootstrapPrefix = (defaultPrefix, prefix) => {
    return prefix || defaultPrefix[defaultPrefix] || defaultPrefix
}