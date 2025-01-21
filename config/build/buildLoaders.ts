import webpack from 'webpack'
import {BuildOptions} from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    // Выносим отдельно, т.к. порядок лоадеров имеет значение
    // И константы легче перемещать между собой
    const typescriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader: webpack.RuleSetRule = {
        test: /\.(sa|sc|c)ss$/i,
        use: [
            isDev
                ? 'style-loader'
                : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
        ],
    }

    return [
        cssLoader,
        typescriptLoader,
    ]
}