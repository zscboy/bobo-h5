
interface ClubViewInterface {

    selectGame: Function;

}

/**
 * 管理界面
 */
export class FilterGameView extends cc.Component {

    private view: fgui.GComponent = null;

    private clubView: ClubViewInterface;

    // 、private clubInfo: proto.club.IMsgClubInfo;

    public show(clubView: ClubViewInterface, selectRoomType: number): void {
        this.clubView = clubView;

        const settingPopupView = fgui.UIPackage.createObject("lobby_club", "filterPopup").asCom;
        this.view = settingPopupView;

        this.initView(selectRoomType);
        fgui.GRoot.inst.showPopup(this.view);
        this.view.setPosition(199, 266);

    }

    private initView(selectRoomType: number): void {
        //
        const allBtn = this.view.getChild("allBtn").asButton;
        const dfmjBtn = this.view.getChild("dfmj").asButton;
        const zjmjBtn = this.view.getChild("zjmj").asButton;

        switch (selectRoomType) {
            case 0:
                allBtn.selected = true;
                break;
            case 1:
                dfmjBtn.selected = true;
                break;
            case 21:
                zjmjBtn.selected = true;
                break;

            default:

        }

        // allBtn.onClick(this.onAllGameBtnClick, this);
        // dfmjBtn.onClick(this.onDFMJBtmClick, this);
        // zjmjBtn.onClick(this.onZJMJBtnClick, this);

        allBtn.on(fgui.Event.TOUCH_END, this.onAllGameBtnClick, this);
        dfmjBtn.on(fgui.Event.TOUCH_END, this.onDFMJBtmClick, this);
        zjmjBtn.on(fgui.Event.TOUCH_END, this.onZJMJBtnClick, this);
    }

    private onAllGameBtnClick(): void {
        //
        this.clubView.selectGame(0);
    }

    private onDFMJBtmClick(): void {
        //
        this.clubView.selectGame(1);
    }

    private onZJMJBtnClick(): void {
        //
        this.clubView.selectGame(21);

    }

}
