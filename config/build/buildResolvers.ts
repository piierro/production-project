import webpack from "webpack";

interface Resolvers {
    extensions: string[];
}

export function buildResolvers(): Resolvers {
    return {
        extensions: ['.tsx', '.ts', '.js'],
      }
}