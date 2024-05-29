import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import path from 'path';
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({ paths}: BuildOptions): webpack.WebpackPluginInstance[]{

    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: paths.html}),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthah:8].css',
            chunkFilename: 'css/[name].[contenthah:8].css'
        })
    ]
}