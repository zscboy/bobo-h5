import { Logger } from "../../../lcore/LCoreExports";
import { proto } from "../../../proto/protoLobby";

/**
 * 成员管理，对成员进行操作
 */
export class MemberOperationDialog extends cc.Component {

    private view: fgui.GComponent;

    private member: proto.club.IMsgClubMemberInfo;

    public show(member: proto.club.IMsgClubMemberInfo): void {
        this.member = member;

        const memberOperationDialog = fgui.UIPackage.createObject("lobby_club", "memberOperationDialog").asCom;
        this.view = memberOperationDialog;

        this.initView(member);
        fgui.GRoot.inst.showPopup(this.view);
        this.view.setPosition(255, 180);

    }

    private initView(member: proto.club.IMsgClubMemberInfo): void {
        //
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
        memberLevelCtrl.selectedIndex = 1;
        const isAuthCtrl = this.view.getController("isAuth");
        isAuthCtrl.selectedIndex = 1;

        const nameText = this.view.getChild("name").asTextField;
        const idText = this.view.getChild("id").asTextField;

        nameText.text = member.displayInfo.nick === "" ? `${member.userID}` : member.displayInfo.nick;
        idText.text = `ID : ${member.userID}`;

    }

    private onRevokeBtnClick(): void {
        //
        Logger.debug("this member  = ", this.member);
    }

    private onUp2ManagerBtnBtnClick(): void {
        //
    }

    private onAuthorize2CreateRoomBtnClick(): void {
        //
    }

    private onDelMemberBtnClick(): void {
        //
    }

    private onCancelAuthBtnClick(): void {
        //
    }

}
