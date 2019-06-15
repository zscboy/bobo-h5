export namespace proto {
	export namespace pokerface {
		enum SRFlags {
			SRNone = 0,
			SRUserReplyOnly = 1,
			SRRichi = 2,
			SRFlyRichi = 4,
		}

		enum RoomState {
			SRoomIdle = 0,
			SRoomWaiting = 1,
			SRoomPlaying = 2,
			SRoomDeleted = 3,
		}

		enum PlayerState {
			PSNone = 0,
			PSReady = 1,
			PSOffline = 2,
			PSPlaying = 3,
		}

		enum DisbandState {
			Waiting = 1,
			Done = 2,
			DoneWithOtherReject = 3,
			DoneWithRoomServerNotResponse = 4,
			DoneWithWaitReplyTimeout = 5,
			ErrorDuplicateAcquire = 6,
			ErrorNeedOwnerWhenGameNotStart = 7,
			ErrorWatcherNotDisband = 8,
		}

		enum TipCode {
			TCNone = 0,
			TCWaitOpponentsAction = 1,
			TCDonateFailedNoEnoughDiamond = 2,
		}

		enum RoomDeleteReason {
			IdleTimeout = 1,
			DisbandByOwnerFromRMS = 2,
			DisbandByApplication = 3,
			DisbandBySystem = 4,
			DisbandMaxHand = 5,
			DisbandInLoseProtected = 6,
		}

		enum KickoutResult {
			KickoutResult_Success = 1,
			KickoutResult_FailedGameHasStartted = 2,
			KickoutResult_FailedNeedOwner = 3,
			KickoutResult_FailedPlayerNotExist = 4,
		}

		enum EnterRoomStatus {
			Success = 0,
			RoomNotExist = 1,
			RoomIsFulled = 2,
			RoomPlaying = 3,
			InAnotherRoom = 4,
			MonkeyRoomUserIDNotMatch = 5,
			MonkeyRoomUserLoginSeqNotMatch = 6,
			AppModuleNeedUpgrade = 7,
			InRoomBlackList = 8,
			TakeoffDiamondFailedNotEnough = 9,
			TakeoffDiamondFailedIO = 10,
			ParseTokenError = 11,
			RoomInApplicateDisband = 12,
			NotClubMember = 13,
		}

		enum CardID {
			R2H = 0,
			R2D = 1,
			R2C = 2,
			R2S = 3,
			R3H = 4,
			R3D = 5,
			R3C = 6,
			R3S = 7,
			R4H = 8,
			R4D = 9,
			R4C = 10,
			R4S = 11,
			R5H = 12,
			R5D = 13,
			R5C = 14,
			R5S = 15,
			R6H = 16,
			R6D = 17,
			R6C = 18,
			R6S = 19,
			R7H = 20,
			R7D = 21,
			R7C = 22,
			R7S = 23,
			R8H = 24,
			R8D = 25,
			R8C = 26,
			R8S = 27,
			R9H = 28,
			R9D = 29,
			R9C = 30,
			R9S = 31,
			R10H = 32,
			R10D = 33,
			R10C = 34,
			R10S = 35,
			JH = 36,
			JD = 37,
			JC = 38,
			JS = 39,
			QH = 40,
			QD = 41,
			QC = 42,
			QS = 43,
			KH = 44,
			KD = 45,
			KC = 46,
			KS = 47,
			AH = 48,
			AD = 49,
			AC = 50,
			AS = 51,
			JOB = 52,
			JOR = 53,
			CARDMAX = 54,
		}

		enum MessageCode {
			OPInvalid = 0,
			OPAction = 1,
			OPActionResultNotify = 2,
			OPActionAllowed = 3,
			OPReActionAllowed = 5,
			OPDeal = 6,
			OPHandOver = 7,
			OPRestore = 8,
			OPPlayerLeaveRoom = 9,
			OPPlayerEnterRoom = 10,
			OPDisbandRequest = 11,
			OPDisbandNotify = 12,
			OPDisbandAnswer = 13,
			OPPlayerReady = 14,
			OPRoomDeleted = 15,
			OPRoomUpdate = 16,
			OPRoomShowTips = 17,
			OPGameOver = 18,
			OPKickout = 19,
			OPDonate = 20,
			OPUpdateLocation = 21,
			OP2Lobby = 22,
			OPUpdatePropCfg = 23,
			OPPing = 100,
			OPPong = 101,
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
			constructor(properties?: pokerface.IMsgReplayPlayerInfo);
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
			constructor(properties?: pokerface.IMsgReplayPlayerScoreSummary);
			public static encode(message: MsgReplayPlayerScoreSummary): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgReplayPlayerScoreSummary;
		}

		interface IMsgReplayRecordSummary {
			recordUUID: string;
			playerScores?: pokerface.IMsgReplayPlayerScoreSummary[];
			endTime: number;
			shareAbleID?: string;
			startTime?: number;
		}

		class MsgReplayRecordSummary implements IMsgReplayRecordSummary {
			public recordUUID: string;
			public playerScores: pokerface.IMsgReplayPlayerScoreSummary[];
			public endTime: number;
			public shareAbleID: string;
			public startTime: number;
			constructor(properties?: pokerface.IMsgReplayRecordSummary);
			public static encode(message: MsgReplayRecordSummary): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgReplayRecordSummary;
		}

		interface IMsgReplayRoom {
			recordRoomType: number;
			startTime: number;
			endTime: number;
			roomNumber: string;
			players?: pokerface.IMsgReplayPlayerInfo[];
			records?: pokerface.IMsgReplayRecordSummary[];
			ownerUserID?: string;
		}

		class MsgReplayRoom implements IMsgReplayRoom {
			public recordRoomType: number;
			public startTime: number;
			public endTime: number;
			public roomNumber: string;
			public players: pokerface.IMsgReplayPlayerInfo[];
			public records: pokerface.IMsgReplayRecordSummary[];
			public ownerUserID: string;
			constructor(properties?: pokerface.IMsgReplayRoom);
			public static encode(message: MsgReplayRoom): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgReplayRoom;
		}

		interface ISRMsgPlayerInfo {
			userID: string;
			chairID: number;
			nick?: string;
			gender?: number;
			headIconURI?: string;
			avatarID?: number;
		}

		class SRMsgPlayerInfo implements ISRMsgPlayerInfo {
			public userID: string;
			public chairID: number;
			public nick: string;
			public gender: number;
			public headIconURI: string;
			public avatarID: number;
			constructor(properties?: pokerface.ISRMsgPlayerInfo);
			public static encode(message: SRMsgPlayerInfo): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): SRMsgPlayerInfo;
		}

		interface ISRDealDetail {
			chairID: number;
			cardsHand?: number[];
			cardsFlower?: number[];
		}

		class SRDealDetail implements ISRDealDetail {
			public chairID: number;
			public cardsHand: number[];
			public cardsFlower: number[];
			constructor(properties?: pokerface.ISRDealDetail);
			public static encode(message: SRDealDetail): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): SRDealDetail;
		}

		interface ISRAction {
			action: number;
			chairID: number;
			qaIndex: number;
			cards?: number[];
			flags: number;
			cardHandType?: number;
			allowActions?: number;
		}

		class SRAction implements ISRAction {
			public action: number;
			public chairID: number;
			public qaIndex: number;
			public cards: number[];
			public flags: number;
			public cardHandType: number;
			public allowActions: number;
			constructor(properties?: pokerface.ISRAction);
			public static encode(message: SRAction): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): SRAction;
		}

		interface ISRMsgHandRecorderExtra {
			markup?: number;
			ownerUserID?: string;
		}

		class SRMsgHandRecorderExtra implements ISRMsgHandRecorderExtra {
			public markup: number;
			public ownerUserID: string;
			constructor(properties?: pokerface.ISRMsgHandRecorderExtra);
			public static encode(message: SRMsgHandRecorderExtra): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): SRMsgHandRecorderExtra;
		}

		interface ISRMsgHandRecorder {
			bankerChairID: number;
			windFlowerID: number;
			players?: pokerface.ISRMsgPlayerInfo[];
			isHandOver: boolean;
			deals?: pokerface.ISRDealDetail[];
			actions?: pokerface.ISRAction[];
			handScore?: ByteBuffer;
			roomConfigID?: string;
			startTime?: number;
			endTime?: number;
			handNum?: number;
			isContinuousBanker?: boolean;
			roomNumber?: string;
			roomType?: number;
			extra?: pokerface.ISRMsgHandRecorderExtra;
		}

		class SRMsgHandRecorder implements ISRMsgHandRecorder {
			public bankerChairID: number;
			public windFlowerID: number;
			public players: pokerface.ISRMsgPlayerInfo[];
			public isHandOver: boolean;
			public deals: pokerface.ISRDealDetail[];
			public actions: pokerface.ISRAction[];
			public handScore: ByteBuffer;
			public roomConfigID: string;
			public startTime: number;
			public endTime: number;
			public handNum: number;
			public isContinuousBanker: boolean;
			public roomNumber: string;
			public roomType: number;
			public extra: pokerface.ISRMsgHandRecorderExtra;
			constructor(properties?: pokerface.ISRMsgHandRecorder);
			public static encode(message: SRMsgHandRecorder): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): SRMsgHandRecorder;
		}

		interface IMsgPlayerInfo {
			userID: string;
			chairID: number;
			state: number;
			name?: string;
			nick?: string;
			gender?: number;
			headIconURI?: string;
			ip?: string;
			location?: string;
			dfHands?: number;
			diamond?: number;
			charm?: number;
			avatarID?: number;
			clubIDs?: string[];
			dan?: number;
			isLooker?: boolean;
		}

		class MsgPlayerInfo implements IMsgPlayerInfo {
			public userID: string;
			public chairID: number;
			public state: number;
			public name: string;
			public nick: string;
			public gender: number;
			public headIconURI: string;
			public ip: string;
			public location: string;
			public dfHands: number;
			public diamond: number;
			public charm: number;
			public avatarID: number;
			public clubIDs: string[];
			public dan: number;
			public isLooker: boolean;
			constructor(properties?: pokerface.IMsgPlayerInfo);
			public static encode(message: MsgPlayerInfo): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgPlayerInfo;
		}

		interface IPlayerHandScoreRecord {
			userID: string;
			winType: number;
			score: number;
		}

		class PlayerHandScoreRecord implements IPlayerHandScoreRecord {
			public userID: string;
			public winType: number;
			public score: number;
			constructor(properties?: pokerface.IPlayerHandScoreRecord);
			public static encode(message: PlayerHandScoreRecord): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): PlayerHandScoreRecord;
		}

		interface IMsgRoomHandScoreRecord {
			endType: number;
			handIndex: number;
			playerRecords?: pokerface.IPlayerHandScoreRecord[];
		}

		class MsgRoomHandScoreRecord implements IMsgRoomHandScoreRecord {
			public endType: number;
			public handIndex: number;
			public playerRecords: pokerface.IPlayerHandScoreRecord[];
			constructor(properties?: pokerface.IMsgRoomHandScoreRecord);
			public static encode(message: MsgRoomHandScoreRecord): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgRoomHandScoreRecord;
		}

		interface IMsgRoomInfo {
			state: number;
			players?: pokerface.IMsgPlayerInfo[];
			ownerID?: string;
			roomNumber?: string;
			handStartted?: number;
			scoreRecords?: pokerface.IMsgRoomHandScoreRecord[];
			handFinished?: number;
		}

		class MsgRoomInfo implements IMsgRoomInfo {
			public state: number;
			public players: pokerface.IMsgPlayerInfo[];
			public ownerID: string;
			public roomNumber: string;
			public handStartted: number;
			public scoreRecords: pokerface.IMsgRoomHandScoreRecord[];
			public handFinished: number;
			constructor(properties?: pokerface.IMsgRoomInfo);
			public static encode(message: MsgRoomInfo): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgRoomInfo;
		}

		interface IRoomScoreRecords {
			scoreRecords?: pokerface.IMsgRoomHandScoreRecord[];
		}

		class RoomScoreRecords implements IRoomScoreRecords {
			public scoreRecords: pokerface.IMsgRoomHandScoreRecord[];
			constructor(properties?: pokerface.IRoomScoreRecords);
			public static encode(message: RoomScoreRecords): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): RoomScoreRecords;
		}

		interface IMsgDisbandAnswer {
			agree: boolean;
		}

		class MsgDisbandAnswer implements IMsgDisbandAnswer {
			public agree: boolean;
			constructor(properties?: pokerface.IMsgDisbandAnswer);
			public static encode(message: MsgDisbandAnswer): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgDisbandAnswer;
		}

		interface IMsgDisbandNotify {
			disbandState: number;
			applicant: number;
			waits?: number[];
			agrees?: number[];
			rejects?: number[];
			countdown?: number;
		}

		class MsgDisbandNotify implements IMsgDisbandNotify {
			public disbandState: number;
			public applicant: number;
			public waits: number[];
			public agrees: number[];
			public rejects: number[];
			public countdown: number;
			constructor(properties?: pokerface.IMsgDisbandNotify);
			public static encode(message: MsgDisbandNotify): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgDisbandNotify;
		}

		interface IMsgGameOverPlayerStat {
			chairID: number;
			score: number;
			winChuckCounter: number;
			winSelfDrawnCounter: number;
			chuckerCounter: number;
			robKongCounter?: number;
			kongerCounter?: number;
		}

		class MsgGameOverPlayerStat implements IMsgGameOverPlayerStat {
			public chairID: number;
			public score: number;
			public winChuckCounter: number;
			public winSelfDrawnCounter: number;
			public chuckerCounter: number;
			public robKongCounter: number;
			public kongerCounter: number;
			constructor(properties?: pokerface.IMsgGameOverPlayerStat);
			public static encode(message: MsgGameOverPlayerStat): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgGameOverPlayerStat;
		}

		interface IMsgGameOver {
			playerStats?: pokerface.IMsgGameOverPlayerStat[];
		}

		class MsgGameOver implements IMsgGameOver {
			public playerStats: pokerface.IMsgGameOverPlayerStat[];
			constructor(properties?: pokerface.IMsgGameOver);
			public static encode(message: MsgGameOver): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgGameOver;
		}

		interface IMsgRoomShowTips {
			tips?: string;
			tipCode: number;
		}

		class MsgRoomShowTips implements IMsgRoomShowTips {
			public tips: string;
			public tipCode: number;
			constructor(properties?: pokerface.IMsgRoomShowTips);
			public static encode(message: MsgRoomShowTips): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgRoomShowTips;
		}

		interface IMsgRoomDelete {
			reason: number;
		}

		class MsgRoomDelete implements IMsgRoomDelete {
			public reason: number;
			constructor(properties?: pokerface.IMsgRoomDelete);
			public static encode(message: MsgRoomDelete): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgRoomDelete;
		}

		interface IMsgKickout {
			victimUserID: string;
		}

		class MsgKickout implements IMsgKickout {
			public victimUserID: string;
			constructor(properties?: pokerface.IMsgKickout);
			public static encode(message: MsgKickout): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgKickout;
		}

		interface IMsgKickoutResult {
			result: number;
			victimUserID?: string;
			victimNick?: string;
			byWhoNick?: string;
			byWhoUserID?: string;
		}

		class MsgKickoutResult implements IMsgKickoutResult {
			public result: number;
			public victimUserID: string;
			public victimNick: string;
			public byWhoNick: string;
			public byWhoUserID: string;
			constructor(properties?: pokerface.IMsgKickoutResult);
			public static encode(message: MsgKickoutResult): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgKickoutResult;
		}

		interface IMsgEnterRoomResult {
			status: number;
		}

		class MsgEnterRoomResult implements IMsgEnterRoomResult {
			public status: number;
			constructor(properties?: pokerface.IMsgEnterRoomResult);
			public static encode(message: MsgEnterRoomResult): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgEnterRoomResult;
		}

		interface IMsgDonate {
			toChairID: number;
			itemID: number;
			fromChairID?: number;
		}

		class MsgDonate implements IMsgDonate {
			public toChairID: number;
			public itemID: number;
			public fromChairID: number;
			constructor(properties?: pokerface.IMsgDonate);
			public static encode(message: MsgDonate): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgDonate;
		}

		interface IGameMessage {
			Ops: number;
			Data?: ByteBuffer;
		}

		class GameMessage implements IGameMessage {
			public Ops: number;
			public Data: ByteBuffer;
			constructor(properties?: pokerface.IGameMessage);
			public static encode(message: GameMessage): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): GameMessage;
		}

		interface IMsgCardHand {
			cardHandType: number;
			cards?: number[];
		}

		class MsgCardHand implements IMsgCardHand {
			public cardHandType: number;
			public cards: number[];
			constructor(properties?: pokerface.IMsgCardHand);
			public static encode(message: MsgCardHand): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgCardHand;
		}

		interface IMsgPlayerCardList {
			chairID: number;
			cardCountOnHand: number;
			cardsOnHand?: number[];
			discardedHands?: pokerface.IMsgCardHand[];
			flowers?: number[];
		}

		class MsgPlayerCardList implements IMsgPlayerCardList {
			public chairID: number;
			public cardCountOnHand: number;
			public cardsOnHand: number[];
			public discardedHands: pokerface.IMsgCardHand[];
			public flowers: number[];
			constructor(properties?: pokerface.IMsgPlayerCardList);
			public static encode(message: MsgPlayerCardList): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgPlayerCardList;
		}

		interface IMsgDeal {
			bankerChairID: number;
			windFlowerID: number;
			playerCardLists?: pokerface.IMsgPlayerCardList[];
			cardsInWall: number;
			dice1?: number;
			dice2?: number;
			isContinuousBanker?: boolean;
			markup?: number;
		}

		class MsgDeal implements IMsgDeal {
			public bankerChairID: number;
			public windFlowerID: number;
			public playerCardLists: pokerface.IMsgPlayerCardList[];
			public cardsInWall: number;
			public dice1: number;
			public dice2: number;
			public isContinuousBanker: boolean;
			public markup: number;
			constructor(properties?: pokerface.IMsgDeal);
			public static encode(message: MsgDeal): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgDeal;
		}

		interface IMsgAllowPlayerAction {
			qaIndex: number;
			actionChairID: number;
			allowedActions: number;
			timeoutInSeconds?: number;
		}

		class MsgAllowPlayerAction implements IMsgAllowPlayerAction {
			public qaIndex: number;
			public actionChairID: number;
			public allowedActions: number;
			public timeoutInSeconds: number;
			constructor(properties?: pokerface.IMsgAllowPlayerAction);
			public static encode(message: MsgAllowPlayerAction): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgAllowPlayerAction;
		}

		interface IMsgAllowPlayerReAction {
			qaIndex: number;
			actionChairID: number;
			allowedActions: number;
			timeoutInSeconds?: number;
			prevActionChairID?: number;
			prevActionHand?: pokerface.IMsgCardHand;
		}

		class MsgAllowPlayerReAction implements IMsgAllowPlayerReAction {
			public qaIndex: number;
			public actionChairID: number;
			public allowedActions: number;
			public timeoutInSeconds: number;
			public prevActionChairID: number;
			public prevActionHand: pokerface.IMsgCardHand;
			constructor(properties?: pokerface.IMsgAllowPlayerReAction);
			public static encode(message: MsgAllowPlayerReAction): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgAllowPlayerReAction;
		}

		interface IMsgPlayerAction {
			qaIndex: number;
			action: number;
			flags?: number;
			cards?: number[];
		}

		class MsgPlayerAction implements IMsgPlayerAction {
			public qaIndex: number;
			public action: number;
			public flags: number;
			public cards: number[];
			constructor(properties?: pokerface.IMsgPlayerAction);
			public static encode(message: MsgPlayerAction): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgPlayerAction;
		}

		interface IMsgActionResultNotify {
			targetChairID: number;
			action: number;
			actionHand?: pokerface.IMsgCardHand;
			cardsInWall?: number;
		}

		class MsgActionResultNotify implements IMsgActionResultNotify {
			public targetChairID: number;
			public action: number;
			public actionHand: pokerface.IMsgCardHand;
			public cardsInWall: number;
			constructor(properties?: pokerface.IMsgActionResultNotify);
			public static encode(message: MsgActionResultNotify): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgActionResultNotify;
		}

		interface IMsgRestore {
			msgDeal: pokerface.IMsgDeal;
			prevActionChairID?: number;
			prevActionHand?: pokerface.IMsgCardHand;
			landlordChairID?: number;
			multiple?: number;
			lastAwardCards?: number[];
			playersListA?: number[];
		}

		class MsgRestore implements IMsgRestore {
			public msgDeal: pokerface.IMsgDeal;
			public prevActionChairID: number;
			public prevActionHand: pokerface.IMsgCardHand;
			public landlordChairID: number;
			public multiple: number;
			public lastAwardCards: number[];
			public playersListA: number[];
			constructor(properties?: pokerface.IMsgRestore);
			public static encode(message: MsgRestore): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgRestore;
		}

		interface IMsgPlayerScoreGreatWin {
			baseWinScore: number;
			greatWinType: number;
			greatWinPoints: number;
			trimGreatWinPoints: number;
			continuousBankerExtra?: number;
		}

		class MsgPlayerScoreGreatWin implements IMsgPlayerScoreGreatWin {
			public baseWinScore: number;
			public greatWinType: number;
			public greatWinPoints: number;
			public trimGreatWinPoints: number;
			public continuousBankerExtra: number;
			constructor(properties?: pokerface.IMsgPlayerScoreGreatWin);
			public static encode(message: MsgPlayerScoreGreatWin): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgPlayerScoreGreatWin;
		}

		interface IMsgPlayerScoreMiniWin {
			miniWinType: number;
			miniWinBasicScore: number;
			miniWinFlowerScore: number;
			miniMultiple: number;
			miniWinTrimScore: number;
			continuousBankerExtra?: number;
		}

		class MsgPlayerScoreMiniWin implements IMsgPlayerScoreMiniWin {
			public miniWinType: number;
			public miniWinBasicScore: number;
			public miniWinFlowerScore: number;
			public miniMultiple: number;
			public miniWinTrimScore: number;
			public continuousBankerExtra: number;
			constructor(properties?: pokerface.IMsgPlayerScoreMiniWin);
			public static encode(message: MsgPlayerScoreMiniWin): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgPlayerScoreMiniWin;
		}

		interface IMsgPlayerScore {
			targetChairID: number;
			winType: number;
			score: number;
			specialScore: number;
			greatWin?: pokerface.IMsgPlayerScoreGreatWin;
			miniWin?: pokerface.IMsgPlayerScoreMiniWin;
			fakeWinScore?: number;
			fakeList?: number[];
			isContinuousBanker?: boolean;
			continuousBankerMultiple?: number;
		}

		class MsgPlayerScore implements IMsgPlayerScore {
			public targetChairID: number;
			public winType: number;
			public score: number;
			public specialScore: number;
			public greatWin: pokerface.IMsgPlayerScoreGreatWin;
			public miniWin: pokerface.IMsgPlayerScoreMiniWin;
			public fakeWinScore: number;
			public fakeList: number[];
			public isContinuousBanker: boolean;
			public continuousBankerMultiple: number;
			constructor(properties?: pokerface.IMsgPlayerScore);
			public static encode(message: MsgPlayerScore): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgPlayerScore;
		}

		interface IMsgHandScore {
			playerScores?: pokerface.IMsgPlayerScore[];
		}

		class MsgHandScore implements IMsgHandScore {
			public playerScores: pokerface.IMsgPlayerScore[];
			constructor(properties?: pokerface.IMsgHandScore);
			public static encode(message: MsgHandScore): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgHandScore;
		}

		interface IMsgHandOver {
			endType: number;
			playerCardLists?: pokerface.IMsgPlayerCardList[];
			scores?: pokerface.IMsgHandScore;
			continueAble?: boolean;
		}

		class MsgHandOver implements IMsgHandOver {
			public endType: number;
			public playerCardLists: pokerface.IMsgPlayerCardList[];
			public scores: pokerface.IMsgHandScore;
			public continueAble: boolean;
			constructor(properties?: pokerface.IMsgHandOver);
			public static encode(message: MsgHandOver): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgHandOver;
		}

		interface IMsgUpdateLocation {
			userID: string;
			location: string;
		}

		class MsgUpdateLocation implements IMsgUpdateLocation {
			public userID: string;
			public location: string;
			constructor(properties?: pokerface.IMsgUpdateLocation);
			public static encode(message: MsgUpdateLocation): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgUpdateLocation;
		}

		interface IMsgUpdatePropCfg {
			propCfg: string;
		}

		class MsgUpdatePropCfg implements IMsgUpdatePropCfg {
			public propCfg: string;
			constructor(properties?: pokerface.IMsgUpdatePropCfg);
			public static encode(message: MsgUpdatePropCfg): ByteBuffer;
			public static decode(reader: Uint8Array|ByteBuffer): MsgUpdatePropCfg;
		}

	}
	export namespace prunfast {
		enum CardHandType {
			None = 0,
			Flush = 1,
			Bomb = 2,
			Single = 3,
			Pair = 4,
			Pair2X = 5,
			Triplet = 6,
			TripletPair = 7,
			Triplet2X = 8,
			Triplet2X2Pair = 9,
		}

		enum HandOverType {
			enumHandOverType_None = 0,
			enumHandOverType_Win_SelfDrawn = 1,
			enumHandOverType_Win_Chuck = 2,
			enumHandOverType_Chucker = 3,
			enumHandOverType_Konger = 4,
			enumHandOverType_Win_RobKong = 5,
		}

		enum ActionType {
			enumActionType_None = 0,
			enumActionType_SKIP = 1,
			enumActionType_DISCARD = 2,
			enumActionType_DRAW = 4,
			enumActionType_Win_SelfDrawn = 8,
		}

	}
}
