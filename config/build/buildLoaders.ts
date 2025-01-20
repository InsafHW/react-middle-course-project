import webpack from 'webpack'

export function buildLoaders(): webpack.RuleSetRule[] {
    // Выносим отдельно, т.к. порядок лоадеров имеет значение
    // И константы легче перемещать между собой
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
    ]
}