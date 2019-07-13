import * as React from 'react';
import AceEditor from 'react-ace';
import AppStore from '../../core/App.store';
import ContentStyled from './styled';
import Panel from '../Panel/Panel';
import ReactMarkdown from 'react-markdown';
import { inject, observer } from 'mobx-react';
import { debounce } from 'throttle-debounce';

import 'brace/mode/markdown';
import 'brace/theme/github';

interface ContentProps {
    store?: AppStore
}

const Content: React.FunctionComponent<ContentProps> = ({ store }: ContentProps) => {
    return (
        <ContentStyled>
            <Panel>
                <AceEditor
                    fontSize={15}
                    mode="markdown"
                    theme="github"
                    onChange={debounce(200, store!.updateText)}
                    style={{ height: '100%', width: '100%' }}
                    value={store!.text}
                /></Panel>
            <Panel>
                <ReactMarkdown source={store!.text} />
            </Panel>
        </ContentStyled>
    );
};

export default inject('store')(observer(Content));
