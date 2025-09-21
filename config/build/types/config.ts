import { Port } from "webpack-dev-server"

export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    enrty: string,
    build: string,
    html: string,
    src:string
}

export interface BuildEnv {
    mode: BuildMode,
    port: number 
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    port: Port
}