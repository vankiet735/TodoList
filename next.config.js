// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
  
// }

// module.exports = nextConfig
const withAntdLess = require('next-plugin-antd-less');

const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './public/antd-custom.less'), 'utf8')
)



module.exports = withAntdLess({
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  // modifyVars: {
  //   '@primary-color': 'red',
  //    '@btn-danger-color': 'red',
  //    '@link-color': '#faad14',
  //    '@error-color': '#1890ff'
  // },
  // optional: you can modify antd less variables directly here
  // modifyVars: { '@primary-color': '#f5222d', '@danger-color': '#52c41a' },
  // Or better still you can specify a path to a file 
  modifyVars: themeVariables,
  // lessVarsFilePath: './styles/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config; 
  }
});