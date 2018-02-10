import { IPosition } from "./i-position";
import { IDirection } from './i-direction';
import { ICharacterType } from './i-character-type';

export interface ICharacter {
    position: IPosition;
    type: ICharacterType;
    move(direction: IDirection);
}
