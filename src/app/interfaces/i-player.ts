import { IResources } from './i-resources';
import { IStartSide } from './i-start-side';
import { ICharacterType } from './i-character-type';
export abstract class IPlayer {
    startingSide: IStartSide;
    health: number;
    resources: IResources;
    availableCharacterTypes: ICharacterType[];
}
