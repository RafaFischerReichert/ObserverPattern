import ISubscriber from "../../subscribers/interfaces/ISubscriber";

export default interface IPublisher {
  subscribe(sub: ISubscriber): void;
  unsubscribe(sub: ISubscriber);
  notifySubscriber(context: any);
}
