type BuildMode = 'development' | 'production'

type BuildPaths = {
    entry: string,
    dist: string,
    html: string,
}

type BuildConfiguration = {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
}

export type {
    BuildMode,
    BuildPaths,
    BuildConfiguration,
}