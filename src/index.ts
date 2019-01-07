#!/usr/bin/env node

import { BaseApp, TgApp } from "tg-commander";
import { AppModule } from "./modules";

@TgApp({
    imports: [AppModule],
})
export class MainApp extends BaseApp {

}

MainApp.boostrap();
