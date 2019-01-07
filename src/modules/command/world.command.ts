
import { Command, TgCommand, TgOptions } from "tg-commander";
import { HelloService } from "../service/hello";

@TgCommand
export class WorldCommand {

    @TgOptions("-p, --peppers [type]", "Add peppers")
    public type: string;

    @TgOptions("-t, --target [taget]", "Add peppers", "dev")
    public target: string;

    constructor(private helloService: HelloService) {

    }

    @Command("world2 <cmd> [env]")
    public hello(cmd: any, env: any) {
        console.log(cmd, env);
        console.log(this.helloService.getName());
    }

    @Command({
        cmd: "w <module>",
        description: "create module",
    })
    public createModule(module: any) {
        console.log(this.type);
        console.log("you want to create module: " + module);
        console.log(this.target);
        console.log("====");
    }

    @Command({
        cmd: "wnew <product>",
        alias: "wn",
        description: "new product",
    })
    public newProduct(product: string) {
        console.log(process.cwd());
        console.log("you want to create product: " + product);
    }
}
