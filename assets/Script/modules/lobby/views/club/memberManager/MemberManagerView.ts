import { DataStore, HTTP, LEnv, Logger } from "../../../lcore/LCoreExports";
import { proto } from "../../../proto/protoLobby";
import { ClubRequestError } from "../ClubRequestError";
import { MemberOperationDialog } from "./MemberOperationDialog";
const { ccclass } = cc._decorator;
/**
 * 成员管理页面
 */
@ccclass
export class MemberManagerView extends cc.Component {

    private view: fgui.GComponent;
    private win: fgui.Window;
    private eventTarget: cc.EventTarget;

    private clubInfo: proto.club.IMsgClubInfo;

    private members: proto.club.IMsgClubMemberInfo[];

    private membersWithoutOwner: proto.club.IMsgClubMemberInfo[];

    private events: proto.club.IMsgClubEvent[];

    private memberList: fgui.GList;
    private memberApplyList: fgui.GList;
    private memberDeleteList: fgui.GList;

    private memberListBtn: fgui.GButton;
    private applyListBtn: fgui.GButton;
    private deleteMemberBtn: fgui.GButton;

    public getEventTarget(): cc.EventTarget {
        return this.eventTarget;
    }
    public setClubInfo(clubInfo: proto.club.IMsgClubInfo): void {
        this.clubInfo = clubInfo;

        //拉取成员
        this.loadMember();

    }
    protected onLoad(): void {
        //
        this.eventTarget = new cc.EventTarget();

        const view = fgui.UIPackage.createObject("lobby_club", "memberManager").asCom;
        this.view = view;

        const win = new fgui.Window();
        win.contentPane = view;
        win.modal = true;

        this.win = win;
        this.win.show();

        this.initView();
    }

    protected onDestroy(): void {

        this.eventTarget.emit("destroy");
        this.win.hide();
        this.win.dispose();
    }

    private onCloseClick(): void {
        this.destroy();
    }

    private initView(): void {
        //

        const closeBtn = this.view.getChild("closeBtn");
        closeBtn.onClick(this.onCloseClick, this);

        this.memberListBtn = this.view.getChild("memberListBtn").asButton;
        this.memberListBtn.onClick(this.onMemberListBtnClick, this);

        this.applyListBtn = this.view.getChild("applyListBtn").asButton;
        this.applyListBtn.onClick(this.onApplyListBtnClick, this);

        this.deleteMemberBtn = this.view.getChild("deleteMemberBtn").asButton;
        this.deleteMemberBtn.onClick(this.onDeleteMemberBtnClick, this);

        this.memberList = this.view.getChild("memberList").asList;
        this.memberApplyList = this.view.getChild("memberApplyList").asList;
        this.memberDeleteList = this.view.getChild("deleteMemberList").asList;

        this.memberList.itemRenderer = (index: number, item: fgui.GObject) => {
            this.renderMemberListItem(index, item);
        };
        this.memberList.setVirtual();

        this.memberApplyList.itemRenderer = (index: number, item: fgui.GObject) => {
            this.renderApplyEventsListItem(index, item);
        };
        this.memberApplyList.setVirtual();

        this.memberDeleteList.itemRenderer = (index: number, item: fgui.GObject) => {
            this.renderDeleteMemberListItem(index, item);
        };
        this.memberDeleteList.setVirtual();

    }
    /**
     * 刷新成员列表
     * @param index 第几个
     * @param obj 该UI对象
     */
    private renderMemberListItem(index: number, obj: fgui.GObject): void {
        //

        let member: proto.club.IMsgClubMemberInfo;

        if (this.members !== undefined) {
            member = this.members[index];
        }

        //const icon = obj.asCom.getChild("icon");
        const owner = obj.asCom.getChild("owner");
        const name = obj.asCom.getChild("name");
        const id = obj.asCom.getChild("id");

        if (member !== undefined) {
            id.text = `ID : ${member.userID}`;
            const nick = member.displayInfo.nick === "" ? member.userID : member.displayInfo.nick;
            name.text = `${nick}`;
            owner.visible = member.userID === this.clubInfo.creatorUserID;
        }

        obj.offClick(undefined, undefined);

        obj.onClick(() => {
            this.showMemberOperationDialog(member);
            // tslint:disable-next-line:align
        }, this);

    }
    /**
     * 渲染删除成员列表
     * @param index 列表索引
     * @param obj 列表item对象
     */
    private renderDeleteMemberListItem(index: number, obj: fgui.GObject): void {
        //

        let member: proto.club.IMsgClubMemberInfo;

        if (this.membersWithoutOwner !== undefined) {
            member = this.membersWithoutOwner[index];
        }

        //const icon = obj.asCom.getChild("icon");
        const name = obj.asCom.getChild("name");
        const id = obj.asCom.getChild("id");
        const deleteBtn = obj.asCom.getChild("deleteBtn");

        if (member !== undefined) {
            id.text = `ID : ${member.userID}`;
            const nick = member.displayInfo.nick === "" ? member.userID : member.displayInfo.nick;
            name.text = `${nick}`;

            deleteBtn.onClick(() => {
                this.deleteMember(member);
                // tslint:disable-next-line:align
            }, this);
        }
    }

    /**
     * 刷新成员申请信息列表
     * @param index 列表索引
     * @param obj 该UI对象
     */
    private renderApplyEventsListItem(index: number, obj: fgui.GObject): void {
        //

        let event: proto.club.IMsgClubEvent;

        if (this.events !== undefined) {
            event = this.events[index];
        }

        //const icon = obj.asCom.getChild("icon");
        const time = obj.asCom.getChild("time");
        const name = obj.asCom.getChild("name");
        const rejectBtn = obj.asCom.getChild("rejectBtn").asButton;
        const agreeBtn = obj.asCom.getChild("agreeBtn").asButton;
        Logger.debug("event ---------------", event);
        if (event !== undefined) {

            const nick = event.displayInfo1.nick === "" ? event.userID1 : event.displayInfo1.nick;
            name.text = `${nick}`;

            const generatedTime = event.generatedTime;

            const date = new Date(generatedTime * 1000);

            const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
            const day = date.getDay() < 10 ? `0${date.getDay()}` : `${date.getDay()}`;
            const hour = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
            const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;

            time.text = `${date.getFullYear()}/${month}/${day}   ${hour}:${minute}`;

            //  会有多个点击事件,先取消
            rejectBtn.offClick(undefined, undefined);
            agreeBtn.offClick(undefined, undefined);

            rejectBtn.onClick(() => {
                this.joinApproval(event, false);
                // tslint:disable-next-line:align
            }, this);

            agreeBtn.onClick(() => {
                this.joinApproval(event, true);
                // tslint:disable-next-line:align
            }, this);
        }

    }

    private showMemberOperationDialog(member: proto.club.IMsgClubMemberInfo): void {
        //
        const popupView = this.addComponent(MemberOperationDialog);
        popupView.show(member);
    }

    private onMemberListBtnClick(): void {
        //
        //Logger.debug("selectedIndex = ", this.memberListBtn.getController("button").selectedIndex);

        // if (this.memberListBtn.getController("button").selectedIndex === 1) {
        //     return;
        // }

        this.loadMember();
    }

    private onApplyListBtnClick(): void {
        //
        // if (this.applyListBtn.getController("button").selectedIndex === 1) {
        //     return;
        // }
        this.loadRecord();
    }

    private onDeleteMemberBtnClick(): void {
        //
        // if (this.deleteMemberBtn.getController("button").selectedIndex === 1) {
        //     return;
        // }
        this.updateDeleteMemberList();
    }

    private updateDeleteMemberList(): void {
        //

        this.membersWithoutOwner = [];

        this.members.forEach(member => {
            if (member.userID !== this.clubInfo.creatorUserID) {
                this.membersWithoutOwner.push(member);
            }
        });

        Logger.debug("this.membersWithoutOwner.length = ", this.membersWithoutOwner.length);

        this.memberDeleteList.numItems = this.membersWithoutOwner.length;
    }

    private deleteMember(member: proto.club.IMsgClubMemberInfo): void {
        //

        Logger.debug("deleteMember  member = ", member);
    }

    private joinApproval(event: proto.club.IMsgClubEvent, agree: boolean): void {
        //
        const result = agree === true ? "yes" : "no";
        const tk = DataStore.getString("token", "");

        const baseUrl = `${LEnv.rootURL}${LEnv.joinApproval}?&`;
        const params = `tk=${tk}&clubID=${this.clubInfo.baseInfo.clubID}&applicantID=${event.userID1}&agree=${result}&eID=${event.Id}`;
        const loadMemberUrl = `${baseUrl}${params}`;

        Logger.debug(loadMemberUrl);

        const cb = (xhr: XMLHttpRequest, err: string) => {
            //
            // const data = <Uint8Array>xhr.response;

            const data = <Uint8Array>xhr.response;
            const msgClubReply = proto.club.MsgClubReply.decode(data);
            Logger.debug("msgClubReply = ", msgClubReply);

            if (msgClubReply.replyCode === proto.club.ClubReplyCode.RCError) {
                const msgCubOperGenericReply = proto.club.MsgCubOperGenericReply.decode(msgClubReply.content);
                ClubRequestError.showErrMsg(msgCubOperGenericReply.errorCode);
            }
            //this.loadRecord();
        };

        this.clubRequest(loadMemberUrl, cb);

    }

    private loadMember(): void {
        //

        const tk = DataStore.getString("token", "");
        const loadMemberUrl = `${LEnv.rootURL}${LEnv.loadClubMembers}?&tk=${tk}&clubID=${this.clubInfo.baseInfo.clubID} `;

        const cb = (xhr: XMLHttpRequest, err: string) => {
            //
            const data = <Uint8Array>xhr.response;
            const msgClubReply = proto.club.MsgClubReply.decode(data);
            if (msgClubReply.replyCode === proto.club.ClubReplyCode.RCOperation) {
                const reply = proto.club.MsgClubLoadMembersReply.decode(msgClubReply.content);
                const members = reply.members;
                this.updateMemberList(members);

            }
        };

        this.clubRequest(loadMemberUrl, cb);

    }

    private loadRecord(): void {
        //

        const tk = DataStore.getString("token", "");
        const loadRecordUrl = `${LEnv.rootURL}${LEnv.loadClubEvents}?&tk=${tk}&clubID=${this.clubInfo.baseInfo.clubID}&cursor=${0} `;

        const cb = (xhr: XMLHttpRequest, err: string) => {
            //
            const data = <Uint8Array>xhr.response;
            const msgClubReply = proto.club.MsgClubReply.decode(data);
            if (msgClubReply.replyCode === proto.club.ClubReplyCode.RCOperation) {
                const reply = proto.club.MsgClubLoadEventsReply.decode(msgClubReply.content);

                const events = reply.events;
                this.updateEventList(events);

            }
        };

        this.clubRequest(loadRecordUrl, cb);

    }

    private updateMemberList(members: proto.club.IMsgClubMemberInfo[]): void {
        //
        this.members = members;
        this.memberList.numItems = this.members.length;
    }
    private updateEventList(events: proto.club.IMsgClubEvent[]): void {

        // 过滤一下，只保留未处理的

        this.events = [];
        for (const event of events) {
            if (event.evtType === proto.club.ClubEventType.CEVT_NewApplicant && event.approvalResult === 0) {
                this.events.push(event);
            }
        }
        this.memberApplyList.numItems = this.events.length;
    }
    /**
     * 网络请求
     * @param url 链接
     * @param msg 滚动圈弹的信息
     * @param cb 回调
     */
    private clubRequest(url: string, cb: Function): void {
        if (url === null) {
            return null;
        }

        Logger.debug("clubRequest url = ", url);

        HTTP.hGet(this.eventTarget, url, (xhr: XMLHttpRequest, err: string) => {

            cb(xhr, err);
        });
    }
}
