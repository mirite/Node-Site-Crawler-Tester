import Crawler from './crawler';

async function run() {

	//Crawler.crawlSite(`rootree.wpengine.com`);
	const site = Crawler.loadResults(`rootree.wpengine.com`);
	const results = site.filter(page => page.source != `https://rootree.wpengine.com/`);
	console.log(results);
	
	console.log(`Done!`);
}



run();