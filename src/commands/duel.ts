import {Command, IFragmentMeta, IArgument, InternalArgType, CommandContext} from "@cloudrex/forge";
import {GuildMember} from "discord.js";

type IDuelArgs = {
    readonly member: GuildMember;
}

export default class DuelCommand extends Command<IDuelArgs> {
    readonly meta: IFragmentMeta = {
        name: "duel",
        description: "Invite another player into a duel"
    };

    readonly arguments: IArgument[] = [
        {
            name: "member",
            description: "The member to invite",
            switchShortName: "m",
            type: InternalArgType.Member,
            required: true
        }
    ];

    public async executed(x: CommandContext, args: IDuelArgs): Promise<void> {
        await x.ok(`You want to duel ${args.member.user.tag}!`);
    }
}