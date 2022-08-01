import Publisher from "./publishers/Publisher";
import Subscriber from "./subscribers/Subscriber";

var sub1 = new Subscriber("Rafael");
var sub2 = new Subscriber("Lucas");
var banca = new Publisher("Banca de Jornal");
var loja = new Publisher("Loja");
banca.subscribe(sub1);
banca.subscribe(sub2);
loja.subscribe(sub1);
banca.notifySubscriber("Novo Jornal!");
loja.notifySubscriber("Promoção!");
banca.unsubscribe(sub1);
banca.notifySubscriber("Nova Revista!");
