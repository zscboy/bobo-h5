exports.proto = require("protobuf").newBuilder({})['import']({
    "package": null,
    "syntax": "proto2",
    "messages": [
        {
            "name": "pokerface",
            "fields": [],
            "syntax": "proto2",
            "messages": [
                {
                    "name": "MsgReplayPlayerInfo",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "userID",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "nick",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "chairID",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "totalScore",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "gender",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "headIconURI",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "avatarID",
                            "id": 7
                        }
                    ]
                },
                {
                    "name": "MsgReplayPlayerScoreSummary",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "chairID",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "score",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "winType",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "MsgReplayRecordSummary",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "recordUUID",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "MsgReplayPlayerScoreSummary",
                            "name": "playerScores",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "endTime",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "shareAbleID",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "startTime",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "MsgReplayRoom",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "recordRoomType",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "startTime",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "endTime",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "roomNumber",
                            "id": 4
                        },
                        {
                            "rule": "repeated",
                            "type": "MsgReplayPlayerInfo",
                            "name": "players",
                            "id": 5
                        },
                        {
                            "rule": "repeated",
                            "type": "MsgReplayRecordSummary",
                            "name": "records",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "ownerUserID",
                            "id": 7
                        }
                    ]
                },
                {
                    "name": "SRMsgPlayerInfo",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "userID",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "chairID",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "nick",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "gender",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "headIconURI",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "avatarID",
                            "id": 6
                        }
                    ]
                },
                {
                    "name": "SRDealDetail",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "chairID",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "cardsHand",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "cardsFlower",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "SRAction",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "action",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "chairID",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "qaIndex",
                            "id": 3
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "cards",
                            "id": 4
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "flags",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "cardHandType",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "allowActions",
                            "id": 7
                        }
                    ]
                },
                {
                    "name": "SRMsgHandRecorderExtra",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "markup",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "ownerUserID",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "SRMsgHandRecorder",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "bankerChairID",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "windFlowerID",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "SRMsgPlayerInfo",
                            "name": "players",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "bool",
                            "name": "isHandOver",
                            "id": 4
                        },
                        {
                            "rule": "repeated",
                            "type": "SRDealDetail",
                            "name": "deals",
                            "id": 5
                        },
                        {
                            "rule": "repeated",
                            "type": "SRAction",
                            "name": "actions",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "handScore",
                            "id": 7
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "roomConfigID",
                            "id": 8
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "startTime",
                            "id": 9
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "endTime",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "handNum",
                            "id": 11
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "isContinuousBanker",
                            "id": 12
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "roomNumber",
                            "id": 13
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "roomType",
                            "id": 14
                        },
                        {
                            "rule": "optional",
                            "type": "SRMsgHandRecorderExtra",
                            "name": "extra",
                            "id": 15
                        }
                    ]
                },
                {
                    "name": "MsgPlayerInfo",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "userID",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "chairID",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "state",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "name",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "nick",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "gender",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "headIconURI",
                            "id": 7
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "ip",
                            "id": 8
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "location",
                            "id": 9
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "dfHands",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "diamond",
                            "id": 11
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "charm",
                            "id": 12
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "avatarID",
                            "id": 13
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "clubIDs",
                            "id": 14
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "dan",
                            "id": 15
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "isLooker",
                            "id": 16
                        }
                    ]
                },
                {
                    "name": "PlayerHandScoreRecord",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "userID",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "winType",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "score",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "MsgRoomHandScoreRecord",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "endType",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "handIndex",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "PlayerHandScoreRecord",
                            "name": "playerRecords",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "MsgRoomInfo",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "state",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "MsgPlayerInfo",
                            "name": "players",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "ownerID",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "roomNumber",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "handStartted",
                            "id": 5
                        },
                        {
                            "rule": "repeated",
                            "type": "MsgRoomHandScoreRecord",
                            "name": "scoreRecords",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "handFinished",
                            "id": 7
                        }
                    ]
                },
                {
                    "name": "RoomScoreRecords",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "MsgRoomHandScoreRecord",
                            "name": "scoreRecords",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "MsgDisbandAnswer",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "bool",
                            "name": "agree",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "MsgDisbandNotify",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "disbandState",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "applicant",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "waits",
                            "id": 3
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "agrees",
                            "id": 4
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "rejects",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "countdown",
                            "id": 6
                        }
                    ]
                },
                {
                    "name": "MsgGameOverPlayerStat",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "chairID",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "score",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "winChuckCounter",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "winSelfDrawnCounter",
                            "id": 4
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "chuckerCounter",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "robKongCounter",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "kongerCounter",
                            "id": 7
                        }
                    ]
                },
                {
                    "name": "MsgGameOver",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "MsgGameOverPlayerStat",
                            "name": "playerStats",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "MsgRoomShowTips",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "tips",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "tipCode",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "MsgRoomDelete",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "reason",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "MsgKickout",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "victimUserID",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "MsgKickoutResult",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "result",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "victimUserID",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "victimNick",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "byWhoNick",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "byWhoUserID",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "MsgEnterRoomResult",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "status",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "MsgDonate",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "toChairID",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "itemID",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "fromChairID",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "GameMessage",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "Ops",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "Data",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "MsgCardHand",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "cardHandType",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "cards",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "MsgPlayerCardList",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "chairID",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "cardCountOnHand",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "cardsOnHand",
                            "id": 3
                        },
                        {
                            "rule": "repeated",
                            "type": "MsgCardHand",
                            "name": "discardedHands",
                            "id": 4
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "flowers",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "MsgDeal",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "bankerChairID",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "windFlowerID",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "MsgPlayerCardList",
                            "name": "playerCardLists",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "cardsInWall",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "dice1",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "dice2",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "isContinuousBanker",
                            "id": 7
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "markup",
                            "id": 8
                        }
                    ]
                },
                {
                    "name": "MsgAllowPlayerAction",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "qaIndex",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "actionChairID",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "allowedActions",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "timeoutInSeconds",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "MsgAllowPlayerReAction",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "qaIndex",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "actionChairID",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "allowedActions",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "timeoutInSeconds",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "prevActionChairID",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "MsgCardHand",
                            "name": "prevActionHand",
                            "id": 6
                        }
                    ]
                },
                {
                    "name": "MsgPlayerAction",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "qaIndex",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "action",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "flags",
                            "id": 3
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "cards",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "MsgActionResultNotify",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "targetChairID",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "action",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "MsgCardHand",
                            "name": "actionHand",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "cardsInWall",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "MsgRestore",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "MsgDeal",
                            "name": "msgDeal",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "prevActionChairID",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "MsgCardHand",
                            "name": "prevActionHand",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "landlordChairID",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "multiple",
                            "id": 5
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "lastAwardCards",
                            "id": 6
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "playersListA",
                            "id": 7
                        }
                    ]
                },
                {
                    "name": "MsgPlayerScoreGreatWin",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "baseWinScore",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "greatWinType",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "greatWinPoints",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "trimGreatWinPoints",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "continuousBankerExtra",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "MsgPlayerScoreMiniWin",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "miniWinType",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "miniWinBasicScore",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "miniWinFlowerScore",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "miniMultiple",
                            "id": 4
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "miniWinTrimScore",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "continuousBankerExtra",
                            "id": 6
                        }
                    ]
                },
                {
                    "name": "MsgPlayerScore",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "targetChairID",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "winType",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "score",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "specialScore",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "MsgPlayerScoreGreatWin",
                            "name": "greatWin",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "MsgPlayerScoreMiniWin",
                            "name": "miniWin",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "fakeWinScore",
                            "id": 7
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "fakeList",
                            "id": 8
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "isContinuousBanker",
                            "id": 9
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "continuousBankerMultiple",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "MsgHandScore",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "MsgPlayerScore",
                            "name": "playerScores",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "MsgHandOver",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "endType",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "MsgPlayerCardList",
                            "name": "playerCardLists",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "MsgHandScore",
                            "name": "scores",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "continueAble",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "MsgUpdateLocation",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "userID",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "location",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "MsgUpdatePropCfg",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "propCfg",
                            "id": 1
                        }
                    ]
                }
            ],
            "enums": [
                {
                    "name": "SRFlags",
                    "syntax": "proto2",
                    "values": [
                        {
                            "name": "SRNone",
                            "id": 0
                        },
                        {
                            "name": "SRUserReplyOnly",
                            "id": 1
                        },
                        {
                            "name": "SRRichi",
                            "id": 2
                        },
                        {
                            "name": "SRFlyRichi",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "RoomState",
                    "syntax": "proto2",
                    "values": [
                        {
                            "name": "SRoomIdle",
                            "id": 0
                        },
                        {
                            "name": "SRoomWaiting",
                            "id": 1
                        },
                        {
                            "name": "SRoomPlaying",
                            "id": 2
                        },
                        {
                            "name": "SRoomDeleted",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "PlayerState",
                    "syntax": "proto2",
                    "values": [
                        {
                            "name": "PSNone",
                            "id": 0
                        },
                        {
                            "name": "PSReady",
                            "id": 1
                        },
                        {
                            "name": "PSOffline",
                            "id": 2
                        },
                        {
                            "name": "PSPlaying",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "DisbandState",
                    "syntax": "proto2",
                    "values": [
                        {
                            "name": "Waiting",
                            "id": 1
                        },
                        {
                            "name": "Done",
                            "id": 2
                        },
                        {
                            "name": "DoneWithOtherReject",
                            "id": 3
                        },
                        {
                            "name": "DoneWithRoomServerNotResponse",
                            "id": 4
                        },
                        {
                            "name": "DoneWithWaitReplyTimeout",
                            "id": 5
                        },
                        {
                            "name": "ErrorDuplicateAcquire",
                            "id": 6
                        },
                        {
                            "name": "ErrorNeedOwnerWhenGameNotStart",
                            "id": 7
                        },
                        {
                            "name": "ErrorWatcherNotDisband",
                            "id": 8
                        }
                    ]
                },
                {
                    "name": "TipCode",
                    "syntax": "proto2",
                    "values": [
                        {
                            "name": "TCNone",
                            "id": 0
                        },
                        {
                            "name": "TCWaitOpponentsAction",
                            "id": 1
                        },
                        {
                            "name": "TCDonateFailedNoEnoughDiamond",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "RoomDeleteReason",
                    "syntax": "proto2",
                    "values": [
                        {
                            "name": "IdleTimeout",
                            "id": 1
                        },
                        {
                            "name": "DisbandByOwnerFromRMS",
                            "id": 2
                        },
                        {
                            "name": "DisbandByApplication",
                            "id": 3
                        },
                        {
                            "name": "DisbandBySystem",
                            "id": 4
                        },
                        {
                            "name": "DisbandMaxHand",
                            "id": 5
                        },
                        {
                            "name": "DisbandInLoseProtected",
                            "id": 6
                        }
                    ]
                },
                {
                    "name": "KickoutResult",
                    "syntax": "proto2",
                    "values": [
                        {
                            "name": "KickoutResult_Success",
                            "id": 1
                        },
                        {
                            "name": "KickoutResult_FailedGameHasStartted",
                            "id": 2
                        },
                        {
                            "name": "KickoutResult_FailedNeedOwner",
                            "id": 3
                        },
                        {
                            "name": "KickoutResult_FailedPlayerNotExist",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "EnterRoomStatus",
                    "syntax": "proto2",
                    "values": [
                        {
                            "name": "Success",
                            "id": 0
                        },
                        {
                            "name": "RoomNotExist",
                            "id": 1
                        },
                        {
                            "name": "RoomIsFulled",
                            "id": 2
                        },
                        {
                            "name": "RoomPlaying",
                            "id": 3
                        },
                        {
                            "name": "InAnotherRoom",
                            "id": 4
                        },
                        {
                            "name": "MonkeyRoomUserIDNotMatch",
                            "id": 5
                        },
                        {
                            "name": "MonkeyRoomUserLoginSeqNotMatch",
                            "id": 6
                        },
                        {
                            "name": "AppModuleNeedUpgrade",
                            "id": 7
                        },
                        {
                            "name": "InRoomBlackList",
                            "id": 8
                        },
                        {
                            "name": "TakeoffDiamondFailedNotEnough",
                            "id": 9
                        },
                        {
                            "name": "TakeoffDiamondFailedIO",
                            "id": 10
                        },
                        {
                            "name": "ParseTokenError",
                            "id": 11
                        },
                        {
                            "name": "RoomInApplicateDisband",
                            "id": 12
                        },
                        {
                            "name": "NotClubMember",
                            "id": 13
                        }
                    ]
                },
                {
                    "name": "CardID",
                    "syntax": "proto2",
                    "values": [
                        {
                            "name": "R2H",
                            "id": 0
                        },
                        {
                            "name": "R2D",
                            "id": 1
                        },
                        {
                            "name": "R2C",
                            "id": 2
                        },
                        {
                            "name": "R2S",
                            "id": 3
                        },
                        {
                            "name": "R3H",
                            "id": 4
                        },
                        {
                            "name": "R3D",
                            "id": 5
                        },
                        {
                            "name": "R3C",
                            "id": 6
                        },
                        {
                            "name": "R3S",
                            "id": 7
                        },
                        {
                            "name": "R4H",
                            "id": 8
                        },
                        {
                            "name": "R4D",
                            "id": 9
                        },
                        {
                            "name": "R4C",
                            "id": 10
                        },
                        {
                            "name": "R4S",
                            "id": 11
                        },
                        {
                            "name": "R5H",
                            "id": 12
                        },
                        {
                            "name": "R5D",
                            "id": 13
                        },
                        {
                            "name": "R5C",
                            "id": 14
                        },
                        {
                            "name": "R5S",
                            "id": 15
                        },
                        {
                            "name": "R6H",
                            "id": 16
                        },
                        {
                            "name": "R6D",
                            "id": 17
                        },
                        {
                            "name": "R6C",
                            "id": 18
                        },
                        {
                            "name": "R6S",
                            "id": 19
                        },
                        {
                            "name": "R7H",
                            "id": 20
                        },
                        {
                            "name": "R7D",
                            "id": 21
                        },
                        {
                            "name": "R7C",
                            "id": 22
                        },
                        {
                            "name": "R7S",
                            "id": 23
                        },
                        {
                            "name": "R8H",
                            "id": 24
                        },
                        {
                            "name": "R8D",
                            "id": 25
                        },
                        {
                            "name": "R8C",
                            "id": 26
                        },
                        {
                            "name": "R8S",
                            "id": 27
                        },
                        {
                            "name": "R9H",
                            "id": 28
                        },
                        {
                            "name": "R9D",
                            "id": 29
                        },
                        {
                            "name": "R9C",
                            "id": 30
                        },
                        {
                            "name": "R9S",
                            "id": 31
                        },
                        {
                            "name": "R10H",
                            "id": 32
                        },
                        {
                            "name": "R10D",
                            "id": 33
                        },
                        {
                            "name": "R10C",
                            "id": 34
                        },
                        {
                            "name": "R10S",
                            "id": 35
                        },
                        {
                            "name": "JH",
                            "id": 36
                        },
                        {
                            "name": "JD",
                            "id": 37
                        },
                        {
                            "name": "JC",
                            "id": 38
                        },
                        {
                            "name": "JS",
                            "id": 39
                        },
                        {
                            "name": "QH",
                            "id": 40
                        },
                        {
                            "name": "QD",
                            "id": 41
                        },
                        {
                            "name": "QC",
                            "id": 42
                        },
                        {
                            "name": "QS",
                            "id": 43
                        },
                        {
                            "name": "KH",
                            "id": 44
                        },
                        {
                            "name": "KD",
                            "id": 45
                        },
                        {
                            "name": "KC",
                            "id": 46
                        },
                        {
                            "name": "KS",
                            "id": 47
                        },
                        {
                            "name": "AH",
                            "id": 48
                        },
                        {
                            "name": "AD",
                            "id": 49
                        },
                        {
                            "name": "AC",
                            "id": 50
                        },
                        {
                            "name": "AS",
                            "id": 51
                        },
                        {
                            "name": "JOB",
                            "id": 52
                        },
                        {
                            "name": "JOR",
                            "id": 53
                        },
                        {
                            "name": "CARDMAX",
                            "id": 54
                        }
                    ]
                },
                {
                    "name": "MessageCode",
                    "syntax": "proto2",
                    "values": [
                        {
                            "name": "OPInvalid",
                            "id": 0
                        },
                        {
                            "name": "OPAction",
                            "id": 1
                        },
                        {
                            "name": "OPActionResultNotify",
                            "id": 2
                        },
                        {
                            "name": "OPActionAllowed",
                            "id": 3
                        },
                        {
                            "name": "OPReActionAllowed",
                            "id": 5
                        },
                        {
                            "name": "OPDeal",
                            "id": 6
                        },
                        {
                            "name": "OPHandOver",
                            "id": 7
                        },
                        {
                            "name": "OPRestore",
                            "id": 8
                        },
                        {
                            "name": "OPPlayerLeaveRoom",
                            "id": 9
                        },
                        {
                            "name": "OPPlayerEnterRoom",
                            "id": 10
                        },
                        {
                            "name": "OPDisbandRequest",
                            "id": 11
                        },
                        {
                            "name": "OPDisbandNotify",
                            "id": 12
                        },
                        {
                            "name": "OPDisbandAnswer",
                            "id": 13
                        },
                        {
                            "name": "OPPlayerReady",
                            "id": 14
                        },
                        {
                            "name": "OPRoomDeleted",
                            "id": 15
                        },
                        {
                            "name": "OPRoomUpdate",
                            "id": 16
                        },
                        {
                            "name": "OPRoomShowTips",
                            "id": 17
                        },
                        {
                            "name": "OPGameOver",
                            "id": 18
                        },
                        {
                            "name": "OPKickout",
                            "id": 19
                        },
                        {
                            "name": "OPDonate",
                            "id": 20
                        },
                        {
                            "name": "OPUpdateLocation",
                            "id": 21
                        },
                        {
                            "name": "OP2Lobby",
                            "id": 22
                        },
                        {
                            "name": "OPUpdatePropCfg",
                            "id": 23
                        },
                        {
                            "name": "OPPing",
                            "id": 100
                        },
                        {
                            "name": "OPPong",
                            "id": 101
                        }
                    ]
                }
            ],
            "isNamespace": true
        },
        {
            "name": "prunfast",
            "fields": [],
            "syntax": "proto2",
            "enums": [
                {
                    "name": "CardHandType",
                    "syntax": "proto2",
                    "values": [
                        {
                            "name": "None",
                            "id": 0
                        },
                        {
                            "name": "Flush",
                            "id": 1
                        },
                        {
                            "name": "Bomb",
                            "id": 2
                        },
                        {
                            "name": "Single",
                            "id": 3
                        },
                        {
                            "name": "Pair",
                            "id": 4
                        },
                        {
                            "name": "Pair2X",
                            "id": 5
                        },
                        {
                            "name": "Triplet",
                            "id": 6
                        },
                        {
                            "name": "TripletPair",
                            "id": 7
                        },
                        {
                            "name": "Triplet2X",
                            "id": 8
                        },
                        {
                            "name": "Triplet2X2Pair",
                            "id": 9
                        }
                    ]
                },
                {
                    "name": "HandOverType",
                    "syntax": "proto2",
                    "values": [
                        {
                            "name": "enumHandOverType_None",
                            "id": 0
                        },
                        {
                            "name": "enumHandOverType_Win_SelfDrawn",
                            "id": 1
                        },
                        {
                            "name": "enumHandOverType_Win_Chuck",
                            "id": 2
                        },
                        {
                            "name": "enumHandOverType_Chucker",
                            "id": 3
                        },
                        {
                            "name": "enumHandOverType_Konger",
                            "id": 4
                        },
                        {
                            "name": "enumHandOverType_Win_RobKong",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "ActionType",
                    "syntax": "proto2",
                    "values": [
                        {
                            "name": "enumActionType_None",
                            "id": 0
                        },
                        {
                            "name": "enumActionType_SKIP",
                            "id": 1
                        },
                        {
                            "name": "enumActionType_DISCARD",
                            "id": 2
                        },
                        {
                            "name": "enumActionType_DRAW",
                            "id": 4
                        },
                        {
                            "name": "enumActionType_Win_SelfDrawn",
                            "id": 8
                        }
                    ]
                }
            ],
            "isNamespace": true
        }
    ],
    "isNamespace": true
}).build();