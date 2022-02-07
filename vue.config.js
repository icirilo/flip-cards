module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/flip-cards/' : '/',
	css: {
		loaderOptions: {
			stylus: {
				use: [require('nib')()],
				import: [
					'~nib/lib/nib/index.styl',
					'~@/stylus/main.styl',
					'~@/stylus/variables.styl',
				]
			}
		}
	}
}