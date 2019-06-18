/**
 *
 */

export interface ClubViewInterface {
    saveClubInfo?: Function;
    selectGame?: Function;
    disbandClub?: Function;
    modifyClubName?: Function;
    quitClub?: Function;
    addClub?: Function;

    delMember?: Function;
}

export enum RoomType {
    ALL = 0,
    DFMJ = 1,
    ZJMJ = 21
}
