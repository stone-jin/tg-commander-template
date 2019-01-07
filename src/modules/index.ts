import { TgModule } from "tg-commander";
import { HelloCommand } from "./command/hello.command";
import { WorldCommand } from "./command/world.command";

@TgModule({
    commands: [HelloCommand, WorldCommand],
})
export class AppModule {

}
