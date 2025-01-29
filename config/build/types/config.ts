type BuildMode = 'development' | 'production'

type BuildPaths = {
    entry: string,
    dist: string,
    html: string,
    src: string,
}

type BuildEnv = {
    port: number,
    mode: BuildMode,
}

type BuildOptions = {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    port: number,
}

export type {
    BuildEnv,
    BuildMode,
    BuildPaths,
    BuildOptions,
}