import { CommonFunction, DataStore, HTTP, LEnv, Logger } from "../../../lcore/LCoreExports";
import { proto } from "../../../proto/protoLobby";
import { ClubRequestError } from "../ClubRequestError";

interface MemberManagerInterface {

    delMember: Function;
    saveClubInfo: Function;

}

/**
 * 成员管理，对成员进行操作
 */
export class MemberOperationDialog extends cc.Component {

    private view: fgui.GComponent;

    private member: proto.club.IMsgClubMemberInfo;

    private memberView: MemberManagerInterface;

    private clubInfo: proto.club.IMsgClubInfo;

    private eventTarget: cc.EventTarget;

    public bind(memberView: MemberManagerInterface, clubInfo: proto.club.IMsgClubInfo, member: proto.club.IMsgClubMemberInfo): void {
        this.memberView = memberView;
        this.member = member;
        this.clubInfo = clubInfo;

        const memberOperationDialog = fgui.UIPackage.createObject("lobby_club", "memberOperationDialog").asCom;
        this.view = memberOperationDialog;

        this.initView(member, clubInfo);
        fgui.GRoot.inst.showPopup(this.view);
        this.view.setPosition(255, 180);

    }

    private initView(member: proto.club.IMsgClubMemberInfo, clubInfo: proto.club.IMsgClubInfo): void {
        //

        this.eventTarget = new cc.EventTarget();
        const revokeBtn = this.view.getChild("revokeBtn").asButton;
        revokeBtn.onClick(this.onRevokeBtnClick, this);

        const up2ManagerBtnBtn = this.view.getChild("up2ManagerBtnBtn").asButton;
        up2ManagerBtnBtn.onClick(this.onUp2ManagerBtnBtnClick, this);

        const authorize2CreateRoomBtn = this.view.getChild("authorize2CreateRoomBtn").asButton;
        authorize2CreateRoomBtn.onClick(this.onAuthorize2CreateRoomBtnClick, this);

        const delMemberBtn = this.view.getChild("delMemberBtn").asButton;
        delMemberBtn.onClick(this.onDelMemberBtnClick, this);

        const cancelAuthBtn = this.view.getChild("cancelAuthBtn").asButton;
        cancelAuthBtn.onClick(this.onCancelAuthBtnClick, this);

        const memberLevelCtrl = this.view.getController("memberLevel");
        const isAuthCtrl = this.view.getController("isAuth");
        // 0 是群主 1 是 管理员，2 是群员
        memberLevelCtrl.selectedIndex = 1;
        // 0 是已经授权，1是未授权
        isAuthCtrl.selectedIndex = 1;

        const nameText = this.view.getChild("name").asTextField;
        const idText = this.view.getChild("id").asTextField;

        nameText.text = member.displayInfo.nick === "" ? `${member.userID}` : member.displayInfo.nick;
        idText.text = `ID : ${member.userID}`;

        const loader = this.view.getChild("loader").asLoader;
        CommonFunction.setHead(loader, member.displayInfo.headIconURL);

        const managers = clubInfo.managers;
        let isManager = false;
        for (const managerId of managers) {
            if (managerId === member.userID) {
                isManager = true;
            }
        }

        memberLevelCtrl.selectedIndex = isManager ? 1 : 2;

    }

    private onRevokeBtnClick(): void {
        //
        this.onUp2ManagerBtnBtnClick();
    }

    private onUp2ManagerBtnBtnClick(): void {
        //
        const managers = this.clubInfo.managers;
        let isManager = false;
        for (const managerId of managers) {
            if (managerId === this.member.userID) {
                isManager = true;
            }
        }

        const role = isManager ? proto.club.ClubRoleType.CRoleTypeMember : proto.club.ClubRoleType.CRoleTypeMgr;
        // // 俱乐部角色定义
        // enum ClubRoleType
        // {
        //     CRoleTypeNone = 0; // 无效角色
        //     CRoleTypeMember = 1; // 成员
        //     CRoleTypeCreator = 2; // 创建者
        //     CRoleTypeMgr = 3; // 管理者
        // }
        this.changeManagerRequest(this.member, role);
    }

    private onAuthorize2CreateRoomBtnClick(): void {
        //
        //this.memberView.authCreateRoom(this.member);
    }

    private onDelMemberBtnClick(): void {
        //
        this.memberView.delMember(this.member);
    }

    private onCancelAuthBtnClick(): void {
        //
        //this.memberView.cancelAuth(this.member);
    }

    private changeManagerRequest(member: proto.club.IMsgClubMemberInfo, role: proto.club.ClubRoleType): void {
        // // 俱乐部角色定义
        // enum ClubRoleType
        // {
        //     CRoleTypeNone = 0; // 无效角色
        //     CRoleTypeMember = 1; // 成员
        //     CRoleTypeCreator = 2; // 创建者
        //     CRoleTypeMgr = 3; // 管理者
        // }
        const tk = DataStore.getString("token", "");
        const baseUrl = `${LEnv.rootURL}${LEnv.changeRole}?&`;
        const params = `tk=${tk}&clubID=${this.clubInfo.baseInfo.clubID}&memberID=${member.userID}&role=${role}`;
        const url = `${baseUrl}${params}`;

        const cb = (xhr: XMLHttpRequest, err: string) => {

            const data = <Uint8Array>xhr.response;
            const msgClubReply = proto.club.MsgClubReply.decode(data);

            if (msgClubReply.replyCode === proto.club.ClubReplyCode.RCError) {
                const msgCubOperGenericReply = proto.club.MsgCubOperGenericReply.decode(msgClubReply.content);
                if (msgCubOperGenericReply.errorCode === proto.club.ClubOperError.CERR_OK) {
                    this.changeManager(member, role);
                } else {
                    ClubRequestError.showErrMsg(msgCubOperGenericReply.errorCode);
                }

            }

            //this.loadRecord();
        };

        this.clubRequest(url, cb);
    }

    private changeManager(member: proto.club.IMsgClubMemberInfo, role: proto.club.ClubRoleType): void {
        //

        const memberLevelCtrl = this.view.getController("memberLevel");

        if (role === proto.club.ClubRoleType.CRoleTypeMgr) {
            this.clubInfo.managers.push(member.userID);
            memberLevelCtrl.selectedIndex = 1;
        } else {
            const index = this.clubInfo.managers.indexOf(member.userID);
            this.clubInfo.managers.splice(index, 1);
            memberLevelCtrl.selectedIndex = 2;
        }

        this.saveClubInfo();
    }

    private saveClubInfo(): void {
        //
        this.memberView.saveClubInfo(this.clubInfo);
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
        Logger.debug("this.eventTarget = ", this.eventTarget);

        HTTP.hGet(this.eventTarget, url, (xhr: XMLHttpRequest, err: string) => {

            cb(xhr, err);
        });
    }

}
