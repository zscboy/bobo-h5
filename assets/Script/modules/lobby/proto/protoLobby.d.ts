export namespace proto {
	export namespace lobby {
		enum MsgError {
			ErrSuccess = 0,
			ErrDecode = 1,
			ErrEncode = 2,
			ErrRoomExist = 3,
			ErrNoRoomConfig = 4,
			ErrServerIsFull = 5,
			ErrDecodeRoomConfig = 6,
			ErrRoomNotExist = 7,
			ErrDatabase = 8,
			ErrRequestGameServerTimeOut = 9,
			ErrWaitGameServerSN = 10,
			ErrRoomIDIsEmpty = 11,
			ErrNotRoomCreater = 12,
			ErrGameIsPlaying = 13,
			ErrTokenIsEmpty = 14,
			ErrUserIdIsEmpty = 15,
			ErrRoomNumberIsEmpty = 16,
			ErrRoomNumberNotExist = 17,
			ErrGameServerIDNotExist = 18,
			ErrRoomCountIsOutOfLimit = 19,
			ErrRequestInvalidParam = 20,
			ErrTakeoffDiamondFailedNotEnough = 21,
			ErrTakeoffDiamondFailedIO = 22,
			ErrTakeoffDiamondFailedRepeat = 23,
			ErrGameServerUnsupportRoomType = 24,
			ErrGameServerRoomExist = 25,
			ErrGameServerNoRoomConfig = 26,
			ErrGameServerDecodeRoomConfig = 27,
			ErrGameServerRoomNotExist = 28,
			ErrUserInOtherRoom = 29,
			ErrRoomIsFull = 30,
			ErrUserInBlacklist = 31,
			ErrClubIDIsEmtpy = 32,
			ErrRoomPriceCfgNotExist = 33,
			ErrUserCreateRoomLock = 34,
			ErrGenerateRoomNumber = 35,
			ErrIsNeedUpdate = 36,
			ErrOnlyClubCreatorOrManagerAllowCreateRoom = 37,
			ErrOnlyClubCreatorOrManagerAllowDeleteRoom = 38,
			ErrNotClubMember = 39,
		}

		enum MessageCode {
			OPInvalid = 0,
			OPConnectReply = 1,
			OPChat = 2,
			OPUpdateDiamond = 3,
			OPMail = 4,
			OPPing = 100,
			OPPong = 101,
		}

		enum RoomType {
			DafengMJ = 1,
			GuanDang = 2,
			DongTaiMJ = 3,
			YanChengMJ = 4,
			ShaoGuanMJ = 5,
			NingAnMJ = 6,
			XinJiangGH = 7,
			DafengGZ = 8,
			Dafeng7w523 = 9,
			NiuNiu = 10,
			DDZ = 11,
			XueLiuMJ = 12,
			LanZhouMJ = 13,
			LLanZouMJ = 14,
			ZhangYeMJ = 15,
		}

		enum OpenRoomType {
			CreateAndEnter = 1,
			CreateForOther = 2,
		}

		enum ChatDataType {
			Text = 0,
			Emoji = 1,
			Voice = 2,
			Buildin = 3,
		}

		enum ChatScopeType {
			UniCast = 0,
			InRoom = 1,
			InServer = 2,
			InAllServers = 3,
		}

		enum LoginState {
			Faild = 0,
			Success = 1,
			UserInBlacklist = 2,
			ParseTokenError = 3,
		}

		enum ActivityType {
			Email = 1,
		}

		enum LoginError {
			ErrLoginSuccess = 0,
			ErrParamWechatCodeIsEmpty = 1,
			ErrLoadWechatUserInfoFailed = 2,
			ErrParamAccountIsEmpty = 3,
			ErrParamPasswordIsEmpty = 4,
			ErrAccountNotExist = 5,
			ErrAccountNotSetPassword = 6,
			ErrPasswordNotMatch = 7,
		}

		enum RegisterError {
			ErrRegisterSuccess = 0,
			ErrAccountIsEmpty = 1,
			ErrPasswordIsEmpty = 2,
			ErrAccountExist = 3,
			ErrWriteDatabaseFailed = 4,
		}

		enum WebsocketConnectError {
			ConnectSuccess = 0,
			ParseTokenFailed = 1,
		}

		enum MailAttachmentType {
			Diamond = 1,
		}

		interface ILobbyMessage {
			Ops: number;
			Data?: ByteBuffer;
		}

		class LobbyMessage implements ILobbyMessage {
			public Ops: number;
			public Data: ByteBuffer;
			constructor(properties?: lobby.ILobbyMessage);
			public static encode(message: LobbyMessage): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): LobbyMessage;
		}

		interface IMsgCreateRoomReq {
			config: string;
		}

		class MsgCreateRoomReq implements IMsgCreateRoomReq {
			public config: string;
			constructor(properties?: lobby.IMsgCreateRoomReq);
			public static encode(message: MsgCreateRoomReq): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgCreateRoomReq;
		}

		interface IUserProfile {
			userID: string;
			userName?: string;
			nickName?: string;
		}

		class UserProfile implements IUserProfile {
			public userID: string;
			public userName: string;
			public nickName: string;
			constructor(properties?: lobby.IUserProfile);
			public static encode(message: UserProfile): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): UserProfile;
		}

		interface IRoomInfo {
			roomID: string;
			roomNumber: string;
			gameServerID: string;
			state?: number;
			config?: string;
			timeStamp?: string;
			users?: lobby.IUserProfile[];
			handStartted?: number;
			lastActiveTime?: number;
			propCfg?: string;
			moduleCfg?: string;
		}

		class RoomInfo implements IRoomInfo {
			public roomID: string;
			public roomNumber: string;
			public gameServerID: string;
			public state: number;
			public config: string;
			public timeStamp: string;
			public users: lobby.IUserProfile[];
			public handStartted: number;
			public lastActiveTime: number;
			public propCfg: string;
			public moduleCfg: string;
			constructor(properties?: lobby.IRoomInfo);
			public static encode(message: RoomInfo): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): RoomInfo;
		}

		interface IMsgCreateRoomRsp {
			result: number;
			roomInfo?: lobby.IRoomInfo;
			retMsg?: string;
			diamond?: number;
		}

		class MsgCreateRoomRsp implements IMsgCreateRoomRsp {
			public result: number;
			public roomInfo: lobby.IRoomInfo;
			public retMsg: string;
			public diamond: number;
			constructor(properties?: lobby.IMsgCreateRoomRsp);
			public static encode(message: MsgCreateRoomRsp): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgCreateRoomRsp;
		}

		interface IMsgDeleteRoomReply {
			result: number;
		}

		class MsgDeleteRoomReply implements IMsgDeleteRoomReply {
			public result: number;
			constructor(properties?: lobby.IMsgDeleteRoomReply);
			public static encode(message: MsgDeleteRoomReply): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgDeleteRoomReply;
		}

		interface IMsgChat {
			scope: number;
			from?: string;
			to?: string;
			dataType: number;
			data: ByteBuffer;
			id?: string;
		}

		class MsgChat implements IMsgChat {
			public scope: number;
			public from: string;
			public to: string;
			public dataType: number;
			public data: ByteBuffer;
			public id: string;
			constructor(properties?: lobby.IMsgChat);
			public static encode(message: MsgChat): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgChat;
		}

		interface IMsgLoadUnreadChatReply {
			msgs?: lobby.IMsgChat[];
			cursor?: number;
		}

		class MsgLoadUnreadChatReply implements IMsgLoadUnreadChatReply {
			public msgs: lobby.IMsgChat[];
			public cursor: number;
			constructor(properties?: lobby.IMsgLoadUnreadChatReply);
			public static encode(message: MsgLoadUnreadChatReply): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgLoadUnreadChatReply;
		}

		interface IMsgSetReadChat {
			ids?: number[];
		}

		class MsgSetReadChat implements IMsgSetReadChat {
			public ids: number[];
			constructor(properties?: lobby.IMsgSetReadChat);
			public static encode(message: MsgSetReadChat): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgSetReadChat;
		}

		interface IRoomIDList {
			roomIDs?: string[];
		}

		class RoomIDList implements IRoomIDList {
			public roomIDs: string[];
			constructor(properties?: lobby.IRoomIDList);
			public static encode(message: RoomIDList): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): RoomIDList;
		}

		interface IMsgLoadRoomListRsp {
			result: number;
			roomInfos?: lobby.IRoomInfo[];
			retMsg?: string;
		}

		class MsgLoadRoomListRsp implements IMsgLoadRoomListRsp {
			public result: number;
			public roomInfos: lobby.IRoomInfo[];
			public retMsg: string;
			constructor(properties?: lobby.IMsgLoadRoomListRsp);
			public static encode(message: MsgLoadRoomListRsp): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgLoadRoomListRsp;
		}

		interface IMsgUpdateUserInfo {
			location: string;
		}

		class MsgUpdateUserInfo implements IMsgUpdateUserInfo {
			public location: string;
			constructor(properties?: lobby.IMsgUpdateUserInfo);
			public static encode(message: MsgUpdateUserInfo): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgUpdateUserInfo;
		}

		interface IRoomCost {
			handNum: number;
			pay: number;
		}

		class RoomCost implements IRoomCost {
			public handNum: number;
			public pay: number;
			constructor(properties?: lobby.IRoomCost);
			public static encode(message: RoomCost): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): RoomCost;
		}

		interface IMsgRequestRoomInfo {
			roomNumber: string;
		}

		class MsgRequestRoomInfo implements IMsgRequestRoomInfo {
			public roomNumber: string;
			constructor(properties?: lobby.IMsgRequestRoomInfo);
			public static encode(message: MsgRequestRoomInfo): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgRequestRoomInfo;
		}

		interface IMsgRequestRoomInfoRsp {
			result: number;
			roomInfo?: lobby.IRoomInfo;
			retMsg?: string;
		}

		class MsgRequestRoomInfoRsp implements IMsgRequestRoomInfoRsp {
			public result: number;
			public roomInfo: lobby.IRoomInfo;
			public retMsg: string;
			constructor(properties?: lobby.IMsgRequestRoomInfoRsp);
			public static encode(message: MsgRequestRoomInfoRsp): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgRequestRoomInfoRsp;
		}

		interface IMsgUpdateRoomState {
			state: number;
			roomID: string;
			users?: lobby.IUserProfile[];
			handStartted: number;
			lastActiveTime: number;
		}

		class MsgUpdateRoomState implements IMsgUpdateRoomState {
			public state: number;
			public roomID: string;
			public users: lobby.IUserProfile[];
			public handStartted: number;
			public lastActiveTime: number;
			constructor(properties?: lobby.IMsgUpdateRoomState);
			public static encode(message: MsgUpdateRoomState): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgUpdateRoomState;
		}

		interface IMsgUpdateRoomList {
			roomInfos?: lobby.IRoomInfo[];
		}

		class MsgUpdateRoomList implements IMsgUpdateRoomList {
			public roomInfos: lobby.IRoomInfo[];
			constructor(properties?: lobby.IMsgUpdateRoomList);
			public static encode(message: MsgUpdateRoomList): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgUpdateRoomList;
		}

		interface IMsgRequestUserScoreInfo {
			userID: string;
			gameID?: string;
		}

		class MsgRequestUserScoreInfo implements IMsgRequestUserScoreInfo {
			public userID: string;
			public gameID: string;
			constructor(properties?: lobby.IMsgRequestUserScoreInfo);
			public static encode(message: MsgRequestUserScoreInfo): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgRequestUserScoreInfo;
		}

		interface IMsgRequestUserScoreInfoRsp {
			maxWinScore: number;
			customCount: number;
			maxWinMoney?: number;
			coinCount?: number;
			retMsg?: string;
		}

		class MsgRequestUserScoreInfoRsp implements IMsgRequestUserScoreInfoRsp {
			public maxWinScore: number;
			public customCount: number;
			public maxWinMoney: number;
			public coinCount: number;
			public retMsg: string;
			constructor(properties?: lobby.IMsgRequestUserScoreInfoRsp);
			public static encode(message: MsgRequestUserScoreInfoRsp): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgRequestUserScoreInfoRsp;
		}

		interface IMsgLoadUserHeadIconURI {
			userIDs?: string[];
		}

		class MsgLoadUserHeadIconURI implements IMsgLoadUserHeadIconURI {
			public userIDs: string[];
			constructor(properties?: lobby.IMsgLoadUserHeadIconURI);
			public static encode(message: MsgLoadUserHeadIconURI): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgLoadUserHeadIconURI;
		}

		interface IMsgHeadIconInfo {
			userID: string;
			gender?: number;
			headIconURI?: string;
		}

		class MsgHeadIconInfo implements IMsgHeadIconInfo {
			public userID: string;
			public gender: number;
			public headIconURI: string;
			constructor(properties?: lobby.IMsgHeadIconInfo);
			public static encode(message: MsgHeadIconInfo): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgHeadIconInfo;
		}

		interface IMsgLoadUserHeadIconURIReply {
			result: number;
			headIconInfos?: lobby.IMsgHeadIconInfo[];
			retMsg?: string;
		}

		class MsgLoadUserHeadIconURIReply implements IMsgLoadUserHeadIconURIReply {
			public result: number;
			public headIconInfos: lobby.IMsgHeadIconInfo[];
			public retMsg: string;
			constructor(properties?: lobby.IMsgLoadUserHeadIconURIReply);
			public static encode(message: MsgLoadUserHeadIconURIReply): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgLoadUserHeadIconURIReply;
		}

		interface IMsgUpdateUserDiamond {
			diamond: Long;
		}

		class MsgUpdateUserDiamond implements IMsgUpdateUserDiamond {
			public diamond: Long;
			constructor(properties?: lobby.IMsgUpdateUserDiamond);
			public static encode(message: MsgUpdateUserDiamond): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgUpdateUserDiamond;
		}

		interface IMsgAccReplayRoom {
			replayRoomBytes: ByteBuffer;
			recordRoomType: number;
		}

		class MsgAccReplayRoom implements IMsgAccReplayRoom {
			public replayRoomBytes: ByteBuffer;
			public recordRoomType: number;
			constructor(properties?: lobby.IMsgAccReplayRoom);
			public static encode(message: MsgAccReplayRoom): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgAccReplayRoom;
		}

		interface IMsgAccLoadReplayRoomsReply {
			replayRooms?: lobby.IMsgAccReplayRoom[];
			cursor?: number;
			totalCursor?: number;
		}

		class MsgAccLoadReplayRoomsReply implements IMsgAccLoadReplayRoomsReply {
			public replayRooms: lobby.IMsgAccReplayRoom[];
			public cursor: number;
			public totalCursor: number;
			constructor(properties?: lobby.IMsgAccLoadReplayRoomsReply);
			public static encode(message: MsgAccLoadReplayRoomsReply): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgAccLoadReplayRoomsReply;
		}

		interface IMsgAccLoadReplayRecord {
			replayRecordBytes: ByteBuffer;
			roomJSONConfig: string;
		}

		class MsgAccLoadReplayRecord implements IMsgAccLoadReplayRecord {
			public replayRecordBytes: ByteBuffer;
			public roomJSONConfig: string;
			constructor(properties?: lobby.IMsgAccLoadReplayRecord);
			public static encode(message: MsgAccLoadReplayRecord): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgAccLoadReplayRecord;
		}

		interface IMsgUserInfo {
			uid: string;
			name: string;
			gender: Long;
			protrait: string;
			token: string;
			diamond: Long;
			nick: string;
			charm: Long;
			addr: string;
			avatar: string;
			dan?: Long;
			gold?: Long;
		}

		class MsgUserInfo implements IMsgUserInfo {
			public uid: string;
			public name: string;
			public gender: Long;
			public protrait: string;
			public token: string;
			public diamond: Long;
			public nick: string;
			public charm: Long;
			public addr: string;
			public avatar: string;
			public dan: Long;
			public gold: Long;
			constructor(properties?: lobby.IMsgUserInfo);
			public static encode(message: MsgUserInfo): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgUserInfo;
		}

		interface IUserInfo {
			userID: string;
			openID?: string;
			nickName?: string;
			gender?: number;
			province?: string;
			city?: string;
			country?: string;
			headImgUrl?: string;
			phone?: string;
			diamond?: number;
		}

		class UserInfo implements IUserInfo {
			public userID: string;
			public openID: string;
			public nickName: string;
			public gender: number;
			public province: string;
			public city: string;
			public country: string;
			public headImgUrl: string;
			public phone: string;
			public diamond: number;
			constructor(properties?: lobby.IUserInfo);
			public static encode(message: UserInfo): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): UserInfo;
		}

		interface IMsgLoginReply {
			result: number;
			token?: string;
			userInfo?: lobby.IUserInfo;
		}

		class MsgLoginReply implements IMsgLoginReply {
			public result: number;
			public token: string;
			public userInfo: lobby.IUserInfo;
			constructor(properties?: lobby.IMsgLoginReply);
			public static encode(message: MsgLoginReply): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgLoginReply;
		}

		interface IClientInfo {
			qMod?: string;
			modV?: string;
			csVer?: string;
			lobbyVer?: string;
			operatingSystem?: string;
			operatingSystemFamily?: string;
			deviceUniqueIdentifier?: string;
			deviceName?: string;
			deviceModel?: string;
			network?: string;
		}

		class ClientInfo implements IClientInfo {
			public qMod: string;
			public modV: string;
			public csVer: string;
			public lobbyVer: string;
			public operatingSystem: string;
			public operatingSystemFamily: string;
			public deviceUniqueIdentifier: string;
			public deviceName: string;
			public deviceModel: string;
			public network: string;
			constructor(properties?: lobby.IClientInfo);
			public static encode(message: ClientInfo): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): ClientInfo;
		}

		interface IMsgRegisterReply {
			result: number;
			token?: string;
		}

		class MsgRegisterReply implements IMsgRegisterReply {
			public result: number;
			public token: string;
			constructor(properties?: lobby.IMsgRegisterReply);
			public static encode(message: MsgRegisterReply): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgRegisterReply;
		}

		interface IMsgQuicklyLoginReply {
			result: number;
			token?: string;
			account?: string;
			userInfo?: lobby.IUserInfo;
		}

		class MsgQuicklyLoginReply implements IMsgQuicklyLoginReply {
			public result: number;
			public token: string;
			public account: string;
			public userInfo: lobby.IUserInfo;
			constructor(properties?: lobby.IMsgQuicklyLoginReply);
			public static encode(message: MsgQuicklyLoginReply): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgQuicklyLoginReply;
		}

		interface IMsgWebsocketConnectReply {
			result: number;
		}

		class MsgWebsocketConnectReply implements IMsgWebsocketConnectReply {
			public result: number;
			constructor(properties?: lobby.IMsgWebsocketConnectReply);
			public static encode(message: MsgWebsocketConnectReply): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgWebsocketConnectReply;
		}

		interface IMsgReplayPlayerInfo {
			userID: string;
			nick?: string;
			chairID: number;
			totalScore?: number;
			gender?: number;
			headIconURI?: string;
			avatarID?: number;
		}

		class MsgReplayPlayerInfo implements IMsgReplayPlayerInfo {
			public userID: string;
			public nick: string;
			public chairID: number;
			public totalScore: number;
			public gender: number;
			public headIconURI: string;
			public avatarID: number;
			constructor(properties?: lobby.IMsgReplayPlayerInfo);
			public static encode(message: MsgReplayPlayerInfo): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgReplayPlayerInfo;
		}

		interface IMsgReplayPlayerScoreSummary {
			chairID: number;
			score: number;
			winType: number;
		}

		class MsgReplayPlayerScoreSummary implements IMsgReplayPlayerScoreSummary {
			public chairID: number;
			public score: number;
			public winType: number;
			constructor(properties?: lobby.IMsgReplayPlayerScoreSummary);
			public static encode(message: MsgReplayPlayerScoreSummary): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgReplayPlayerScoreSummary;
		}

		interface IMsgReplayRecordSummary {
			recordUUID: string;
			playerScores?: lobby.IMsgReplayPlayerScoreSummary[];
			endTime: number;
			shareAbleID?: string;
			startTime?: number;
		}

		class MsgReplayRecordSummary implements IMsgReplayRecordSummary {
			public recordUUID: string;
			public playerScores: lobby.IMsgReplayPlayerScoreSummary[];
			public endTime: number;
			public shareAbleID: string;
			public startTime: number;
			constructor(properties?: lobby.IMsgReplayRecordSummary);
			public static encode(message: MsgReplayRecordSummary): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgReplayRecordSummary;
		}

		interface IMsgReplayRoom {
			recordRoomType: number;
			startTime: number;
			endTime: number;
			roomNumber: string;
			players?: lobby.IMsgReplayPlayerInfo[];
			records?: lobby.IMsgReplayRecordSummary[];
			ownerUserID?: string;
		}

		class MsgReplayRoom implements IMsgReplayRoom {
			public recordRoomType: number;
			public startTime: number;
			public endTime: number;
			public roomNumber: string;
			public players: lobby.IMsgReplayPlayerInfo[];
			public records: lobby.IMsgReplayRecordSummary[];
			public ownerUserID: string;
			constructor(properties?: lobby.IMsgReplayRoom);
			public static encode(message: MsgReplayRoom): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgReplayRoom;
		}

		interface IMailAttachments {
			type: number;
			num: number;
			isReceive?: boolean;
		}

		class MailAttachments implements IMailAttachments {
			public type: number;
			public num: number;
			public isReceive: boolean;
			constructor(properties?: lobby.IMailAttachments);
			public static encode(message: MailAttachments): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MailAttachments;
		}

		interface IMsgMail {
			id: string;
			title?: string;
			content?: string;
			attachments?: lobby.IMailAttachments;
			isRead?: boolean;
			timeStamp?: Long;
		}

		class MsgMail implements IMsgMail {
			public id: string;
			public title: string;
			public content: string;
			public attachments: lobby.IMailAttachments;
			public isRead: boolean;
			public timeStamp: Long;
			constructor(properties?: lobby.IMsgMail);
			public static encode(message: MsgMail): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgMail;
		}

		interface IMsgLoadMail {
			mails?: lobby.IMsgMail[];
			cursor?: number;
		}

		class MsgLoadMail implements IMsgLoadMail {
			public mails: lobby.IMsgMail[];
			public cursor: number;
			constructor(properties?: lobby.IMsgLoadMail);
			public static encode(message: MsgLoadMail): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgLoadMail;
		}

	}
}
