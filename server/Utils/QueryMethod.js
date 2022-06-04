export class QueryMethod {
	query = {};
	method = null;
	constructor(query, method) {
		this.query = query;
		this.method = method;
	}
	pagination() {
		const limit = this.query.limit || 0;
		const page = this.query.page || 0;
		const skip = (page - 1) * limit;
		this.method = this.method.skip(skip).limit(limit);
		return this;
	}
	sort() {
		const type = this.query.sort || '';
		this.method = this.method.sort({ createdAt: type });
		return this;
	}
	populate(path, select) {
		this.method = this.method.populate({
			path,
			select,
		});
		return this;
	}
	search(model) {
		const { q } = this.query;
		if (q) {
			this.method = model.find({ title: { $regex: q, $options: 'i' } });
		}
		return this;
	}
	lean() {
		this.method = this.method.lean();
		return this;
	}
}
