module.exports = {
  webpack (config) {
    // setup svgr to import svg file as components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })


    return config
  },
  typescript: {
    ignoreBuildErrors: true
  }
}
