function formatLinkTestBridge(url: string): string {
	return formatLink(url, `jesseconner.ca`, `https://jesseconner.ca/pages/`);
}

const testStrings: Array<TestGroup> = [
	{
		input: `https://jesseconner.ca`,
		tests: [
			{
				function: findProtocol,
				expected: `https`,
			},
			{
				function: findDomain,
				expected: `jesseconner.ca`,
			},
			{
				function: findPath,
				expected: `/`,
			},
			{
				function: isOnPageAnchor,
				expected: false,
			},
			{
				function: findFileName,
				expected: ``,
			},
			{
				function: findFileType,
				expected: ``,
			},
			{
				function: isRelativeToPage,
				expected: false,
			},
			{
				function: isRelativeToRoot,
				expected: false,
			},
			{
				function: formatLinkTestBridge,
				expected: `https://jesseconner.ca/`,
			},
			

		],

	},
	{
		input: `//SomeCDN/asset.css`,
		tests: [{
			function: findProtocol,
			expected: `https`,
		},
		{
			function: findDomain,
			expected: `somecdn`,
			},
			{
				function: findPath,
				expected: `/asset.css`,
			},
			{
				function: isOnPageAnchor,
				expected: false,
			},
			{
				function: isRoot,
				expected: false,
			},
			{
				function: isRelativeToPage,
				expected: false,
			},
			{
				function: isRelativeToRoot,
				expected: false,
			},
			{
				function: findFileName,
				expected: `asset.css`,
			},
			
			{
				function: findFileType,
				expected: `css`,
			},
			{
				function: formatLinkTestBridge,
				expected: `https://somecdn/asset.css`,
			},
		],
	},
	{
		input: `//assets.SomeCDN/asset.css`,
		tests: [{
			function: findProtocol,
			expected: `https`,
		},
		{
			function: findDomain,
			expected: `assets.somecdn`,
			},
			{
				function: findPath,
				expected: `/asset.css`,
			},
			{
				function: isOnPageAnchor,
				expected: false,
			},
			{
				function: isRoot,
				expected: false,
			},
			{
				function: isRelativeToPage,
				expected: false,
			},
			{
				function: isRelativeToRoot,
				expected: false,
			},
			{
				function: findFileName,
				expected: `asset.css`,
			},
			
			{
				function: findFileType,
				expected: `css`,
			},
			{
				function: formatLinkTestBridge,
				expected: `https://assets.somecdn/asset.css`,
			},
		],
	},
	{
		input: `//jesseconner.ca/`,
		tests: [{
			function: findProtocol,
			expected: `https`,
		},
		{
			function: findDomain,
			expected: `jesseconner.ca`,
			},
			{
				function: findPath,
				expected: `/`,
			},
			{
				function: isOnPageAnchor,
				expected: false,
			},
			{
				function: isRoot,
				expected: true,
			},
			{
				function: isRelativeToPage,
				expected: false,
			},
			{
				function: isRelativeToRoot,
				expected: false,
			},
			{
				function: findFileName,
				expected: ``,
			},
			
			{
				function: findFileType,
				expected: ``,
			},
			{
				function: formatLinkTestBridge,
				expected: `https://jesseconner.ca/`,
			},
		],
	},
	{
		input: `ftp://127.0.0.1`,
		tests: [{
			function: findProtocol,
			expected: `ftp`,
		},
		{
			function: findDomain,
			expected: `127.0.0.1`,
			},
			{
				function: findPath,
				expected: `/`,
			},
			{
				function: isOnPageAnchor,
				expected: false,
			},
			{
				function: isRoot,
				expected: true,
			},
			{
				function: isRelativeToPage,
				expected: false,
			},
			{
				function: isRelativeToRoot,
				expected: false,
			},
			{
				function: findFileName,
				expected: ``,
			},
			
			{
				function: findFileType,
				expected: ``,
			},
			{
				function: formatLinkTestBridge,
				expected: `ftp://127.0.0.1/`,
			},
		],
	},
	{
		input: `/index.html`,
		tests: [{
			function: findProtocol,
			expected: ``,
		},
		{
			function: findDomain,
			expected: ``,
			},
			{
				function: findPath,
				expected: `/index.html`,
			},
			{
				function: isOnPageAnchor,
				expected: false,
			},
			{
				function: isRoot,
				expected: false,
			},
			{
				function: isRelativeToPage,
				expected: false,
			},
			{
				function: isRelativeToRoot,
				expected: true,
			},
			{
				function: findFileName,
				expected: `index.html`,
			},
			
			{
				function: findFileType,
				expected: `html`,
			},
			{
				function: formatLinkTestBridge,
				expected: `https://jesseconner.ca/index.html`,
			},
		],
	},
	{
		input: '/',
		tests: [{
			function: findProtocol,
			expected: ``,
		},
		{
			function: findDomain,
			expected: ``,
			},
			{
				function: findPath,
				expected: `/`,
			},
			{
				function: isOnPageAnchor,
				expected: false,
			},
			{
				function: isRoot,
				expected: true,
			},
			{
				function: isRelativeToPage,
				expected: false,
			},
			{
				function: isRelativeToRoot,
				expected: true,
			},
			{
				function: findFileName,
				expected: ``,
			},
			
			{
				function: findFileType,
				expected: ``,
			},
			{
				function: formatLinkTestBridge,
				expected: `https://jesseconner.ca/`,
			},
		],
	},
	{
		input: `folder/index`,
		tests: [
			{
				function: findProtocol,
				expected: ``,
			},
			{
			function: findDomain,
			expected: ``,
			},
			{
				function: findPath,
				expected: `folder/index/`,
			},
			{
				function: isOnPageAnchor,
				expected: false,
			},
			{
				function: isRoot,
				expected: false,
			},
			{
				function: isRelativeToPage,
				expected: true,
			},
			{
				function: isRelativeToRoot,
				expected: false,
			},
			{
				function: findFileName,
				expected: ``,
			},
			
			{
				function: findFileType,
				expected: ``,
			},
			{
				function: formatLinkTestBridge,
				expected: `https://jesseconner.ca/pages/folder/index/`,
			},
		],
	},
	{
		input: `bad//relative`,
		tests: [
			{
				function: findProtocol,
				expected: ``,
			},
			{
				function: findDomain,
				expected: ``,
			},
			{
				function: findPath,
				expected: `bad/relative/`,
			},
			{
				function: isOnPageAnchor,
				expected: false,
			},
			{
				function: isRoot,
				expected: false,
			},
			{
				function: isRelativeToPage,
				expected: true,
			},
			{
				function: isRelativeToRoot,
				expected: false,
			},
			{
				function: findFileName,
				expected: ``,
			},
			
			{
				function: findFileType,
				expected: ``,
			},
			{
				function: formatLinkTestBridge,
				expected: `https://jesseconner.ca/pages/bad/relative/`,
			},
		],
	},
	{
		input: `#`,
		tests: [
			{
				function: findProtocol,
				expected: ``,
			},
			{
				function: findDomain,
				expected: ``,
			},
			{
				function: findPath,
				expected: ``,
			},
			{
				function: isOnPageAnchor,
				expected: true,
			},
			{
				function: isRoot,
				expected: false,
			},
			{
				function: isRelativeToPage,
				expected: false,
			},
			{
				function: isRelativeToRoot,
				expected: false,
			},
			{
				function: findFileName,
				expected: ``,
			},
			
			{
				function: findFileType,
				expected: ``,
			},
			{
				function: formatLinkTestBridge,
				expected: ``,
			},
		],
	},
	{
		input: `#somewhere`,
		tests: [
			{
				function: findProtocol,
				expected: ``,
			},
			{
				function: findDomain,
				expected: ``,
			},
			{
				function: findPath,
				expected: ``,
			},
			{
				function: isOnPageAnchor,
				expected: true,
			},
			{
				function: isRoot,
				expected: false,
			},
			{
				function: isRelativeToPage,
				expected: false,
			},
			{
				function: isRelativeToRoot,
				expected: false,
			},
			{
				function: findFileName,
				expected: ``,
			},
			
			{
				function: findFileType,
				expected: ``,
			},
			{
				function: formatLinkTestBridge,
				expected: ``,
			},
		],
	},
	{
		input: `http://localhost/#home`,
		tests: [
			{
				function: findProtocol,
				expected: `http`,
			},
			{
				function: findDomain,
				expected: `localhost`,
			},
			{
				function: findPath,
				expected: `/`,
			},
			{
				function: isOnPageAnchor,
				expected: false,
			},
			{
				function: isRoot,
				expected: true,
			},
			{
				function: isRelativeToPage,
				expected: false,
			},
			{
				function: isRelativeToRoot,
				expected: false,
			},
			{
				function: findFileName,
				expected: ``,
			},
			
			{
				function: findFileType,
				expected: ``,
			},
			{
				function: formatLinkTestBridge,
				expected: `http://localhost/`,
			},
		],
	},
	{
		input: `somefolder.php#home`,
		tests: [
			{
				function: findProtocol,
				expected: ``,
			},
			{
				function: findDomain,
				expected: ``,
			},
			{
				function: findPath,
				expected: `somefolder.php`,
			},
			{
				function: isOnPageAnchor,
				expected: false,
			},
			{
				function: isRoot,
				expected: false,
			},
			{
				function: isRelativeToPage,
				expected: true,
			},
			{
				function: isRelativeToRoot,
				expected: false,
			},
			{
				function: findFileName,
				expected: `somefolder.php`,
			},
			
			{
				function: findFileType,
				expected: `php`,
			},
			{
				function: formatLinkTestBridge,
				expected: `https://jesseconner.ca/pages/somefolder.php`,
			},
		],
	},
	{
		input: `/path/someimage.png?size=1x1`,
		tests: [
			{
				function: findProtocol,
				expected: ``,
			},
			{
				function: findDomain,
				expected: ``,
			},
			{
				function: findPath,
				expected: `/path/someimage.png?size=1x1`,
			},
			{
				function: isOnPageAnchor,
				expected: false,
			},
			{
				function: isRoot,
				expected: false,
			},
			{
				function: isRelativeToPage,
				expected: false,
			},
			{
				function: isRelativeToRoot,
				expected: true,
			},
			{
				function: findFileName,
				expected: `someimage.png?size=1x1`,
			},
			
			{
				function: findFileType,
				expected: `png`,
			},
			{
				function: formatLinkTestBridge,
				expected: `https://jesseconner.ca/path/someimage.png?size=1x1`,
			},
		],
	},
	{
		input: `https://jesseconner.ca/_nuxt/icons/icon_64x64.5f6a36.png`,
		tests: [
			{
				function: findProtocol,
				expected: `https`,
			},
			{
				function: findDomain,
				expected: `jesseconner.ca`,
			},
			{
				function: findPath,
				expected: `/_nuxt/icons/icon_64x64.5f6a36.png`,
			},
			{
				function: isOnPageAnchor,
				expected: false,
			},
			{
				function: isRoot,
				expected: false,
			},
			{
				function: isRelativeToPage,
				expected: false,
			},
			{
				function: isRelativeToRoot,
				expected: false,
			},
			{
				function: findFileName,
				expected: `icon_64x64.5f6a36.png`,
			},
			
			{
				function: findFileType,
				expected: `png`,
			},
			{
				function: formatLinkTestBridge,
				expected: `https://jesseconner.ca/_nuxt/icons/icon_64x64.5f6a36.png`,
			},
		],
	},
];