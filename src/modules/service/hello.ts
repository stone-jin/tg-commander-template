export class HelloService {
    public name: string = "hello";

    public getName() {
        return this.name + " world";
    }
}
