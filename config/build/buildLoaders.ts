import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const cssLoaders: webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,

      {
        loader: 'css-loader',
        options: {
          esModule: true, // ✅ заставляем работать как ES-модуль
          modules: {
            auto: (resPath: string) => resPath.endsWith('.module.scss'),
            localIdentName: options.isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
            exportLocalsConvention: 'camelCase', // my-btn => myBtn
            namedExport: false, // ✅ запрещаем именованные экспорты
          },
        },
      },

      'sass-loader',
    ],
  };

  const typescriptLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoaders];
}
