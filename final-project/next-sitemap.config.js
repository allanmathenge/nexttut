/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.siteUrl || 'http://localhost:3000', // || short circuit operator
    generateRobotsTxt: true,
    generateIndexSitemap: false, // for web with multiple pages generateIndexSitemap:false
}

