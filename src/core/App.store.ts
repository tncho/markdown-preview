import { action, observable } from "mobx";

class AppStore {
    @observable text = '';

    @action
    updateText = (text: string) => {
        this.text = text;
    }
}

export default AppStore;