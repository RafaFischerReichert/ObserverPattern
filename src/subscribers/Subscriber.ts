import ISubscriber from "./interfaces/ISubscriber";

export default class Subscriber implements ISubscriber {
  constructor(private _name) {}

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  update(context: any) {
    console.log(`*** Usuário ${this.name} foi atualizado do contexto '${context}'. ***`);
  }
}
