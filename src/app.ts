// Environment variables
require("dotenv").config();

import {Bot, Settings} from "@cloudrex/forge";
import path from "path";

const settings = new Settings({
    general: {
        token: process.env.TOKEN as string,
        prefixes: process.env.PREFIX ? process.env.PREFIX.split(",") : ["."]
    },

    paths: {
        commands: path.resolve(path.join(__dirname, "commands")),
        services: path.resolve(path.join(__dirname, "services")),
        tasks: path.resolve(path.join(__dirname, "tasks"))
    }
});

async function start(): Promise<void> {
    const bot: Bot = new Bot({
        settings: settings,
        owner: process.env.OWNER,

        options: {
            logMessages: false,
            consoleInterface: true,
            updateOnMessageEdit: false
        }
    });

    await bot.connect();
}

start();