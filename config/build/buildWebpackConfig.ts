import webpack from 'webpack'
import {buildPlugins} from './buildPlugins'
import {buildLoaders} from './buildLoaders'
import {buildResolvers} from './buildResolvers'
import {BuildConfiguration} from './types/config'

export function buildWebpackConfig(options: BuildConfiguration): webpack.Configuration {
    const {mode, paths} = options

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.dist,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}