import webpack from 'webpack'
import path from 'path'
import {buildWebpackConfig} from './config/build/buildWebpackConfig'
import {BuildMode, BuildPaths} from './config/build/types/config'

const mode: BuildMode = 'development'
const isDev = mode === 'development'

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    dist: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const config: webpack.Configuration = buildWebpackConfig({
    mode,
    isDev,
    paths,
})

export default config