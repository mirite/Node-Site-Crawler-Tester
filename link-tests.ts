
/*
function findBridge(body: string): Array<string> {
	return find(body, `https://jesseconner.ca`);
}

const testArrays: Array<ArrayTestGroup> = [
	{
		input: `<a href=https://jesseconner.ca>`,
		tests: [
			{
				function: findBridge,
				expected: [`https://jesseconner.ca/`],
			},

		],

	},
	{
		input: `<a href="https://jesseconner.ca">`,
		tests: [
			{
				function: findBridge,
				expected: [`https://jesseconner.ca/`],
			},

		],

	},
	{
		input: `<a href='https://jesseconner.ca'>`,
		tests: [
			{
				function: findBridge,
				expected: [`https://jesseconner.ca/`],
			},

		],

	},
	{
		input: `<a href=https://jesseconner.ca targe="_blank">`,
		tests: [
			{
				function: findBridge,
				expected: [`https://jesseconner.ca/`],
			},

		],

	},
	{
		input: `<a href=https://jesseconner.ca targe="_blank"><link rel="stylesheet" href="styles/style.css"><a href='#'>Blah</a>`,
		tests: [
			{
				function: findBridge,
				expected: [`https://jesseconner.ca/`],
			},

		],

	},
]
*/