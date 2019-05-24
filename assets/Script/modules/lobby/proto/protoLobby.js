exports.proto = require("../protobufjs/protobuf").newBuilder({})['import']({
    "package": "lobby",
    "syntax": "proto2",
    "messages": [{
            "name": "LobbyMessage",
            "syntax": "proto2",
            "fields": [{
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
            "name": "MsgCreateRoomReq",
            "syntax": "proto2",
            "fields": [{
                "rule": "required",
                "type": "string",
                "name": "config",
                "id": 1
            }]
        },
        {
            "name": "UserProfile",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "string",
                    "name": "userID",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "userName",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "nickName",
                    "id": 3
                }
            ]
        },
        {
            "name": "RoomInfo",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "string",
                    "name": "roomID",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "roomNumber",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "gameServerID",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "state",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "config",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "timeStamp",
                    "id": 6
                },
                {
                    "rule": "repeated",
                    "type": "UserProfile",
                    "name": "users",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "handStartted",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "lastActiveTime",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "propCfg",
                    "id": 10
                }
            ]
        },
        {
            "name": "MsgCreateRoomRsp",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "int32",
                    "name": "result",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "RoomInfo",
                    "name": "roomInfo",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "retMsg",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "diamond",
                    "id": 4
                }
            ]
        },
        {
            "name": "MsgReleaseRoomReq",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "string",
                    "name": "roomID",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "roomType",
                    "id": 2
                }
            ]
        },
        {
            "name": "MsgReleaseRoomRsp",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "int32",
                    "name": "result",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "roomID",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "retMsg",
                    "id": 3
                }
            ]
        },
        {
            "name": "MsgChat",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "int32",
                    "name": "scope",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "from",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "to",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "dataType",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "bytes",
                    "name": "data",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 6
                }
            ]
        },
        {
            "name": "MsgLoadUnreadChatReply",
            "syntax": "proto2",
            "fields": [{
                    "rule": "repeated",
                    "type": "MsgChat",
                    "name": "msgs",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cursor",
                    "id": 2
                }
            ]
        },
        {
            "name": "MsgSetReadChat",
            "syntax": "proto2",
            "fields": [{
                "rule": "repeated",
                "type": "int32",
                "name": "ids",
                "id": 1
            }]
        },
        {
            "name": "RoomIDList",
            "syntax": "proto2",
            "fields": [{
                "rule": "repeated",
                "type": "string",
                "name": "roomIDs",
                "id": 1
            }]
        },
        {
            "name": "MsgLoadRoomListRsp",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "int32",
                    "name": "result",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "RoomInfo",
                    "name": "roomInfos",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "retMsg",
                    "id": 3
                }
            ]
        },
        {
            "name": "MsgUpdateUserInfo",
            "syntax": "proto2",
            "fields": [{
                "rule": "required",
                "type": "string",
                "name": "location",
                "id": 1
            }]
        },
        {
            "name": "RoomCost",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "uint32",
                    "name": "handNum",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "pay",
                    "id": 2
                }
            ]
        },
        {
            "name": "MsgRequestRoomInfo",
            "syntax": "proto2",
            "fields": [{
                "rule": "required",
                "type": "string",
                "name": "roomNumber",
                "id": 1
            }]
        },
        {
            "name": "MsgRequestRoomInfoRsp",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "int32",
                    "name": "result",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "RoomInfo",
                    "name": "roomInfo",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "retMsg",
                    "id": 7
                }
            ]
        },
        {
            "name": "MsgUpdateRoomState",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "int32",
                    "name": "state",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "roomID",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "UserProfile",
                    "name": "users",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "handStartted",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "lastActiveTime",
                    "id": 5
                }
            ]
        },
        {
            "name": "MsgUpdateRoomList",
            "syntax": "proto2",
            "fields": [{
                "rule": "repeated",
                "type": "RoomInfo",
                "name": "roomInfos",
                "id": 1
            }]
        },
        {
            "name": "MsgRequestUserScoreInfo",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "string",
                    "name": "userID",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gameID",
                    "id": 2
                }
            ]
        },
        {
            "name": "MsgRequestUserScoreInfoRsp",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "int32",
                    "name": "maxWinScore",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "customCount",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "maxWinMoney",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "coinCount",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "retMsg",
                    "id": 7
                }
            ]
        },
        {
            "name": "MsgLoadUserHeadIconURI",
            "syntax": "proto2",
            "fields": [{
                "rule": "repeated",
                "type": "string",
                "name": "userIDs",
                "id": 1
            }]
        },
        {
            "name": "MsgHeadIconInfo",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "string",
                    "name": "userID",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "sex",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "headIconURI",
                    "id": 3
                }
            ]
        },
        {
            "name": "MsgLoadUserHeadIconURIReply",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "int32",
                    "name": "result",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "MsgHeadIconInfo",
                    "name": "headIconInfos",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "retMsg",
                    "id": 3
                }
            ]
        },
        {
            "name": "MsgUpdateUserMoney",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "uint32",
                    "name": "diamond",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "activityType",
                    "id": 2
                }
            ]
        },
        {
            "name": "MsgAccReplayRoom",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "bytes",
                    "name": "replayRoomBytes",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "recordRoomType",
                    "id": 2
                }
            ]
        },
        {
            "name": "MsgAccLoadReplayRoomsReply",
            "syntax": "proto2",
            "fields": [{
                    "rule": "repeated",
                    "type": "MsgAccReplayRoom",
                    "name": "replayRooms",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cursor",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "totalCursor",
                    "id": 3
                }
            ]
        },
        {
            "name": "MsgAccLoadReplayRecord",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "bytes",
                    "name": "replayRecordBytes",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "roomJSONConfig",
                    "id": 2
                }
            ]
        },
        {
            "name": "MsgUserInfo",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "string",
                    "name": "uid",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "name",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "sex",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "protrait",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "token",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "diamond",
                    "id": 6
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "nick",
                    "id": 7
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "charm",
                    "id": 8
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "addr",
                    "id": 9
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "avatar",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "dan",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "gold",
                    "id": 12
                }
            ]
        },
        {
            "name": "MsgReplayPlayerInfo",
            "syntax": "proto2",
            "fields": [{
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
                    "name": "sex",
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
            "name": "MsgReplayRoom",
            "syntax": "proto2",
            "fields": [{
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
                    "rule": "optional",
                    "type": "string",
                    "name": "roomConfigID",
                    "id": 8
                },
                {
                    "rule": "repeated",
                    "type": "MsgReplayPlayerInfo",
                    "name": "players",
                    "id": 5
                }
            ]
        },
        {
            "name": "UserInfo",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "string",
                    "name": "userID",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "openID",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "nickName",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "sex",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "province",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "city",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "country",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "headImgUrl",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "phone",
                    "id": 9
                }
            ]
        },
        {
            "name": "MsgLoginReply",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "int32",
                    "name": "result",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "token",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "UserInfo",
                    "name": "userInfo",
                    "id": 3
                }
            ]
        },
        {
            "name": "ClientInfo",
            "syntax": "proto2",
            "fields": [{
                    "rule": "optional",
                    "type": "string",
                    "name": "qMod",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "modV",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "csVer",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "lobbyVer",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "operatingSystem",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "operatingSystemFamily",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "deviceUniqueIdentifier",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "deviceName",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "deviceModel",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "network",
                    "id": 10
                }
            ]
        },
        {
            "name": "MsgRegisterReply",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "int32",
                    "name": "result",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "token",
                    "id": 2
                }
            ]
        },
        {
            "name": "MsgQuicklyLoginReply",
            "syntax": "proto2",
            "fields": [{
                    "rule": "required",
                    "type": "int32",
                    "name": "result",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "token",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "account",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "UserInfo",
                    "name": "userInfo",
                    "id": 4
                }
            ]
        },
        {
            "name": "MsgWebsocketConnectReply",
            "syntax": "proto2",
            "fields": [{
                "rule": "required",
                "type": "int32",
                "name": "result",
                "id": 1
            }]
        }
    ],
    "enums": [{
            "name": "MsgError",
            "syntax": "proto2",
            "values": [{
                    "name": "ErrSuccess",
                    "id": 0
                },
                {
                    "name": "ErrDecode",
                    "id": 1
                },
                {
                    "name": "ErrEncode",
                    "id": 2
                },
                {
                    "name": "ErrRoomExist",
                    "id": 3
                },
                {
                    "name": "ErrNoRoomConfig",
                    "id": 4
                },
                {
                    "name": "ErrServerIsFull",
                    "id": 5
                },
                {
                    "name": "ErrDecodeRoomConfig",
                    "id": 6
                },
                {
                    "name": "ErrRoomNotExist",
                    "id": 7
                },
                {
                    "name": "ErrDatabase",
                    "id": 8
                },
                {
                    "name": "ErrRequestGameServerTimeOut",
                    "id": 9
                },
                {
                    "name": "ErrWaitGameServerSN",
                    "id": 10
                },
                {
                    "name": "ErrRoomIDIsEmpty",
                    "id": 11
                },
                {
                    "name": "ErrNotRoomCreater",
                    "id": 12
                },
                {
                    "name": "ErrGameIsPlaying",
                    "id": 13
                },
                {
                    "name": "ErrTokenIsEmpty",
                    "id": 14
                },
                {
                    "name": "ErrUserIdIsEmpty",
                    "id": 15
                },
                {
                    "name": "ErrRoomNumberIsEmpty",
                    "id": 16
                },
                {
                    "name": "ErrRoomNumberNotExist",
                    "id": 17
                },
                {
                    "name": "ErrGameServerIDNotExist",
                    "id": 18
                },
                {
                    "name": "ErrRoomCountIsOutOfLimit",
                    "id": 19
                },
                {
                    "name": "ErrRequestInvalidParam",
                    "id": 20
                },
                {
                    "name": "ErrTakeoffDiamondFailedNotEnough",
                    "id": 21
                },
                {
                    "name": "ErrTakeoffDiamondFailedIO",
                    "id": 22
                },
                {
                    "name": "ErrTakeoffDiamondFailedRepeat",
                    "id": 23
                },
                {
                    "name": "ErrGameServerUnsupportRoomType",
                    "id": 24
                },
                {
                    "name": "ErrGameServerRoomExist",
                    "id": 25
                },
                {
                    "name": "ErrGameServerNoRoomConfig",
                    "id": 26
                },
                {
                    "name": "ErrGameServerDecodeRoomConfig",
                    "id": 27
                },
                {
                    "name": "ErrGameServerRoomNotExist",
                    "id": 28
                },
                {
                    "name": "ErrUserInOtherRoom",
                    "id": 29
                },
                {
                    "name": "ErrRoomIsFull",
                    "id": 30
                },
                {
                    "name": "ErrUserInBlacklist",
                    "id": 31
                },
                {
                    "name": "ErrUserCanNotCreateCLubRoom",
                    "id": 32
                },
                {
                    "name": "ErrUserCanNotJoinCLubRoom",
                    "id": 33
                },
                {
                    "name": "ErrClubIDIsEmtpy",
                    "id": 34
                },
                {
                    "name": "ErrRoomPriceCfgNotExist",
                    "id": 35
                },
                {
                    "name": "ErrUserCreateRoomLock",
                    "id": 36
                },
                {
                    "name": "ErrGenerateRoomNumber",
                    "id": 37
                },
                {
                    "name": "ErrGroupPayMasterDiamondNotEnough",
                    "id": 38
                },
                {
                    "name": "ErrNotSupportGroupMasterPay",
                    "id": 39
                },
                {
                    "name": "ErrOutOfMaxClubCreateRoomNum",
                    "id": 40
                },
                {
                    "name": "ErrOutOfMaxClubMemberCreateRoomNum",
                    "id": 41
                }
            ]
        },
        {
            "name": "MessageCode",
            "syntax": "proto2",
            "values": [{
                    "name": "OPInvalid",
                    "id": 0
                },
                {
                    "name": "OPConnectReply",
                    "id": 1
                },
                {
                    "name": "OPChat",
                    "id": 2
                },
                {
                    "name": "OPUpdateDiamond",
                    "id": 3
                }
            ]
        },
        {
            "name": "RoomType",
            "syntax": "proto2",
            "values": [{
                    "name": "DafengMJ",
                    "id": 1
                },
                {
                    "name": "GuanDang",
                    "id": 2
                },
                {
                    "name": "DongTaiMJ",
                    "id": 3
                },
                {
                    "name": "YanChengMJ",
                    "id": 4
                },
                {
                    "name": "ShaoGuanMJ",
                    "id": 5
                },
                {
                    "name": "NingAnMJ",
                    "id": 6
                },
                {
                    "name": "XinJiangGH",
                    "id": 7
                },
                {
                    "name": "DafengGZ",
                    "id": 8
                },
                {
                    "name": "Dafeng7w523",
                    "id": 9
                },
                {
                    "name": "NiuNiu",
                    "id": 10
                },
                {
                    "name": "DDZ",
                    "id": 11
                },
                {
                    "name": "XueLiuMJ",
                    "id": 12
                },
                {
                    "name": "LanZhouMJ",
                    "id": 13
                },
                {
                    "name": "LLanZouMJ",
                    "id": 14
                },
                {
                    "name": "ZhangYeMJ",
                    "id": 15
                }
            ]
        },
        {
            "name": "OpenRoomType",
            "syntax": "proto2",
            "values": [{
                    "name": "CreateAndEnter",
                    "id": 1
                },
                {
                    "name": "CreateForOther",
                    "id": 2
                }
            ]
        },
        {
            "name": "ChatDataType",
            "syntax": "proto2",
            "values": [{
                    "name": "Text",
                    "id": 0
                },
                {
                    "name": "Emoji",
                    "id": 1
                },
                {
                    "name": "Voice",
                    "id": 2
                },
                {
                    "name": "Buildin",
                    "id": 3
                }
            ]
        },
        {
            "name": "ChatScopeType",
            "syntax": "proto2",
            "values": [{
                    "name": "UniCast",
                    "id": 0
                },
                {
                    "name": "InRoom",
                    "id": 1
                },
                {
                    "name": "InServer",
                    "id": 2
                },
                {
                    "name": "InAllServers",
                    "id": 3
                }
            ]
        },
        {
            "name": "LoginState",
            "syntax": "proto2",
            "values": [{
                    "name": "Faild",
                    "id": 0
                },
                {
                    "name": "Success",
                    "id": 1
                },
                {
                    "name": "UserInBlacklist",
                    "id": 2
                },
                {
                    "name": "ParseTokenError",
                    "id": 3
                }
            ]
        },
        {
            "name": "ActivityType",
            "syntax": "proto2",
            "values": [{
                "name": "Email",
                "id": 1
            }]
        },
        {
            "name": "LoginError",
            "syntax": "proto2",
            "values": [{
                    "name": "ErrLoginSuccess",
                    "id": 0
                },
                {
                    "name": "ErrParamWechatCodeIsEmpty",
                    "id": 1
                },
                {
                    "name": "ErrLoadWechatUserInfoFailed",
                    "id": 2
                },
                {
                    "name": "ErrParamAccountIsEmpty",
                    "id": 3
                },
                {
                    "name": "ErrParamPasswordIsEmpty",
                    "id": 4
                },
                {
                    "name": "ErrAccountNotExist",
                    "id": 5
                },
                {
                    "name": "ErrAccountNotSetPassword",
                    "id": 6
                },
                {
                    "name": "ErrPasswordNotMatch",
                    "id": 7
                }
            ]
        },
        {
            "name": "RegisterError",
            "syntax": "proto2",
            "values": [{
                    "name": "ErrRegisterSuccess",
                    "id": 0
                },
                {
                    "name": "ErrAccountIsEmpty",
                    "id": 1
                },
                {
                    "name": "ErrPasswordIsEmpty",
                    "id": 2
                },
                {
                    "name": "ErrAccountExist",
                    "id": 3
                },
                {
                    "name": "ErrWriteDatabaseFailed",
                    "id": 4
                }
            ]
        },
        {
            "name": "WebsocketConnectError",
            "syntax": "proto2",
            "values": [{
                    "name": "ConnectSuccess",
                    "id": 0
                },
                {
                    "name": "ParseTokenFailed",
                    "id": 1
                }
            ]
        }
    ],
    "isNamespace": true
}).build();