import Crawler from 'simple-node-site-crawler';

async function run() {

	//await Crawler.crawlSite(`formerfibres.ca`);
	const site = Crawler.loadResults(`formerfibres.ca`);
	const results = site.filter(page => page.responseCode != 200);
	results.map(page => console.log(`${page.target} ${page.responseCode} from ${page.source}`));
	
	console.log(`Done!`);
}

run();