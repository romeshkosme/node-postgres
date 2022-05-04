class Service {
  model: any;
  constructor(model) {
    this.model = model;
  }
  async getAll(query: any) {
    return await this.model.find(query);
  }
  async get(query) {
    return await this.model.findOne(query);
  }
  async create(data: any) {
    return await this.model.create(data);
  }
  async update(id: string, data: any) {
    return await this.model.findByIdAndUpdate(id, data, { new: false });
  }
  async delete(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}

export default Service;
