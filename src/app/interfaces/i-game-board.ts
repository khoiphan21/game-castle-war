import { IPlayer } from "./i-player";
import { IBattlefield } from './i-battlefield';

export class IGameBoard {
    leftPlayer: IPlayer;
    rightPlayer: IPlayer;
    battlefield: IBattlefield;
}
