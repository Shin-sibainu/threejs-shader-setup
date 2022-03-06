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
      // HTML
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      // CSS
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      //Javascript
      {
        test: /\.js$/,
        // node_modulesは対象外
        exclude: /node_modules/,
        //トランスコンパイラ
        use: ["babel-loader"],
      },
      //Images
      {
        test: /\.(jpg|png|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },
      //Shader
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        type: "asset/source",
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },
    ],
  },
};
