module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  devServer: {
    static: "./dist",
  },
  resolve: {
    extensions: [".js", ".glsl", "vs", "fs"],
  },
  module: {
    rules: [
      {
        // .jsの場合
        test: /\.js$/,
        // node_modulesは対象外
        exclude: /node_modules/,
        //トランスコンパイラ
        use: "babel-loader",
      },
      {
        //拡張子が.glsl .vert .fragの場合
        test: /\.(glsl|vert|frag)$/,
        use: "shader-loader",
        // type: "asset/source",
      },
    ],
  },
};
