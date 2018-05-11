# webpack-sample
測試專案

### webpack4
#### optimization參數

	module.exports = {
		optimization: {
			runtimeChunk: {
				name: 'manifest'
			},
			minimizer: true, 
			splitChunks: {
				chunks: "initial",			  // 必須三選一： "initial" | "all"(預設就是all) | "async"
				minSize: 0,					      // 最小尺寸，預設0
				minChunks: 1,				      // 最小 chunk ，預設1
				maxAsyncRequests: 1,		  // 最大異步請求數，預設1
				maxInitialRequests: 1,		// 最大初始化請求數，預設1
				name: () => {},				    // 名稱，此選項可接受 function
				cacheGroups: {				    // 這裡開始設置緩存的 chunks
					priority: "0",			    // 緩存組優先順序 false | object |
					vendor: {				        // key 為entry中定義的入口名稱
						chunks: "initial",        // 必須三選一： "initial" | "all" | "async"(預設就是異步)
						test: /react|lodash/,     // 正則驗證，如果符合就提取 chunk
						name: "vendor",           // 要緩存的 分隔出来的 chunk 名稱
						minSize: 0,
						minChunks: 1,
						enforce: true,
						maxAsyncRequests: 1,		  // 最大異步請求數，預設1
						maxInitialRequests: 1,		// 最大初始化請求數，預設1
						reuseExistingChunk: true	// 可設置是否重用该chunk
					}
				}
			}
		}
	}

