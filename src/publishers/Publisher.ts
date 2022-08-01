import ISubscriber from "../subscribers/interfaces/ISubscriber";
import Subscriber from "../subscribers/Subscriber";
import IPublisher from "./interfaces/IPublisher";

export default class Publisher implements IPublisher {
  private _subscribers = new Array<ISubscriber>();

  constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  subscribe(sub: Subscriber): void {
    this._subscribers.push(sub);
    console.log(`Usuário ${sub.name} inscrito em ${this.name}!`);
  }
  unsubscribe(sub: Subscriber) {
    let key = this._subscribers.indexOf(sub);
    if (key == -1) {
      throw new Error("Subscriber não encontrado.");
    }
    let removal = this._subscribers.splice(key, 1);
    console.log(`Usuário ${sub.name} removido das inscrições de ${this.name}!`);
  }
  notifySubscriber(context: any) {
    console.log(
      `Atualizando usuários de ${this.name} com o contexto '${context}'.`
    );
    for (let sub of this._subscribers) {
      sub.update(context);
    }
  }
}
