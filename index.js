function schoomp(template, data, opts) {
	return JSON.parse(
		JSON.stringify(template)
			.replace(/@{{(?<key>[\w\.]+)}}/g, function (str, key) {
				const props = key.split(/\.|\[(\d)\]/).filter(k => k);
				if (props.length === 0) {
					return data;
				};
				return props.reduce((acc, prop) => {
					if (acc == undefined || acc[prop] == undefined) {
						return undefined;
					};
					if (acc.hasOwnProperty(prop)) {
						return acc[prop];
					} else {
						return opts?.defaultValue || undefined;
					};
				}, data);
			})
	);
};

export { schoomp };
export default schoomp;