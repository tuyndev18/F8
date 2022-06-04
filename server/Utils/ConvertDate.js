export const ConvertDate = {
	StartAndEndPoint: (type) => {
		let end = new Date();
		switch (type) {
			case 'week':
				end = new Date(new Date().setDate(new Date().getDate() - 7));
				break;
			case 'month':
				end = new Date(new Date().setDate(new Date().getDate() - 30));
				break;
			case 'year':
				end = new Date(new Date().setDate(new Date().getDate() - 365));
				break;
			default:
				end = new Date(new Date(new Date().setFullYear(2020)));
				break;
		}
		return end
	},
};

export const RecentTimes = {
	"$lte": new Date(),
	"$gte": new Date(new Date().setDate(new Date().getDate() - 5)),
};
