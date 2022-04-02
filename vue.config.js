module.exports = {
    pages: {
        app: {
            // page 的入口
            entry: 'src/main.js',
            // entry: isTs ? 'src/main.ts' : 'src/main.js',
            filename: 'index.html',
        },
    },
    productionSourceMap: false,
    // ESLint Check: DISABLE for false
    // Type: boolean | 'warning' | 'default' | 'error'
    lintOnSave: 'warning',
}