/** @type {import('next-sitemap').IConfig}  */
module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost:3000', // || is short-circuit operator
    generateRobotsTxt: true,
    generateIndexSitemap: false, // for web with hundreds of pages generateIndexSitemap: true
}
