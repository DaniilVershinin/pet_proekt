import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

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

  const babelLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  };

  const typescriptLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          plugins: [
            [
              'i18next-extract',
              {
                locales: ['ru', 'en'],
                keyAsDefaultValue: true,
                outputPath: 'public/locales/{{locale}}/{{ns}}.json',
              },
            ],
          ],
        },
      },
    ],
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [typescriptLoader, cssLoaders, fileLoader, svgLoader, babelLoader];
}
