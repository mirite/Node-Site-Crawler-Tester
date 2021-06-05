import Crawler from 'simple-node-site-crawler';

async function run() {

	await Crawler.crawlSite(`rootree.wpengine.com`);
	Crawler.writeResults(`rootree.wpengine.com`);
	const site = Crawler.loadResults(`rootree.wpengine.com`);
	const results = site.filter(page => page.source != `https://rootree.wpengine.com/`);
	results.map(page => console.log(page.source));
	
	console.log(`Done!`);
}

run();